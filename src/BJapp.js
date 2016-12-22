function getTheSuit()
{
  suit = Math.floor(Math.random() * 4) + 1
  if(suit == 1)
{
  return "Hearts";
}
if(suit == 2)
{
  return "Diamonds";
}
if(suit == 3)
{
  return "Spades";
}
if(suit == 4)
{
  return "Clubs";
  }
}
function getACard(turn)
{
  card = Math.floor(Math.random() * 13) + 1
  suit = getTheSuit();
  if(card == 1)
{
  return 11;
}
if(card > 10)
{
  return 10;
}

return card;
}

var counter = 0;

function GenerateNewCard()
{
  counter +=1;
  var d = document.getElementById("HUM").innerHTML = "";
  var e = document.getElementById("COMP").innerHTML = "";
  var f = document.getElementById("COUNT").innerHTML = counter;
  var a = parseInt(document.getElementById("dealer").value = 0);
  var res = document.getElementById("dealer");
  var aa = parseInt(document.getElementById("you").value = 0);
  var resa = document.getElementById("You");
  resa.value = a + getACard("You");
  res.value = aa + getACard("Dealer");
}

function COMPUTER()
{
  var a = parseInt(document.getElementById("dealer").value);
  var res = document.getElementById("dealer");
  while(res.value < 17)
  {
  var b = parseInt(document.getElementById("dealer").value);
  res.value = b + getACard("Dealer");
  }
}
function HUMAN()
{
  var a = parseInt(document.getElementById("you").value);
  var res = document.getElementById("you");
  res.value = a + getACard("You");
  if(res.value > 21)
  {
    whoWonC += 1;
    document.getElementById("COMPW").innerHTML = whoWonC;
    var a = document.getElementById("COMP").innerHTML = "I WIN";
  }
}
var whoWonH = 0;
var whoWonC = 0;

function determineWinner()
{
    var a = parseInt(document.getElementById("you").value);
    var b = parseInt(document.getElementById("dealer").value);
    if(b > 21)
{
    whoWonH += 1;
    document.getElementById("HUMW").innerHTML = whoWonH;
    var winner = document.getElementById("HUM").innerHTML = "I WIN";
    return;
}
  if(a==b)
  {
    var a = document.getElementById("HUM").innerHTML = "TIE";
    var b = document.getElementById("COMP").innerHTML = "TIE";
  }
  if(a>b)
  {
    whoWonH += 1;
    document.getElementById("HUMW").innerHTML = whoWonH;
    var a = document.getElementById("HUMW").innerHTML = "I WIN";
  }
  if(b>a)
  {
    whoWonC += 1;
    document.getElementById("COMPW").innerHTML = whoWonC;
    var g = document.getElementById("COMP").innerHTML = "I WIN!";
  }
}



