'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var rollupPluginutils = require('rollup-pluginutils');
var hbsCompiler = _interopDefault(require('handlebars-idom'));

function index () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var filter = rollupPluginutils.createFilter(options.include || ['**/*.hbs', '**/*.handlebars', '**/*.mustache'], options.exclude || 'node_modules/**');
  var sourceMap = options.sourceMap !== false;

  return {
    transform: function transform(code, id) {
      if (!filter(id)) return;

      var compiled = "import * as IncrementalDOM from 'incremental-dom';\n";
      compiled += "export default function(data) {\n";
      compiled += hbsCompiler.compile(code) + "};\n";

      return {
        code: compiled,
        map: { mappings: '' }
      };
    }
  };
};

module.exports = index;