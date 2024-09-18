import './APIComponent.css';
import { useEffect, useLayoutEffect, useState } from 'react';
import React from 'react';

/// pass in input from outside this component, from formcomponent probably
// use that to determine the parameters for the search/lookup

function APIComponent({ responses, setResponses }) {
    function addResponse(newResponse) {
        setResponses([...responses, newResponse])
      }
    let input = "pain"
    let retVal ="test"

    const getPetHealth = async () => {
        if (input) {
          try {
            const url = 'https://api.fda.gov/animalandveterinary/event.json?search=' + input + '&limit=1';
            const response = await fetch(url);
            if (!response.ok) {
              console.log("not okay line 31")
              const err = new Error(response.statusText)
              err.statusCode = response.status
              throw err
            } else {
              const data = await response.json();
              // console.log(responses);
              // console.log(typeof(responses))
             retVal = await data[0];
              addResponse(data);
              return data;
            } 
          }
          catch (err) {
            console.error(err)
          };
        }; 
      };


    useEffect(() => {
     getPetHealth()
     .then(
       async data => 
        {
            //   addResponse(data);
            console.log((responses))
            console.log(responses.results)
            retVal = await responses[0];
            console.log(retVal);
        }
     );  
    }, [retVal]);



    return JSON.stringify(retVal)
}





export default APIComponent;