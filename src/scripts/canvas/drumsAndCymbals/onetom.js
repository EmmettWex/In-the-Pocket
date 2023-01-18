class OneTom {

    constructor(ctx) {
        this.ctx = ctx;

        // shell of the drum
        this.shellY = 400;

        // bottom of the drum
        this.bottomY = 430;

        // top ring of the drum
        this.topRingY = 395;

        // drum head
        this.drumHeadY = 395;

        // drum head color
        this.headColor = "#f5f5f5"
        // maybe don't have the head color change, does it matter?
    }

    drawOneTom() {

        // shell of the drum
        this.ctx.beginPath();
        this.ctx.rect(465, this.shellY, 70, 31);
        this.ctx.fillStyle = "#ff4d4d"
        this.ctx.fill();
        this.ctx.strokeStyle = "black"
        this.ctx.stroke();
        this.ctx.closePath();

        // bottom of the drum
        this.ctx.beginPath();
        this.ctx.ellipse(500, this.bottomY, 20, 35, 1.5 * Math.PI, 1.5 * Math.PI, .5 * Math.PI, true);
        this.ctx.strokeStyle = "black"
        this.ctx.stroke();
        this.ctx.fillStyle = "#ff4d4d";
        this.ctx.fill();
        this.ctx.closePath();

        // top ring of the drum
        this.ctx.beginPath();
        this.ctx.ellipse(500, this.topRingY, 20, 35, .5 * Math.PI, 0, 2 * Math.PI);
        this.ctx.strokeStyle = "#black"
        this.ctx.stroke();
        this.ctx.fillStyle = "#ff4d4d";
        this.ctx.fill();
        this.ctx.closePath();

        // drum head
        this.ctx.beginPath();
        this.ctx.ellipse(500, this.drumHeadY, 15, 30, .5 * Math.PI, 0, 2 * Math.PI);
        this.ctx.strokeStyle = "black"
        this.ctx.stroke();
        this.ctx.fillStyle = this.headColor;
        this.ctx.fill();
        this.ctx.closePath();

    }

    hitOneTom() {
        this.shellY = 405;
        this.bottomY = 435;
        this.topRingY = 400;
        this.drumHeadY = 400;
        this.headColor = "#eaa4db"
    }

    checkDrumHeight() {
        if (this.shellY > 400) {
            this.resetOneTom();
        }

        if (this.shellY < 403) {
            this.headColor = "#f5f5f5";
        }
    }

    resetOneTom() {
        this.shellY--;
        this.bottomY--;
        this.topRingY--;
        this.drumHeadY--;
    }

}

export default OneTom;