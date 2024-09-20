import { useState } from 'react';
import './FormComponent.css';
import React from 'react';


function FormComponent({ input,checkedVal, setCheckedVal, setFormVals, setInput, setCountResponse, setResponses, getPetHealth }) {
    const [idVal, setIdVal] = useState('');
    const [titleVal, setIdeaVal] = useState('');
    const [descriptionVal, setDescriptionVal] = useState('');
    let dataValue;
    let dataKey = 0;

    const handleSubmit = (event) => {
        event.preventDefault();
        setInput(
            titleVal
            //     {
            //     id: idVal,
            //     title: titleVal,
            //     description: descriptionVal

            // }
        )

        console.log(getPetHealth(), "Pethealth console log")
        if (getPetHealth()) {
            getPetHealth().then((data) => {
                if (data!="error" &&data) {
                    console.log(data)
                    dataValue = data.results;
                    dataValue.key = JSON.parse(JSON.stringify(dataKey))
                    dataKey += 1;
                    if (checkedVal) {
                        setCountResponse(dataValue)
                    } else {
                        setResponses(dataValue)
                    }
                    let errorMessage= document.querySelector('.errorSpot')
                    errorMessage.innerHTML=('')

                }
                else{
                    console.log("error received?")
                    let errorMessage= document.querySelector('.errorSpot')
                    
                    errorMessage.innerHTML=('Something went weird: no drugs found with that name!')
                }

            }
            );
        }
        
    }
    const handleIDInput = (e) => {
        setIdVal(() => e.target.value)
    }
    const handleIdeaInput = (e) => {
        setIdeaVal(() => e.target.value)
        setIdVal(() => input.length + 1);
        setInput(()=> e.target.value)

    }
    const Counting = (e) => {
        setCheckedVal(() => JSON.parse(e.target.value));
    }
    return (
        <div>
        <form onSubmit={(e) => handleSubmit(e)}>

        <label id='labelval'>
            Search for the active ingredient in your pet's medicine:
            <input
                type='text'
                className='Title'
                placeholder={"Search through drugs"}
                value={titleVal}
                onChange={handleIdeaInput}
            />
                        </label>

            <br/>
            <label>
                Count individual occurances?
                <br/>
            <select id='Checkbox' onChange={Counting}>
                
                <option value='true'> Yes</option>
                <option value='false'> No</option>
                {/* <option value='3'> option3</option>
                <option value='4'> option4</option> */}
            </select>
            </label>
            <br/>
            
            <button type="submit">set vals</button>
        </form>
        <div className='errorSpot'></div>

        </div>
    )

}
export default FormComponent;