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

/*
onSubmit -
  form: target shows as null in the console
  input: refreshes the page with no console log
  button: refreshes the page with no console log

onClick - 
  form: target shows as null on the click and the submit
  input: console logs when I click in the text box, but refreshes upon submit
  button: target shows as null in the console

onChange -
input: target is null


      <form className='form'>
        <input className="guess" type="text" placeholder="enter your guess" onChange={(e) => props.currentGuess(e)}/><br></br>
        <button className="submit" type="submit" onClick={e => e.preventDefault()}>Guess</button>
      </form>
*/
