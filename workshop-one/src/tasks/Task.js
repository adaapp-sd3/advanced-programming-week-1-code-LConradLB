import React, { Component } from 'react'



class Task extends Component {

    render(){
        return (
        <div className="Task">
            <h2 className="Heading" >{this.props.title}</h2>
            <p className="Subheading">{this.props.description}</p>
        </div>
        )
    }
}

export default Task
