// import Drumset from './scripts/canvas/drumset.js';
import CymbalStands from "./scripts/canvas/drumsAndCymbals/cymbalstands";
import OneTom from "./scripts/canvas/drumsAndCymbals/onetom";
import TwoTom from "./scripts/canvas/drumsAndCymbals/twotom";
import BassDrum from "./scripts/canvas/drumsAndCymbals/bassdrum";
import SnareDrum from "./scripts/canvas/drumsAndCymbals/snaredrum";
import FloorTom from "./scripts/canvas/drumsAndCymbals/floortom";
import ClosedHats from "./scripts/canvas/drumsAndCymbals/closedhats";
// import OpenHats from "./scripts/canvas/drumsAndCymbals/openhats";
import CrashOne from "./scripts/canvas/drumsAndCymbals/crashone";
import CrashTwo from "./scripts/canvas/drumsAndCymbals/crashtwo";
import Ride from "./scripts/canvas/drumsAndCymbals/ride";
import RockDrums from './scripts/rockdrums.js'
import ElectronicDrums from './scripts/electronicdrums.js'

document.addEventListener('DOMContentLoaded', () => {
    const canvas2 = document.getElementById('bass-drum');
    const ctx2 = canvas2.getContext('2d');
    canvas2.width = 1080;
    canvas2.height = 720;

    const cymbalstands = new CymbalStands(ctx2);
    const onetom = new OneTom(ctx2);
    const twotom = new TwoTom(ctx2);
    const bassdrum = new BassDrum(ctx2);
    const snaredrum = new SnareDrum(ctx2);
    const floortom = new FloorTom(ctx2);
    const closedhats = new ClosedHats(ctx2);
    // const openhats = new OpenHats(ctx2);
    const crashone = new CrashOne(ctx2);
    const crashtwo = new CrashTwo(ctx2);
    const ride = new Ride(ctx2);
    
    // draw the drum set here.
    cymbalstands.drawCymbalStands();
    onetom.drawOneTom();
    twotom.drawTwoTom();
    bassdrum.drawBassDrum();
    snaredrum.drawSnareDrum();
    floortom.drawFloorTom();
    closedhats.drawClosedHats();
    // openhats.drawOpenHats();
    crashone.drawCrashOne();
    crashtwo.drawCrashTwo();
    ride.drawRide();

    // This is the kit selection option
    let drumKit = "rock";
    const kits = document.getElementById('kits');
    kits.addEventListener('submit', (event) => {
        event.preventDefault();
        drumKit = event.submitter.id;
    });

    // creating single instances of drumsets below to be passed into the event listener
    const rockdrums = new RockDrums();
    const electronicdrums = new ElectronicDrums();

    const drumMap = new Map([
        ["1", bassdrum],
        [" ", bassdrum],
        ["2", snaredrum],
        ["y", snaredrum],
        ["3", onetom],
        ["u", onetom],
        ["4", twotom],
        ["i", twotom],
        ["5", floortom],
        ["o", floortom],
        ["7", closedhats],
        ["e", closedhats],
        ["6", closedhats],
        ["8", ride],
        ["r", ride],
        ["9", crashone],
        ["0", crashtwo]
    ]);

    crashtwo.update

    // This listens for the key presses to play the drums
    document.addEventListener('keydown', (event) => {
        event.preventDefault();
        let struckKey = event.key.toLowerCase();
        let drumHit = drumMap.get(struckKey);
        console.log(drumHit);
        if (drumKit === "rock") rockdrums.handleHit(struckKey);
        if (drumKit === "electronic") electronicdrums.handleHit(struckKey);

        // call the animation for the appropriate drum
        drumHit.hit();
        onetom.drawOneTom();
        twotom.drawTwoTom();
        bassdrum.drawBassDrum();
        snaredrum.drawSnareDrum();
        floortom.drawFloorTom();
        closedhats.drawClosedHats();
        // openhats.drawOpenHats();
        crashone.drawCrashOne();
        crashtwo.drawCrashTwo();
        ride.drawRide();
    });

    // setInterval(rockOn(), 33);

    // function rockOn() {
    //     onetom.checkDrumHeight();
    //     twotom.checkDrumHeight();
    //     bassdrum.checkDrumCount();
    //     snaredrum.checkDrumHeight();
    //     floortom.checkDrumHeight();
    //     closedhats.checkHatHeight();
    //     crashone.checkCrashHeight();
    //     crashtwo.checkCrashHeight();
    //     ride.checkRideHeight();
    // }    

    // function checkDrums() {
    //     onetom.checkDrumHeight();
    //     twotom.checkDrumHeight();
    //     bassdrum.checkDrumCount();
    //     snaredrum.checkDrumHeight();
    //     floortom.checkDrumHeight();
    //     closedhats.checkHatHeight();
    //     crashone.checkCrashHeight();
    //     crashtwo.checkCrashHeight();
    //     ride.checkRideHeight();
    // }
    

    // This allows you to record your drum track.
    // const recorder = document.getElementById('recorder');
    // const record = document.getElementById('record');
    // let recording = false;
    // recorder.addEventListener('submit', (event) =>{
    //     event.preventDefault();
        
    //     if (recording === false) {
    //         recording = true;
    //         record.value = 'Stop Recording';
    //     } else {
    //         recording = false;
    //         record.value = 'Start Recording';
    //     }
    // })

    // will need an empty array-like object
    // every time we want to record a track
    // will track the inputs here and pass into
    // the Playback class for it to play it back

    // while (recording === true) {

    //     const drumTrack = function (event) {
    //         drumTrack.data.push(event);
    //         console.log(drumTrack.data);
    //     }

    //     document.addEventListener("keyup", drumTrack);
    //     document.addEventListener('keydown', drumTrack);
    // }

    
});