import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState();
  const [gameWon, setGameWon] = useState(false);
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * (100 - 1) + 1)
  );
  const [output, setOutput] = useState("");
  const [scoreCounter, setScoreCounter] = useState(0);
  const [guesses, setGuesses] = useState([]);

  const buttonSubmit = (e) => {
    e.preventDefault();

    setGuesses([...guesses, input]);

    if (input > randomNumber) {
      setOutput("too big");
      setInput(0);
    }

    if (input < randomNumber) {
      setOutput("too small");
      setInput(0);
    }

    if (Number(input) === randomNumber) {
      setOutput("BOOM we got it");
      setGameWon(true);
      setScoreCounter(scoreCounter + 1);
    }
  };

  const resetGame = (e) => {
    e.preventDefault();

    setRandomNumber(Math.floor(Math.random() * (100 - 1) + 1));
    setInput(0);
    setOutput("New Game started");
    setGameWon(false);
    setGuesses([]);
  };

  /**
   *
   * HOW do we add guess history to the game
   * Make state for the users input
   * Use e.target.value
   * Output it
   *
   * guesses [] in state
   * buttonSubmit function needs to push into the guesses array
   * map guesses array and return it
   */

  return (
    <div className="app">
      <h1 className="app__title">Guess the number game</h1>
      <h2 className="app_score">Score: {scoreCounter}</h2>
      <form className="app__input">
        <p className="app__inputInstruction">Enter Number here 🡆 </p>
        <input
          min="0"
          max="100"
          value={input}
          type="number"
          onChange={(e) => setInput(e.target.value)}
          placeholder="0"
          className="app__inputNumber"
        />
        <button
          className="app__inputSubmit"
          type="submit"
          disabled={!input}
          onClick={buttonSubmit}
        >
          Click me
        </button>
      </form>

      <h2 className="app__numberStatus">{output}</h2>

      <div className="app__history">
        <p>Guess History ({guesses.length})</p>
        {guesses.map((guess) => (
          <p>You Guessed: {guess}</p>
        ))}
      </div>
      <div className="app__restartButtonContainer">
        {gameWon && (
          <button className="app__restartButton" onClick={resetGame}>
            RESET GAME
          </button>
        )}
      </div>

      <div className="app__footer">
        <p>Made by Abdul © 2020</p>
      </div>
    </div>
  );
}

export default App;
