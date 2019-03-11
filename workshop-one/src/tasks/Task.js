import React, { Component } from 'react'

class Task extends Component {

    constructor(props){
        super(props)
        this.state = {
            completed: false
        }
    } 

    handleCompletion(){
        this.setState({
            completed: !this.state.completed
        })
    }

    setBackground(){
    }

    render(){
        this.setBackground()
        return (
        <div className="Task">
            <h2 className="Heading" >{this.props.title}</h2>
            <p className="Subheading">{this.props.description}</p>
            {this.state.completed && (
                <p className="Subheading">This has been completed</p>
            )}
            <button className="TaskButton" onClick={(event) => { this.handleCompletion(); this.setBackground(); this.render();}}> Complete </button>
        </div>
        )
    }
}

export default Task
