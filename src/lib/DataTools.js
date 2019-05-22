import PubSub from 'pubsub-js';
import axios from 'axios';


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
const REST_API_SUCCESS          = 0;
const REST_API_ERROR            = -4;
const REST_ACCESS_TOKEN_ERROR   = -5;


// TODO:  Exceptions handling, URLS and filtering..
export const loadEndpointUsingAccessKey = (endpoint, key) => {

  const MAX_REST_RETRIES = 3;

  let accessKey = key;
  let success = false;
  let retryCount = 0;

// TODO:  Try this as async (?)
  const getDataAxios = (url) => {
    let result = {
      error: REST_API_SUCCESS,
      data: ''
    }
    axios({
      method: "get",
      url: url,
      headers: {
        'Authorization': 'Bearer ' + accessKey,
        // 'Accept': 'application/json, text/plain, */*',
        // 'Content-Type': 'application/json',
      },
      transformResponse: [dataParser],
    })
    .then(response => {
      debugger;
      result.data = response.data;
    })
    .catch(error => {
      // if 403 vs some other error here
      debugger;

      result.error = REST_ACCESS_TOKEN_ERROR;
      console.log('loadEndpointUsingAccessKey() failed with error', error);
    });
    return result;
  }



  const getRenewedAccessToken = () => {

    let result = {
      error: REST_API_SUCCESS,
      accessToken: ''
    }

    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append('client_id', '43');
    params.append('client_secret', '8g66LF6bQMQWNBl0F9ZCUCyxVz1VsfQtUPyIhgeJ');

    axios.post('https://auth-staging.fischermgmt.com/oauth/token', params)

//    axios({
//     method: "post",
//     url: "https://auth-staging.fischermgmt.com/oauth/token",
//     data: params,
//  //   transformResponse: [dataParser, dataFormatter],
//   })


    .then (response => {
      result.accessToken = response.access_token;
    })
    .catch(error => {
      result.error = REST_API_ERROR;

       
    });


  }



  while (! success && retryCount < MAX_REST_RETRIES) {
    // TODO:  When Scope of project allows - Set up App Config / authentication server.
    const server = 'https://rest-staging.fischermgmt.com';
    const url = server + endpoint;

    const results = getDataAxios(url);
    debugger;

    if (results.error === REST_API_SUCCESS) {
      success = true;
    } else {

      retryCount++;
          //  If 403 returned we need a renewed token..

    }



  }

  return 0; // We hope return data?  or error?

}

/*
    Overview:
    
    1.  We want the back end section to be able to put data into the React global context.

    2.  The react global context is coupled to the front end.  Only components can access the context.

    3.  This is the main reason <Authorize/> which handles the automatic redirect to oauth, was implemented as a non-rendering React component.

    4.  All the intensive server I/O "back end" processing should be separated from front end UI processing. 
        (This is why) the back end is implemented as function in lieu of a component.

    5.   Native JS Pubsub and global context forms the bridge from the non-component / function side to the component side.
    Further reading re: using native JS Pubsub (albeit between components)
    https://gist.github.com/pablen/63b57ee80877712ad00ca7849643b4a2
     

  Expired token for testing:
  http://localhost:3900/#access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjBlYmQ4YjA2ZTYzYTY3ZjQ5YmNhN2JmYWYzYjAzMDExYTAyOTA0NGQ1Mzg0MWFkYzRiOTAxYmQ4MDEwZjAxZWVkMGNhOWQ1ZmYzMzY2YjdjIn0.eyJhdWQiOiI0MyIsImp0aSI6IjBlYmQ4YjA2ZTYzYTY3ZjQ5YmNhN2JmYWYzYjAzMDExYTAyOTA0NGQ1Mzg0MWFkYzRiOTAxYmQ4MDEwZjAxZWVkMGNhOWQ1ZmYzMzY2YjdjIiwiaWF0IjoxNTU4NTI4NDA4LCJuYmYiOjE1NTg1Mjg0MDgsImV4cCI6MTU1ODUyODg4OCwic3ViIjoiMjYwMjgiLCJzY29wZXMiOltdLCJ1c2VybmFtZSI6ImRpc29uIiwiZ3VpZCI6IjE4ZmEwNDI4LTA2MTctNGU1Ni04YWE5LWNmYjVmNWI4Y2FmMSIsIm5hbWUiOiJEYXZpZCBJc29uIiwiYXV0aF9kcml2ZXIiOiJsZGFwIn0.SYZz-hrApMuln88G2J09MGAo5wz4y2yYjVEUMjI1PEmEalXspnThO3Un2nod4lQXG24UqHM0c3wMDLnooYdGymivWKiWi6v7voimnundkkfOFg0cDsm4tHinIKAMD0C6d6jVwji08dBMVqAyxRUwUCUI2bvhPqIj314I-Pvey4whC_QyiAUQ-rw7Ny0xVDUoM92h5wGaxVPLbkhMlKpb-pSayt8dU7FOE8n0kjD0kVdNpeILCbEm9hVBUsnmSpn2uOkx_3OxYeSHOEGkrWY40yxJDSklsgqUPmUTrbLZl6eGRJ6za7fCA2rL1v3DR2DzZfKOXgBXUy8iiMh1LnduMzEy_eBosXxoinUxifjsIxTPfBT-FE3XWOkkO_84i4N9Ks6bEUV8C6FhoDt7y8S-QsDP2lK3zgUdZzh3X2mSRHDl-dZE7q6vDkMdod5377vjmJcztgCYtGBZ0ENBJ2PtUzXk-8ccqfO1vZ_-AlBzwkexP9-cR_ps6myPz14lju_yxjD6HUGv_Zxj16ES7E4_I70EXt7sK6IG1vI0I5y4HUp2NeMUIpECPoeS1477QdZhAM0PQWk1Kstncl48h7beX9HgUBHZYw3ZW5Qu9_GPj5MUr3UvytMeguuIrhHIGhC4UkFm_DW6LNOMCGFSA0ikrDi1vT4yAudIUEAL7_y2KjA&token_type=Bearer&expires_in=480


  Can pass in current global access token.


    Process:

    Load the desired REST endpoint.

    If you get a 403 - this [we will assume] means the token has expired.

    If the token has expired:

      retryCount = 0
      success = false

      while ! success && retryCount < MAX

        GetNewAccessToken()
        on success:
          context.setAccessToken(token)
          Load the desired REST endpoint
            on success:
              result = returned data
              success = true
            on error:
              if error === 403
                retryCount++
              else
                throw exception something else went wrong
        on error:
          retryCount++

      
      if retryCount === MAX
        display unrecoverable error msg

*/


// Trivial export for setting up / verifying Jest testing 
export const testSquare = (val) => {
  console.info('publishing fake access-token..');
  PubSub.publish('access-token', val);
  return val * val;
  // Experiment with publish here.
  
}