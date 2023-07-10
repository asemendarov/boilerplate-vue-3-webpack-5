import { nextTick } from 'vue';
import { createI18n, useI18n } from 'vue-i18n';
import type { UseI18nOptions } from 'vue-i18n';
import type { Plugin, App } from 'vue';
import type { LanguageCode } from './enums';
import type { LocalizationSchema } from './types';

export const i18n = createI18n({
  legacy: false,
});

export const loadedLanguageList: LanguageCode[] = [];
export const currentLanguage = i18n.global.locale;
export const currentLanguageIs = (locale: LanguageCode) => currentLanguage.value === locale;

/**
 * ПРИМЕЧАНИЕ:
 * Если вам нужно указать настройку языка для заголовков, например, API `fetch`, установите ее здесь.
 * Ниже приведен пример для axios.
 *
 * axios.defaults.headers.common['Accept-Language'] = locale
 */
export const setLanguage = (locale: LanguageCode) => {
  i18n.global.locale.value = locale;

  const htmlEl = document.querySelector('html')!;
  htmlEl.setAttribute('lang', locale);
};

export const loadLocaleMessages = async (locale: LanguageCode) => {
  const messages = await import(
    /* webpackChunkName: "locale-[request]" */ `./locales/${locale}.json`
  );

  setLanguage(locale);

  i18n.global.setLocaleMessage(locale, messages.default);

  return nextTick();
};

export const changeLanguage = async (locale: LanguageCode) => {
  if (currentLanguageIs(locale)) return;

  if (!loadedLanguageList!.includes(locale)) {
    await loadLocaleMessages(locale);
  }

  setLanguage(locale);
};

// eslint-disable-next-line max-len
export const useLocalization = <Options extends UseI18nOptions = UseI18nOptions<{ message: LocalizationSchema }>>(options?: Options) => useI18n(options);

const plugin: Plugin = (app: App) => {
  changeLanguage(VUE_APP_LANGUAGE as LanguageCode);

  app.use(i18n);
};

export default plugin;
export * from './enums';
