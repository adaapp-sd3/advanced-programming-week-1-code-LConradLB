import React, { Component } from 'react';
import logo from './logo.svg';
import Task from './tasks/Task.js';
import './App.css';

const stubTaskData = [{title: "Finish App", description: "I am a description"},
                      {title: "Make navigation", description: "Create the navigation for the app"},
                      {title: "Multiple Tasks", description: "Display multiple tasks"}]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <section className="Main">
        {stubTaskData.map((object, i) => <Task key={i} title={object.title} description={object.description} />)}
        {/* <div className="PlusButton">
          <div className="PlusLetter">+</div>
        </div> */}
        </section>
      </div>
    );
  }
}

export default App;
