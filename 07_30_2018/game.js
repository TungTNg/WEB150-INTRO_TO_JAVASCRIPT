// class PumpkinProjectile(angle, speed)
// angle in degress
// speed in m/s
// gravity acceleration 9.8m/s^2
// Radians = Math.PI / 180 * degrees
// Range = (initial speed) ^ 2 / g * sin(2 Radians)


class PumpkinProjectile {
    constructor(angle, speed) {
        this.angle = angle;
        this.speed = speed;
    }
    
    
    getRadian() {
        this.rad = Math.PI / 180 * this.angle;
        return this.rad;
    } 
    
    range() {
        return this.speed * this.speed / 9.8 * Math.sin(2 * this.rad);
    }
}