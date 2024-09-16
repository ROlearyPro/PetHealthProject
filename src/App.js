import logo from './logo.svg';
import './App.css';
import ExternalComponent from './Components/ExternalComponent';
import FormComponent from './Components/FormComponent';
import React, { useEffect, useState } from 'react';
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
  
  function addIdea(newIdea){
    setIdeas([...ideas, newIdea])
  }

//   useEffect(()=>{
//   getIdeas().then(
//     data=>{
//       setIdeas(data);
//     }
//   )
// }, [])

  console.log(ideas, ' line25')
  return (
    <div className="App">
      <h1>
        <FormComponent ideas={ideas} setFormVals={setFormVals} addIdea={addIdea} />
      </h1>
      <h2>
        <ExternalComponent ideas={ideas} setIdeas={setIdeas} />
      </h2>
    </div>
  );
}

export default App;
