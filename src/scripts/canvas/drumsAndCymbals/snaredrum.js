import { Howl, Howler } from 'howler';

class SnareDrum {

    constructor(ctx) {
        this.ctx = ctx;

        // shell of the drum
        this.shellY = 445;

        // bottom of the drum
        this.bottomY = 475;

        // top ring of the drum
        this.topRingY = 445;

        // drum head
        this.drumHeadY = 445;

        // drum head color
        this.headColor = "#f5f5f5"
        // maybe don't have the head color change, does it matter?
    }

    draw() {

        // snare drum stand
        this.ctx.beginPath();
        this.ctx.rect(477.5, 475, 5, 75);
        this.ctx.fillStyle = "silver";
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.moveTo(477.5, 550);
        this.ctx.lineTo(482.5, 550);
        this.ctx.lineTo(515, 570);
        this.ctx.lineTo(510, 570);
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.moveTo(477.5, 550);
        this.ctx.lineTo(482.5, 550);
        this.ctx.lineTo(450, 570);
        this.ctx.lineTo(445, 570);
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();

        // shell of the drum
        this.ctx.beginPath();
        this.ctx.rect(430, this.shellY, 100, 31);
        this.ctx.fillStyle = "#a3a3a3"
        this.ctx.fill();
        this.ctx.strokeStyle = "black"
        this.ctx.stroke();
        this.ctx.closePath();

        // bottom of the drum
        this.ctx.beginPath();
        this.ctx.ellipse(480, this.bottomY, 25, 50, 1.5 * Math.PI, 1.5 * Math.PI, .5 * Math.PI, true);
        this.ctx.strokeStyle = "black"
        this.ctx.stroke();
        this.ctx.fillStyle = "#a3a3a3";
        this.ctx.fill();
        this.ctx.closePath();

        // top shell ring of the drum
        this.ctx.beginPath();
        this.ctx.ellipse(480, this.topRingY, 25, 50, .5 * Math.PI, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.fillStyle = "#a3a3a3";
        this.ctx.fill();

        // drum head
        this.ctx.beginPath();
        this.ctx.ellipse(480, this.drumHeadY, 20, 45, .5 * Math.PI, 0, 2 * Math.PI);
        this.ctx.strokeStyle = "black"
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.fillStyle = this.headColor;
        this.ctx.fill();

    }

    hit(drumKit) {
        this.shellY = 450;
        this.bottomY = 480;
        this.topRingY = 450;
        this.drumHeadY = 450;
        this.headColor = "#eaa4db";

        if (drumKit === "rock") {
            let sound = new Howl({
                src: ['../../../../assets/audio_files/rock/Snaredrum.wav']
            });

            sound.play();
        } else if (drumKit === "electronic") {
            let sound = new Howl({
                src: ['../../../../assets/audio_files/Electric_Kit/Snaredrum.wav']
            });

            sound.play();
        }
    }

    checkPosition() {
        if (this.shellY > 445) {
            this.reset();
        }

        if (this.shellY === 445) {
            this.headColor = "#f5f5f5";
        }
    }

    reset() {
        this.shellY--;
        this.bottomY--;
        this.topRingY--;
        this.drumHeadY--;
    }

    update() {
        this.checkPosition();
        this.draw();
    }
}

export default SnareDrum;