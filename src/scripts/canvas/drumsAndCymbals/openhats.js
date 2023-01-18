class OpenHats {

    constructor(ctx) {
        this.ctx = ctx;
        this.bottomY = 425;
        this.topY = 420;
    }

    drawHats() {
        // bottom high hat
        this.ctx.beginPath();
        this.ctx.ellipse(400, this.bottomY, 10, 50, 1.5 * Math.PI, 1.5 * Math.PI, .5 * Math.PI, true);
        this.ctx.strokeStyle = "black"
        this.ctx.stroke();
        this.ctx.fillStyle = "#d9c46d";
        this.ctx.fill();
        this.ctx.closePath();

        // top high hat
        this.ctx.beginPath();
        this.ctx.ellipse(400, this.topY, 10, 50, .5 * Math.PI, 1.5 * Math.PI, .5 * Math.PI, true);
        this.ctx.strokeStyle = "black"
        this.ctx.stroke();
        this.ctx.fillStyle = "#d9c46d";
        this.ctx.fill();
        this.ctx.closePath();

        // two lines to make the high hats look better
        this.ctx.beginPath();
        this.ctx.moveTo(350, this.topY);
        this.ctx.lineTo(450, this.topY);
        this.ctx.strokeStyle = "black";
        this.ctx.stroke();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.moveTo(350, this.bottomY);
        this.ctx.lineTo(450, this.bottomY);
        this.ctx.strokeStyle = "black";
        this.ctx.stroke();
        this.ctx.closePath();
    }

    hitHats() {
        this.bottomY = 430;
        this.topY = 425;
    }

    checkHatHeight() {
        if (this.bottomY > 425) {
            this.bottomY --;
            this.topY --;
        }
    }
}

export default OpenHats;