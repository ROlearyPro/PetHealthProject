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

  // const [formValues, setFormVals] = useState(emptyFormVals)

  // const [ideas, setIdeas] = useState(dummyIdeas)
  const [responses, setResponses] = useState([])
  const [input, setInput] = useState('pain')
  const [limit, setLimit] = useState(5);

  // function addIdea(newIdea) {
  //   setIdeas([...ideas, newIdea])
  // }
  let dataValue;
  let dataKey=0;

  const getPetHealth = async () => {
    if (input) {

      try {
        const url = 'https://api.fda.gov/animalandveterinary/event.json?search=' + input + '&limit='+limit;
        const response = await fetch(url);
        if (!response.ok) {
          console.log("not okay line 40")
          // const err = new Error(response.statusText)
          // err.statusCode = response.status
          throw new Error("Something went wrong with the response")
        } else {
          const data = await response.json();
          console.log(data)
          return data;
        }
      }
      catch (err) {
        console.error(err)
      }
    }
  };

  useEffect( () => {
    console.log(getPetHealth(), "Pethealth console log")
    getPetHealth().then((data)=>{
      dataValue = data.results;
      dataValue.key= JSON.parse(JSON.stringify(dataKey))
      dataKey+=1;
      setResponses(dataValue)
    }
    );
  }, []);

  console.log(responses, typeof(responses))
  // console.log((responses[0]))
// from the data, need the reactions and the drug name

  return (
    <div className="App">
      <h1>
        {/* <FormComponent ideas={ideas} setFormVals={setFormVals} addIdea={addIdea} /> */}
      </h1>
      <h2>
        <ExternalComponent responses={responses} setResponses={setResponses} />
      </h2>
      <h3>
      {/* {responses[0].reaction} */}
      </h3>
    </div>
  );
}

export default App;
