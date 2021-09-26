const settings = {
  sketch: {
    parent: { id: `container` },
    dimensions: {
      width: 0,
      height: 0
    },
    background: "#000"
  }
}

/*
  ======================================
    P5 Sketch starts from here. Everything
    you do inside this sketch deals with canvas.
  ======================================
*/

function preload() {}

function setup() {
  let container = document.getElementById(`${settings.sketch.parent.id}`)
  let canvas = createCanvas(container.offsetWidth,container.offsetHeight,WEBGL)
  settings.sketch.dimensions.width = container.offsetWidth
  settings.sketch.dimensions.height = container.offsetHeight
  canvas.parent(`${settings.sketch.parent.id}`)
  angleMode(DEGREES)
}

function draw() {
  background(0)

  rotateX(60)
  noFill()

  stroke(255)

  for (var i = 0; i < 40; i++) {
    var r = map(sin(frameCount/2), -1, 1, 0, 255)
    var g = map(i, 0, 40, 0, 255)
    var b = map(cos(frameCount/2), -1, 1, 255, 0)

    stroke(r, g, b)

    rotate(frameCount/50)

    beginShape()
    for (var j = 0; j < 360; j += 60) {
      var rad = i * 8
      var x = rad * cos(j)
      var y = rad * sin(j)
      var z = sin(frameCount *2 + i * 8) * 60

      vertex(x, y, z)
    }
    endShape(CLOSE)
  }
}

function windowResized() {
  setup()
}
