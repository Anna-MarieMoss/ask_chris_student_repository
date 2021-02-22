// HTML elements saved into variable
let questButton = document.querySelector('button');
let input = document.querySelector('.question');
let reset = document.querySelector('.reset');
let answer = document.querySelector('.answer');
let img = document.querySelector('img');

// Function to be called when the 'Click here to ask your question!' button is clicked.
function handleClick() {
  let question = prompt('Ask away! and I will tell you either yay or nay!');
  input.innerText = question; //   Displays question text on the screen
  let randomNumber = Math.floor(Math.random() * 7); //   Generates a random number between 0 - 7

  // TASK 2 - SWITCH STATEMENT (See Readme file for instructions)
  // Nb - Instead of using console.log, each statement should be displayed on the app by reassigning the 'answer.innerText' (see how below).

  // e.g.
  // switch(randomNumber){
  //   case 'blahblah':
  //    answer.innerText = 'This string will appear on the website'
  //     break;
  //   ....
  // }

  /* insert code here */
  // .
  // .
  // .
  // .
  // .

  // TASK 3 - IF STATEMENTS and COMPARISON OPERATORS (See Readme file for instructions) //
  // Add a condition that is triggered if the random number is less than 3

  /* insert code here */ {
    img.src = '../Chris_images/happy_chris.jpg';
  }

  // Add a condition that is triggered if random number is equal to either 3 or 6

  /* insert code here */ {
    img.src = '../Chris_images/nonononono_chris.jpg';
  }

  // Add a final option that is triggered if none of the other conditions are met.

  /* insert code here */ {
    img.src = '../Chris_images/areyousure_chris.jpg';
  }
}

questButton.addEventListener('click', handleClick);

function clear() {
  input.innerText = '';
  answer.innerText = '';
}

reset.addEventListener('click', clear);
