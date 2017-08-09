class Vertex {

    constructor(x, y, r, a, d, id) {
        this.pos = createVector(x, y)
        this.pos0 = createVector(x, y)
        this.vel = createVector(0, 0)
        this.acc = createVector(0, 0)
        this.id = id

        this.neighbours = []
        this.r0 = r
        this.r = r
        this.a0 = a
        this.d = d
    }

    applyForce(force) {
        this.acc.add(force)
    }

    spot() {
        noFill()
        ellipse(this.pos.x, this.pos.y, 10, 10)
    }

    pulse() {
        this.r = this.r0 + 25 * map(sin(radians(this.a0)), -1, 1, 0, 1)

        this.a0 += 2.5
    }

    radiate() {
        let p0 = this.pos0.copy()
        let d = this.d.copy()
        let scalar = 20 * sin(radians(this.a0))

        this.pos = p0.add(d.mult(scalar))

        this.a0 += 2
    }

    update() {
        this.vel.add(this.acc)
        this.pos.add(this.vel)
        this.acc.mult(0)

        if (this.pos.x >= width || this.pos.x <= 0) {
            this.applyForce(createVector(-2 * this.vel.x, 0))
        }
        if (this.pos.y >= height || this.pos.y <= 0) {
            this.applyForce(createVector(0, -2 * this.vel.y))
        }
    }

    display() {
        ellipse(this.pos.x, this.pos.y, this.r, this.r)
    }

}
