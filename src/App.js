import React from "react";
import "./App.css";
import Game from "./components/Game";
import Button from "./components/Button";
import TextField from "./components/TextField";

class App extends React.Component {
  state = {
    limit: 100,
    playersNum: 0, //not if for current or future use
    currentplayerId: "",
    roundNum: 0, //future options
  };
  render() {
    return (
      <div className="game-container">
        Game-conatiner
        <div className="game-area">
          <div>
            <Game />
          </div>
          <div className="scores">
            <div className="player-score">player1</div>
            <div className="player-score">player2</div>
          </div>
        </div>
        <div className="actions">
          <div className="action-wrapper">
            <Button name="Hold" className="action" />
          </div>
          <div className="action-wrapper">
            <TextField
              name="Limit"
              className="action"
              placeholder="default is 100"
            />
          </div>
          <div className="action-wrapper">
            <Button name="New Game" className="action" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
