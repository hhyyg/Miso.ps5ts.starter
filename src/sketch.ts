/// <reference path="../types/p5/global.d.ts"/>
/// <reference path="../types/p5/index.d.ts"/>

interface IPos {
    x: number;
    y: number;
}

let current: IPos = { x: 0, y: 0 };
function setup() {
    createCanvas(600, 600);
    rectMode(CENTER);

}

function draw() {
    rect(100, 100, 100, 100);
    rect(100, 300, 20, 20);
}
