const utils = require('../utils')

module.exports = function(config) {
  var defaults = this.defaults
  if (defaults && defaults.jQuery) {
    // http://api.jquery.com/jquery.ajax/
    return new Promise((resolve, reject) => {
      defaults.jQuery.ajax({
        url: config.url,
        data: config.data,
        headers: config.headers,
        method: config.method,
        timeout: config.timeout,
        withCredentials: config.withCredentials,
        success (data, textStatus, jqXHR) {
          resolve({
            data,
            status: 200,
            headers: utils.parseHeadersFromXhr(jqXHR)
          })
        },
        error (jqXHR, textStatus, errorThrown) {
          reject({
            errorThrown,
            textStatus,
            jqXHR
          })
        }
      })
    })
  }
}
