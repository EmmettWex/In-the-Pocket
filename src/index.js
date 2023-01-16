import RockDrums from './scripts/rockdrums.js'
import ElectronicDrums from './scripts/electronicdrums.js'

document.addEventListener('DOMContentLoaded', () => {

    let drumKit = "rock";
    document.addEventListener('submit', (event) => {
        event.preventDefault();
        drumKit = event.submitter.id;
    });

    document.addEventListener('keydown', (event) => {
        // may also want to pass in which kit is being used so
        // the strike class knows which sound files to use
        event.preventDefault();
        if (drumKit === "rock") new RockDrums(event);

        if (drumKit === "electronic") new ElectronicDrums(event);
    });

});