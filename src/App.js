import React from "react";
import "./App.css";
import Game from "./components/Game";
import Button from "./components/Button";
import TextField from "./components/TextField";

class App extends React.Component {
  state = {
    limit: 100,
    currentPlayer: 1,
    currentScore: 0,
    player1Score: 0,
    player2Score: 0,
    isHeld: 0,
    gameClass: "",
    winClass: ["hide", "hide", "hide"],
  };

  updatePlayer = (id) => {
    this.setState({ currentPlayer: id });
  };
  updateScore = (score) => {
    this.setState({ currentScore: score });
  };

  resetHold = () => {
    this.setState({ isHeld: 0 });
    this.winCheck();
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
    if (
      this.state.player1Score >= this.state.limit ||
      this.state.player2Score >= this.state.limit
    ) {
      this.setState({ winClass: ["show", "winner", "you-win"] });
      this.setState({ gameClass: "hide" });
    }
  };

  switchPlayer = () => {
    if (this.state.currentPlayer === 1) {
      this.setState({ currentPlayer: 2 });
    }
    if (this.state.currentPlayer === 2) {
      this.setState({ currentPlayer: 1 });
    }
  };

  newGame = () => {
    this.setState({ winClass: ["hide", "hide", "hide"] });
    this.setState({ gameClass: "" });
    this.setState({ player1Score: 0 });
    this.setState({ player2Score: 0 });
  };

  render() {
    return (
      <div className="game-container">
        <div className="game-area">
          <div className={this.state.gameClass}>
            <Game
              currentPlayer={this.updatePlayer}
              currentScore={this.updateScore}
              switchPlayer={this.switchPlayer}
              resetHold={this.resetHold}
              hold={this.state.isHeld}
            />
          </div>
          <div className={this.state.winClass[0]}>
            <div className={this.state.winClass[1]}>
              Player {this.state.currentPlayer}
            </div>
            <div className={this.state.winClass[2]}></div>
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
              <Button
                onClick={this.newGame}
                className="newgame-button"
                name="New Game"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
