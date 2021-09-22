// For IDE only
const path = require('path');

module.exports = {
  context: '.',

  resolve: {
    alias: {
      '@': path.resolve(__dirname + '/src'),
      '~': path.resolve(__dirname + '/src')
    }
  }
};
