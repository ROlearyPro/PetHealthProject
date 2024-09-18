import './ExternalComponent.css';

function ExternalComponent({ responses }) {
    // console.log(typeof(ideas))
    let responsesKeyVal = 0;

    return (responses.map((response) => {
        response.key = JSON.parse(JSON.stringify(responsesKeyVal));
        responsesKeyVal+=1;
        console.log(response.reaction)
        console.log(response.drug[0])
        let effectsKeyVal = 0;
        return (
            <div>
                <div>
                    {response.reaction.map((effects) => {
                        console.log(effects)
                        effects.key = JSON.parse(JSON.stringify(effectsKeyVal));
                        effectsKeyVal+=1; 
                        return (
                            effects.veddrea_term_name
                        )
                    })}
                </div>

                <div>
                    {response.drug[0].brand_name}
                </div>
            </div>
        )

    }))
}

export default ExternalComponent;