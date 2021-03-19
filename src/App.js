import React from "react";
import "./App.css";
import Game from "./components/Game";
import Button from "./components/Button";
import TextField from "./components/TextField";

class App extends React.Component {
  state = {
    limit: 100,
    currentPlayer: "",
    currentScore: 0,
    player1Score: 0,
    player2Score: 0,
    isHeld: 0,
    winner: "",
    playersNum: 0, //not if for current or future use
    roundNum: 0, //future options
  };
  updatePlayer = (id) => {
    this.setState({ currentPlayer: id });
  };
  updateScore = (score) => {
    this.setState({ currentScore: score });
  };

  resetHold = () => {
    this.setState({ isHeld: 0 });
  };
  handleClick = () => {
    let s = this.state.currentScore;
    if (this.state.currentPlayer === 1) {
      this.setState({ player1Score: this.state.player1Score + s });
    } else if (this.state.currentPlayer === 2) {
      this.setState({ player2Score: this.state.player2Score + s });
    }
    this.winCheck();
    this.setState({ isHeld: 1 });
    this.switchPlayer();
  };

  winCheck = () => {
    if (this.state.player1Score > 100 || this.state.player2Score > 100) {
      this.setState({ winner: "YOU WON!" });
    }
    console.log(this.state.player1Score);
    console.log(this.state.player2Score);
    console.log(this.state.winner);
  };
  switchPlayer = () => {
    if (this.state.currentPlayer === 1) {
      this.setState({ currentPlayer: 2 });
    }
    if (this.state.currentPlayer === 2) {
      this.setState({ currentPlayer: 1 });
    }
  };
  render() {
    return (
      <div className="game-container">
        {this.state.currentPlayer} {this.state.winner}
        <div className="game-area">
          <div>
            <Game
              currentPlayer={this.updatePlayer}
              currentScore={this.updateScore}
              switchPlayer={this.switchPlayer}
              resetHold={this.resetHold}
              hold={this.state.isHeld}
            />
          </div>
          <div className="scores">
            <div id="player1-score" className="player-score">
              <div>Player 1</div>
              <div>{this.state.player1Score}</div>
            </div>
            <div id="player2-score" className="player-score">
              <div>Player 2</div>
              <div>{this.state.player2Score}</div>
            </div>
          </div>
        </div>
        <div className="actions">
          <div className="action-wrapper">
            <div className="action">
              <Button
                className="hold-button"
                name="Hold"
                onClick={this.handleClick}
              />
            </div>
          </div>
          <div className="action-wrapper">
            <div className="action">
              <TextField
                className="limit-button"
                name="Limit"
                placeholder="default is 100"
              />
            </div>
          </div>
          <div className="action-wrapper">
            <div className="action">
              <Button className="newgame-button" name="New Game" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
