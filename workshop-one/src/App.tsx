import React, { Component } from 'react';
import logo from './logo.svg';
import Task from './tasks/Task.js';
import Modal from './tasks/addTaskModal.js';
import './App.css';

var stubTaskData = [{title: "Finish App", description: "I am a description"},
                      {title: "Make navigation", description: "Create the navigation for the app"},
                      {title: "Multiple Tasks", description: "Display multiple tasks"}]

class App extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    // this.addStubData()
    this.setState({ show: false });
  };

  addStubData(obj: any) {
    stubTaskData.push(obj)
  }

  handleAddTask(event: any) {
    const formData: FormData = new FormData(event.target)
    const newTaskObject: TaskData = {title: "", description: ""}
 
    event.preventDefault()
 
    for (let entry of formData.entries()) {
      newTaskObject[entry[0]] = (entry[1] as string)
    }
    console.log(newTaskObject)
    stubTaskData.push(newTaskObject)
    this.hideModal()

 }

  removeElementWithKey(key: number){
    console.log("key", key)
    console.log("taskData", stubTaskData)
    console.log("newTask", stubTaskData.filter(function(ele, index){
      return index != key;
    }))
    stubTaskData = stubTaskData.filter(function(ele, index){
      return index != key;
    });
    console.log(stubTaskData)
    this.forceUpdate()
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <section className="Main">
        {stubTaskData.map((object, i) => <Task key={i} title={object.title} description={object.description} handleDeleteCallback={() => {this.removeElementWithKey(i)}}/>)}
        <Modal show={this.state.show} handleClose={this.hideModal}>
        <h1 className="ModalSubheading">New Task</h1>
          <form onSubmit={this.handleAddTask.bind(this)}>
            <p className="ModalSubheading">Add title</p>
            <input type="text" name="title"></input>
            <p className="ModalSubheading">description</p>
            <input type="text" name="description"></input><br></br>
          <button type="submit" className="addTaskButton">Add Task</button>
          </form>
        </Modal>
        <button className="PlusButton" onClick = {this.showModal}>+</button>
        </section>
      </div>
    );
  }
}

interface TaskData {
  [key:string]: string
  title: string;
  description: string;
}
// type TaskDataNew= { title: string, description:string };
// type Dict = { [key: string]: string };


export default App;
