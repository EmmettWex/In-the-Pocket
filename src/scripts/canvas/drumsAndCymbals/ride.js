class Ride {

    constructor(ctx) {
        this.ctx = ctx;

        this.rideHeight = 20;
        this.bellHeight = 5;
    }

    drawRide() {
        // unhit ride cymbal
        this.ctx.beginPath();
        this.ctx.ellipse(675, 395, this.rideHeight, 60, .5 * Math.PI, 0, 2 * Math.PI);
        this.ctx.strokeStyle = "black"
        this.ctx.stroke();
        this.ctx.fillStyle = "#d9c46d";
        this.ctx.fill();
        this.ctx.closePath();

        // bell on the ride cymbal
        this.ctx.beginPath();
        this.ctx.ellipse(675, 392, this.bellHeight, 15, .5 * Math.PI, 0, 2 * Math.PI);
        this.ctx.strokeStyle = "black"
        this.ctx.stroke();
        this.ctx.fillStyle = "#d9c46d";
        this.ctx.fill();
        this.ctx.closePath();

        // top of the ride cymbal stand
        this.ctx.beginPath();
        this.ctx.moveTo(672.5, 390);
        this.ctx.lineTo(677.5, 390);
        this.ctx.lineTo(677.5, 365);
        this.ctx.lineTo(672.5, 365);
        this.ctx.strokeStyle = "black"
        this.ctx.stroke();
        this.ctx.fillStyle = "silver";
        this.ctx.fill();
        this.ctx.closePath();
    }

    hitRide() {
        this.crashHeight = 27.5;
        this.bellHeight = 6.25;
    }

    checkRideHeight() {
        if (this.checkCrashHeight > 20) {
            this.crashHeight -= 1.5;
            this.bellHeight -= .25;
        }
    }
}

export default Ride;