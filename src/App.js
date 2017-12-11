import React, { Component } from 'react';
import './reset.css';
import './App.css';
import Header from './components/Header';
import Survey from './components/Survey';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      people: '',
      personInfo: '',
      questions: ['What is your weapon of choice?', 'Lightside or Darkside?', 'Hope, Empire, or Jedi?', 'Blue, Green, Purple, or Red Lightsaber?', 'R2D2 or BB8?'],
      answerChoices: ['Choices: Lightsaber RubberDucky Blaster Katana'],
      answers: [],
      userInput: '',
      count: 0, 
      total: -1,
      character: ''
    }
  
    this.handleUserInput = this.handleUserInput.bind(this)
    this.updateAnswers = this.updateAnswers.bind(this)
    this.calculateScore = this.calculateScore.bind(this)
  }

  componentDidMount() {
    let promise = axios.get('https://swapi.co/api/people')
    promise.then(res => {
      this.setState({
        people: res.data.results
      })
    })

    let otherPromise = axios.get('/api/people')
    otherPromise.then(res => {
      savedPeople: res.data.results
    })
    console.log(this.state.savedPeople);
  }

  calculateScore() {
    let total = 0;
    let answers = this.state.answers;
    let possibleAnswers = [['Lightsaber', 'RubberDucky', 'Blaster', 'Katana'], ['Lightside', 'Darkside'], ['Hope', 'Empire', 'Jedi'], ['Blue', 'Green', 'Purple', 'Red'], ['R2D2', 'BB8']];
    for (var y = 0; y < possibleAnswers.length; y++) {
      for (var z = 0; z < possibleAnswers[y].length; z++) {
        if (answers.includes(possibleAnswers[y][z])) {
          total += z;
        }
      }
    }
  // , _=>console.log(this.state.total)
  
    if (total >= 8) {
      this.setState({
        character: `You are: ${this.state.people[3].name}`,  // Replace with axios json data.
        personInfo: `Birth Year: ${this.state.people[3]['birth_year']}\nHeight: ${this.state.people[3]['height']}`,
        total: total
      })
    } else if (total >= 6) {
      this.setState({
        character: `You are: ${this.state.people[4].name}`,
        personInfo: `Birth Year: ${this.state.people[4]['birth_year']}\nHeight: ${this.state.people[4]['height']}`,
        total: total
      })
    } else if (total >= 3) {
      this.setState({
        character: `You are: ${this.state.people[9].name}`,
        personInfo: `Birth Year: ${this.state.people[9]['birth_year']}\nHeight: ${this.state.people[9]['height']}`,
        total: total
      })
    } else if (total >= 0) {
      this.setState({
        character: `You are: ${this.state.people[0].name}`,
        personInfo: `Birth Year: ${this.state.people[0]['birth_year']}\nHeight: ${this.state.people[0]['height']}`,
        total: total
      })
    } else {
      this.setState({
        total: total
      })
    }
  }

  handleUserInput(event) {
    this.setState({
      userInput: event.target.value
    })
  }

  updateAnswers() {
    if (this.state.count+1 === this.state.questions.length) {
      let answers = this.state.answers;
      answers.push(this.state.userInput);
      this.setState({
        answers: answers,
        count: this.state.count + 1,
        userInput: ''
      })
      
      // Calculate the answers and display character to user.
      
      this.calculateScore() // Gets Total and displays character.
      
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
        <Survey questions={this.state.questions} answerChoices={this.state.answerChoices} character={this.state.character} personInfo={this.state.personInfo} count={this.state.count} userInput={this.state.userInput} handleUserInput={this.handleUserInput} updateAnswers={this.updateAnswers}/>
      </div>
    );
  }
}

export default App;