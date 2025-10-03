import { provideTranslateService } from "@ngx-translate/core";
import { provideTranslateHttpLoader } from "@ngx-translate/http-loader";

export const DEFAULT_LANG = 'fr-FR';
export const FALLBACK_LANG = 'fr-FR';
export const SUPPORTED_LANGS = ['en-US', 'fr-FR'];

export const i18nProviders = [
   provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: '/assets/i18n/',
        suffix: '.json',
      }),
      fallbackLang: FALLBACK_LANG,
      lang: DEFAULT_LANG,
    })
]