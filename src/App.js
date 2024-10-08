import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import { Routes, Route, useNavigate } from 'react-router-dom';
import DrugSearch from './Components/DrugSearch';
import FormComponent from './Components/FormComponent';
import React, { useEffect, useState } from 'react';

import CountComponent from './Components/CountComponent';
function App() {

  const emptyFormVals = {
    key: -1,
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
  const navigate = useNavigate();

  const getPetHealth = async () => {
    if (input) {

      try {
        if (checkedVal === true) {
          url = 'https://api.fda.gov/animalandveterinary/event.json?search=drug.active_ingredients.name:"' + input + '"&count=reaction.veddra_term_name.exact&limit=' + limit;
          console.log('count')
          setResponses([]);

        }
        else {
          console.log('no count')
          setCountResponse([])

        }
        await new Promise(r => setTimeout(r, 50));
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
  const homeButton = (event) => {

  navigate(`/`)
  }
  return (
    <div>
    <div className='title-bar' onClick={homeButton}>Pet Health Secure</div>
    <div className='main-page'>
      <Routes>
        <Route path='/' element={<FormComponent input={input} checkedVal={checkedVal} setCheckedVal={setCheckedVal} setInput={setInput} setCountResponse={setCountResponse} setResponses={setResponses} getPetHealth={getPetHealth} />}></Route>

        <Route path='/searchcount/:searchInput' element={<CountComponent countResponse={countResponse} input={input} limit={limit} />}></Route>

        <Route path='/search/:searchInput' element={<DrugSearch responses={responses} setResponses={setResponses} />}></Route>
      </Routes>
    </div>
    </div>
  );
}

export default App;
