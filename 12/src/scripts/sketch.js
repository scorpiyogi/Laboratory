const settings = {
  sketch: {
    parent: { id: `container` },
    dimensions: {
      width: 0,
      height: 0
    },
    background: "#000000"
  }
}

/*
  ======================================
    P5 Sketch starts from here. Everything
    you do inside this sketch deals with canvas.
  ======================================
*/
let x = 0
let y = 0
let spacing = 60

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

  background(0)

}
function draw() {
  stroke(255, 50, 0)
 
  if (random(1) < 0.7) {
    line(x, y, x + spacing, y + spacing)
  } else {
    line(x, y + spacing, x + spacing, y)
  }

  x = x + spacing
  if (x > width) {
    x = 0
    y = y + spacing
  }
}

function windowResized() {
  setup()
}
