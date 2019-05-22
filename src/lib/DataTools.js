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

/*
    Overview:
    
    1.  We want the back end section to be able to put data into the React global context.

    2.  The react global context is coupled to the front end,

    3.  This is the main reason <Authorize/> which handles the automatic redirect to oauth, was implemented as a non-rendering React component.

    4.  All the intensive server I/O "back end" processing should be separated from front end UI processing. 
        (This is why) the back end is implemented as function in lieu of a component.

    5.   Native JS Pubsub and global context forms the bridge from the non-component / function side to the component side.
    Further reading re: using native JS Pubsub (albeit between components)
    https://gist.github.com/pablen/63b57ee80877712ad00ca7849643b4a2
     

  





    

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
  return val * val;
  // Experiment with publish here.
}