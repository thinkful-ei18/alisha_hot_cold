/*********
 * form to enter guesses 
 * submit button
 * guess #
 *********/

import React from 'react';
import Guess from './Guess';
import './game.css';


export default function PlayingField(props) {
  // props = currentGuess={(e) => this.guess(e.target.value)}

  return (
    <div className="playingField">
      <Guess onChange={e => props.currentGuess(e)} />
      <p className="paragraph">Guess #0!</p>
    </div>
  )
}

