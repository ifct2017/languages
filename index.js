const Sql = require('sql-extra');
const path = require('path');
const corpus = require('./corpus');

function createRegex(lst) {
  var z = '(^|\\W+)(';
  for(var v of lst)
    z += v.length>1? `${v}|`:`${v}\\.|`;
  z = z.substring(0, z.length-1);
  z += `)(\\W+|$)`;
  return new RegExp(z, 'i');
}

const REPLACE = /((\w\s+|\w\.\s*|\w\-\s*|\w$)+)|\w+/g;
const MATCH = createRegex(corpus.keys());

function csv() {
  return path.join(__dirname, 'index.csv');
};

function sql(tab='languages', opt={}) {
  return Sql.setupTable(tab, {abbr: 'TEXT', lang: 'TEXT'}, corpus.values(),
    Object.assign({pk: 'abbr', index: true, tsvector: {abbr: 'A', lang: 'B'}}, opt));
};

function languages(txt) {
  var txt = txt.replace(REPLACE, (m, p1) => {
    var v = m.replace(/\W/g, '');
    return v.length===1? `${m.trim()} `:`${v} `
  }).toLowerCase();
  var m = txt.match(MATCH);
  if(m==null) return null;
  return corpus.get(m[2].replace('.', ''));
};
languages.csv = csv;
languages.sql = sql;
languages.corpus = corpus;
module.exports = languages;
