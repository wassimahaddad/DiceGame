import React from "react";
import Player from "./Player";
import Dice from "./Dice";
import Button from "./Button";

class Game extends React.Component {
  state = {
    dice1: 0,
    dice2: 0,
    currentScore: 0,
  };

  handleClick = () => {
    const [a, b] = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
    ];
    if (a + b < 12) {
      this.setState({
        dice1: a,
        dice2: b,
        currentScore: this.state.currentScore + a + b,
      });
    } else {
      this.setState({
        dice1: a,
        dice2: b,
        currentScore: 0,
      });
    }
  };

  render() {
    return (
      <div className="game">
        {" "}
        Game
        <div className="current-player">
          current player name
          <Player />
        </div>
        <div className="dice-pad">
          <div className="dice-left">
            <Dice value={this.state.dice1} />
          </div>
          <div className="dice-right">
            <Dice value={this.state.dice2} />
          </div>
        </div>
        <div className="current-score">
          <div className="roll-button">
            <Button onClick={this.handleClick} name="Roll" />
          </div>
          <div> current score: {this.state.currentScore}</div>
        </div>
      </div>
    );
  }
}

export default Game;
