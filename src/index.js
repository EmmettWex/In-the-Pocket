import Example from './scripts/example.js'
import Strike from './scripts/strike.js'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector("#root");
    // console.log('Hello World')

    new Example(root);

    document.addEventListener('keydown', (event) => {
        // may also want to pass in which kit is being used so
        // the strike class knows which sound files to use
        new Strike(event);
    });

});