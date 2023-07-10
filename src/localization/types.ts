import type RU from './locales/ru.json';
import type EN from './locales/en.json';

export type LocalizationSchema =
  | typeof RU
  | typeof EN;
