import { useState } from 'react';
import './FormComponent.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';


function FormComponent({ checkedVal, setCheckedVal, setInput, setCountResponse, setResponses, getPetHealth }) {
    const [titleVal, setIdeaVal] = useState('');
    let dataValue;
    let dataKey = 0;
    // const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setInput(
            titleVal
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
                        // navigate(`/search/`)
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
    const handleIdeaInput = (e) => {
        setIdeaVal(() => e.target.value)
        setInput(()=> e.target.value)

    }
    const Counting = (e) => {
        setCheckedVal(() => JSON.parse(e.target.value));
    }
    return (
        <div>
        <form onSubmit={(e) => handleSubmit(e)}>

        <label id='labelval' className='label-for-search'>
            Search for the active ingredient in your pet's medicine:
            <input
                type='text'
                className='Search'
                placeholder={"Search through drugs"}
                value={titleVal}
                onChange={handleIdeaInput}
            />
                        </label>

            <br/>
            <label className='label-for-overall-cases'>
                List overall number of side effect reports?
                <br/>
            <select id='overall-cases' className='overall-side-effect-cases-option' onChange={Counting}>
                
                <option value='true'> Yes</option>
                <option value='false'> No</option>
                {/* <option value='3'> option3</option>
                <option value='4'> option4</option> */}
            </select>
            </label>
            <br/>
            
            <button type="submit" className='search-enter'>set vals</button>
        </form>
        <div className='errorSpot'></div>

        </div>
    )

}
export default FormComponent;