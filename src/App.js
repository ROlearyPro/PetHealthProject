import logo from './logo.svg';
import './App.css';
import ExternalComponent from './Components/ExternalComponent';
import FormComponent from './Components/FormComponent';
import React, { useEffect, useState } from 'react';
import APIComponent from './Components/APIComponent';
 function App() {
  const dummyIdeas = [
    { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
    { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
    { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
  ]

  const emptyFormVals = {
    id: -1,
    title: '',
    description: '',
  }

  const [formValues, setFormVals] = useState(emptyFormVals)

  const [ideas, setIdeas] = useState(dummyIdeas)
  const [responses, setResponses] = useState([])

  function addIdea(newIdea) {
    setIdeas([...ideas, newIdea])
  }
 

  let input = "pain"

  // const getPetHealth = async () => {
  //   if (input) {

  //     try {
  //       const url = 'https://api.fda.gov/animalandveterinary/event.json?search=' + input + '&limit=1';
  //       const response = await fetch(url);
  //       if (!response.ok) {
  //         console.log("not okay line 31")
  //         const err = new Error(response.statusText)
  //         err.statusCode = response.status
  //         throw err
  //       } else {
  //         const data = await response.json();
  //         // console.log(responses);
  //         // console.log(typeof(responses))
  //         addResponse(data);
  //         return data;
  //       }
  //     }
  //     catch (err) {
  //       console.error(err)
  //     }
  //   }
  // };

  useEffect(() => {
    // getPetHealth();
  }, []);

  //   return fetch('https://api.fda.gov/animalandveterinary/event.json?search=' + input + '&limit=1')
  //     .then(res => {
  //       if (!res.ok) {
  //         console.log("not okay line 31")
  //         const err = new Error(res.statusText)
  //         err.statusCode = res.status
  //         throw err
  //       }
  //       console.log("okay line 36")
  //       return res.json()
  //     })
  //     .then(data => {
  //       addIdea(data);
  //       console.log(data)
  //       return data
  //     })
  //     .catch(err => {
  //       console.log(err)

  //     });

  // };

  // 
  // useEffect(() => {
  //   const getSearchData = async () => {
  //     if (input) {
  //       const latitude = input;
  //       let input = "pain"

  //       try {
  //         const url = 'https://api.fda.gov/animalandveterinary/event.json?search=' + { input } + '&limit=10';
  //         const response = await fetch(url);
  //         if (!response.ok) {
  //           throw new Error('error retrieving medical info');
  //         } else {
  //           const data = await response.json();
  //           console.log(data)

  //         }
  //       } catch (err) {
  //         console.error(err);
  //       }
  //     }
  //   };
  //   void getSearchData();
  // }, [input]);



  // console.log(ideas, ' line25')
  // console.log(responses, typeof(responses))
  // console.log(typeof(responses))
  return (
    <div className="App">
      <h1>
        <FormComponent ideas={ideas} setFormVals={setFormVals} addIdea={addIdea} />
      </h1>
      <h2>
        <ExternalComponent ideas={ideas} setIdeas={setIdeas} />
      </h2>
      <h3>
       <APIComponent responses={responses} setResponses={setResponses} />
       test
      </h3>
    </div>
  );
}

export default App;
