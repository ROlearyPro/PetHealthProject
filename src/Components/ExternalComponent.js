import './ExternalComponent.css';

function ExternalComponent({ responses }) {
    // console.log(typeof(ideas))
    let responsesKeyVal = 0;
    console.log(responses)
    return (responses.map((response) => {
        response.key = JSON.parse(JSON.stringify(responsesKeyVal));
        responsesKeyVal += 1;
        console.log(response)
        console.log(response.drug[0])
        let effectsKeyVal = 0;

        return (
            <div>
                <br/><br/>
                <div>
                    drug name: {response.drug[0].brand_name}
                </div>
                <br/>
                <div>
                    drug reactions :{response.reaction.map((effects) => {
                        console.log(effects)
                        effects.key = JSON.parse(JSON.stringify(effectsKeyVal));
                        effectsKeyVal += 1;
                        console.log(effects.veddra_term_name)
                        return (<div>
                            {effects.veddra_term_name}
                        </div>
                        )
                    })}
                </div>
            </div>
        )

    }))
}

export default ExternalComponent;