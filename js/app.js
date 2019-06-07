// Enemies player must avoid
var Enemy = function() {
    this.sprite = 'images/enemy-bug.png';
    this.x = 551;
    this.speed = 100 + Math.floor(Math.random() * 400);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    var yPositions = [68, 151, 234];
    var randomY = Math.floor(Math.random() * 3);
    this.x += this.speed * dt;

    if (this.x > 550) {
        this.x = -100;
        this.speed = 100 + Math.floor(Math.random() * 400);
        this.y = yPositions[randomY];
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player class
var Player = function() {
    this.sprite = 'images/char-horn-girl.png';
    this.x = 202;
    this.y = 400;
}

// Check victory
Player.prototype.update = function() {
    if (this.y === -15) {
        this.reset();
    }
}

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Handle user input
Player.prototype.handleInput = function(key) {
    if (key === 'left' && this.x > 0) {
        this.x -= 101;
    } else if (key === 'up' && this.y > 0) {
        this.y -= 83;
    } else if (key === 'right' && this.x < 404) {
        this.x += 101;
    } else if (key === 'down' && this.y < 400) {
        this.y += 83;
    }
}

Player.prototype.reset = function() {  
    this.x = 202;
    this.y = 400;
}

var allEnemies = [];

for(i=0;i<3;i++) {
    allEnemies.push(new Enemy);
}

var player;

player = new Player;



// This listens for key presses and sends the keys to Player.handleInput() method
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
