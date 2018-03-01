/*********
 * form to enter guesses 
 *********/

import React from 'react';
import './game.css';

export default function PlayingField(props) {
  // props = onChange={e => props.currentGuess(e)} ... updateGuessList={props.updateGuessList}

  return (
    <div className="playingField">
      <form className='form'>
        <input className="guess" type="text" placeholder="enter your guess" onChange={(e) => props.onChange(e)} /><br></br>
        <button className="submit" type="submit" onClick={e => {
          e.preventDefault();
          props.updateGuessList()
          }}>Guess</button>
      </form>
    </div>
  )
}