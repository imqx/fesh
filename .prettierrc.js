delete require.cache[require.resolve('@siloqian/fabric/dist/linter/prettier')];

const cfgFile = require('@siloqian/fabric/dist/linter/prettier');

module.exports = { ...cfgFile.default, printWidth: 80, jsdocPrintWidth: 80 };
