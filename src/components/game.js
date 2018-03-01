/*********
 * hot and cold title
 * responses component
 * playingField component
 * priorGuesses component
 *********/

import React, {Component} from 'react';
import Responses from './responses';
import PlayingField from './playingField';
import PriorGuesses from './priorGuesses';
import './game.css';


export default class Game extends Component {
  
  constructor(props) {
    super(props);
    this.state= {
      guess: '',
      // lastGuess: '',
      allGuesses: [],
      responses: ['cold', 'warm', 'very warm', 'hot']
    }
  }

  guess(e) {
    this.setState({guess: e})
    // this.updateGuessList();
    console.log(this.state.allGuesses);
    // console.log(this.setState({allGuesses:this.state.allGuesses.concat(this.state.guess)}));
  }

  updateGuessList() {
    const lastGuess = this.state.guess;
    this.setState({allGuesses: this.state.allGuesses.concat(lastGuess)})
  }



  render() {
    return (
      <div className="game">
        <h1>HOT or COLD</h1>

        <div><Responses /></div>

        <div><PlayingField currentGuess={(e) => this.guess(e.target.value)} updateGuessList={()=> this.updateGuessList()}/></div>

        <div><PriorGuesses updateGuessList={this.state.allGuesses}/></div>
      </div>
    )
  } 
}