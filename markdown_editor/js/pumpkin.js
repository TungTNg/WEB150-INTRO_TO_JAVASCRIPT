class Pumpkin {
    constructor() {
        console.log(`New pumpkin #${this.getNumber()}`);
    }
    
    getNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }
}

export { Pumpkin }
