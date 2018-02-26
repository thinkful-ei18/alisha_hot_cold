/*********
 * nav component
 * game component
 *********/

import React from 'react';
import Nav from './nav';
import Game from './game';


export default function Board(props) {
  return (
    <div>
      <div><Nav /></div>
      <div><Game /></div>
      <p>Hello World</p>
    </div>
  )
}