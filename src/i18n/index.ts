import { nextTick } from 'vue';
import {
  createI18n as createVueI18n,
  useI18n as useVueI18n,
} from 'vue-i18n';
import type { UseI18nOptions } from 'vue-i18n';
import type { Plugin, App } from 'vue';
import type { LanguageCode } from './enums';
import type { UseI18nCustomOptions } from './types';

export const vueI18n = createVueI18n({
  legacy: false,
});

export const loadedLanguageList: LanguageCode[] = [];
export const currentLanguage = vueI18n.global.locale;
export const currentLanguageIs = (locale: LanguageCode) => currentLanguage.value === locale;

/**
 * ПРИМЕЧАНИЕ:
 * Если вам нужно указать настройку языка для заголовков, например, API `fetch`, установите ее здесь.
 * Ниже приведен пример для axios.
 *
 * axios.defaults.headers.common['Accept-Language'] = locale
 */
export const setLanguage = (locale: LanguageCode) => {
  vueI18n.global.locale.value = locale;

  const htmlEl = document.querySelector('html')!;
  htmlEl.setAttribute('lang', locale);
};

export const loadLocaleMessages = async (locale: LanguageCode) => {
  const messages = await import(
    /* webpackChunkName: "locale-[request]" */ `./locales/${locale}.json`
  );

  vueI18n.global.setLocaleMessage(locale, messages.default);

  return nextTick();
};

export const changeLanguage = async (locale: LanguageCode) => {
  if (currentLanguageIs(locale)) return;

  if (!loadedLanguageList!.includes(locale)) {
    await loadLocaleMessages(locale);
  }

  setLanguage(locale);
};

export const useI18n = <T extends UseI18nOptions = UseI18nCustomOptions>(options?: T) => useVueI18n(options);

const plugin: Plugin = (app: App) => {
  changeLanguage(VUE_APP_LANGUAGE as LanguageCode);

  app.use(vueI18n);
};

export default plugin;
export * from './enums';
