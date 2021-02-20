# ask_chris_student_repository

Github files for my soc training session

# Task 1

Review the code on the index.html and index.js to familiarise yourself with what is there. At present the code is set up to allow the user to input a question via a prompt window. Once they have submitted a question, a random number is generated.

Nb. It will be this random number that we will be passing into our conditional statements.

# Task 2

Now is the time to practice your conditional statements! Chris is very wise. But even wiser when we put the words in his mouth for him :)

Using a switch statement, set up the 8 answers that Chris will respond with. For example, if the random number is 0, reassign the 'answer.innerText' to "Yes! Go for it" etc, until you have all 8 responses.

0 = 'Yes! Go for it'
1 = 'It is certain';
2 = 'Hell yer!';
3 = 'Cannot predict now';
4 = 'Not sure, I need to think about this some more';
5 = 'No way, hosea!';
6 = 'Do not count on it';
7 = 'Not a good idea mate!';
default = 'something went wrong';

# Task 3

Now let's have a bit of fun!

Every time Chris gives his answer, let's change his picture to something which reflects how he feels about it - happy, not so sure or nooooooooooooooo!

Using an if/else statement and what you've learnt today about 'comparison operators' (<, >, <=, >=, ===, !==), complete the code blocks to reassign the img.src as shown below.

Yes responses (numbers 0, 1 & 2 )
img.src = './Chris_images/happy_chris.jpg

Unsure (number 3 & 4)
img.src = './Chris_images/nonononono_chris.jpg

No respones (numbers 5, 6, & 7)
img.src = './Chris_images/areyousure_chris.jpg
