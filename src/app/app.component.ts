import { Component, inject } from '@angular/core';
import { MainCardComponent } from "./components/main-card/main-card.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { TranslateService } from '@ngx-translate/core';
import { DEFAULT_LANG, FALLBACK_LANG, SUPPORTED_LANGS } from './config/i18n.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ SidebarComponent, MainCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly translate = inject(TranslateService);

  constructor() {
    this.translate.addLangs(SUPPORTED_LANGS);
    this.translate.setFallbackLang(FALLBACK_LANG);
    this.translate.use(DEFAULT_LANG);
  }
}
