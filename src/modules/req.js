import env from './../.env'

/**
 * Function for get base request options.
 *
 * @param method - request method.
 */
const getBaseOptions = (method) => {
  const options = {};

  options.method = method;
  options.headers = {};
  options.headers['Accept'] = 'application/json';
  options.headers['Content-Type'] = 'application/json';

  return options;
};

/**
 * Function for get request url.
 *
 * @param path - api path.
 * @param domain - api domain.
 * @returns {string} - request url.
 */
const getRequestUrl = async (path, domain) => {
  const protocol = env.API_URL;
  return `${protocol}/${path}`;
};

/**
 * Function for get path width query string.
 *
 * @param path - request path url.
 * @param params - request params.
 * @returns {string} - query string.
 */
const getPathWithQueryString = (path, params = {}) => {
  const esc = encodeURIComponent;

  const query = Object.keys(params)
    .filter(k => params[k])
    .map(k => {
      if (Array.isArray(params[k]))
        return params[k]
          .map(val => `${encodeURIComponent(k)}[]=${encodeURIComponent(val)}`)
          .join('&');

      return esc(k) + '=' + esc(params[k]);
    }).join('&');

  return query ? path + '?' + query : path;
};

/**
 * Request wrapper for fetch API.
 *
 * @param path - request api path.
 * @param method - request method.
 * @param customOptions - custom request options.
 * @param domain - user domain.
 */
const base = async (path, method, customOptions, domain = false) => {
  let options = getBaseOptions(method);
  let url = await getRequestUrl(path, domain);

  return fetch(url, options)
    .then(async response => {
      //
    });
};

/**
 * Base request function.
 */
const request = {
  get: (path, params) => {
    const pathWithParams = getPathWithQueryString(path, params);
    return base(pathWithParams, 'GET', {});
  },
  delete: (path, params) => {
    const options = {body: JSON.stringify(params)};
    return base(path, 'DELETE', options);
  },
  post: (path, params) => {
    const options = {body: JSON.stringify(params)};
    return base(path, 'POST', options);
  },
  put: (path, params) => {
    const options = {body: JSON.stringify(params)};
    return base(path, 'PUT', options);
  },
  patch: (path, params) => {
    const options = {body: JSON.stringify(params)};
    return base(path, 'PATCH', options);
  },
};

export default request;
