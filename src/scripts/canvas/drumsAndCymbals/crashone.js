import { Howl, Howler } from 'howler';

class CrashOne {

    constructor(ctx) {
        this.ctx = ctx;

        this.crashHeight = 15;
        this.bellHeight = 3.5;
    }

    draw() {
        // unhit crash cymbal
        this.ctx.beginPath();
        this.ctx.ellipse(460, 355, this.crashHeight, 50, .5 * Math.PI, 0, 2 * Math.PI);
        this.ctx.strokeStyle = "black"
        this.ctx.stroke();
        this.ctx.fillStyle = "#d9c46d";
        this.ctx.fill();
        this.ctx.closePath();

        // bell on the crash cymbal
        this.ctx.beginPath();
        this.ctx.ellipse(460, 352, this.bellHeight, 10, .5 * Math.PI, 0, 2 * Math.PI);
        this.ctx.strokeStyle = "black"
        this.ctx.stroke();
        this.ctx.fillStyle = "#d9c46d";
        this.ctx.fill();
        this.ctx.closePath();

        // top of the cymbal stand
        this.ctx.beginPath();
        this.ctx.rect(457.5, 332, 5, 20);
        this.ctx.fillStyle = "silver";
        this.ctx.fill();
        this.ctx.strokeStyle = "black";
        this.ctx.stroke();
        this.ctx.closePath();
    }

    hit(drumKit) {
        this.crashHeight = 20;
        this.bellHeight = 4.75;

        if (drumKit === "rock") {
            let sound = new Howl({
                src: ['./assets/audio_files/Rock/Crash.wav']
            });

            sound.play();
        } else if (drumKit === "electronic") {
            let sound = new Howl({
                src: ['./assets/audio_files/Electric_Kit/Crash-01.wav']
            });

            sound.play();
        }
    }

    checkPosition() {
        if (this.crashHeight > 15) {
            this.crashHeight --;
            this.bellHeight -= .25;
        }
    }

    update() {
        this.checkPosition();
        this.draw();
    }
}

export default CrashOne;