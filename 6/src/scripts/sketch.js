const settings = {
  sketch: {
    parent: { id: `container` },
    dimensions: {
      width: 0,
      height: 0
    }
  }
}

/*
  ======================================
    P5 Sketch starts from here. Everything
    you do inside this sketch deals with canvas.
  ======================================
*/

function preload() {}

let t = 0
let NUM_LINES = 100

function setup() {
  let container = document.getElementById(`${settings.sketch.parent.id}`)
  let canvas = createCanvas(container.offsetWidth, container.offsetHeight)
  settings.sketch.dimensions.width = container.offsetWidth
  settings.sketch.dimensions.height = container.offsetHeight
  canvas.parent(`${settings.sketch.parent.id}`)
  colorMode(RGB)
  rectMode(CENTER)
  ellipseMode(CENTER)
  textAlign(CENTER, CENTER)
  smooth()
}

function draw() {
  background(220)
  stroke(15, 15, 15)
  strokeWeight(2)

  translate(width / 2, height / 2)

  for (let i = 0; i < NUM_LINES; i++) {
    line(x1(t + i), y1(t + i), x2(t + i), y2(t + i))
  }

  t += 0.15
}

function x1(t) {
  return sin(t / 10) * 100 + sin(t / 5) * 20
}

function y1(t) {
  return cos(t / 10)
}

function x2(t) {
  return sin(t / 10) * 200 + sin(t) * 2
}

function y2(t) {
  return cos(t / 20) * 200 + cos(t / 12) * 20
}

function windowResized() {
  setup()
}
