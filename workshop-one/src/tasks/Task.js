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

    setButtonText(state){
        return (state ? "Mark as Incomplete" : "Mark as Complete")
    }

    render(){
        return (
        <div className={`Task__Completed__${this.state.completed}`}>
            <h2 className="Heading" >{this.props.title}</h2>
            <p className="Subheading">{this.props.description}</p>
            {this.state.completed && (
                <p className="Subheading">This has been completed</p>
            )}
            <button className={`TaskButton__Completed__${this.state.completed}`} onClick={(event) => { this.handleCompletion(); this.render();}}> 
            {this.setButtonText(this.state.completed)} </button>
        </div>
        )
    }
}

export default Task
