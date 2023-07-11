import type { UseI18nOptions } from 'vue-i18n';
import type RU from './locales/ru.json';
import type EN from './locales/en.json';

export type LocalizationSchema =
  | typeof RU
  | typeof EN;

export type UseI18nCustomOptions = UseI18nOptions<{ message: LocalizationSchema }>;
