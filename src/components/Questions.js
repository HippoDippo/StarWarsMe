import React from 'react';

export default function Questions(props) {
  return (
    <div>
      <h1 className="questions">{props.questions[props.count]}</h1>
    </div>
  )  
}