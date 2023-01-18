class ClosedHats {

    constructor(ctx) {
        this.ctx = ctx;
        this.hatHeight = 425;
    }

    drawClosedHats() {
        // bottom high hat
        this.ctx.beginPath();
        this.ctx.ellipse(400, this.hatHeight, 10, 50, 1.5 * Math.PI, 1.5 * Math.PI, .5 * Math.PI, true);
        this.ctx.strokeStyle = "black"
        this.ctx.stroke();
        this.ctx.fillStyle = "#d9c46d";
        this.ctx.fill();
        this.ctx.closePath();

        // top high hat
        this.ctx.beginPath();
        this.ctx.ellipse(400, this.hatHeight, 10, 50, .5 * Math.PI, 1.5 * Math.PI, .5 * Math.PI, true);
        this.ctx.strokeStyle = "black"
        this.ctx.stroke();
        this.ctx.fillStyle = "#d9c46d";
        this.ctx.fill();
        this.ctx.closePath();

        // line between the two hats to look like two cymbals
        this.ctx.beginPath();
        this.ctx.moveTo(350, this.hatHeight);
        this.ctx.lineTo(450, this.hatHeight);
        this.ctx.strokeStyle = "black";
        this.ctx.stroke();
        this.ctx.closePath();
    }

    hit() {
        this.hatHeight = 430;
    }

    checkHatHeight() {
        if (this.hatHeight > 425) {
            this.hatHeight --;
        }
    }
}

export default ClosedHats;