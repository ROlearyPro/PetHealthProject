import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import DrugSearch from './Components/DrugSearch';
import FormComponent from './Components/FormComponent';
import React, { useEffect, useState } from 'react';
import APIComponent from './Components/APIComponent';
import CountComponent from './Components/CountComponent';
function App() {

  const emptyFormVals = {
    key:-1,
    id: -1,
    title: '',
    description: '',
  }

  const [formValues, setFormVals] = useState(emptyFormVals)

  const [responses, setResponses] = useState([])
  const [input, setInput] = useState('')
  const [limit, setLimit] = useState(3);
  const [countResponse, setCountResponse] = useState([])
  const [checkedVal, setCheckedVal] = useState(true);


  
  
  let dataValue;
  let dataKey = 0;
  let url = 'https://api.fda.gov/animalandveterinary/event.json?search=drug.active_ingredients.name:"' + input + '"&limit=' + limit;

  const getPetHealth = async () => {
    if (input) {

      try {
        if (checkedVal === true) {
          url = 'https://api.fda.gov/animalandveterinary/event.json?search=drug.active_ingredients.name:"'+input+'"&count=reaction.veddra_term_name.exact&limit='+limit;
          console.log('count')
          setResponses([]);

        }
        else{console.log('no count')
          setCountResponse([])

        }
        
        const response = await fetch(url);
        if (!response.ok) {
          console.log("not okay line 40")
          console.log(response)
          setResponses([]);
          setCountResponse([])
          // const err = new Error(response.statusText)
          // err.statusCode = response.status
          return "error"

          throw new Error("Something went wrong with the response")
          
        } else {
          const data = await response.json();
          return data; 
        }
      }
      catch (err) {
        console.error(err)
      }
    }
  };
 
  useEffect(() => {
    // console.log(getPetHealth(), "Pethealth console log")
    // if (getPetHealth()) {
    //   getPetHealth().then((data) => {
    //     console.log(data)
    //     dataValue = data.results;

    //     dataValue.key= JSON.parse(JSON.stringify(dataKey))
    //     dataKey+=1;
    //     if(checkedVal)
    //     {
    //       setCountResponse(dataValue)
    //     }else{
    //     setResponses(dataValue)
    //     }
    //   }
    //   );
    // }
    // set to only occur on submit
  }, []);

  return (
    <div className="App">
      <div>
      <FormComponent input={input} checkedVal = {checkedVal} setCheckedVal={setCheckedVal} setFormVals={setFormVals} setInput={setInput} setCountResponse={setCountResponse} setResponses={setResponses} getPetHealth={getPetHealth} />


      </div>
      <div>
        <CountComponent countResponse={countResponse} input={input} limit={limit} setCountResponse={setCountResponse} />

      </div>
      <div>
      <DrugSearch responses={responses} setResponses={setResponses} />

      </div>
    </div>
  );
}

export default App;
