var pRed = 12;
var pBlack = 12;
var cRed = 12;
var cBlack = 12;
var roll = 0;
var message = "";
var log = "";
var cRoll = 0;

function endGame(){
  pRed>cRed ? message = "The Player Wins!" : message = "The Computer Wins!";
  
  if(pRed==cRed){
    message = "tie";
  }
  display();
}

function display(){
    messageOutput.innerHTML = message;
    messageOutput2.innerHTML= log;
}

function initialize(){
  	messageOutput = document.getElementById("output");
    messageOutput2 = document.getElementById("log");
		message = "Player Red:" + pRed + " Player Black:" + pBlack + " Computer Red:" + cRed + " Computer Black:" + cBlack + " Dice Value:" + roll;
  log = "";
			display();
 
}

function updateValues(){
  	message = "Player Red:" + pRed + " Player Black:" + pBlack + " Computer Red:" + cRed + " Computer Black:" + cBlack + " Dice Value:" + roll;
  display();
}

function reset(){
  var pRed = 12;
  var pBlack = 12;
  var cRed = 12;
  var cBlack = 12;
  var roll = 0;
  var message = "";
  var log = "";
  var cRoll = 0;
}

function playerAddRedRemoveBlack(){
  if(cBlack - roll<1){
    pRed = pRed + roll;
    cBlack = cBlack - roll; 
    updateValues();
    endGame();
    
  }
  else{
    pRed = pRed + roll;
    cBlack = cBlack - roll; 
    log += "<p>" + "Player's Turn" + "</p>";
    log += "<br>";
    log += roll + " Reds added player ";
    log += "<br>";
    log += "<p>" + roll + " Blacks removed computer " + "</p>";
    computerTurn();
    updateValues();
    
  }
}

function playerAddBlackRemoveRed(){
  if(cRed -roll>-1){
   pBlack = pBlack + roll;
   cRed = cRed - roll; 
    log += "<p>" + "player turn" + "</p>" ;
    log += roll + " black added player ";
    log += "<p>" + roll + " red removed computer " + "</p>" ;
    computerTurn();
    updateValues();
  }
}
function playerRemoveRedAddBlack(){
  if(pRed -roll > -1){
    pRed = pRed - roll;
    cBlack = cBlack + roll; 
    log += "<p>" + "player turn" + "</p>" ;
    log += roll + " red removed player ";
    log += "<p>" + roll + " black added computer " + "</p>" ;
    computerTurn();
    updateValues();
  }
}
function playerRemoveBlackAddRed(){
 if(pBlack - roll<1){
   pBlack = pBlack - roll;
   cRed = cRed + roll;
   updateValues()
    endGame();
  }
  else{
    pBlack = pBlack - roll;
    cRed = cRed + roll;
    log += "<p>" + "player turn" + "</p>" ;
    log += roll + " black removed player ";
    log += "<p>" + roll + " red added computer " + "</p>" ;
    computerTurn();
    updateValues();
  }
}

function computerAddRedRemoveBlack(){
  if(pBlack - roll<1){
    cRed = cRed + roll;
    pBlack = pBlack - roll;
    updateValues()
    endGame();
  }
  else{
    cRed = cRed + roll;
    pBlack = pBlack - roll; 
    updateValues();
  }
}
function computerAddBlackRemoveRed(){
  if(pRed - roll>-1){
   cBlack = cBlack + roll;
   pRed = pRed - roll; 
    updateValues()
  }
}
function computerRemoveRedAddBlack(){
  if(cRed - roll > -1){
    cRed = cRed - roll;
    pBlack = pBlack + roll;
    updateValues();
  }
}
function computerRemoveBlackAddRed(){
    if(cBlack - roll<1){
      cBlack = cBlack - roll;
      pRed = pRed + roll;
      updateValues();
      endGame();
  }
  else{
    cBlack = cBlack - roll;
    pRed = pRed + roll; 
    updateValues();
  }
}

function rollDice(){
   if(pBlack -roll<1){
     
  }
  else{
    roll = Math.round(Math.random() * (6 - 1 + 1)) + 1;
  updateValues();
  }
}

function computerRollDice(){
  if(pBlack - roll<1){
  }
  else{
    cRoll = Math.round(Math.random() * (6 - 1 + 1)) + 1;
  }
}

function computerTurn(){
  cRollDice();
  random = Math.round(Math.random() * (4)) + 1;
  if(random==1){
    computerAddBlackRemoveRed();
    log += "<p>" + "computer turn" + "</p>" ;
    log += cRoll + " black added computer";
    log += "<p>" + cRoll + " red removed player " + "</p>" ;
  }
  if(random ==2){
    computerAddRedRemoveBlack();
    log += "<p>" + "computer turn" + "</p>" ;
    log += cRoll + " red added computer ";
    log += "<p>" + cRoll + " black removed player " + "</p>" ;
  }
  if(random ==3){
    computerRemoveBlackAddRed();
    log += "<p>" + "computer turn" + "</p>" ;
    log += cRoll + " black removed computer";
    log += "<p>" + cRoll + " red added player " + "</p>" ;
  }
  if(random ==4){
    computerRemoveRedAddBlack();
    log += "<p>" + "computer turn" + "</p>" ;
    log += cRoll + " red removed computer";
    log += "<p>" + cRoll + " black added player " + "</p>" ;
  }
}



