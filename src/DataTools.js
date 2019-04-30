
class DataTools {

// Prototype data handler for server input data
//  Can use nested try/catch etc for advanced error handling
//  Ex:  API data can't be parsed properly

  dataParser  (data, headers) {
    try {
      return JSON.parse(data);

    } catch (e) {
      // SyntaxError, Mapping error, some other error
      if (e instanceof SyntaxError) {
        // Was a JSON.parse error
      }
    }
  }


  dataFormatter (data) {
    try {
      const values = data.map(v => {
        return [v.email, v.name, v.phone];
      });
      return [['Email', 'Name', 'Phone'], ...values];
    } catch (e) {
      //  Mapping error, some other error
    }

  }

}

export default (new DataTools);