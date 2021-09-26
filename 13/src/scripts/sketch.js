const settings = {
  sketch: {
    parent: { id: `container` },
    dimensions: {
      width: 0,
      height: 0
    },
    background: "#100000   "
  }
}

/*
  ======================================
    P5 Sketch starts from here. Everything
    you do inside this sketch deals with canvas.
  ======================================
*/
var points = []
var mult = 0.005
 

var r1
var r2
var g1
var g2
var b1
var b2

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
  noiseDetail(1)
  

  var density = 40
  var space = width / density
  for (var x = 0; x < width; x += space) {
    for (var y = 0; y < height; y += space) {
      var p = createVector(x + random(-20, 20), y + random(-10, 10))
      points.push(p)
    }
  }

shuffle(points , true)

r1  = random (255)
r2  = random (255)
 g1 = random (255)
 g2 = random (255)
 b1 = random (255)
 b2 = random (255)

 mult = random(0.002 , 0.01)

}

function draw() {
  noStroke()

  if(frameCount* 2 <= points.length){
    var max = frameCount * 2
  }else{
    var max = points.length
  }


  

  for (var i = 0; i < points.length; i++) {
    var r = map(points[i].x, 0, width, r1, r2)
    var g = map(points[i].y, 0, height,g1, g2)
    var b = map(points[i].x, 0, width, b1, b2)
    var alpha = map(dist(width/2 ,height /2 ,points[i].x , points[i].y) ,0 , 350 , 400 ,0)

    fill(r, g, b,alpha)

    var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720)

    points[i].add(createVector(cos(angle), sin(angle)))
    if (dist(width / 2, height / 2, points[i].x, points[i].y) < 200) {
      ellipse(points[i].x, points[i].y, 1)
    }
  }
}
function mouseClicked(){
  saveCanvas('flowfield' , 'png')
}

function windowResized() {
  setup()
}
