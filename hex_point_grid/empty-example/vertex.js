class Vertex {

    constructor(x, y) {
        this.pos = createVector(x, y)
        this.vel = createVector(0, 0)
        this.acc = createVector(0, 0)
    }

    applyForce(force) {
        this.acc.add(force)
    }

    spot() {
        noFill()
        ellipse(this.pos.x, this.pos.y, 10, 10)
    }

    update() {
        this.vel.add(this.acc)
        this.pos.add(this.vel)
        this.acc.mult(0)
    }

    display() {
        point(this.pos.x, this.pos.y)
    }

}


