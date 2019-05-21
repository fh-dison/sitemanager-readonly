 

// Prototype data handler for server input data
//  Can use nested try/catch etc for advanced error handling
//  Ex:  API data can't be parsed properly

export const dataParser = (data, headers) => {
  try {
    return JSON.parse(data);

  } catch (e) {
    // SyntaxError
    if (e instanceof SyntaxError) {
      // Was a JSON.parse error
    }
  }
}


export const dataFormatter = (data) => {
  try {
    const values = data.map(v => {
      return [v.email, v.name, v.phone];
    });
    return [['Email', 'Name', 'Phone'], ...values];
  } catch (e) {
    //  Mapping error, some other error
  }
}

// Only for setting up testing 
export const testSquare = (val) => {
  return val * val;
}

const request = {
  // `url` is the server URL that will be used for the request
  url: '/user',

  // `method` is the request method to be used when making the request
  method: 'get', // default

  // `baseURL` will be prepended to `url` unless `url` is absolute.
  // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
  // to methods of that instance.
  baseURL: 'https://some-domain.com/api/',

  // `transformRequest` allows changes to the request data before it is sent to the server
  // This is only applicable for request methods 'PUT', 'POST', and 'PATCH'
  // The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
  // FormData or Stream
  // You may modify the headers object.
  transformRequest: [function (data, headers) {
    // Do whatever you want to transform the data

    return data;
  }],

  // `transformResponse` allows changes to the response data to be made before
  // it is passed to then/catch
  transformResponse: [function (data) {
    // Do whatever you want to transform the data

    return data;
  }],

  // `headers` are custom headers to be sent
  //  headers: {'X-Requested-With': 'XMLHttpRequest'},


  // `maxRedirects` defines the maximum number of redirects to follow in node.js.
  // If set to 0, no redirects will be followed.
  maxRedirects: 0, // default
}
