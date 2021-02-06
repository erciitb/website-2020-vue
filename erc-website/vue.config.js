module.exports = {
  // adding cors for json server access
  devServer: {
    proxy: ['http://127.0.0.1:3000/', 'http://localhost:3000/']
  }
}
