Full form of [language abbreviations].
> This is part of package [ifct2017].<br>
> Source: [Indian Food Composition Tables 2017].


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


[![ifct2017](http://ifct2017.com/ifct_2017.jpg)](https://www.npmjs.com/package/ifct2017)
> You can ask about composition of 528 key foods in India here: [ifct2017.github.io].<br>
> Food composition values were measured by [National Institute of Nutrition, Hyderabad].<br>
> Take a peek at the raw data here: [Document], [Webpage].

[ifct2017]: https://www.npmjs.com/package/ifct2017
[Indian Food Composition Tables 2017]: http://ifct2017.com/
[language abbreviations]: https://github.com/ifct2017/languages/blob/master/index.csv
[ifct2017.github.io]: https://ifct2017.github.io
[National Institute of Nutrition, Hyderabad]: http://www.ninindia.org
[Document]: https://docs.google.com/spreadsheets/d/1NrdVtCYtmxooVtdGj9UQOPR7l4HIJc9qeI7BNoytGhI/edit?usp=sharing
[Webpage]: https://docs.google.com/spreadsheets/d/e/2PACX-1vTrDSLb2ABbFM8v7QVXqVR0QV7ha58ZJS3Kw6RmtgcwaN6GjNv_hfEZ3K-NqACpT9sIyv7oFysY6z_p/pubhtml
