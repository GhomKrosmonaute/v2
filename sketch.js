const brightLights = []
const cursorTail = []

let globalAlpha = 3

let primary = null

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
}

function easeInOutQuart(t) {
  const t1 = t - 1
  return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * t1 * t1 * t1 * t1
}

function launchBrightLight() {
  brightLights.push({
    completion: 0,
    draw() {
      // draw two diagonal bars moving from right to left

      this.completion += 0.005

      const rectWidth = width / 3
      const x = width - (width + rectWidth) * easeInOutQuart(this.completion)

      fill(
        red(primary),
        green(primary),
        blue(primary),
        20 * (1 - easeInOutCubic(abs(this.completion - 0.5) * 2)) * globalAlpha
      )
      rect(x, 0, rectWidth, height)

      if (this.completion >= 0.999999) {
        brightLights.splice(brightLights.indexOf(this), 1)
      }
    },
  })
}

function launchBrightLights() {
  launchBrightLight()

  setTimeout(launchBrightLights, random(100, 500))
}

function setup() {
  primary = color(124, 58, 237)

  createCanvas(
    windowWidth,
    windowHeight,
    WEBGL,
    document.getElementById("canvas")
  )

  noStroke()
  noSmooth()

  blendMode(DIFFERENCE)

  launchBrightLights()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function draw() {
  translate(-width / 2, -height / 2)
  background(0, 0, 0, 0)
  fill(255)
  noStroke()
  noSmooth()

  if (globalAlpha > 0 && !mouseIsPressed) {
    globalAlpha -= 0.01
  } else if (globalAlpha < 1 && mouseIsPressed) {
    globalAlpha += 0.05
  }

  for (const light of brightLights) {
    light.draw()
  }

  document.body.style.setProperty("--brightIntensity", `${random(1, 50)}vw`)
}
