import './APIComponent.css';
import { useEffect, useState } from 'react';
import React from 'react';

/// pass in input from outside this component, from formcomponent probably
// use that to determine the parameters for the search/lookup

function APIComponent({ responses, setResponses }) {
    const [responseVals, setResponseVal] = useState('');
    function addResponse(newResponse) {
        setResponseVal([...responseVals, newResponse])
        setResponses([responses, setResponses]);
    }

    let input = "pain"
    useEffect(() => {
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
                        console.log(response, " response line 27");
                        console.log(data, " data line 28");
                        addResponse(data);
                        return data;
                    }
                }
                catch (err) {
                    console.error(err)
                }
            }
        };
        void getPetHealth();

    }, []);
 
    console.log(responses)
    return (responses.forEach(((response) => {
        response.key = response.meta;
        return (
            <div>
                response.meta
            </div>
        )
    })))
}


export default APIComponent;