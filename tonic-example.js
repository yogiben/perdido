var jss = require('jss');
var extend = require('jss-extend');
var nested = require('jss-nested');
var camelCase = require('jss-camel-case');
var defaultUnit = require('jss-default-unit');

var perdido = require('perdido');

jss.use(extend());
jss.use(nested());
jss.use(camelCase());
jss.use(defaultUnit());

var testGrid = {
  article: {
    extend: perdido.flexContainer('row'),
    '& div': {
      extend: perdido.column('1/3'),
    },
  },
};


var styleSheet = jss.createStyleSheet(testGrid, {named: false});

styleSheet.toString();

perdido = perdido.create('30px', true);
perdido.flex = true;

var styleSheet2 = jss.createStyleSheet(testGrid, {named: false});

styleSheet2.toString();
