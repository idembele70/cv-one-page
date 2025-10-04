import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { DEFAULT_LANG, FALLBACK_LANG, SUPPORTED_LANGS } from '../config/i18n.config';
import { AvailableLang } from '../models/available-lang.models';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly _storageKey = 'lang';
  private readonly _currentLang$ = new BehaviorSubject<AvailableLang>(this.loadFromStorage())

  readonly currentLang$ = this._currentLang$.asObservable();
  readonly languages = SUPPORTED_LANGS;

  constructor(private readonly translate: TranslateService) {
    this.translate.addLangs(this.languages);
    this.translate.setFallbackLang(FALLBACK_LANG);
    this.translate.use(this._currentLang$.value);
  }
  
  use(lang: AvailableLang) {
    if (!this.languages.includes(lang)) return;
    this.translate.use(lang);
    this._currentLang$.next(lang);
    this.saveToStorage(lang);
  }

  private loadFromStorage() {
    const saved = localStorage.getItem(this._storageKey) as AvailableLang | null;
    if (saved && SUPPORTED_LANGS.includes(saved))
      return saved;
    return DEFAULT_LANG;

  }

  private saveToStorage(lang: AvailableLang) {
    localStorage.setItem(this._storageKey, lang);
  }
}
