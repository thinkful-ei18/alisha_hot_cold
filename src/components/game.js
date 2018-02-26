/*********
 * hot and cold title
 * responses component
 * playingField component
 * priorGuesses component
 *********/

import React from 'react';
import Responses from './responses';
import PlayingField from './playingField';
import PriorGuesses from './priorGuesses';
import './game.css';


export default function Game() {
  return (
    <div>
      <h1>HOT or COLD</h1>
      <div><Responses /></div>
      <div><PlayingField /></div>
      <div><PriorGuesses /></div>
    </div>
  )
}