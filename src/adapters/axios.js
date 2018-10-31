module.exports = function(config) {
  var defaults = this.defaults
  if (defaults && defaults.axios) {
    // https://github.com/axios/axios
    return defaults.axios.request(config).then(function(response) {
      return response
    })
  }
}
