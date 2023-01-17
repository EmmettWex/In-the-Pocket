const canvas2 = document.getElementById('bass-drum');
const ctx2 = canvas2.getContext('2d');
canvas2.width = 1080;
canvas2.height = 720;

drawDrumSet();

function drawDrumSet() {
    drawCymbalStands();
    drawOneTom();
    drawTwoTom();
    drawBassDrum();
    drawSnareDrum();
    drawFloorTom();
    drawHighHatClosed();
    // drawHighHatOpen();
    drawCrashOne();
    drawCrashTwo();
    drawRide();
}

// cymbal stands
function drawCymbalStands() {
    // high hat stand
    ctx2.beginPath();
    ctx2.rect(400, 390, 5, 150);
    ctx2.fillStyle = "silver";
    ctx2.fill();
    ctx2.fillStroke = "black";
    ctx2.stroke();
    ctx2.closePath();

    ctx2.beginPath();
    ctx2.moveTo(400, 540);
    ctx2.lineTo(408, 540);
    ctx2.lineTo(448, 565);
    ctx2.lineTo(440, 565);
    ctx2.closePath();
    ctx2.fillStyle = "silver";
    ctx2.fill();
    ctx2.strokeStyle = "black";
    ctx2.stroke();

    ctx2.beginPath();
    ctx2.moveTo(400, 540);
    ctx2.lineTo(408, 540);
    ctx2.lineTo(368, 565);
    ctx2.lineTo(360, 565);
    ctx2.closePath();
    ctx2.fillStyle = "silver";
    ctx2.fill();
    ctx2.strokeStyle = "black";
    ctx2.stroke();

    // ride cymbal stand below 675, 395
    ctx2.beginPath();
    ctx2.moveTo(672.5, 395);
    ctx2.lineTo(677.5, 395);
    ctx2.lineTo(677.5, 540);
    ctx2.lineTo(672.5, 540);
    ctx2.stroke();
    ctx2.fill();
    ctx2.closePath();

    ctx2.beginPath();
    ctx2.moveTo(677.5, 540);
    ctx2.lineTo(730, 570);
    ctx2.lineTo(725, 570);
    ctx2.lineTo(672.5, 540);
    ctx2.stroke();
    ctx2.fill();
    ctx2.closePath();

    ctx2.beginPath();
    ctx2.moveTo(677.5, 540);
    ctx2.lineTo(730, 570);
    ctx2.lineTo(725, 570);
    ctx2.lineTo(672.5, 540);
    ctx2.stroke();
    ctx2.fill();
    ctx2.closePath();

    ctx2.beginPath();
    ctx2.moveTo(672.5, 540);
    ctx2.lineTo(677.5, 540);
    ctx2.lineTo(630, 570);
    ctx2.lineTo(625, 570);
    ctx2.stroke();
    ctx2.fill();
    ctx2.closePath();

    // still need to make the lower parts of the crash one
    // and crash two stands, along with the tops.
}

// bass drum
function drawBassDrum() {

    // shell of the bass drum
    ctx2.beginPath();
    ctx2.arc(540, 500.75, 70, 0, 2 * Math.PI);
    ctx2.closePath();
    ctx2.fillStyle = "#ff4d4d";
    ctx2.fill();
    ctx2.stroke();

    // batter head of the drum
    ctx2.beginPath();
    ctx2.arc(540, 500.75, 65, 0, 2 * Math.PI);
    ctx2.closePath();
    ctx2.fillStyle = "#f5f5f5";
    ctx2.fill();
    ctx2.stroke();
}

function drawSnareDrum() {

    // shell of the drum
    ctx2.beginPath();
    ctx2.rect(430, 445, 100, 31);
    ctx2.fillStyle = "#a3a3a3"
    ctx2.fill();
    ctx2.strokeStyle = "black"
    ctx2.stroke();
    ctx2.closePath();

    // bottom of the drum
    ctx2.beginPath();
    ctx2.ellipse(480, 475, 25, 50, 1.5 * Math.PI, 1.5 * Math.PI, .5 * Math.PI, true);
    ctx2.strokeStyle = "black"
    ctx2.stroke();
    ctx2.fillStyle = "#a3a3a3";
    ctx2.fill();
    ctx2.closePath();

    // top shell ring of the drum
    ctx2.beginPath();
    ctx2.ellipse(480, 445, 25, 50, .5 * Math.PI, 0, 2 * Math.PI);
    ctx2.stroke();
    ctx2.closePath();
    ctx2.fillStyle = "#a3a3a3";
    ctx2.fill();

    // drum head
    ctx2.beginPath();
    ctx2.ellipse(480, 445, 20, 45, .5 * Math.PI, 0, 2 * Math.PI);
    ctx2.strokeStyle = "black"
    ctx2.stroke();
    ctx2.closePath();
    ctx2.fillStyle = "#f5f5f5";
    ctx2.fill();
}

function drawOneTom() {

    // shell of the drum
    ctx2.beginPath();
    ctx2.rect(465, 400, 70, 31);
    ctx2.fillStyle = "#ff4d4d"
    ctx2.fill();
    ctx2.strokeStyle = "black"
    ctx2.stroke();
    ctx2.closePath();

    // bottom of the drum
    ctx2.beginPath();
    ctx2.ellipse(500, 430, 20, 35, 1.5 * Math.PI, 1.5 * Math.PI, .5 * Math.PI, true);
    ctx2.strokeStyle = "black"
    ctx2.stroke();
    ctx2.fillStyle = "#ff4d4d";
    ctx2.fill();
    ctx2.closePath();

    // top ring of the drum
    ctx2.beginPath();
    ctx2.ellipse(500, 395, 20, 35, .5 * Math.PI, 0, 2 * Math.PI);
    ctx2.strokeStyle = "#black"
    ctx2.stroke();
    ctx2.fillStyle = "#ff4d4d";
    ctx2.fill();
    ctx2.closePath();

    // drum head
    ctx2.beginPath();
    ctx2.ellipse(500, 395, 15, 30, .5 * Math.PI, 0, 2 * Math.PI);
    ctx2.strokeStyle = "black"
    ctx2.stroke();
    ctx2.fillStyle = "#f5f5f5";
    ctx2.fill();
    ctx2.closePath();
}

function drawTwoTom() {

    // shell of the drum
    ctx2.beginPath();
    ctx2.rect(540, 400, 70, 31);
    ctx2.fillStyle = "#ff4d4d"
    ctx2.fill();
    ctx2.strokeStyle = "black"
    ctx2.stroke();
    ctx2.closePath();

    // bottom of the drum
    ctx2.beginPath();
    ctx2.ellipse(575, 430, 20, 35, 1.5 * Math.PI, 1.5 * Math.PI, .5 * Math.PI, true);
    ctx2.strokeStyle = "#black"
    ctx2.stroke();
    ctx2.fillStyle = "#ff4d4d";
    ctx2.fill();
    ctx2.closePath();

    // top ring of the drum
    ctx2.beginPath();
    ctx2.ellipse(575, 395, 20, 35, .5 * Math.PI, 0, 2 * Math.PI);
    ctx2.strokeStyle = "#black"
    ctx2.stroke();
    ctx2.fillStyle = "#ff4d4d";
    ctx2.fill();
    ctx2.closePath();

    // drum head
    ctx2.beginPath();
    ctx2.ellipse(575, 395, 15, 30, .5 * Math.PI, 0, 2 * Math.PI);
    ctx2.strokeStyle = "black"
    ctx2.stroke();
    ctx2.fillStyle = "#f5f5f5";
    ctx2.fill();
    ctx2.closePath();
}

function drawFloorTom() {

    // shell of the drum
    ctx2.beginPath();
    ctx2.rect(555, 445, 100, 81);
    ctx2.fillStyle = "#ff4d4d"
    ctx2.fill();
    ctx2.strokeStyle = "black"
    ctx2.stroke();
    ctx2.closePath();
    
    // bottom of the drum
    ctx2.beginPath();
    ctx2.ellipse(605, 525, 25, 50, 1.5 * Math.PI, 1.5 * Math.PI, .5 * Math.PI, true);
    ctx2.strokeStyle = "black"
    ctx2.stroke();
    ctx2.fillStyle = "#ff4d4d";
    ctx2.fill();
    ctx2.closePath();

    // top ring of the drum
    ctx2.beginPath();
    ctx2.ellipse(605, 445, 25, 50, .5 * Math.PI, 0, 2 * Math.PI);
    ctx2.strokeStyle = "#black"
    ctx2.stroke();
    ctx2.fillStyle = "#ff4d4d";
    ctx2.fill();
    ctx2.closePath();

    // drum head
    ctx2.beginPath();
    ctx2.ellipse(605, 445, 20, 45, .5 * Math.PI, 0, 2 * Math.PI);
    ctx2.strokeStyle = "black"
    ctx2.stroke();
    ctx2.fillStyle = "#f5f5f5";
    ctx2.fill();
    ctx2.closePath();
}

function drawHighHatClosed() {
    // bottom high hat
    ctx2.beginPath();
    ctx2.ellipse(400, 425, 10, 50, 1.5 * Math.PI, 1.5 * Math.PI, .5 * Math.PI, true);
    ctx2.strokeStyle = "black"
    ctx2.stroke();
    ctx2.fillStyle = "#d9c46d";
    ctx2.fill();
    ctx2.closePath();

    // top high hat
    ctx2.beginPath();
    ctx2.ellipse(400, 425, 10, 50, .5 * Math.PI, 1.5 * Math.PI, .5 * Math.PI, true);
    ctx2.strokeStyle = "black"
    ctx2.stroke();
    ctx2.fillStyle = "#d9c46d";
    ctx2.fill();
    ctx2.closePath();

    // line between the two hats to look like two cymbals
    ctx2.beginPath();
    ctx2.moveTo(350, 425);
    ctx2.lineTo(450, 425);
    ctx2.strokeStyle = "black";
    ctx2.stroke();
    ctx2.closePath();
}

function drawHighHatOpen() {
    // bottom high hat
    ctx2.beginPath();
    ctx2.ellipse(400, 425, 10, 50, 1.5 * Math.PI, 1.5 * Math.PI, .5 * Math.PI, true);
    ctx2.strokeStyle = "black"
    ctx2.stroke();
    ctx2.fillStyle = "#d9c46d";
    ctx2.fill();
    ctx2.closePath();

    // top high hat
    ctx2.beginPath();
    ctx2.ellipse(400, 420, 10, 50, .5 * Math.PI, 1.5 * Math.PI, .5 * Math.PI, true);
    ctx2.strokeStyle = "black"
    ctx2.stroke();
    ctx2.fillStyle = "#d9c46d";
    ctx2.fill();
    ctx2.closePath();

    // two lines to make the high hats look better
    ctx2.beginPath();
    ctx2.moveTo(350, 420);
    ctx2.lineTo(450, 420);
    ctx2.strokeStyle = "black";
    ctx2.stroke();
    ctx2.closePath();

    ctx2.beginPath();
    ctx2.moveTo(350, 425);
    ctx2.lineTo(450, 425);
    ctx2.strokeStyle = "black";
    ctx2.stroke();
    ctx2.closePath();
}

function drawCrashOne() {
    // unhit crash cymbal
    ctx2.beginPath();
    ctx2.ellipse(460, 355, 15, 50, .5 * Math.PI, 0, 2 * Math.PI);
    ctx2.strokeStyle = "black"
    ctx2.stroke();
    ctx2.fillStyle = "#d9c46d";
    ctx2.fill();
    ctx2.closePath();

    // bell on the crash cymbal
    ctx2.beginPath();
    ctx2.ellipse(460, 352, 3.5, 10, .5 * Math.PI, 0, 2 * Math.PI);
    ctx2.strokeStyle = "black"
    ctx2.stroke();
    ctx2.fillStyle = "#d9c46d";
    ctx2.fill();
    ctx2.closePath();
}

function drawCrashTwo() {
    // unhit crash cymbal
    ctx2.beginPath();
    ctx2.ellipse(575, 350, 15, 50, .5 * Math.PI, 0, 2 * Math.PI);
    ctx2.strokeStyle = "black"
    ctx2.stroke();
    ctx2.fillStyle = "#d9c46d";
    ctx2.fill();
    ctx2.closePath();

    // bell on the crash cymbal
    ctx2.beginPath();
    ctx2.ellipse(575, 347, 3.5, 10, .5 * Math.PI, 0, 2 * Math.PI);
    ctx2.strokeStyle = "black"
    ctx2.stroke();
    ctx2.fillStyle = "#d9c46d";
    ctx2.fill();
    ctx2.closePath();
}

function drawRide() {
    // unhit ride cymbal
    ctx2.beginPath();
    ctx2.ellipse(675, 395, 20, 60, .5 * Math.PI, 0, 2 * Math.PI);
    ctx2.strokeStyle = "black"
    ctx2.stroke();
    ctx2.fillStyle = "#d9c46d";
    ctx2.fill();
    ctx2.closePath();

    // bell on the ride cymbal
    ctx2.beginPath();
    ctx2.ellipse(675, 392, 5, 15, .5 * Math.PI, 0, 2 * Math.PI);
    ctx2.strokeStyle = "black"
    ctx2.stroke();
    ctx2.fillStyle = "#d9c46d";
    ctx2.fill();
    ctx2.closePath();

    // top of the ride cymbal stand
    ctx2.beginPath();
    ctx2.moveTo(672.5, 390);
    ctx2.lineTo(677.5, 390);
    ctx2.lineTo(677.5, 365);
    ctx2.lineTo(672.5, 365);
    ctx2.strokeStyle = "black"
    ctx2.stroke();
    ctx2.fillStyle = "silver";
    ctx2.fill();
    ctx2.closePath();
}