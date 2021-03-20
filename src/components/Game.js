import React from "react";
import Dice from "./Dice";
import Button from "./Button";

class Game extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    dice1: 0,
    dice2: 0,
    currentScore: 0,
    currentPlayer: Math.floor(Math.random() * 2) + 1,
  };

  handleClick = () => {
    this.props.currentPlayer(this.state.currentPlayer);
    const [a, b] = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
    ];
    this.setState({ dice1: a, dice2: b });
    if (a + b < 12) {
      this.setState({
        currentScore: this.state.currentScore + a + b,
      });

      this.props.currentScore(this.state.currentScore + a + b);
    } else {
      this.switchPlayer();
    }
    this.props.resetHold();
  };

  switchPlayer = () => {
    this.setState({ dice1: 0, dice2: 0 });
    if (this.state.currentPlayer === 1) {
      this.setState({ currentPlayer: 2 });
    }
    if (this.state.currentPlayer === 2) {
      this.setState({ currentPlayer: 1 });
    }
    this.props.currentScore(0);
    this.setState({
      currentScore: 0,
    });
    this.props.currentPlayer(this.state.currentPlayer);
  };

  Player = () => {
    if (this.props.hold === 1) {
      this.switchPlayer();
      this.props.resetHold();
    }
    return this.state.currentPlayer;
  };

  render() {
    return (
      <div className="game">
        <div className="currently-playing">Currently playing:</div>
        <div className="current-player">{`Player ${this.Player()}`}</div>
        <div className="dice-pad">
          <div className="dice-left">
            <Dice value={this.state.dice1} />
          </div>
          <div className="dice-right">
            <Dice value={this.state.dice2} />
          </div>
        </div>
        <div className="current-score">
          <div>
            <Button
              onClick={this.handleClick}
              name="Roll Dice"
              className="roll-button"
            />
          </div>
          <div>Current score: {this.state.currentScore}</div>
        </div>
      </div>
    );
  }
}

export default Game;
