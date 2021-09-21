const settings = {
  sketch: {
    parent: { id: `container` },
    dimensions: {
      width: 0,
      height: 0
    },
    background: "#49ABF7"
  }
}

/*
  ======================================
    P5 Sketch starts from here. Everything
    you do inside this sketch deals with canvas.
  ======================================
*/
let size = 200
let angle = 150

let animate = 1

function preload() {}

function setup() {
  let container = document.getElementById(`${settings.sketch.parent.id}`)
  let canvas = createCanvas(container.offsetWidth, container.offsetHeight)
  settings.sketch.dimensions.width = container.offsetWidth
  settings.sketch.dimensions.height = container.offsetHeight
  canvas.parent(`${settings.sketch.parent.id}`)
  angleMode(DEGREES)
  colorMode(RGB)
  rectMode(CENTER)
  ellipseMode(CENTER)
  textAlign(CENTER, CENTER)
  smooth()
}

function draw() {
  background(0)

  strokeWeight(1)
  translate(width / 2, height * 0.5)
  rotate(-90)
  createFractal(size, angle)
  if (animate == 1) {
    angle += 10
  }

}
function createFractal(size, angle) {
  if (size > 10) {
    stroke(255, 250 - size, 0)
    strokeWeight(map(size, 0, 180, 0, 10, true))
    //Up Right
    push()
    rotate(radians(angle))
    line(0, 0, size, 0)
    translate(size, 0)
    createFractal(size / 2, angle)
    pop()
    //Down Right
    push()
    rotate(radians(-angle))
    line(0, 0, size, 0)
    translate(size, 0)
    createFractal(size / 2, angle)
    pop()
    //Up Left
    push()
    rotate(radians(angle * -3))
    line(0, 0, size, 0)
    translate(size, 0)
    createFractal(size / 2, angle)
    pop()
    //Down Left
    push()
    rotate(radians(angle * 3))
    line(0, 0, size, 0)
    translate(size, 0)
    createFractal(size / 2, angle)
    pop()
  }
}

function windowResized() {
  setup()
}
