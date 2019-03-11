import React, { Component } from 'react';
import logo from './logo.svg';
import Task from './tasks/Task.js';
import './App.css';

const stubTaskData = [{title: "Finish App", description: "I am a description"},
                      {title: "Make navigation", description: "Create the navigation for the app"},
                      {title: "Multiple Tasks", description: "Display multiple tasks"}]

class App extends Component {
  createTasks(r){
    for (let task in r) {
      return (<Task title={r.title} />)
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <section className="grid">
        {this.createTasks(stubTaskData)}
          <Task title="Task One"/>
          <Task title="Task Two"/>
          <Task title="Task Three"/>
        </section>
      </div>
    );
  }
}

export default App;
