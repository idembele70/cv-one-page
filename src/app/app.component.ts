import { AsyncPipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MainCardComponent } from "./components/main-card/main-card.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { AvailableLang } from './models/available-lang.models';
import { LanguageService } from './services/language.service';
import { QueryParamService } from './services/query-param.service';
import { combineLatest, map, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent, MainCardComponent, AsyncPipe, NgFor, UpperCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  readonly languages = this.languageService.languages;
  readonly currentLang$ = this.languageService.currentLang$;
  private readonly destroy$ = new Subject<void>();


  ngOnInit(): void {
    this.queryParamService.langParam$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(lang => this.languageService.use(lang));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  constructor(
    private readonly languageService: LanguageService,
    private readonly queryParamService: QueryParamService
  ) {


  }

  onLangChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    const lang = target.value as AvailableLang;
    this.queryParamService.set(lang)
  }
}
