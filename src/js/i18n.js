/**
 * SVGcode—Convert raster images to SVG vector graphics
 * Copyright (C) 2021 Google LLC
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */

const LOCAL_STORAGE_KEY = 'language';
const SUPPORTED_LANGUAGES = [
  'ar',
  'ca',
  'da',
  'de',
  'el',
  'en',
  'es',
  'fr',
  'he',
  'id',
  'ja',
  'ko',
  'nl',
  'pt',
  'ru',
  'uk',
  'zh',
  'no',
];

const SUPPORTED_LOCALES = [
  'ar-TN',
  'ca-ES',
  'da-DK',
  'de-DE',
  'el-GR',
  'en-GB',
  'en-US',
  'es-ES',
  'fr-FR',
  'he-IL',
  'id-ID',
  'ja-JP',
  'ko-KR',
  'nl-NL',
  'pt-BR',
  'ru-RU',
  'uk-UA',
  'zh-CN',
  'no-NO',
];

const RTL_LANGUAGES = ['ar', 'fa', 'he', 'ur'];

/**
 *
 *
 * @class I18N
 */
class I18N {
  /**
   *Creates an instance of I18N.
   * @memberof I18N
   */
  constructor() {
    this.currentLanguageAndLocale = this.detectOrRestoreLanguageAndLocale();
    this.defaultLanguage = SUPPORTED_LANGUAGES[0];
    this.defaultLocale = SUPPORTED_LOCALES[0];
    this.translations = null;
    this.supportedLanguages = SUPPORTED_LANGUAGES;
    this.supportedLocales = SUPPORTED_LOCALES;
  }

  /**
   *
   *
   * @returns
   * @memberof I18N
   */
  detectOrRestoreLanguageAndLocale() {
    // Use a `?lang=` query parameter to override the language, if available.
    const urlSearchParams = new URLSearchParams(new URL(location.href).search);
    const langParam = urlSearchParams.get('lang');
    if (langParam && SUPPORTED_LANGUAGES.includes(langParam.substring(0, 2))) {
      const [language, locale = ''] = langParam.split('-');
      this.setLanguageAndLocale(language, locale);
      urlSearchParams.delete('lang');
      const urlSearchParamsString = urlSearchParams.toString();
      if (urlSearchParamsString) {
        location.search = urlSearchParamsString;
      } else {
        location.href = location.origin;
      }
    }

    // Use the stored language and locale, if available.
    const storedLanguage = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedLanguage) {
      const { language, locale } = JSON.parse(storedLanguage);
      this.setLanguageAndLocale(language, locale);
      return { language, locale };
    }

    // Use the browser's language and locale.
    let [language, locale = ''] = navigator.language?.split('-');
    if (locale) {
      // Safari reports the locale as lowercase:
      // https://bugs.webkit.org/show_bug.cgi?id=163096.
      locale = locale.toUpperCase();
    }
    if (!language || !SUPPORTED_LANGUAGES.includes(language)) {
      language = SUPPORTED_LANGUAGES[0];
    }
    const result = {
      language,
      locale,
    };
    this.setLanguageAndLocale(language, locale);
    return result;
  }
  /**
   * @param  {} language
   * @param  {} locale
   */
  async setLanguageAndLocale(language, locale) {
    if (!SUPPORTED_LANGUAGES.includes(language)) {
      throw new Error(`Language "${language}" is not supported.`);
    }
    if (locale && !SUPPORTED_LOCALES.includes(`${language}-${locale}`)) {
      throw new Error(`Locale "${language}-${locale}" is not supported.`);
    }
    this.currentLanguageAndLocale = {
      language,
      locale,
    };
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(this.currentLanguageAndLocale),
    );
    document.documentElement.lang = `${language}${locale ? `-${locale}` : ''}`;
    if (RTL_LANGUAGES.includes(language)) {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
    await this.getTranslations();
  }

  /**
   *
   *
   * @memberof I18N
   */
  async getTranslations() {
    const { language, locale } = this.currentLanguageAndLocale;
    this.translations = (
      await import(`../i18n/${language}${locale ? `-${locale}` : ''}.js`).catch(
        () => import(`../i18n/${this.defaultLocale}.js`),
      )
    ).default;
  }

  /**
   *
   *
   * @param {*} key
   * @returns
   * @memberof I18N
   */
  t(key) {
    return this.translations[key] || '⛔️ Missing translation';
  }
}

const i18n = new I18N();

export { i18n };
