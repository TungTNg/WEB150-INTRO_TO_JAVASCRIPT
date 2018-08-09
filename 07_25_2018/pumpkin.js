var Pumpkin = function(size, color, shape) {
    this.size = size;
    this.color = color;
    this.shape = shape;
};

Pumpkin.prototype.print = function(msg) {
    var pageHeader = document.getElementsByTagName('h1')[0];
    pageHeader.innerHTML += msg + '<br>';
    console.log(msg);
}

Pumpkin.prototype.carve  = function() {
    this.print("🎃");
}

Pumpkin.prototype.makePie  = function() {
    this.print("🥧");
};

Pumpkin.prototype.describe = function() {
    var message = `You have a ${this.size} pumpkin that is ${this.color} in color and possesses a ${this.shape} shape.`;
    this.print(message);
};

Pumpkin.prototype.throw = function(distance) {
    var message;
    if (distance > 100) {
        message = "Come on. No one can throw a pumpkin over 100 yards. Not even you!";
    } else if (distance >= 10) {
        message = "You threw that pumpkin far! Nice job.";
    } else if (distance > 1) {
        message = "You threw the pumpkin alright, but I but you can do better!";
    } else if (distance > 0) {
        message = "Weak! I know you can throw farther than that!";   
    } else if (distance < 0) {
        message = "You threw the pumpkin backwards and hit Jimmy in the head. We now call him \"Jim-o-lantern.\"";
    } else {
        message = "You just dropped the pumpkin on your foot. Nice move.";
    }
    this.print(message);
};
