import React, { Component } from 'react';
import Questions from './Questions';
import axios from 'axios';

class Survey extends Component {
  constructor() {
    super()

    this.state = {
      savedPeople: []
    }
  }


  savePeople() {
    console.log(this.props.character)
    let promise = axios.post('/api/people', {name: this.props.character})
    promise.then((res) => {
      this.setState({
        savedPeople: [...res.data]
      })
    })
  }
  
  render() {
    console.log(this.state.savedPeople);
    
    const mapPeople = this.state.savedPeople.map((e, i) => {
      return <div className="savedPeople" key={i}>{e}</div>
    })

    return (
      <div>
        <Questions 
        questions={this.props.questions} 
        answerChoices={this.props.answerChoices} 
        character={this.props.character} 
        personInfo={this.props.personInfo} count={this.props.count}/>
        <button className="saveCharacter" onClick={()=> this.savePeople()}>Save Character</button>
        <input 
        className="input" 
        value={this.props.userInput} 
        placeholder="Answer goes here" 
        onChange={(e) => this.props.handleUserInput(e)}>
        </input>
        <button className="button" onClick={this.props.updateAnswers}>Submit</button>
        {mapPeople}
      </div>
    )
  }
}

export default Survey