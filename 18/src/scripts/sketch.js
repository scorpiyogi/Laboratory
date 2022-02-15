const settings = {
  sketch: {
    parent: { id: `container` },
    dimensions: {
      width: 0,
      height: 0
    },

    background: "#ff9999"
  },
  wave: {
    space: 10,
    amplitude: 200,
    particle: {
      color: "#990000",
      size: 30
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
  background(settings?.sketch?.background)

  translate(0, height * 0.5)
  for (let i = 0; i < width; i += settings.wave.space) {
    const x = i
    const y = settings.wave.amplitude * sin(frameCount - i)
    push()
    noStroke()
    fill(settings.wave.particle.color)
    ellipse(x, y, settings.wave.particle.size, settings.wave.particle.size)
    pop()
  }
}

function windowResized() {
  setup()
}
