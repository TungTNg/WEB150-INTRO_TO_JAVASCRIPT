// class Dice(sides)
// - sides
// - value = 1

// roll()
// - uses Math.random() to get a value between 1 and sides
// - calls a setValue(number)

// setValue(n)
// - modifies this.value = n
// - thrown an Error for values outside of 1 to sides

// getValue()
// returns the this.value

class Dice {
    constructor(sides) {
        this.sides = sides;
        this.value = 1;
    }
    
    
    roll() {
    return Math.floor(Math.random() * (this.sides)) + 1;
    }
    
    setValue() {
        return this.roll()
    }
    
    getValue() {
        return this.setValue()
    }
}



var output = document.getElementById('output');


// dice2 = new Dice(6);
// dice2.roll(); dice2.getValue();

var dice1 = new Dice(6);
console.log(dice1);
output.innerHTML = dice1.getValue();
