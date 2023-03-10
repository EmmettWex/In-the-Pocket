import { Howl, Howler } from 'howler';

class FloorTom {

    constructor(ctx) {
        this.ctx = ctx;

        // shell of the drum
        this.shellY = 445;

        // bottom of the drum
        this.bottomY = 525;

        // top ring of drum
        this.topRingY = 445;

        // drum head
        this.drumHeadY = 445;

        // drum head color
        this.headColor = "#f5f5f5"
    }

    draw() {
        // floor legs behind the drum
        this.ctx.beginPath();
        this.ctx.rect(560, 490, 5, 80);
        this.ctx.fillStyle = "silver";
        this.ctx.fill();
        this.ctx.strokeStyle = "black";
        this.ctx.stroke();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.rect(645, 490, 5, 80);
        this.ctx.fillStyle = "silver";
        this.ctx.fill();
        this.ctx.strokeStyle = "black";
        this.ctx.stroke();
        this.ctx.closePath();

        // shell of the drum
        this.ctx.beginPath();
        this.ctx.rect(555, this.shellY, 100, 81);
        this.ctx.fillStyle = "#ff4d4d"
        this.ctx.fill();
        this.ctx.strokeStyle = "black"
        this.ctx.stroke();
        this.ctx.closePath();

        // bottom of the drum
        this.ctx.beginPath();
        this.ctx.ellipse(605, this.bottomY, 25, 50, 1.5 * Math.PI, 1.5 * Math.PI, .5 * Math.PI, true);
        this.ctx.strokeStyle = "black"
        this.ctx.stroke();
        this.ctx.fillStyle = "#ff4d4d";
        this.ctx.fill();
        this.ctx.closePath();

        // top ring of the drum
        this.ctx.beginPath();
        this.ctx.ellipse(605, this.topRingY, 25, 50, .5 * Math.PI, 0, 2 * Math.PI);
        this.ctx.strokeStyle = "#black"
        this.ctx.stroke();
        this.ctx.fillStyle = "#ff4d4d";
        this.ctx.fill();
        this.ctx.closePath();

        // drum head
        this.ctx.beginPath();
        this.ctx.ellipse(605, this.drumHeadY, 20, 45, .5 * Math.PI, 0, 2 * Math.PI);
        this.ctx.strokeStyle = "black"
        this.ctx.stroke();
        this.ctx.fillStyle = this.headColor;
        this.ctx.fill();
        this.ctx.closePath();

        // floor tom leg in front of the drum
        this.ctx.beginPath();
        this.ctx.rect(605, 505, 5, 80);
        this.ctx.fillStyle = "silver";
        this.ctx.fill();
        this.ctx.strokeStyle = "black";
        this.ctx.stroke();
        this.ctx.closePath();
    }

    // add the keydown event listener here, it will be called 60 times a second.
    hit (drumKit) {
        this.shellY = 450;
        this.bottomY = 530;
        this.topRingY = 450;
        this.drumHeadY = 450;
        this.headColor = "#eaa4db"
        
        if (drumKit === "rock") {
            let sound = new Howl({
                src: ['./assets/audio_files/Rock/Tom L.wav']
            });
            
            sound.play();
        } else if (drumKit === "electronic") {
            let sound = new Howl({
                src: ['./assets/audio_files/Electric_Kit/Tom L.wav']
            });

            sound.play();
        }
    }

    checkPosition() {
        if (this. shellY > 445) {
            this.reset();
        }

        if (this.shellY === 445) {
            this.headColor = "#f5f5f5";
        }
    }

    reset() {
        this.shellY --;
        this.bottomY --;
        this.topRingY --;
        this.drumHeadY --;
    }

    // finish out the update
    update() {
        this.checkPosition();
        this.draw();
    }
}

export default FloorTom;