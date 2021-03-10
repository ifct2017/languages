const path = require('path');
const esql = require('sql-extra');

const REPLACE = /((\w\s+|\w\.\s*|\w\-\s*|\w$)+)|\w+/g;
var corpus = null;
var match = null;




function createRegex(lst) {
  var a = '(^|\\W+)(';
  for (var v of lst)
    a += v.length>1? `${v}|`:`${v}\\.|`;
  a = a.substring(0, a.length-1);
  a += `)(\\W+|$)`;
  return new RegExp(a, 'i');
}

function load() {
  if (corpus) return corpus;
  corpus = require('./corpus');
  match = createRegex(corpus.keys());
  return corpus;
}

function csv() {
  return path.join(__dirname, 'index.csv');
}

function sql(tab='languages', opt={}) {
  return esql.setupTable(tab, {abbr: 'TEXT', lang: 'TEXT'}, load().values(),
    Object.assign({pk: 'abbr', index: true, tsvector: {abbr: 'A', lang: 'B'}}, opt));
}


function languages(txt) {
  if (!corpus) load();
  var txt = txt.replace(REPLACE, m => {
    var v = m.replace(/\W/g, '');
    return v.length===1? m.trim()+' ' : v+' ';
  }).toLowerCase();
  var m = txt.match(match);
  if (m==null) return null;
  return corpus.get(m[2].replace('.', ''));
}
languages.load = load;
languages.csv = csv;
languages.sql = sql;
module.exports = languages;
