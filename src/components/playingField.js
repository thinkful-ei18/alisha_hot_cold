/*********
 * form to enter guesses 
 * submit button
 * guess #
 *********/

import React from 'react';
import './game.css';


export default function PlayingField() {
  return (
    <div className="playingField">
      <form className='form'>
        <input className="guess"type="text" placeholder="enter your guess"/><br></br>
        <button className="submit"type="submit">Guess</button>
      </form>
      <p class="paragraph">Guess #0!</p>
    </div>
  )
}