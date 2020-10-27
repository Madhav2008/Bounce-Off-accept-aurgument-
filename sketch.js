var fixedrect, movingrect;

function setup() {
    createCanvas(800, 400);
    fixedrect = createSprite(400, 100, 50, 80);
    fixedrect.shapeColor = "red";
    movingrect = createSprite(400, 200, 50, 50);
    movingrect.shapeColor = "blue";
    movingrect.velocityY = -5;
    fixedrect.velocityY = 5;

}

function draw() {
    background(0, 0, 0);

    bounceOff(movingrect, fixedrect);
    drawSprites();
}

function bounceOff(movingrect, fixedrect) {
    if (movingrect.x - fixedrect.x < fixedrect.width / 2 + movingrect.width / 2 && fixedrect.x - movingrect.x < fixedrect.width / 2 + movingrect.width / 2) {
        movingrect.velocityX = movingrect.velocityX * (-1);
        fixedrect.velocityX = fixedrect.velocityX * (-1);
    }
    if (movingrect.y - fixedrect.y < fixedrect.width / 2 + movingrect.width / 2 && fixedrect.y - movingrect.y < fixedrect.width / 2 + movingrect.width / 2) {
        movingrect.velocityY = movingrect.velocityY * (-1);
        fixedrect.velocityY = fixedrect.velocityY * (-1);
    }
}