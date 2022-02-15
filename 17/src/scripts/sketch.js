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

function preload() {}

let max_distance

function setup() {
  let container = document.getElementById(`${settings.sketch.parent.id}`)
  let canvas = createCanvas(container.offsetWidth, container.offsetHeight)
  settings.sketch.dimensions.width = container.offsetWidth
  settings.sketch.dimensions.height = container.offsetHeight
  canvas.parent(`${settings.sketch.parent.id}`)
  angleMode(DEGREES)
  colorMode(HSB)
  rectMode(CENTER)
  ellipseMode(CENTER)
  textAlign(CENTER, CENTER)
  smooth()

  max_distance = dist(0, 0, width, height)
}

function draw() {
  background(map(mouseX, 0, width, 0, 100), map(mouseY, 0, height, 0, 100), map(mouseX + mouseY, 0, width + height, 0, 100))

  for (let i = 0; i <= width + 30; i += 30) {
    for (let j = 0; j <= height + 20; j += 20) {
      let size = dist(mouseX, mouseY, i, j)
      size = (size / max_distance) * 100
      fill(0)

      circle(i, j, size)
    }
  }
}

function windowResized() {
  setup()
}
