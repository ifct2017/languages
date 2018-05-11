# @ifct2017/languages

[![IFCT2017](http://ninindia.org/images/ifct_2017.png)](http://ninindia.org/ifct_2017.htm)

Language abbreviations in [Indian Food Composition Tables 2017].
Check supported [language abbreviations].

```javascript
const abbreviations = require('@ifct2017/abbreviations');
// abbreviations(<query>)
// -> {abbr, full} if supported, null otherwise.
// abbreviations.corpus: Map {key => {abbr, full}}
// abbreviations.csv(): path of csv file

abbreviations('GLVs');
abbreviations('g l v s');
// Green Leafy Vegetables

abbreviations('what is D.R.I.');
abbreviations('d. r. i. stands for?');
/* (full stops must immediately follow character, if present) */
/* (for single character abbreviations, full stop is mandatory) */
// Dietary reference intake
```


[Indian Food Composition Tables 2017]: http://ifct2017.com/
[language abbreviations]: https://github.com/ifct2017/abbreviations/blob/master/index.csv
