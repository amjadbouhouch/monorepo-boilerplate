const config = require('./tsconfig.json'); // import your tsconfig.json where your paths are defined
const tsconfigPaths = require('tsconfig-paths');

tsconfigPaths.register({
  baseUrl: './dist/src',
  paths: config.compilerOptions.paths,
});
