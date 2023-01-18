import { Howl, Howler } from 'howler';

class BassDrum {

    constructor(ctx) {
        this.ctx = ctx;

        // bass drum head color
        this.bassDrumColor = "#f5f5f5";

        // set a counter to 0 to control color of drum head
        this.count = 0;
    }

    draw() {
        // shell of the bass drum
        this.ctx.beginPath();
        this.ctx.arc(540, 500.75, 70, 0, 2 * Math.PI);
        this.ctx.closePath();
        this.ctx.fillStyle = "#ff4d4d";
        this.ctx.fill();
        this.ctx.stroke();

        // batter head of the drum
        this.ctx.beginPath();
        this.ctx.arc(540, 500.75, 65, 0, 2 * Math.PI);
        this.ctx.closePath();
        this.ctx.fillStyle = this.bassDrumColor;
        this.ctx.fill();
        this.ctx.stroke();
    }



    hit(drumKit) {
        this.count = 5;
        this.bassDrumColor = "#eaa4db";

        if (drumKit === "rock") {
            let sound = new Howl({
                src: ['../assets/audio_files/rock/Bassdrum.wav']
            });

            sound.play();
        } else if (drumKit === "electronic") {
            let sound = new Howl({
                src: ['../assets/audio_files/Electric_Kit/Bassdrum-01.wav']
            });

            sound.play();
        }
    }

    checkPosition() {
        if (this.count > 0) {
            this.count --;
        }

        if (this.count == 0) {
            this.bassDrumColor = "#f5f5f5";
        }
    }

    update() {
        this.checkPosition();
        this.draw();
    }

}

export default BassDrum;