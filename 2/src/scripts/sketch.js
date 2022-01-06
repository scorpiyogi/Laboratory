const settings = {
  sketch: {
    parent: { id: `container` },
    dimensions: {
      width: 0,
      height: 0
    },
    background: "#330000"
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
  background(settings?.sketch?.background)
}
function nextpoint() {
  let nextX
  let nextY

  let r = random(1)


  if (r < 0.05) {
    //1
    nextX = 0
    nextY = 0.16 * y
  } else if (r < 0.86) {
    //2
    nextX = 0.85 * x + 0.04 * y
    nextY = -0.04 * x + 0.85 * y + 1.6
  } else if (r < 0.93) {
    //3
    nextX = 0.20 * x + -0.26 * y
    nextY = 0.23 * x + 0.22 * y + 1.6
  } else {
    //4
    nextX = -0.15 * x + 0.28 * y
    nextY = 0.26 * x + 0.24 * y + 0.44
  }

  x = nextX
  y = nextY
}
function drawpoint() {
  colorMode(HSB ,255,0,0)

  stroke(map(y,0,9.9983,0,255),255,255,200)
  strokeWeight(1)
  px = map(x, -2.1820, 2.6558, 0, width)
  py = map(y, 0, 9.9983, height, 0)
  point(px, py)
}

function draw() {
  for (let i = 0; i < 1000; i++){
  drawpoint()
  nextpoint()
}
}
function windowResized() {
  setup()
}
