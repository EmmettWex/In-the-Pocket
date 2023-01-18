class CymbalStands {

    constructor(ctx) {
        this.ctx = ctx;
    }

    draw() {
        // Crash one stand below:
        this.ctx.beginPath();
        this.ctx.rect(457.5, 353.5, 5, 150);
        this.ctx.stroke();
        this.ctx.fillStyle = "silver";
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.moveTo(457.5, 503.5);
        this.ctx.lineTo(462.5, 503.5);
        this.ctx.lineTo(497.5, 528.5);
        this.ctx.lineTo(492.5, 528.5);
        this.ctx.stroke();
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.moveTo(457.5, 503.5);
        this.ctx.lineTo(462.5, 503.5);
        this.ctx.lineTo(422.5, 528.5);
        this.ctx.lineTo(417.5, 528.5);
        this.ctx.stroke();
        this.ctx.fill();
        this.ctx.closePath();

        // crash 2 stand bellow

        this.ctx.beginPath();
        this.ctx.rect(573.5, 350, 5, 150);
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();

        // high hat stand
        this.ctx.beginPath();
        this.ctx.rect(400, 390, 5, 150);
        this.ctx.fillStyle = "silver";
        this.ctx.fill();
        this.ctx.fillStroke = "black";
        this.ctx.stroke();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.moveTo(400, 540);
        this.ctx.lineTo(408, 540);
        this.ctx.lineTo(448, 565);
        this.ctx.lineTo(440, 565);
        this.ctx.closePath();
        this.ctx.fillStyle = "silver";
        this.ctx.fill();
        this.ctx.strokeStyle = "black";
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(400, 540);
        this.ctx.lineTo(408, 540);
        this.ctx.lineTo(368, 565);
        this.ctx.lineTo(360, 565);
        this.ctx.closePath();
        this.ctx.fillStyle = "silver";
        this.ctx.fill();
        this.ctx.strokeStyle = "black";
        this.ctx.stroke();

        // ride cymbal stand below 675, 395
        this.ctx.beginPath();
        this.ctx.moveTo(672.5, 395);
        this.ctx.lineTo(677.5, 395);
        this.ctx.lineTo(677.5, 540);
        this.ctx.lineTo(672.5, 540);
        this.ctx.stroke();
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.moveTo(677.5, 540);
        this.ctx.lineTo(730, 570);
        this.ctx.lineTo(725, 570);
        this.ctx.lineTo(672.5, 540);
        this.ctx.stroke();
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.moveTo(677.5, 540);
        this.ctx.lineTo(730, 570);
        this.ctx.lineTo(725, 570);
        this.ctx.lineTo(672.5, 540);
        this.ctx.stroke();
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.moveTo(672.5, 540);
        this.ctx.lineTo(677.5, 540);
        this.ctx.lineTo(630, 570);
        this.ctx.lineTo(625, 570);
        this.ctx.stroke();
        this.ctx.fill();
        this.ctx.closePath();
    }

    update() {
        this.draw();
    }
}

export default CymbalStands;