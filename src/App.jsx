import React, { Component } from 'react';
import AppNavbar from './components/appNavbar/appNavbar';
import AppAside from './components/appAside/appAside';
import AppAddNote from './components/appAddNote/appAddNote';
import AppNoteList from './components/appNoteList/appNoteList';
import './App.css';
class App extends Component {
  state = {
    notes: [],
  };

  handleNewNote = (newNote) => {
    console.log('adding new note');
    console.log(newNote);
  };

  render() {
    return (
      <div className="App">
        <AppNavbar />
        <AppAside />
        <AppAddNote onNewNote={this.handleNewNote} />
        <AppNoteList />
      </div>
    );
  }
}

export default App;
