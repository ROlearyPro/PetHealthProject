import logo from './logo.svg';
import './App.css';
import DrugSearch from './Components/DrugSearch';
import FormComponent from './Components/FormComponent';
import React, { useEffect, useState } from 'react';
import APIComponent from './Components/APIComponent';
import CountComponent from './Components/CountComponent';
function App() {
  const dummyIdeas = [
    { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
    { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
    { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
  ]

  const emptyFormVals = {
    key:-1,
    id: -1,
    title: '',
    description: '',
  }

  const [formValues, setFormVals] = useState(emptyFormVals)

  const [ideas, setIdeas] = useState(dummyIdeas)
  const [responses, setResponses] = useState([])
  const [input, setInput] = useState('')
  const [limit, setLimit] = useState(3);
  const [countResponse, setCountResponse] = useState([])
  const [checkedVal, setCheckedVal] = useState(true);


  
  function addIdea(newIdea) {
    setIdeas([...ideas, newIdea])
  }
  let dataValue;
  let dataKey = 0;
  let url = 'https://api.fda.gov/animalandveterinary/event.json?search=drug.active_ingredients.name"' + input + '"&limit=' + limit;

  const getPetHealth = async () => {
    if (input) {

      try {
        if (checkedVal === true) {
          url = 'https://api.fda.gov/animalandveterinary/event.json?search=drug.active_ingredients.name"'+input+'"&count=reaction.veddra_term_name.exact&limit='+limit;
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
      <br/>
      <div>
        <CountComponent countResponse={countResponse} setCountResponse={setCountResponse} />

      </div>
      <br/>
      <div>
      <DrugSearch responses={responses} setResponses={setResponses} />

      </div>
    </div>
  );
}

export default App;
