function Particle(x, y) {
  this.x = x
  this.y = y

  this.history = []

  this.update = function () {
    this.x += random(-3, 15)
    this.y += random(3, -9)

    let v = createVector(this.x, this.y)
    this.history.push(v)
    if (this.history.length > 30) {
      this.history.splice(0, 5)
    }
  }
  this.show = function () {
    noStroke()
    fill(41, 102, 143)
    ellipse(this.x, this.y, 24, 24)

    for (let i = 0; i < this.history.length; i++) {
      let pos = this.history[i]
      fill(random(51))
      ellipse(pos.x, pos.y, i, i)
    }
  }

}
