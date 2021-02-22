// HTML elements saved into variable
let question = document.querySelector('.question');
let input = document.querySelector('.input');
let reset = document.querySelector('.reset');
let answer = document.querySelector('.answer');

function handleClick() {
  let country = prompt('Are you from the UK or USA?');
  let age = prompt('How old are you?');

  input.innerText = `Country - ${country}, Age - ${age}`;

  // TASK - create an if statement that will control access to the Deadpool 3 Virtual Premier.  Your if statement will be provided their 'country' and 'age' details via the 'prompts' above (lines 8 & 9), therefore you do not need to hard code this information as we did before.

  // Remember entrants need to be either from the UK and aged 15+ or USA and 18+.  All other age groups or countrys should be refused entry.

  // Instead of using console.log, each statement should be displayed on the app by reassigning the 'answer.innerText' (see how below).

  // e.g.
  // if(blah === true){
  // answer.innerText = 'This string will appear on the website'
  // }

  /* insert code here */
  // .
  // .
  // .
  // .
  // .
}

question.addEventListener('click', handleClick);

function clear() {
  input.innerText = '';
  answer.innerText = '';
}

reset.addEventListener('click', clear);
