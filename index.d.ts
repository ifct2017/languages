export interface Language {
  /** Languages. */
  lang: string,
  /** Abbreviations used. */
  abbr: string
}


/**
 * Loads corpus to enable queries.
 * [📦](https://www.npmjs.com/package/@ifct2017/languages)
 * @returns corpus {abbr ⇒ {abbr, lang}}
 */
export function load() : Map<string, Language>;


/**
 * Generates PostgreSQL statements for creating table w/ data.
 * [📦](https://www.npmjs.com/package/@ifct2017/languages)
 * @returns CREATE TABLE, INSERT, CREATE VIEW, CREATE INDEX statements
 */
 export function sql(tab: string='languages', opt: object={}) : string;


/**
 * Gives path of CSV data file.
 * [📦](https://www.npmjs.com/package/@ifct2017/languages)
 * @returns .../index.csv
 */
 export function csv() : string;


/**
 * Finds matching languages of an abbr/lang query.
 * [📦](https://www.npmjs.com/package/@ifct2017/languages)
 * @param txt abbr/lang query
 * @returns matches [{abbr, lang}]
 * @example
 * ```javascript
 * languages('mal.');
 * languages('Mal');
 * // { abbr: 'Mal.', lang: 'Malayalam' }
 *
 * languages('what is s.?');
 * languages('S. stands for?');
 * // { abbr: 'S.', lang: 'Sanskrit' }
 *
 *
 * // Note:
 * // Full stops must immediately follow character, if present.
 * // For single character abbreviations, full stop is mandatory.
 * ```
 */
function languages(txt: string): [Language];
export = languages;
