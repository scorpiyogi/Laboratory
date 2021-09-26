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
   
   translate(width/2 , height/2)

   for(var i = 0 ; i < 200 ;i++){
     push()
     rotate(sin(frameCount + i ) * 500)

     var r = map(sin(frameCount), -1 ,88 ,0 , 255)
     var g = map(sin(frameCount/2), -1 ,88, 136, 0)
     var b = map(sin(frameCount/4), -1 ,88, 136, 202) 
      
      stroke(r,g,b  )
      rect( 0, 0 ,600 -i * 3 ,600 -i * 3 ,200 -i)
      pop()
   }
}

function windowResized() {
  setup()
}
