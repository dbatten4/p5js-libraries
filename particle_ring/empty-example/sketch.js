var ring
var center

function setup() {
    createCanvas(windowWidth, windowHeight)
    center = createVector(width / 2, height / 2)

    randomSeed(1)

    stroke(179, 215, 255)
    strokeWeight(4)
    ring = new Ring(center, 100, 500)
    //ring = new Ring(center, 100, 3)
    //ring = new Ring(center, 100, 8)
    ring.jiggle(2, 5)
    //ring.rotate()
}

function draw() {
    background(0)
    //if (random(1) > 0.97) {
        //ring.burstParticle(1, 1)
    //}
    //if (random(1) > 0.995) {
        //ring.burst(7, 3)
    //}
    ring.update()
    ring.display()
}
