import './DrugSearch.css';

function DrugSearch({ responses }) {

    if (responses.length!=0) {
        let responsesKeyVal = 0;
        let keyProp = 0;

        return (responses.map((response,superindex) => {
            responsesKeyVal += 1;
            let effectsKeyVal = 0;
            if (response.reaction != undefined && response.animal != undefined) {
                return (
                    <div key={superindex}>
                        <br /><br />
                        <br />
                        <div>
                            drug info: {response.drug.map((oneMedicine, index) => {
                                console.log(oneMedicine);
                                oneMedicine.key = JSON.parse(JSON.stringify(effectsKeyVal));
                                effectsKeyVal += 1;

                                return (<div key={index}> brand name:{oneMedicine.brand_name}
                                    <br /><br />

                                    active ingredients:{
                                        oneMedicine.active_ingredients.map((ingredient, subindex) => {
                                            return (<div key={subindex}>{ingredient.name}</div>)
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
                                response.reaction.map((effects, finalIndex) => {
                                    // console.log(effects)
                                    // console.log(effects.veddra_term_name)
                                    return (<div key ={finalIndex}>
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