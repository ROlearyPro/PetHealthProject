import './CountComponent.css';

function CountComponent({ countResponse }) {
    if(countResponse){
    // console.log(typeof(ideas))
    let countResponseKeyVal = 0;
    console.log(countResponse)

    return (countResponse.map((response) => {
        response.key = JSON.parse(JSON.stringify(countResponseKeyVal));
        countResponseKeyVal += 1;
        console.log(response)
        // console.log(response.drug[0])
        let effectsKeyVal = 0;
        return(
            <div>
                <br/>
                {response.term}
            </div>
        )
        // return (
        //     <div>
        //         <br/><br/>
        //         <div>
        //             drug name: {response.drug[0].brand_name}
        //         </div>
        //         <br/>
        //         <div>
        //             drug reactions :{response.reaction.map((effects) => {
        //                 console.log(effects)
        //                 effects.key = JSON.parse(JSON.stringify(effectsKeyVal));
        //                 effectsKeyVal += 1;
        //                 console.log(effects.veddra_term_name)
        //                 return (<div>
        //                     {effects.veddra_term_name}
        //                 </div>
        //                 )
        //             })}
        //         </div>
        //     </div>
        // )

    }))
}}

export default CountComponent;