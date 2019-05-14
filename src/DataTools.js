 

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

