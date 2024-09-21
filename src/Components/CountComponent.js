import './CountComponent.css';

function CountComponent({ countResponse, input, limit }) {
    if (countResponse) {
        // console.log(typeof(ideas))
                //placeholder: make a button that links back to home page

        let countResponseKeyVal = 0;
        countResponse.key = countResponseKeyVal;
        console.log(countResponse)
        if (countResponse.length != 0) {
            return (<div key={countResponseKeyVal} className='side-effects-description'>
                The {limit} most common side effects for {input}:
                {countResponse.map((response, index) => {
                    response.key = JSON.parse(JSON.stringify(countResponseKeyVal));
                    countResponseKeyVal += 1;
                    // console.log(response)
                    // console.log(response.drug[0])
                    // let effectsKeyVal = 0;
                    return (
                        <div className='container' key={index}>
                            <br />
                            <br />
                            <div className='side-effect-area'>
                                Side effect: {response.term}
                            </div>
                            <div className='side-effect-count-area'>
                                {response.count} cases reported for patients taking this drug.
                            </div>
                            <br />
                        </div>
                    )
                })}
            </div>
            )
        }else{return ''}
    }
}


export default CountComponent;