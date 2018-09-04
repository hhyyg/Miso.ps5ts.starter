/// <reference path="../types/p5/global.d.ts"/>
/// <reference path="../types/p5/index.d.ts"/>

interface IPos {
    x: number;
    y: number;
}

let current: IPos = { x: 0, y: 0 };

function setup() {
    createCanvas(600, 600);
    colorMode(HSB, 360, 100, 100, 100);
    strokeWeight(1);
    noStroke();
    noLoop();
}

function draw() {
    const stepSize = 1;
    const count = 800 * 300;

    for (let i = 0; i < count; i++) {
        step(stepSize);
        if (current.x > width) {
            current = { x: 0, y: current.y };
        }
        if (current.x < 0) {
            current = { x: width, y: current.y };
        }
        if (current.y > height) {
            current = { x: current.x, y: 0};
        }
        if (current.y < 0) {
            current = { x: current.x, y: height };
        }

        fill(0, 40);
        ellipse(current.x, current.y, 1, 1);

    }

}

function step(stepSize: number) {
    const type = int(random(0, 7));
    switch (type) {
        case 0:
            current = { x: current.x, y: current.y - stepSize };
            break;
        case 1:
            current = { x: current.x + stepSize, y: current.y - stepSize };
            break;
        case 2:
            current = { x: current.x + stepSize, y: current.y };
            break;
        case 3:
            current = { x: current.x + stepSize, y: current.y + stepSize };
            break;
        case 4:
            current = { x: current.x , y: current.y + stepSize };
            break;
        case 5:
            current = { x: current.x - stepSize, y: current.y + stepSize };
            break;
        case 6:
            current = { x: current.x - stepSize, y: current.y };
            break;
        case 7:
            current = { x: current.x - stepSize, y: current.y - stepSize };
            break;

        default:
            break;
    }
}
