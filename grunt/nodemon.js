'use strict';
module.exports = {
  dev: {
    script: 'index.js',
    options: {
      args: [],
      ignore: ['public/**','node_modules/**'],
      nodeArgs: ['--debug'],
      watch:['app'],
      delay: 1000,
      ext: 'js,jade',
      env: {
          PORT: 3000
      }
    }
  }
};
        