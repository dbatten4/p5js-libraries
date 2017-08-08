var r = 70
var g

function setup() {
    createCanvas(windowWidth, windowHeight)

    frameRate(2)

    background(0)
    stroke(179, 215, 255)
    strokeWeight(3)

    g = new Grid(7, 5, r)
}

function draw() {
    background(0)
    g.display()
}
