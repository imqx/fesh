module.exports = {
  require: ['ts-node/register', 'tsconfig-paths/register'],
  loader: 'ts-node/esm',
  extensions: ['ts', 'tsx'],
  spec: ['tests/**/*.spec.*'],
  'watch-files': ['src'],
};
