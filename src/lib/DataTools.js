import PubSub from 'pubsub-js';
import axios from 'axios';
import {
  REST_API_SUCCESS,
  REST_API_ERROR,
  REST_ACCESS_TOKEN_ERROR,
} from './RestStatus';

// Prototype data handler for server input data
//  Can use nested try/catch etc for advanced error handling
//  Ex:  API data can't be parsed properly

function dataParser (data, headers) {
  try {
    return JSON.parse(data);

  } catch (e) {
    // SyntaxError
    if (e instanceof SyntaxError) {
      // Was a JSON.parse error
    }
  }
}



// Filtering and URLS should have already been set up by now
// TODO:  Exceptions handling
 export async function endpointActionUsingAccessToken (endpoint, accessToken, setAccessToken, formatter = data => data) {

  const MAX_REST_RETRIES = 3;
  let finalResult = {
    status: REST_API_SUCCESS,
    accessToken: accessToken,
    data: [],
  };
 
  // TODO:  Formalize exception handling, esp. for transformResponse() handler.  Future version support action GET/POST/PUT as a parameter
  async function endpointWithAxios (url, token, formatter) {
    let result = {
      status: REST_API_SUCCESS,
      data: ''
    }
    await axios({
      method: "get",
      url: url,
      headers: {
        'Authorization': 'Bearer ' + token,
      },
      transformResponse: [dataParser, formatter],
    })
    .then(response => {
      console.info(`endpointWithAxios() SUCCESS `);
      result.data = response.data;
    })
    .catch(error => {
      result.status = (error.response.status === 403 ? REST_ACCESS_TOKEN_ERROR : REST_API_ERROR);
      // Just debugging info
      {
        let msg = (error.response.status === 403 ? 'REST_ACCESS_TOKEN_ERROR' : 'REST_API_ERROR'); 
        console.info(`endpointWithAxios() url ${url} yielded ${msg}`);
      }
    });
         
    return result;
  }


  async function getRenewedAccessToken() {

    let result = {
      status: REST_API_SUCCESS,
      accessToken: ''
    }
  
    const params = new URLSearchParams();
    // Source: Postman config for Get Token, V3
    params.append('grant_type', 'username');
    params.append('client_id', '43');
    params.append('client_secret', '8g66LF6bQMQWNBl0F9ZCUCyxVz1VsfQtUPyIhgeJ');
    params.append('username', 'dison');
  
    await axios.post('https://auth-staging.fischermgmt.com/oauth/token', params)     
    .then (response => {
      result.accessToken = response.data.access_token;
    })
    .catch(error => {
      result.status = REST_API_ERROR;        
    });
    return result;
  }


  const server = 'https://rest-staging.fischermgmt.com';
  const url = server + endpoint;
  let retryCount = 0;
  let success = false;
  while (! success && retryCount ++<  MAX_REST_RETRIES) {
    const response = await endpointWithAxios(url, accessToken, formatter);
    finalResult.status = response.status;
    if (response.status === REST_ACCESS_TOKEN_ERROR) {
      const accessResponse = await getRenewedAccessToken();
      if (accessResponse.status === REST_API_SUCCESS) {
        accessToken = accessResponse.accessToken;
        setAccessToken(accessToken);
      }
    } else if (response.status === REST_API_SUCCESS) {
      success = true;
      finalResult.data = response.data;
    }
    // Just debugging
    if (retryCount > 1) {
      console.info('retryCount is now', retryCount);
    }
  }

  return finalResult;
}

 
// Trivial export for setting up / verifying Jest testing 
export const testSquare = (val) => {
  console.info('publishing fake access-token..');
  PubSub.publish('access-token', val);
  return val * val;
  // Experiment with publish here.
  
}



   // console.info(`endpointWithAxios() with url ${url} token: ${token.substring(token.length - 30, token.length)}`);
