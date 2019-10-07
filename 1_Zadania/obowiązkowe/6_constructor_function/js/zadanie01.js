var Robot = function (name) {
    this.name = name;
    this.isFunctional = true;
}

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " greets " + toWho);
    }
    else {
        console.log("Robot " + this.name + " is broken");
    }
};

Robot.prototype.changeName = function (newname) {
    console.log("Robot " + this.name + " changes name to " + newname);
    this.name = newname;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + " was fixed");
};

const Robby = new Robot('Robby');
const R2D2 = new Robot('R2D2');
const C3PO = new Robot('C3P0');

Robby.sayHi(R2D2.name);
R2D2.changeName('R4P17');
C3PO.sayHi(R2D2.name);
C3PO.isFunctional = false;
C3PO.sayHi(R2D2.name);
C3PO.fixIt();
R2D2.sayHi(Robby.name);
R2D2.sayHi(C3PO.name);
