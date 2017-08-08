class Grid {

    constructor(xnum, ynum, rad) {
        this.xn = 2 * xnum + 1
        this.yn = ynum + 1
        this.r = rad

        this.x = width / 2 - Math.sqrt(3) * this.r  / 2 * (1 - (3 - this.xn) / 2)
        this.y = height / 2 + this.r * (1 - 3 * this.yn / 4)

        this.vertices = []
        this.generateGrid()
    }

    generateGrid() {
        for (var i = 0; i < this.xn; i++) {
            let yprev = -2 * r + (i % 2) * this.r / 2
            for (var j = 1; j < this.yn + 1; j++) {
                let y = this.y + yprev + (1 + (i + j) % 2) * this.r
                yprev = y - this.y
                let x = this.x + i * Math.sqrt(3) * this.r / 2

                let v = new Vertex(x, y)
                this.vertices.push(v)
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
        let v1 = this.getRandomElement(this.vertices)

        let neighbours = this.getNeighbouringVerticesFor(v1)

        let v2 = this.getRandomElement(neighbours)

        line(v1.pos.x, v1.pos.y, v2.pos.x, v2.pos.y)
    }

    update() {
    }

    getRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)]
    }

    display() {
        for (var i = 0; i < this.vertices.length; i++) {
            let v = this.vertices[i]
            v.display()
        }
    }

}
