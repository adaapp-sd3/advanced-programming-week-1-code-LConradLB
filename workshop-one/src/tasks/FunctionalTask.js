import React, { useState } from 'react';

function Task(props) {
    let [accepted, setAccepted] = useState(false)
    return(
        <div className="Task">
            <h2 className="Heading">{props.title}</h2>
            <p className="Subheading">{props.description}</p>
            {accepted && <p className="Subheading">task has been accepted</p>}
            <button onClick={(event) => {setAccepted(!accepted); console.log(accepted)}}>Button</button>
        </div>
    )
}

export default Task
