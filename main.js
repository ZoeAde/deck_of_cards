var showCards = document.getElementById("cards");

showCards.onclick = function(){
  cards.innerHTML = "Redeal";
  var cardContainer = document.getElementById('container');
  cardContainer.innerHTML = "";
  displayCards();
  if (document.getElementById("clearCards") === null) {
    createReset();
  }
};

function createReset() {
  var btnReset = document.createElement("BUTTON");
  btnReset.innerHTML = "Reset";

  btnReset.setAttribute("id", "clearCards");
  document.body.insertBefore(btnReset, document.body.children[1]);
    btnReset.onclick = function() {
      document.getElementById('container').innerHTML = "";
      document.body.removeChild(btnReset);
      cards.innerHTML = "Deal";
    };

  }

function displayCards(){
  var deck = newDeck();
  var shuffledCards = shuffleCards(deck);

  for(var i=0; i < deck.length; i++){
    var card = document.createElement('div');
    card.className = "card";
    var cardContainer = document.getElementById('container');
    cardContainer.appendChild(card);
    card.style.backgroundImage = "url(images/" + shuffledCards[i].suit + "-" + shuffledCards[i].card + ".png" + ")";

  }
}

// Creates a deck of 52 cards
function newDeck(){

  var ranks = [
    {card:"a"},
    {card:"2"},
    {card:"3"},
    {card:"4"},
    {card:"5"},
    {card:"6"},
    {card:"7"},
    {card:"8"},
    {card:"9"},
    {card:"10"},
    {card:"j"},
    {card:"q"},
    {card:"k"}
  ];

  var suits = [ "d", "c", "s", "h"];
  var deck = [];

for(i = 0; i <= (ranks.length - 1); i++){
     for(j = 0; j <= suits.length - 1; j++){
      ranks[i].suit = suits[j];
      deck.push({card: ranks[i].card, suit: ranks[i].suit});
 }
 }
  return deck;
 };
newDeck();


// Shuffles the Deck
function shuffleCards(newDeck){
    var m = newDeck.length;
    while (m) {
      var i = Math.floor(Math.random() * m--);
      var t = newDeck[m];
      newDeck[m] = newDeck[i];
      newDeck[i] = t;
    }
    return newDeck;
};










