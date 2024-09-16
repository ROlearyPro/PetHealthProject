import './ExternalComponent.css';

function ExternalComponent({ ideas }) {
    console.log(ideas)
    return(ideas.map((idea) => {
        idea.key=idea.id;

        return (
            <div key={idea.id}>
                <br/>
                <div>
                {idea.id}
                </div>
                <div>
                {idea.title}
                </div>
                <div>
                {idea.description}
                </div>
                <br/>
            </div>
    )}))
}

export default ExternalComponent;