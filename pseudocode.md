**_Pirate Hangman-Project 1_**

1. Create an array of 6 cells.
	[0,0,0,0,0,0]
2. Map the 6 cells to 6 units in a figure(person).
3. Assign properties to each cell, in this case the letters of a pirate themed 6 letter word.
4. IF a user inputs a letter that does not match the property in the cell 
   print "wrong"
   add image to hangman figure.
5. Render the state.
6. listen(eventlistener) for user's next guess.
7. repeat step 4.
8. Update and render state.
9. continue this loop for 6 total guesses. The hangman image fills in UNTIL a correct letter is guessed. After 6 tries and the board is filled up the player loses.
10. check for winner in between guesses.
11. After the sixth incorrect guess, all of the 6 cells in the figure appear in the state.
12. Send alert message telling the user that they have lost: 
("You're pirate was hanged!")

**_Win Conditions:_**

If user inputs the correct letter into the cell, they get another try. 
If user fills up all the correct letters before 6 tries, they win.
Print Alert:
"You're pirate is saved!"

Notes: use 6 whole images, replace each when wrong answer is guessed.
images = ['head', 'body', left arm'...] 
Sprite: cell
Icebox:
start button?