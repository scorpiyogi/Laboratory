const settings = {
  sketch: {
    parent: { id: `container` },
    dimensions: {
      width: 0,
      height: 0
    },
    background: "#1a0000"
  }
}

/*
  ======================================
    P5 Sketch starts from here. Everything
    you do inside this sketch deals with canvas.
  ======================================
*/
var n = 0

var c = 5.67

function preload() {}

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
  background(settings?.sketch?.background)
}

function draw() {
  var a = n * -41.42
  var r = c * sqrt(n)

  var x = r * cos(a) + width / 2
  var y = r * sin(a) + height / 2

  fill(n % 255, 77, 77)
  noStroke()
  ellipse(x, y, 6, 6)

  n++
}

function windowResized() {
  setup()
}
