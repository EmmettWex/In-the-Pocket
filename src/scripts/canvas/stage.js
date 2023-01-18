const canvas = document.getElementById('stage');
const ctx = canvas.getContext('2d', { alpha: false });
canvas.width = 1080;
canvas.height = 720;

make_stage();

function make_stage() {
    const stage = new Image();
    stage.src = '../../../assets/stage_images/drum_stage.jpeg';
    stage.onload = function () {
        ctx.drawImage(stage, 0, 0, canvas.width, canvas.height)
    }
}

ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();