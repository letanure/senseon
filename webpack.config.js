// For IDE only
const path = require('path')

module.exports = {
  context: '.',

  resolve: {
    alias: {
      '@': path.join(__dirname, '/src'),
      '~': path.join(__dirname, '/src')
    }
  }
}
