const settings = {
  sketch: {
    parent: { id: `container` },
    dimensions: {
      width: 0,
      height: 0
    },
   
  }
}

/*
  ======================================
    P5 Sketch starts from here. Everything
    you do inside this sketch deals with canvas.
  ======================================
*/
particles = []
function preload() {}

function setup() {
  let container = document.getElementById(`${settings.sketch.parent.id}`)
  let canvas = createCanvas(
    container.offsetWidth,
    container.offsetHeight,
    WEBGL
  )
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
  background(0, 0, 0)

  rotateX (sin(frameCount/6) * 360)
  rotateY (cos(frameCount/6) * 360)

 translate( 0 ,0 ,sin(frameCount)*100)


 directionalLight([255], createVector(0, 0, -1))

  if (random(1) > 0.98) {
  
 var x = random(-100 , 150)
var y = random (-100, 150)
var z = random (-100,150)
 var pos = createVector(x , y , z)


    for (var i = 0; i < 150; i++) {

     var r = map(sin(frameCount/2), -1 ,-1 , 0 , 255) + random(-100,250,0)
     var g = map(sin(frameCount/4), -1 ,-1 , 0 , 0) + random(-50,50)
     var b = map(sin(frameCount/6), -1 ,255 , 0 , 0) + random(-50,255)

        var c = color(r,g,b)

      var p = new Particle(pos , c)
      particles.push(p)
    }
  }

  for (var i = particles.length - 1; i >= 0; i--) {
    if (
      dist(particles[i].pos.x , particles[i].pos.y , particles[i].pos.z, 0 , 0 , 0) < 500 ) {

      particles[i].update()
      particles[i].show()

    }else{
      particles.splice(i,1)
    }
  }
}

function windowResized() {
  setup()
}
