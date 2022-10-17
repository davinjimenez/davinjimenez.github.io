var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 300, "y": groundY- 100  },
                { "type": "sawblade", "x": 700, "y": groundY- 100  },
                { "type": "sawblade", "x": 1800,"y": groundY- 100  },
                
                
                { "type": "enemy", "x": 400, "y": groundY-  50 },
                { "type": "enemy", "x": 1700, "y": groundY- 50 },
                { "type": "enemy", "x": 1000, "y": groundY- 50 },


                { "type": "reward", "x": 1400, "y":groundY- 50 },
                { "type": "reward", "x": 800, "y": groundY- 50 },
                { "type": "reward", "x": 500, "y": groundY- 50 },
            
            ]

        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        
    function createSawBlade(x,y) {
        var hitZoneSize = 25; //creates the size of the Hitzone
        var damageFromObstacle = 10; //setting how much damage the object will inflict
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates the obstacle itself
        sawBladeHitZone.x = x; //the X value of the hitzone
        sawBladeHitZone.y = y; //the Y value of the hitzone
        game.addGameItem(sawBladeHitZone); //adds the hitzone to the game
        var obstacleImage = draw.bitmap('img/sawblade.png'); //draws in the image on the screen 
        sawBladeHitZone.addChild(obstacleImage); //adds image to the hitzone so we can see it
        obstacleImage.x = -25; //lines up the x image with the hitzone 
        obstacleImage.y = -25; //lines up the y image with the hitzone
        sawBladeHitZone.rotationalVelocity = 10;
          
    
    
    }
    

   // this function creates the enemy    
  function createEnemy (x,y) {
    var enemy = game.createGameItem('enemy',5); //creates enemy item and stores it in a value
    var redSquare = draw.bitmap('img/fly enemy part 4(1).png'); //draws a redSquare and stores it in variable redSquare
    redSquare.x = -25; //allign the square with the hitzone x
    redSquare.y = -25; //allign the square with hitzone y
    enemy.addChild(redSquare); //adds the enemy
    enemy.x = x;
    enemy.y = y;
    game.addGameItem(enemy);
    enemy.velocityX = -1; //this determines the velocity of scale X
    enemy.rotationalVelocity = 0; //determines how the square rotates
    
    enemy.onPlayerCollision = function() {
        game.changeIntegrity(-90) //decreases your health
        console.log('The enemy has hit Halle');
        enemy.shrink(); 
    };
    
    //this function detects if the projectile collides with Halle and it will increase the score and shrink the enemy
    enemy.onProjectileCollision = function(){
        game.increaseScore(30); //this code increases the score
        enemy.shrink(); // this code shrinks the enemy
    };
            
  }
    //this function creates the reward
  function createReward (x,y) {
        var reward = game.createGameItem('reward',25); //creates reward item and stores it in a value
        var blueSquare = draw.bitmap('img/coin image 1.png'); //draws a redSquare and stores it in variable blueSquare
        blueSquare.x = -25; //allign the square with the hitzone x
        blueSquare.y = -25; //align the square with the hitzone y
        reward.addChild(blueSquare); //adds the reward
        reward.x = x;
        reward.y = y;
        reward.scaleX = 0.50; //this scales the image of the reward for X
        reward.scaleY = 0.50; //this scales the image of the reward for Y
        game.addGameItem(reward);
        reward.velocityX = -1; //this scales the velocity for X
        reward.rotationalVelocity = 0; //determines how the square rotates
    
     
    reward.onPlayerCollision = function() {
        game.changeIntegrity(90) //increases your health
        console.log('The reward has hit halle');
        reward.shrink(); //this shrinks the reward when it is hit
    
    
    }
 
 }





 for (var i = 0; i < levelData.gameItems.length; i++) {
        var gameItem = levelData.gameItems[i];
     
     if (gameItem.type === "sawblade"){
       createSawBlade(gameItem.x , gameItem.y);
     }
        if (gameItem.type === "enemy"){
        createEnemy(gameItem.x ,gameItem.y);
     }
      if (gameItem.type === "reward"){
        createReward(gameItem.x ,gameItem.y);
     }
  
  };


        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
