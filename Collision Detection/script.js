/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red when the puck is over it
- the puck can't go beyond the arena borders
- create an item that makes the puck bigger
- create an item that makes the puck smaller

*/

var puck_x = 100;
var puck_y = 100;
var speed = 20;
var puck = document.getElementById('puck')

puck.style.left = puck_x +'px';
puck.style.top = puck_y +'px';

function log_coord() {
    console.log('x;' + puck_x + ' ' + 'y;' + puck_y);
}

function checkCollision() {
    if (puck_x >= 250 && puck_x <= 350 && puck_y >= 150 && puck_y <= 250) {
        console.log('collision')
        document.getElementById('gap').style.backgroundColor = 'red';
    }
    else {
        document.getElementById('gap').style.backgroundColor = 'white';
    }
}

function bigger() {
    if (puck_x >= 200 && puck_x <= 260 && puck_y >= 300 && puck_y <= 360) {
        document.getElementById('bigger').style.display = 'none';
        document.getElementById('puck').style.width = 30 +'px'
        document.getElementById('puck').style.height = 30 +'px'
    }
    else {
        document.getElementById('bigger').style.display = 'block';
    }
}

function smaller() {
    if (puck_x >= 300 && puck_x <= 360 && puck_y >= 50 && puck_y <= 110) {
        document.getElementById('smaller').style.display = 'none';
        document.getElementById('puck').style.width = 5 +'px'
        document.getElementById('puck').style.height = 5 +'px'
    }
    else {
        document.getElementById('smaller').style.display = 'block';
    }
}


document.getElementById('right').addEventListener('click', function() {
    puck_x += speed;
    if (puck_x >= 590) {
        puck_x = 590
    }
    puck.style.left = puck_x +'px';
    log_coord();
    checkCollision();
    bigger();
    smaller();
});

document.getElementById('left').addEventListener('click', function() {
    puck_x += -speed;
    if (puck_x <= 0) {
        puck_x = 0
    }
    puck.style.left = puck_x +'px';
    log_coord();
    checkCollision();
    bigger();
    smaller();
});

document.getElementById('up').addEventListener('click', function() {
    puck_y += -speed;
    if (puck_y <= 0) {
        puck_y = 0
    }
    puck.style.top = puck_y +'px';
    log_coord();
    checkCollision();
    bigger();
    smaller();
});

document.getElementById('down').addEventListener('click', function() {
    puck_y += speed;
    if (puck_y >= 390) {
        puck_y = 390
    }
    puck.style.top = puck_y +'px';
    log_coord();
    checkCollision();
    bigger();
    smaller();
});
