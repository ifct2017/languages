Full form of [language abbreviations].<br>
📦 [Node.js](https://www.npmjs.com/package/@ifct2017/languages),
📜 [Files](https://unpkg.com/@ifct2017/languages/).

> This is part of package [ifct2017].<br>
> Online database: [ifct2017.github.io].

<br>

```javascript
const languages = require('@ifct2017/languages');
// languages(query)
// → {abbr, lang} if found, null otherwise.


languages('mal.');
languages('Mal');
// { abbr: 'Mal.', lang: 'Malayalam' }

languages('what is s.?');
languages('S. stands for?');
// { abbr: 'S.', lang: 'Sanskrit' }


// Note:
// Full stops must immediately follow character, if present.
// For single character abbreviations, full stop is mandatory.
```

```javascript
// Additional methods:
languages.load() // → corpus
languages.sql([table], [options]) // → sql statements
languages.csv() // → path of csv file
```

<br>
<br>

[![](https://i.imgur.com/D5UYmbD.jpg)](http://ifct2017.com/)<br>
[![ORG](https://img.shields.io/badge/org-ifct2017-green?logo=Org)](https://ifct2017.github.io)
[![DOI](https://zenodo.org/badge/132982545.svg)](https://zenodo.org/badge/latestdoi/132982545)

> Data was obtained from the book [Indian Food Composition Tables 2017].<br>
> Food composition values were measured by [National Institute of Nutrition, Hyderabad].<br>
> Take a peek at the raw data here: [Document], [Webpage].

[ifct2017]: https://www.npmjs.com/package/ifct2017
[Indian Food Composition Tables 2017]: http://ifct2017.com/
[language abbreviations]: https://github.com/ifct2017/languages/blob/master/index.csv
[ifct2017.github.io]: https://ifct2017.github.io
[National Institute of Nutrition, Hyderabad]: http://www.ninindia.org
[Document]: https://docs.google.com/spreadsheets/d/1NrdVtCYtmxooVtdGj9UQOPR7l4HIJc9qeI7BNoytGhI/edit?usp=sharing
[Webpage]: https://docs.google.com/spreadsheets/d/e/2PACX-1vTrDSLb2ABbFM8v7QVXqVR0QV7ha58ZJS3Kw6RmtgcwaN6GjNv_hfEZ3K-NqACpT9sIyv7oFysY6z_p/pubhtml
