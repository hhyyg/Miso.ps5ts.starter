/// <reference path="../types/p5/global.d.ts"/>
/// <reference path="../types/p5/index.d.ts"/>

interface IPos {
    x: number;
    y: number;
}

let current: IPos = { x: 300, y: 300 };

function setup() {
    createCanvas(600, 600);
    colorMode(HSB, 360, 100, 100, 100);

    strokeWeight(1);
    stroke(180, 0, 0);
    noLoop();
}

function draw() {
    const speed = 20;
    const angle = 0;
    const stepSize = 3;

    for (let i = 0; i < speed; i++) {

        point(current.x, current.y);
        console.log(current.x + " " + current.y);

        current = {
            x: current.x + cos(radians(angle)) * stepSize,
            y: current.y + sin(radians(angle)) * stepSize };

    }
}
