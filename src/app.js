
var gameOver;
var cardCount;

function Shuffle(max){
var num = Math.random()*max;
return Math.round(num)+1;
}

function getSuit(){
suit = Shuffle(4);
if(suit == 1) return "&Spades";
if(suit == 2) return "&Clubs";
if(suit == 3) return "&Diamonds";
else return "&Hearts";
}

function cardName(card){
if(card == 1) return "Ace";
if(card == 11) return "Jack";
if(card == 12) return "Queen";
if(card == 13) return "King";
return "" + card;
}

function cardValue(card,strWho){
if(card == 1)
{
    if(strWho =="You" && document.gameboard.you.value > 10)
{
    document.gameboard.say2.value = document.gameboard.say2.value + " Low";
    return 1;
  } else return 11;
}
 if(card > 10)
  return 10;
  return card;
}

function PickACard(strWho){
card = Shuffle(12);
suit = getSuit();

if(strWho == "You")
document.gameboard.say2.value = (cardName(card) + " of " + suit);
else
document.gameboard.say1.value = (cardName(card) + " of " + suit);
return cardValue(card,strWho);
}

function NewHand(form){
if(gameOver != 0)
{
  form.say1.value = ("Hand in Play!");
  form.say2.value = ("");
  return;
}else{

  form.dealer.value = 0;
  form.you.value = 0;
  cardCount=0;
  form.dealer.value = eval(form.dealer.value) + PickACard("Dealer");
  form.you.value = eval(form.you.value) + PickACard("You");

  gameOver = -1;
  cardCount +=1;
  }
}

function Dealer(form){
if (gameOver == 0)
{
  form.say1.value = ("Deal the Cards!");
  form.say2.value = ("");
  return;
}else

if (form.you.value < 10)
{
  form.say1.value = ("Not Below Ten!");
  form.say2.value = ("Take a Hit!");
  return;
}else

if (cardCount < 2)
{
  form.say1.value = ("Minimum 2 Cards!");
  form.say2.value = ("Hit Again!");
  return;
}else

while(form.dealer.value < 17)
{
  form.dealer.value = eval(form.dealer.value) + PickACard("Dealer");
  }
}

function User(form){
if (gameOver ==0)
{
  form.say1.value = ("Deal the Cards!");
  form.say2.value = ("");
  return;
}else{

  cardCount+=1;
  form.say1.value = ("You Get...");
  form.you.value = eval(form.you.value) + PickACard("You");
}
if(form.you.value > 21)
{
  form.say1.value = ("You Busted!");
  gameOver=0; form.numgames.value=eval(form.numgames.value)-1;
  }
}

function LookAtHands(form){
if (gameOver ==0 || form.you.value<10 || cardCount <2)
  {
    return;
} else

if(form.dealer.value > 21)
{
  form.say1.value = ("House Busts!");
  form.say2.value = ("You Win! Jackpot Winner");
  gameOver=0;
  form.numgames.value=eval(form.numgames.value)+1;

} else

if(form.you.value > form.dealer.value)
{
  form.say1.value = ("Congrats You Win!");
  form.say2.value = ("Jackpot Winner");
  gameOver = 0;
  form.numgames.value = eval(form.numgames.value) + 1;
} else

 if(form.dealer.value == form.you.value){
  form.say1.value = ("Tied UP!");
  form.say2.value = ("Try Again!");
  gameOver=0;
  form.numgames.value = eval(form.numgames.value) - 1;
}else{
  form.say1.value = ("House Wins!");
  form.say2.value = ("Better Luck Next Time!");
  gameOver = 0;
  form.numgames.value = eval(form.numgames.value) - 1;
  }
}
  function setBj(){
  gameOver = 0;
  cardCount = 0;
  document.getElementById("Dealer").onclick.form.gameboard.dealer.value="";
  document.getElementById("LookAtHands").onclick.form.gameboard.you.value="";
  document.getElementById("User").onclick.form.gameboard.numgames.value="0";
  document.getElementById("NewHand").onclick.form.gameboard.say1.value="    Hit 'Deal'";
  document.getElementById("NewHand").onclick.form.gameboard.say2.value="    To Start!";
}

