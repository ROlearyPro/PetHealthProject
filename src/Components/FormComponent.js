import { useState } from 'react';
import './FormComponent.css';
import React from 'react';


function FormComponent({ideas, formValues, addIdea}) {
    const [idVal, setIdVal] = useState('');
    const [titleVal, setIdeaVal] = useState('');
    const [descriptionVal, setDescriptionVal] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(addIdea)

        addIdea({
            id: idVal,
            title: titleVal,
            description: descriptionVal

        }
        )
    }
    // const handleIDInput = (e) => {
    //     setIdVal(() => e.target.value)
    // }
    const handleIdeaInput = (e) => {
        setIdeaVal(() => e.target.value)
        setIdVal(()=> ideas.length+1);

    }
    const handleDescriptionInput = (e) => {
        setDescriptionVal(() => e.target.value)
    }
    return (
        <div>
        <form onSubmit={(e) => handleSubmit(e)}>

            <input 
            type='text'
            className='Title'
            placeholder={"default val"}
            value={titleVal}
            onChange={handleIdeaInput}
            />
            <select onChange={ handleDescriptionInput}>
                <option value='1'> option1</option>
                <option value='2'> option2</option>
                <option value='3'> option3</option>
                <option value='4'> option4</option>
            </select>
            <button type="submit">set vals</button>
        </form>
        </div>
    )

}
export default FormComponent;