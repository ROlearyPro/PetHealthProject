import './DrugSearch.css';

function DrugSearch({ responses }) {
    // console.log(typeof(ideas))

    if (responses.length!=0) {
        let responsesKeyVal = 0;

        return (responses.map((response) => {
            response.key = JSON.parse(JSON.stringify(responsesKeyVal));
            responsesKeyVal += 1;
            // console.log(response.drug[0])
            let effectsKeyVal = 0;
            if (response.reaction != undefined && response.animal != undefined) {
                return (
                    <div>
                        <br /><br />
                        <br /><br />
                        <div>
                            {/* drug name: {response.drug[0].brand_name} */}
                            drug info: {response.drug.map((oneMedicine) => {
                                console.log(oneMedicine);
                                oneMedicine.key = JSON.parse(JSON.stringify(effectsKeyVal));
                                effectsKeyVal += 1;

                                return (<div>
                                    brand name:{oneMedicine.brand_name}
                                    <br /><br />

                                    active ingredients:{
                                        oneMedicine.active_ingredients.map((ingredient) => {
                                            return (<div>{ingredient.name}</div>)
                                        })
                                    }
                                </div>)
                            })
                            }
                            patient info:
                            <br /> <div>
                                {JSON.stringify(response.animal)}
                                {/* age:{response.animal.age.min}
                                <br />
                                breed:{response.animal.breed.breed_component}
                                <br />
                                gender:{response.animal.gender} */}
                                <br />
                            </div>
                        </div>
                        <br />
                        <div>
                            drug reactions :{
                                response.reaction.map((effects) => {
                                    // console.log(effects)
                                    effects.key = JSON.parse(JSON.stringify(effectsKeyVal));
                                    effectsKeyVal += 1;
                                    // console.log(effects.veddra_term_name)
                                    return (<div>
                                        {effects.veddra_term_name}
                                    </div>
                                    )
                                })}

                        </div>
                    </div>
                )

            }
        }))
    }
    else
    {
        // console.log('line 73')
        // return (<div>Hmm, seems like that didn't work.</div>)
    }
}
export default DrugSearch;