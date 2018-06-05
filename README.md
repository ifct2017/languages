# @ifct2017/languages

[![ifct2017](http://ninindia.org/images/ifct_2017.png)](https://www.npmjs.com/package/ifct2017)

Language abbreviations in [Indian Food Composition Tables 2017].<br>
Check supported [language abbreviations].

```javascript
const languages = require('@ifct2017/languages');
// languages.corpus: Map {abbr => {abbr, lang}}
// languages.load(): true (corpus loaded)
// languages.sql([table], [options]): sql commands
// languages.csv(): path of csv file
// languages(<query>)
// -> {abbr, lang} if supported, null otherwise.


languages.load();
/* load corpus first */

languages('mal.');
languages('Mal');
// { abbr: 'Mal.', lang: 'Malayalam' }

languages('what is s.?');
languages('S. stands for?');
/* (full stops must immediately follow character, if present) */
/* (for single character abbreviations, full stop is mandatory) */
// { abbr: 'S.', lang: 'Sanskrit' }
```


[Indian Food Composition Tables 2017]: http://ifct2017.com/
[language abbreviations]: https://github.com/ifct2017/languages/blob/master/index.csv
