import './DrugSearch.css';

function DrugSearch({ responses }) {
    if (responses.length !== 0) {
        let responsesKeyVal = 0;
        return (responses.map((response, superindex) => {
            responsesKeyVal += 1;
            let effectsKeyVal = 0;
            response.key = JSON.parse(JSON.stringify(responsesKeyVal));
            if (response.reaction !== undefined && response.animal !== undefined) {
                if (response.drug && response.animal.species) {
                    if (response.animal.breed) {
                        if (response.animal.breed.breed_component !== undefined) {
                            return (
                                <div className='container' key={superindex}>
                                    <br /><br />
                                    <br />
                                    <div className='search-return'>
                                        drug info: {response.drug.map((oneMedicine, index) => {
                                            console.log(oneMedicine);
                                            console.log(response);
                                            
                                            oneMedicine.key = JSON.parse(JSON.stringify(effectsKeyVal));
                                            effectsKeyVal += 1;
                                            return (
                                                <div key={index}> brand name:{oneMedicine.brand_name}
                                                    <br /><br /> active ingredients:{
                                                        oneMedicine.active_ingredients.map((ingredient, subindex) => {
                                                            console.log(oneMedicine.active_ingredients)
                                                            return (<div key={subindex}>{ingredient.name}</div>)
                                                        })}

                                                </div>)
                                        })}
                                        <br />
                                        Patient info:
                                        <br /> <div>
                                            Species: {response.animal.species}
                                            <br />
                                            Breed: {response.animal.breed.breed_component}
                                            <br />
                                        </div>
                                    </div>
                                    <br />
                                    <div className='search-return'>
                                        drug reactions :{
                                            response.reaction.map((effects, finalIndex) => {
                                                // console.log(effects)
                                                // console.log(effects.veddra_term_name)
                                                return (<div key={finalIndex}>
                                                    {effects.veddra_term_name}
                                                </div>
                                                )
                                            })}
                                    </div>
                                </div>
                            )
                        } else { return '' }
                    } else { return '' }
                } else { return '' }
            } else { return '' }
        }))
    }
    else {
        return ''
    }
}
export default DrugSearch;