const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1080;
canvas.height = 720;

make_stage();

function make_stage() {
    const stage = new Image();
    stage.src = '../assets/stage_images/drum_stage.jpeg';
    stage.onload = function () {
        ctx.drawImage(stage, 0, 0, canvas.width, canvas.height)
    }
}


// canvas should be the whole site
// modal can pop up over the canvas to select which set you want