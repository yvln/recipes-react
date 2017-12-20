const axios = require('axios');

const apiMiddleware = store => next => action => {
  if (!action.url) {
    return next(action)
  }

  const { url, options, types, ...rest } = action
  const { onStart, onSuccess, onError } = types

  next({ ...rest, type: onStart })

  axios({
      method: options.method || 'GET',
      url: url,
      data: options.data })
    .then( response => {
        if (response.status >= 200 && response.status < 300) {
          return next({ ...rest, payload: response, type: onSuccess })
        } else {
          const error = new Error(response.statusText)
          error.response = response
          return next({ ...rest, error, type: onError })
        }
      }
    )
  }

export default apiMiddleware;