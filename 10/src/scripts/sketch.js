const settings = {
  sketch: {
    parent: { id: `container` },
    dimensions: {
      width: 0,
      height: 0
    },
    background: "#1a0500"

  }
}

/*
  ======================================
    P5 Sketch starts from here. Everything
    you do inside this sketch deals with canvas.
  ======================================
*/

function preload() {}
var angle 
var slider

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
  slider = createSlider(0, 50 * PI, PI / 4, 0.01)
  slider.position(200, 100);
}

 function draw() { 
  background(settings?.sketch?.background)
  angle = slider.value();
  translate(width/2, 500);
  branch(100);

  
}

function branch(len) {
stroke (255, 71, 26);
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len >6 ) {
  push();
  rotate(angle);
  branch(len * 0.75)
  pop();
  push();
  rotate(-angle);
  branch(len * 0.75)
  pop();  
  }
}

function windowResized() {
  setup()
}
