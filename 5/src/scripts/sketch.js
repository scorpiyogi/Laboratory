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
  angleMode(DEGREES)
}

function draw() {
  background(settings?.sketch?.background)


  



  translate(width/2, height/2)
  rotate(-90)
  let hr = hour()
  let mn = minute()
  let sc = second()
  let ms= millis()

  

  strokeWeight(8)
  stroke(255, 100, 150)
  noFill()


  stroke(204, 0, 102)
  let millisecondAngle = map(ms, 0 , 1000 , 0 ,360)
  arc (0 , 0 , 320 ,320 , 0 ,millisecondAngle )


stroke(255, 100, 150)
  let secondAngle = map(sc, 0, 59, 0, 360)
  arc( 0, 0, 300, 300, 0, secondAngle)

  stroke(150, 100, 255)
  let minuteAngle = map(mn, 0, 60, 0, 360)
  arc(0, 0, 280, 280, 0, minuteAngle)

  stroke(150, 255, 100)
  let hourAngle = map(hr % 12, 0, 12, 0, 360)
  arc(0, 0, 260, 260, 0, hourAngle)


 push()
  rotate(millisecondAngle)
  stroke(204, 0, 102)
  line(0, 0, 125 , 0 )
  pop()

  push()
  rotate(secondAngle)
  stroke(255, 100, 150)
  line(0, 0, 100, 0)
  pop()

  push()
  rotate(minuteAngle)
  stroke(150, 100, 255)
  line(0, 0, 75, 0)
  pop()

  push()
  rotate(hourAngle)
  stroke(150, 255, 100)
  line(0, 0, 50,0)
  pop()

 

  stroke(255)
  point(0, 0)


}

function windowResized() {
  setup()
}
