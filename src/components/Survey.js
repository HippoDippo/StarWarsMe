import React, { Component } from 'react';
import Questions from './Questions';

class Survey extends Component {
  render() {
    return (
      <div>
        <Questions questions={this.props.questions} count={this.props.count}/>
        <input className="input" value={this.props.userInput} placeholder="Answer goes here" onChange={(e) => this.props.handleUserInput(e)}></input>
        <button className="button" onClick={this.props.updateAnswers}>Submit</button>
      </div>
    )
  }
}

export default Survey