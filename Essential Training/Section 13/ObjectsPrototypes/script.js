// Simple prototype example

function Player(n, s, r) {
    this.name = n;
    this.score = s;
    this.rank = r;
}

Player.prototype.logInfo = function () {
    console.log("I am: ", this.name);
}

Player.prototype.promote = function () {
    this.rank++;
    console.log("I am: ", this.name);
    console.log("My new rank is: ", this.rank);
}

var fred =  new Player("Fred", 1500, 3);
fred.logInfo();
fred.promote();

var bob = new Player("Bob", 2000, 4);
bob.logInfo();
bob.promote();


