import Drumset from './scripts/canvas/drumset.js';
import RockDrums from './scripts/rockdrums.js'
import ElectronicDrums from './scripts/electronicdrums.js'

document.addEventListener('DOMContentLoaded', () => {
    // const canvas2 = document.getElementById('bass-drum');
    // const ctx2 = canvas2.getContext('2d');
    // canvas2.width = 1080;
    // canvas2.height = 720;

    // This is the kit selection option
    let drumKit = "rock";
    const kits = document.getElementById('kits');
    kits.addEventListener('submit', (event) => {
        event.preventDefault();
        drumKit = event.submitter.id;
    });

    // This listens for the key presses to play the drums
    document.addEventListener('keydown', (event) => {
        event.preventDefault();

        if (drumKit === "rock") new RockDrums(event);
        if (drumKit === "electronic") new ElectronicDrums(event);

        // call the animation for the appropriate drum
    });

    // This allows you to record your drum track.
    const recorder = document.getElementById('recorder');
    const record = document.getElementById('record');
    let recording = false;
    recorder.addEventListener('submit', (event) =>{
        event.preventDefault();
        
        if (recording === false) {
            recording = true;
            record.value = 'Stop Recording';
        } else {
            recording = false;
            record.value = 'Start Recording';
        }
    })

    // will need an empty array-like object
    // every time we want to record a track
    // will track the inputs here and pass into
    // the Playback class for it to play it back

    while (recording === true) {

        const drumTrack = function (event) {
            drumTrack.data.push(event);
            console.log(drumTrack.data);
        }

        document.addEventListener("keyup", drumTrack);
        document.addEventListener('keydown', drumTrack);
    }

    
});