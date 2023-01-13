class Strike {
    constructor(hit) {
        this.hit = hit;
        this.functions = this.createMap();
        this.handleHit = this.handleHit.bind(this);
        this.handleHit(this.hit);
        // this.hit.addEventListener('keydown', this.handleHit);
    }

    createMap() {
        return new Map([
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
    }

    handleHit(event) {
        event.preventDefault();
        const struckKey = event.key;
        console.log(struckKey);
        // make sure to downcase the struckKey constant.

        // bass drum: 1 & space bar
        // snare drum: 2 & y/Y
        // 1 tom: 3 & u/U
        // 2 tom: 4 & i/I
        // floor tom: 5 & o/O
        // closed high-hat 7 
        // open high-hat 6 & e/E
        // ride cymbal 8 r/R
        // crash 1: 9
        // crash 2: 0

        const functions = new Map([
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

    }

    hitBassDrum() {

    }

    hitSnareDrum() {

    }

    hitOneTom() {

    }

    hitTwoTom() {

    }

    hitFloorTom() {

    }

    hitHighHatOpen() {

    }

    hitHighHatClosed() {

    }

    hitRideCymbal() {

    }

    hitCrashOne() {

    }

    hitCrashTwo() {

    }
}

export default Strike;