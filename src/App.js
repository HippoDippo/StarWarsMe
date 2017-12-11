import React, { Component } from 'react';
import './reset.css';
import './App.css';
import Header from './components/Header';
import Survey from './components/Survey';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: ['Who are you?', 'How old are you?', 'Favorite color?'],
      answers: [],
      userInput: '',
      count: 0
    }
  
    this.handleUserInput = this.handleUserInput.bind(this)
    this.updateAnswers = this.updateAnswers.bind(this)
  }

  handleUserInput(event) {
    this.setState({
      userInput: event.target.value
    })
  }

  updateAnswers() {
    if (this.state.count+2 === this.state.questions.length) {
      // Calculate the answers and display character to user.
      let answers = this.state.answers;
      answers.push(this.state.userInput);
      this.setState({
        answers: answers,
        count: this.state.count + 1,
        userInput: ''
      })
      console.log('Last question!');
    } else {
      let answers = this.state.answers;
      answers.push(this.state.userInput);
      this.setState({
        answers: answers,
        count: this.state.count + 1,
        userInput: ''
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Survey questions={this.state.questions} count={this.state.count} userInput={this.state.userInput} handleUserInput={this.handleUserInput} updateAnswers={this.updateAnswers}/>
      </div>
    );
  }
}

export default App;





