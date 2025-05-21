import { useState } from "react";

const words = ['hangman', 'javascript', 'game', 'puzzle', 'developer'];
let currentWord = words[Math.floor(Math.random() * words.length)];
let remainingGuesses = 8;
let guessedLetters = [];

function displayWord() {
  let output = '';
  for (let i = 0; i < currentWord.length; i++) {
    if (guessedLetters.includes(currentWord[i])) {
      output += currentWord[i];
    } else {
      output += '_';
    }
  }
  console.log(output);
}

function guessLetter(letter) {
  if (!guessedLetters.includes(letter) && remainingGuesses > 0) {
    guessedLetters.push(letter);
    if (!currentWord.includes(letter)) {
      remainingGuesses--;
    }
  }
}

export function startGame() {
  displayWord();
  while (remainingGuesses > 0 && !guessedLetters.includes(currentWord)) {
    const guess = prompt('Guess a letter:');
    guessLetter(guess);
    displayWord();
  }
  if (remainingGuesses === 0) {
    console.log('Game over. The word was: ' + currentWord);
  } else {
    console.log('Congratulations! You guessed the word ' + currentWord);
  }
};



export function hangman() {
  const currentWord = 'cool';
  const [guessedLetters, setGuessedLetters] = useState([]);

  const displayWord = () => {
    let display = '';
    currentWord.split('').forEach(letter => {
      if (guessedLetters.includes(letter)) {
        display += letter;
      } else {
        display += '*';
      }
    })
    return display;
  }

  const guessLetter = (event) => {
    const newGuessedLetters = [...guessedLetters, event.target.value]
    setGuessedLetters(newGuessedLetters)
  }

  return (
    <>
      {displayWord()}
      <input onChange={guessLetter} />
    </>
  )
}