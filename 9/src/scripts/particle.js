class Particle {
  constructor(pos , c) {
    this.pos = createVector(pos.x , pos.y , pos.z)
    this.vel = p5.Vector.random3D().normalize().mult(random(4, 6))

  this.c = c

  this.w = random(4 , 10)

  }
  update() {
    this.pos.add(this.vel)
  }
  show() {
    push()

    noStroke()
    fill(this.c)

    translate(this.pos.x, this.pos.y, this.pos.z)
    sphere(this.w)

    pop()
  }
}
