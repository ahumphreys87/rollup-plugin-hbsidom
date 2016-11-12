import { createFilter } from 'rollup-pluginutils';
import hbsCompiler from 'handlebars-idom';

function index () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var filter = createFilter(options.include || ['**/*.hbs', '**/*.handlebars', '**/*.mustache'], options.exclude || 'node_modules/**');
  var sourceMap = options.sourceMap !== false;

  return {
    transform: function transform(code, id) {
      if (!filter(id)) return;

      var compiled = "import IncrementalDOM from 'incremental-dom';\n";
      compiled += "export default function(data) {\n";
      compiled += hbsCompiler.compile(content) + "};\n";

      return {
        code: compiled,
        map: { mappings: '' }
      };
    }
  };
};

export default index;