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

let s
let scl = 20
let food
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
  s = new Snake()
  frameRate(20)
  pickLocation()
}
function pickLocation() {
  let cols = floor(width / scl)
  let rows = floor(height / scl)
  food = createVector(floor(random(cols)), floor(random(rows)))
  food.mult(scl)
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1)
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1)
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0)
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0)
  }
}

function draw() {
  background(102, 0, 0)

  if (s.eat(food)) {
    pickLocation()
  }
  s.death()
  s.update()
  s.show()
noStroke()
  fill(255, 255, 0)
  rect(food.x, food.y, scl, scl)
   
}

function windowResized() {
  setup()
}
