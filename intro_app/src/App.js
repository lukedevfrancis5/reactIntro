import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';


function createAlert() {
  alert('You clicked me');
}

function App() {
  return (
    <div className="App">
      <Header info='This is MY message'/>
      <p>Main Content</p>
      <Footer trademark='page by Luke Francis'
        myalert={createAlert}/>
    </div>
  );
}

export default App;
