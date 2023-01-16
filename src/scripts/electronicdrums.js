import { Howl, Howler } from 'howler';

class ElectronicDrums {
    constructor(hit) {
        this.hit = hit;
        
        this.functions = new Map([
            ["1", this.hitBassDrum],
            [" ", this.hitBassDrum],
            ["2", this.hitSnareDrum],
            ["y", this.hitSnareDrum],
            ["3", this.hitOneTom],
            ["u", this.hitOneTom],
            ["4", this.hitTwoTom],
            ["i", this.hitTwoTom],
            ["5", this.hitFloorTom],
            ["o", this.hitFloorTom],
            ["7", this.hitHighHatClosed],
            ["e", this.hitHighHatClosed],
            ["6", this.hitHighHatOpen],
            ["8", this.hitRideCymbal],
            ["r", this.hitRideCymbal],
            ["9", this.hitCrashOne],
            ["0", this.hitCrashTwo]
        ]);

        // debugger

        // console.log(this.functions);
        this.handleHit = this.handleHit.bind(this);
        this.handleHit(this.hit);
    }

    handleHit(event) {
        event.preventDefault();

        // downcase struckKey to pass into the map
        const struckKey = event.key.toLowerCase();

        // to key into the map you use the .get() function!
        this.functions.get(struckKey)();
    }

    hitBassDrum() {
        let sound = new Howl({
            src: ['../assets/audio_files/Electric_Kit/Bassdrum-01.wav']
        });

        sound.play();
    }

    hitSnareDrum() {
        let sound = new Howl({
            src: ['../assets/audio_files/Electric_Kit/Snaredrum.wav']
        });

        sound.play();
    }

    hitOneTom() {
        let sound = new Howl({
            src: ['../assets/audio_files/Electric_Kit/Tom H.wav']
        });

        sound.play();
    }

    hitTwoTom() {
        let sound = new Howl({
            src: ['../assets/audio_files/Electric_Kit/Tom M.wav']
        });

        sound.play();
    }

    hitFloorTom() {
        let sound = new Howl({
            src: ['../assets/audio_files/Electric_Kit/Tom L.wav']
        });

        sound.play();
    }

    hitHighHatOpen() {
        let sound = new Howl({
            src: ['../assets/audio_files/Electric_Kit/Hat Open.wav']
        });

        sound.play();
    }

    hitHighHatClosed() {
        let sound = new Howl({
            src: ['../assets/audio_files/Electric_Kit/Hat Closed.wav']
        });

        sound.play();
    }

    hitRideCymbal() {
        let sound = new Howl({
            src: ['../assets/audio_files/Electric_Kit/Cabasa.wav']
        });

        sound.play();
    }

    hitCrashOne() {
        let sound = new Howl({
            src: ['../assets/audio_files/Electric_Kit/Crash-01.wav']
        });

        sound.play();
    }

    hitCrashTwo() {
        let sound = new Howl({
            src: ['../assets/audio_files/Electric_Kit/Crash-02.wav']
        });

        sound.play();
    }
}

export default ElectronicDrums;