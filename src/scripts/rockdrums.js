import {Howl, Howler} from 'howler';

class RockDrums {
    constructor(hit) {
        this.hit = hit;
        // key into this map to play the sound you want
        // may switch this to have one play sound function
        // And instead create a map of pathways to audio files
        // This would be a dryer way of accomplishing this class
        // for now it's okay to have this just this way.
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
        if (this.functions.has(struckKey)) {
            this.functions.get(struckKey)();
        }
    }

    hitBassDrum() {
        let sound = new Howl({
            src: ['../assets/audio_files/rock/Bassdrum.wav']
        });

        sound.play();
    }

    hitSnareDrum() {
        let sound = new Howl({
            src: ['../assets/audio_files/rock/Snaredrum.wav']
        });

        sound.play();
    }

    hitOneTom() {
        let sound = new Howl({
            src: ['../assets/audio_files/rock/Tom H.wav']
        });

        sound.play();
    }

    hitTwoTom() {
        let sound = new Howl({
            src: ['../assets/audio_files/rock/Tom M.wav']
        });

        sound.play();
    }

    hitFloorTom() {
        let sound = new Howl({
            src: ['../assets/audio_files/rock/Tom L.wav']
        });

        sound.play();
    }

    hitHighHatOpen() {
        let sound = new Howl({
            src: ['../assets/audio_files/rock/Hat Open.wav']
        });

        sound.play();
    }

    hitHighHatClosed() {
        let sound = new Howl({
            src: ['../assets/audio_files/rock/Hat Closed.wav']
        });

        sound.play();
    }

    hitRideCymbal() {
        let sound = new Howl({
            src: ['../assets/audio_files/rock/Ride.wav']
        });

        sound.play();
    }

    hitCrashOne() {
        let sound = new Howl({
            src: ['../assets/audio_files/rock/Crash.wav']
        });

        sound.play();
    }

    hitCrashTwo() {
        let sound = new Howl({
            src: ['../assets/audio_files/rock/Cowbell L.wav']
        });

        sound.play();
    }
}

export default RockDrums;