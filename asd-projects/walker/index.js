/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var BOARD_WIDTH = $("#board").width();
  var BOARD_HEIGHT = $("#board").height();
  var WALKER_WIDTH = $("#walker").width();
  var WALKER_HEIGHT = $("#walker").height();
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);
  $(document).on('keyup', handleKeyUp);                           // change 'eventType' to the type of event you want to handle
  
  var KEY = {
    "ENTER": 13,
     "LEFT": 37,
     "UP": 38,
     "RIGHT": 39,
     "DOWN": 40,
  }
  //walker 1
  var positionX = 0;
  var positionY = 0;
  var speedX = 0;
  var speedY = 0;
 
  var positionX2 = 0;
  var positionY2 = 0;
  var speedX2 = 0;
  var speedY2 = 0;
 




  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    redrawGameItem();
    handleBorder();

  }
  
  /* 
  Called in response to events.
  */

  function handleKeyDown(event) {
  
    if (event.which === KEY.ENTER) {
      console.log("enter pressed");
    }
    
    if (event.which === KEY.LEFT) {
       speedX = -5;
           
    }
    if (event.which === KEY.UP) {
      speedY = -5;
         
    }
    if (event.which === KEY.RIGHT) {
      speedX = 5;
          
    }
    if (event.which === KEY.DOWN) {
      speedY = 5;
           
    } 
    

  } 

   function handleKeyUp(){
    if (event.which === KEY.LEFT) {
      speedX = 0;
    }
    if (event.which === KEY.UP) {
      speedY = 0;          
    }
    if (event.which === KEY.RIGHT) {
      speedX = 0;          
    }
    if (event.which === KEY.DOWN) {
      speedY = 0;            
    } 
   
  }
  
   function handleBorder(){
    if(positionX > BOARD_WIDTH -WALKER_WIDTH){
         positionX = BOARD_WIDTH - WALKER_WIDTH;
    }
    if(positionX < 0){
      positionX = 0;
    }
    if(positionY > BOARD_HEIGHT -WALKER_HEIGHT){
      positionY = BOARD_HEIGHT - WALKER_HEIGHT;
    }
    if(positionY < 0){
      positionY = 0;
    }
     
    




   }




  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
   function repositionGameItem(){
    positionX += speedX;
    positionY += speedY;
   
   positionX2 += speedX2;
   positionX2 += speedX2;
  
}
  
   function redrawGameItem(){
    $("#walker").css("left", positionX); 
    $("#walker").css("top", positionY);
    
    $("#walker2").css("left", positionX2);
    $("#walker2").css("top", positionY2);
}
  
  
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
