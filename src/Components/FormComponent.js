import { useState } from 'react';
import './FormComponent.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';


function FormComponent({ checkedVal, setCheckedVal, setInput, setCountResponse, setResponses, getPetHealth }) {
    const [searchedVal, setSearchedVal] = useState('');
    let dataValue;
    let dataKey = 0;
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setInput(
            searchedVal
        )

        console.log(getPetHealth(), "Pethealth console log")
        if (getPetHealth()) {
            getPetHealth().then((data) => {
                if (data != "error" && data && searchedVal) {
                    console.log(data)
                    dataValue = data.results;
                    dataValue.key = JSON.parse(JSON.stringify(dataKey))
                    dataKey += 1;
                    if (checkedVal===true) {
                        setCountResponse(dataValue)
                        navigate(`/searchcount/${searchedVal}`)
                    } else if(checkedVal===false){
                        setResponses(dataValue)
                        navigate(`/search/${searchedVal}`)
                    }
                    let errorMessage = document.querySelector('.errorSpot')
                    errorMessage.innerHTML = ('')
                }
                else {
                    console.log("error received?")
                    let errorMessage = document.querySelector('.errorSpot')
                    errorMessage.innerHTML = ('Something went weird: no drugs found with that name! Make sure you are spelling it correctly, please!')
                }
            }
            );
        }
    }
    const handleTextInput = (e) => {
        setSearchedVal(() => e.target.value)
        setInput(() => e.target.value)
        setCheckedVal(()=>JSON.parse(document.getElementById("overall-cases").value));
    }

    const Counting = (e) => {
        console.log("test ", "" )
        setCheckedVal(() => JSON.parse(e.target.value));
    }
    return (
        <div className='form-container'>        <h1 className="full-site-title">
            <div className="site-title">Pet</div>
            <div className="site-title">Health</div>
        </h1>

            <form onSubmit={(e) => handleSubmit(e)}>

                <label id='labelval' className='label-for-search'>
                    <h3>Search for the active ingredient in your pet's medicine:</h3>
                    <input
                        type='text'
                        className='Search'
                        placeholder={"Search through drugs"}
                        value={searchedVal}
                        onChange={handleTextInput} 
                    />
                    
                </label>

                <br />
                <label className='label-for-overall-cases'>
                    List overall number of side effect reports?
                    <br />
                    <select id='overall-cases' className='overall-side-effect-cases-option' onChange={Counting}>
                        <option value='true'> Yes</option>
                        <option value='false'> No</option>
                    </select>
                </label>
                <br />

                <button type="submit" className='search-enter'>Search!</button>
            </form>
            <div className='errorSpot'></div>
        </div>
    )
}
export default FormComponent;