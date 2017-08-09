class Grid {

    constructor(xnum, ynum, rad, vertexRad) {
        this.xn = 2 * xnum + 1
        this.yn = ynum + 1
        this.r = rad
        this.vr = vertexRad

        this.x = width / 2 - Math.sqrt(3) * this.r / 2 * (1 - (3 - this.xn) / 2)
        this.y = height / 2 + this.r * (1 - 3 * this.yn / 4)

        this.vertices = []
        this.generateGrid()

        this.a = 5
    }

    generateGrid() {
        let r = this.r
        let a = 10
        let id = 1

        for (var i = 0; i < this.xn; i++) {
            let yprev = -2 * r + (i % 2) * r / 2
            for (var j = 1; j < this.yn + 1; j++) {
                let y = this.y + yprev + (1 + (i + j) % 2) * r
                yprev = y - this.y
                let x = this.x + i * Math.sqrt(3) * r / 2

                let d = createVector(x - width / 2, y - height / 2).normalize()

                let v = new Vertex(x, y, this.vr, 0, d, id)
                v.applyForce(d.mult(random(1, 5)))
                this.vertices.push(v)
                id ++
            }
            a += 20
        }
    }

    populateNeighbouringVertices() {
        for (var i = 0; i < this.vertices.length; i++) {
            let v = this.vertices[i]
            let ns = this.getNeighbouringVerticesFor(v)
            for (var j = 0; j < ns.length; j++) {
                let n = ns[i]
                v.neighbours.push({
                    v: n,
                    c: 0
                })
            }
        }
    }

    getNeighbouringVerticesFor(v) {
        return this.vertices.filter(i => {
            let d = v.pos.dist(i.pos)
            return d <= this.r && d > 0
        })
    }

    drawRandomEdge() {
        let v1 = this.getRandomElementFrom(this.vertices)

        let neighbours = this.getNeighbouringVerticesFor(v1)

        let v2 = this.getRandomElementFrom(neighbours)

        line(v1.pos.x, v1.pos.y, v2.pos.x, v2.pos.y)
    }

    update() {
        for (var i = 0; i < this.vertices.length; i++) {
            let v = this.vertices[i]
            //v.pulse()
            //v.radiate()
            this.collisionCheck(v)
            v.update()
        }
    }

    collisionCheck(vertex) {
        let others = this.vertices.filter(i => i.id !== vertex.id)

        for (var i = 0; i < others.length; i++) {
            let o = others[i]
            if (vertex.pos.dist(o.pos) <= 2 * this.vr) {
                vertex.applyForce(p5.Vector.random2D())
            }
        }
    }

    getRandomElementFrom(arr) {
        return arr[Math.floor(Math.random() * arr.length)]
    }

    display() {
        for (var i = 0; i < this.vertices.length; i++) {
            let v = this.vertices[i]
            v.display()
        }
    }

}
