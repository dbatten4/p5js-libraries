class Ring {

    constructor(center, radius, density) {
        this.x = center.x
        this.y = center.y
        this.r = radius
        this.d = density
        this.particles = []
        this.generateRing()
    }

    generateRing() {
        for (var i = 0; i < TWO_PI; i += TWO_PI / this.d) {
            let xp = this.x + this.r * cos(i);
            let yp = this.y + this.r * sin(i);
            let direction = createVector(xp - this.x, yp - this.y).normalize()

            let p = new RingParticle(xp, yp, direction)
            this.particles.push(p)
        }
    }

    rotate() {
        for (var i = 0; i < this.particles.length; i++) {
            let p = this.particles[i]
            p.rotate()
        }
    }

    jiggle(factor, displacement) {
        for (var i = 0; i < this.particles.length; i++) {
            let p = this.particles[i]
            if (!p.isBurst) {
                p.jiggle(factor, displacement)
            }
        }
    }

    burstParticle(max = 1, min = 0.5) {
        let unburstParticles = this.particles.filter(p => !p.isBurst)
        if (unburstParticles.length) {
            let index = parseInt(random(unburstParticles.length))
            let p = unburstParticles[index]
            p.burst(random(min, max))
        }
    }

    pulse() {
        let unburstParticles = this.particles.filter(p => !p.isBurst)
        for (var i = 0; i < unburstParticles.length; i++) {
            let p = unburstParticles[i]
            p.pulse()
        }
    }

    burst(max = 1, min = 0.5) {
        //for (var i = 0; i < this.particles.length; i++) {
            //let p = this.particles[i]
            //p.burst(random(min, max))
        //}
        let unburstParticles = this.particles.filter(p => !p.isBurst)
        for (var i = 0; i < unburstParticles.length; i++) {
            let p = unburstParticles[i]
            p.burst(random(min, max))
        }
    }

    update() {
        for (var i = 0; i < this.particles.length; i++) {
            let p = this.particles[i]
            p.setDirection(this.x, this.y)
            p.update()
        }
    }

    display() {
        for (var i = 0; i < this.particles.length; i++) {
            let p = this.particles[i]
            p.display()
        }
    }

}
