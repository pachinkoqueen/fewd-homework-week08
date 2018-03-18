console.log("JS file is connected to HTML! Woo!")

// all the cards you have on the screen
document.addEventListener('DOMContentLoaded', function() {

var cards = ['king', 'king', 'queen', 'queen'];

// shuffle function
// This is the "fisher-yates shuffle". 
// You can read more about it here: https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
  var currentIndex = array.length;
  // we don't want to assign these yet; we will later on these yet
  var temporaryValue = null;
  var randomIndex = null;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


//not sure what i am doing here
$(function() {
  //something here
  event.preventDefault();

  var firstCard = event.target.
})




//function for drawing cards

function drawCards() {
  console.log('Create cards')

// create new div with class card
//give it the innerText of the card
  var $cardContainer = $('<div>');
  .addClass('card').text(DUNNO)

//append it to the div of class board
  $cardContainer.appendTo(".board")

}

//event listener when user clicks then see if cards match

$(DUNNO).click(drawCard)


// if cards match then display alert or else draw again

function cardMatch() {
  $(DUNNO).click(function() {
  if ((DUNNO).is(SOMEMATCH))
    alert("You are a winner!");
  else
});
}



/*

For each card in the shuffled array,
- create a new div with class card,
- give it the innerText of the card
- and append it to the div of class board.
When two cards are clicked on,
- compare the innerText of the cards
- and alert "You are a winner!" if they match.


You'll need to keep track of the card that has been clicked on, and
whether or not it's the first or second card. What you might do is
create two variables, firstCard and secondCard, and at first assign them
to `null`. Then, when the card is clicked, if there's nothing stored in
firstCard, that one gets the value of the card that has been clicked.
Otherwise, secondCard gets the value of the card that has been clicked.
If both firstCard and secondCard have values -- that is, if two cards have
been clicked, we will need to compare them, and cause the alert.


**BONUS**: Keep track of what the card is _without_ using `innerHTML`.
Maybe you can use a class, or something. This way, you can make the player
match them without seeing the text.
*/

var shuffledCards = shuffle(cards);

var firstCard = null;
var secondCard = null;





// put everything before this
})
