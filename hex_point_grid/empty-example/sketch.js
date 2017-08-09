var r = 65
var vr = 5
var g

function setup() {
    createCanvas(windowWidth, windowHeight)

    noFill()

    //frameRate(2)

    background(0)
    stroke(179, 215, 255)
    strokeWeight(3)

    g = new Grid(1, 1, r, vr)
}

function draw() {
    background(0)
    g.update()
    g.display()
}
