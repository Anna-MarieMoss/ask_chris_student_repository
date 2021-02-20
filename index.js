// HTML elements saved into variable
let questButton = document.querySelector('button');
let input = document.querySelector('.question');
let reset = document.querySelector('.reset');
let answer = document.querySelector('.answer');
let img = document.querySelector('img');

// Function to be called when the 'Click here to ask your question!' button is clicked.
function handleClick() {
  let question = prompt('Ask away! and I will tell you either yay or nay!');
  //   Displays question text on the screen
  input.innerText = question;
  //   Generates a random number between 0 - 7
  let randomNumber = Math.floor(Math.random() * 7);

  // TASK 2 - SWITCH STATEMENT //
  /* insert code here */

  // TASK 3 - IF STATEMENTS and COMPARISON OPERATORS //
  // Add a condition that is triggered if the random number is less than 3

  /* insert code here */ {
    img.src = './Chris_images/happy_chris.jpg';
  }

  // Add a condition that is triggered if random number is equal to either 3 or 6

  /* insert code here */ {
    img.src = './Chris_images/nonononono_chris.jpg';
  }

  // Add a final option that is triggered if none of the other conditions are met.

  /* insert code here */ {
    img.src = './Chris_images/areyousure_chris.jpg';
  }
}

questButton.addEventListener('click', handleClick);

function clear() {
  input.innerText = '';
  answer.innerText = '';
}

reset.addEventListener('click', clear);
