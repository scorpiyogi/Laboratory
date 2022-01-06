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

function setup() {
  let container = document.getElementById(`${settings.sketch.parent.id}`)
  let canvas = createCanvas(container.offsetWidth, container.offsetHeight)
  settings.sketch.dimensions.width = container.offsetWidth
  settings.sketch.dimensions.height = container.offsetHeight
  canvas.parent(`${settings.sketch.parent.id}`)

  pixelDensity(1)
  let maxiterations = 100
  loadPixels()
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let a = map(x, 0, width, -2.5, 2.5)
      let b = map(y, 0, height, -1, 1)

      let ca = a
      let cb = b

      let n = 0

      while (n < maxiterations) {
        let aa = a * a - b * b
        let bb = 2 * a * b
        a = aa + ca
        b = bb + cb
        if (a + b > 16) {
          break
        }

        n++
      }
      let bright = map(n, 0, maxiterations, 0, 255)

      if (n == maxiterations) {
        bright = 0
      }

      let pix = (x + y * width) * 4
      pixels[pix + 0] = bright
      pixels[pix + 1] = bright
      pixels[pix + 2] = bright
      pixels[pix + 3] = 255
    }
  }
  updatePixels()
}

function draw() {}

function windowResized() {
  setup()
}
