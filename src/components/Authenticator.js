import React, { /*useState, */ useContext, useEffect } from 'react';
import AppContext from '../context/app-context';
import PubSub from 'pubsub-js';

const Authenticator = (props) => {
  const context = useContext(AppContext);

  const GetAccessTokenFromAppUrl = () => {
    const sourceUrl = window.location.href;
    let params = {access_token: ''};

    if (sourceUrl.search('access_token') !== -1) {
      const url = sourceUrl.replace('#', '?');
      const regex = /[?&]([^=#]+)=([^&#]*)/g;
      let match;
      while ((match = regex.exec(url)) !== null) {
        params[match[1]] = match[2];
      }
    }    
    return params.access_token;
  }

  // Side effect handler / manager
  useEffect(() => {
    const token = GetAccessTokenFromAppUrl();
  
    const accessTokenSubscriber = PubSub.subscribe('access-token', (msg, data) => {
      console.info ('accessTokenSubscriber in Authenticator received', data);
      context.setAccessToken(data);
    }); 

    // TODO:  When Scope of project allows - Set up App Config / authentication server.
    if (token.length === 0) {
       // Prevent memory leak.  See https://auth0.com/blog/four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them/
      PubSub.unsubscribe(accessTokenSubscriber); 
      window.location.href = 'https://auth-staging.fischermgmt.com/oauth/authorize?client_id=43&response_type=token';
    }
  
    // Getting here means there was a token.
    // TODO: What is the best way to test it is a valid token?
    context.setAccessToken(token);

 
    //  Returning a fn here equates to a componentDidUnmount()
    return () => {
      console.info('accessTokenSubscriber UNsubscribing..');
      PubSub.unsubscribe(accessTokenSubscriber);
    } 
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
   <>
   </>
  )
};
  
export default Authenticator;




  // const sourceUrl = "http://localhost:3100/#access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjI5Yjk5MGQ4MWM1Y2Y2NGQ3OGFiZWNmYTcwNmYyZjhhNGMzZDI2MzUyYzI3N2RjZTU4ZTM1Y2JiMzc1ZmFmOTlmZDJlMmIwMGJlMzU1MDVlIn0.eyJhdWQiOiI0MyIsImp0aSI6IjI5Yjk5MGQ4MWM1Y2Y2NGQ3OGFiZWNmYTcwNmYyZjhhNGMzZDI2MzUyYzI3N2RjZTU4ZTM1Y2JiMzc1ZmFmOTlmZDJlMmIwMGJlMzU1MDVlIiwiaWF0IjoxNTU4MzgwNTA3LCJuYmYiOjE1NTgzODA1MDcsImV4cCI6MTU1ODM4MDk4Nywic3ViIjoiMjYwMjgiLCJzY29wZXMiOltdLCJ1c2VybmFtZSI6ImRpc29uIiwiZ3VpZCI6IjE4ZmEwNDI4LTA2MTctNGU1Ni04YWE5LWNmYjVmNWI4Y2FmMSIsIm5hbWUiOiJEYXZpZCBJc29uIiwiYXV0aF9kcml2ZXIiOiJsZGFwIn0.LGxaMLMMlTR7_h6NTOX1tc-ihM93fWDiJXTvimSkBOUjIRDQDRAYJkOC8vaEKEUy_4NvmRvCb8ha5qxF5nWjpL_g9Yjp_e9PzTyWGGWm6MKWerT-EzHI0HgxgdA6aJIBvNzG0-5WH0sltTEJYm4EFvhvhJt68_R5EHO_9lh3h44U_xkmowp9Rxpxa1arP5cEUpvl1eCfyw49PwoRGYREqLT08T8e5wju_YEyaVnm8CdlW4DYqzyk8ruch41MhVSF_ZT8A18PD30crzxfuqlJMQMA0_m4SbbfLHZZ7okkHseimyv99r4iTR9JNYazmdW_urpxufrsF9HMRLZuaPDTcC8dFSW06OazCXAtGGQ6JtMBdbliVpkpxlQ91SI2OQlFOzPrTKYOJpDrfclr1QntUAcCaXvEQhq3hEfOL3j7yBFbP3wYG-zTLu7U8TBFO99aqm7V5YHbbF7mKO8SZObh51Tq8AWYwAKxjhC4Ak8K__w-mqUcvyS7bW4Sd_gUkb5pLxHPRhuOucn7H_S0bfCnZhrbuAxTnE5NEOHKwhoj8yokSWwQpdVDRdNjDQOImIdCaPMy3HEwa6d-05g8bIfimmP0_prgxvdKcuhZLAAJ741vWKdiJXxknZiO5QF9QAiW7-5FJJyZjWTDECMqTJEGM2GBqZ1680z2pQfOP9KPCi0&token_type=Bearer&expires_in=480"

 

