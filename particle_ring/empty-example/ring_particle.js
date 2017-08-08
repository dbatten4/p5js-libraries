class RingParticle extends Particle {

    constructor(x, y, direction) {
        super(x, y)
        this.x0 = x
        this.y0 = y
        this.dir = direction

        this.isBurst = false
        this.rotating = false
        this.jiggling = false
    }

    setDirection(x, y) {
        let dir = createVector(this.pos.x - x, this.pos.y - y).normalize()
        this.dir = dir
    }

    burst(burstSpeed, easing = null) {
        if (this.isBurst) {
            return false
        }

        let d = this.dir
        this.applyForce(d.mult(burstSpeed))
        this.isBurst = true
        this.jiggling = false
    }

    rotate() {
        this.rotating = true
    }

    pulse() {
        //console.log('here')
        //this.applyForce(this.dir)
        //this.acc.add(this.dir.x * 10, this.dir.y * 10)
    }

    update() {
        if (this.rotating) {
            this.pos.add(createVector(this.dir.y, -this.dir.x))
            this.x0 = this.pos.x
            this.y0 = this.pos.y
        }

        if (this.jiggling) {
            this.performJiggle()
        }

        super.update()
    }

    jiggle(factor, displacement) {
        this.jf = factor
        this.jd = displacement
        this.jiggling = true
    }

    performJiggle() {
        this.pos.x = this.pos.x + random(-1, 1) * this.jf
        this.pos.y = this.pos.y + random(-1, 1) * this.jf

        this.pos.x = constrain(this.pos.x, this.x0 - this.jd, this.x0 + this.jd)
        this.pos.y = constrain(this.pos.y, this.y0 - this.jd, this.y0 + this.jd)
    }

}
