/*********
 * form to enter guesses 
 * submit button
 * guess #
 *********/

import React from 'react';


export default function PlayingField() {
  return (
    <div>
      <form>
        <input type='text' placeholder='enter your guess'></input>
        <input type='submit'></input>
      </form>
      <p>Guess #0!</p>
    </div>
  )
}