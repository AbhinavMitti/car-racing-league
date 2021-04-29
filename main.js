canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');

car1_width = 100;
car1_height = 90;
car2_width = 100;
car2_height = 90;

background_image = "racingtrack.png";
car1_image = "car1.png";
car2_image = "car2.png";

car1_Y = 0;
car1_X = 0;
car2_Y = 100;
car2_X = 0;


function add() {
    background_imgtag = new Image();
    background_imgtag.onload = uploadBackground;
    background_imgtag.src = background_image;

    car1_imgtag = new Image();
    car1_imgtag.onload = uploadcar1;
    car1_imgtag.src = car1_image;

    car2_imgtag = new Image();
    car2_imgtag.onload = uploadcar2;
    car2_imgtag.src = car2_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgtag, car1_X, car1_Y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgtag, car2_X, car2_Y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == '38') {
        car1_up();
        console.log("up");
    }
    if (keypressed == '40') {
        car1_down();
        console.log("down");
    }
    if (keypressed == '37') {
        car1_left();
        console.log("left");
    }
    if (keypressed == '39') {
        car1_right();
        console.log("right");
    }
    if (keypressed == '87') {
        car2_up();
        console.log("key W");
    }
    if (keypressed == '83') {
        car2_down();
        console.log("key S");
    }
    if (keypressed == '65') {
        car2_left();
        console.log("key A");
    }
    if (keypressed == '68') {
        car2_right();
        console.log("key D");
    }
    if (car1_X > 700) {
        console.log("car1 Won");
        document.getElementById('game_status').innerHTML = "car 1 Won!!";
    }
    if (car2_X > 700) {
        console.log("car2 Won");
        document.getElementById('game_status').innerHTML = "car 2 Won!!";
    }
}

function car1_up() {
    if (car1_Y >= 0) {
        car1_Y = car1_Y - 10;
        console.log("when up arrow is pressed, x = " + car1_X + "| y = " + car1_Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_down() {
    if (car1_Y <= 500) {
        car1_Y = car1_Y + 10;
        console.log("when down arrow is pressed, x = " + car1_X + "| y = " + car1_Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_left() {
    if (car1_X >= 0) {
        car1_X = car1_X - 10;
        console.log("when left arrow is pressed, x = " + car1_X + "| y = " + car1_Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_right() {
    if (car1_X <= 700) {
        car1_X = car1_X + 10;
        console.log("when right arrow is pressed, x = " + car1_X + "| y = " + car1_Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_up() {
    if (car2_Y >= 0) {
        car2_Y = car2_Y - 10;
        console.log("when up arrow is pressed, x = " + car2_X + "| y = " + car2_Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_down() {
    if (car2_Y <= 500) {
        car2_Y = car2_Y + 10;
        console.log("when down arrow is pressed, x = " + car2_X + "| y = " + car2_Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_left() {
    if (car2_X >= 0) {
        car2_X = car2_X - 10;
        console.log("when left arrow is pressed, x = " + car2_X + "| y = " + car2_Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_right() {
    if (car2_X <= 700) {
        car2_X = car2_X + 10;
        console.log("when right arrow is pressed, x = " + car2_X + "| y = " + car2_Y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}




