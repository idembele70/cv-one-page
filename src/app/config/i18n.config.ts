import { provideTranslateService } from "@ngx-translate/core";
import { provideTranslateHttpLoader } from "@ngx-translate/http-loader";
import { AvailableLang } from "../models/available-lang.models";

export const DEFAULT_LANG: AvailableLang = 'en-US';
export const FALLBACK_LANG: AvailableLang = 'fr-FR';
export const SUPPORTED_LANGS: AvailableLang[] = ['en-US', 'fr-FR'];

export const i18nProviders = [
   provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: 'assets/i18n/',
        suffix: '.json',
      }),
      fallbackLang: FALLBACK_LANG,
      lang: DEFAULT_LANG,
    })
]