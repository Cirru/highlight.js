/*
Language: Cirru
Author: Jiyin Yiyong <jiyinyiyong@gmail.com>
Contributors: Jiyin Yiyong <jiyinyiyong@gmail.com>
Description: Cirru is an indentation-based grammar for programming languages. See http://cirru.org/
*/

function(hljs) {
  var func = {
    className: 'function',
    end: /(\s|\)|$)/
  }
  var indent = {
    className: 'indent',
    begin: /^\s+/,
    starts: func,
  }
  var params = {
    className: 'params',
    begin: /\b[^\(\)\"\s]+\b/,
  }
  var string = hljs.QUOTE_STRING_MODE
  var dollar = {
    className: 'preprocessor',
    begin: /\$\s+/,
    starts: func,
  }
  var open = {
    className: 'preprocessor',
    begin: /\(/,
    starts: func,
  }
  var close = {
    className: 'preprocessor',
    begin: /\)/,
  }
  var number = {
    className: 'number',
    begin: /\b[+-e\d\.]+\b/,
  }
  var line = {
    className: 'line',
    contains: [
      indent,
      number,
      dollar,
      params,
      string,
      open,
      close,
    ]
  }
  return line
}
