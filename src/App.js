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
    playersNum: 0, //not if for current or future use
    roundNum: 0, //future options
  };

  handleClick = () => {
    //(1)read curentPlayer from Game
    //(2)read currentScore from Game
    //(3)Update Player score
    let s = this.state.currentScore;
    if (this.state.currentPlayer === 1) {
      this.setState({ player1Score: this.state.player1Score + s });
    } else if (this.state.currentPlayer === 2) {
      this.setState({ player2Score: this.state.player2Score + s });
    }
    //(4)switch Player
    this.switchPplayer();
  };

  updatePlayer = (id) => {
    this.setState({ currentPlayer: id });
  };
  updateScore = (score) => {
    this.setState({ currentScore: score });
  };

  switchPplayer() {}
  render() {
    return (
      <div className="game-container">
        player:{this.state.currentPlayer} score: {this.state.currentScore}
        <div className="game-area">
          <div>
            <Game
              currentPlayer={this.updatePlayer}
              currentScore={this.updateScore}
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
