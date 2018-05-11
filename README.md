# @ifct2017/languages

[![IFCT2017](http://ninindia.org/images/ifct_2017.png)](http://ninindia.org/ifct_2017.htm)

Language abbreviations in [Indian Food Composition Tables 2017].
Check supported [language abbreviations].

```javascript
const languages = require('@ifct2017/languages');
// languages(<query>)
// -> {abbr, lang} if supported, null otherwise.
// languages.corpus: Map {abbr => {abbr, lang}}
// languages.csv(): path of csv file

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
