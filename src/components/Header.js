import React from 'react';
import bb8 from '../img/bb8.jpg';

export default function Header(props) {
  return (
    <div>
      <header className="App-header">
        <img src={bb8} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to StarWarsMe</h1>
      </header>
      <div className="App-intro">
        <h1>Ever wonder which Star Wars character you are?</h1>
        <p>Answer the questions below and find out!</p>
      </div>
    </div>
  )
}