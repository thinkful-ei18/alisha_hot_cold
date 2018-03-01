/*********
 // reflect list of all guesses
 *********/

import React from 'react';
import './game.css';

export default function PriorGuesses(props) {
  // props = updateGuessList={this.state.allGuesses}

  return (
    <div className='priorGuesses'>
      <p className="pgParagraph">{props.updateGuessList}</p>
    </div>
  )
}