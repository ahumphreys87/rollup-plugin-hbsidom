import { createFilter } from 'rollup-pluginutils';
import hbsCompiler from 'handlebars-idom';

export default function (options = {}) {
  const filter = createFilter(
    options.include || [ '**/*.hbs', '**/*.handlebars', '**/*.mustache' ],
    options.exclude || 'node_modules/**'
  );
  const sourceMap = options.sourceMap !== false;

  return {
    transform (code, id) {
      if(!filter(id)) return;

      let compiled = "import IncrementalDOM from 'incremental-dom';\n";
      compiled += "export default function(data) {\n";
      compiled += hbsCompiler.compile(content) + "};\n";

      return {
        code: compiled,
        map: { mappings: '' }
      };
    }
  };
};
