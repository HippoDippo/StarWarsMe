import React from 'react';

export default function Questions(props) {
  return (
    <div>
      <h1 className="character">{props.character}</h1>
      <h2 className="personInfo">{props.personInfo}</h2>
      <h1 className="questions">{props.questions[props.count]}</h1>
      <h2 className="possibleAnswers">{props.answerChoices[props.count]}</h2>
    </div>
  )  
}