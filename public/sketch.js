const brightLights = []
const cursorTail = []
const cursorTailLength = 20
const cursorSize = 10
let constantThunders = false
let randomThunders = false
let globalAlpha = 3
let intensity = 60
let primary = null
let iBounds = null
let h1Bounds = null
let pause = false

window.onbeforeunload = function () {
  pause = true
}

window.onfocus = function () {
  pause = false
}

function fetchBounds() {
  const i = document.getElementById("i")
  const h1 = document.getElementsByTagName("h1")[0]
  iBounds = i.getBoundingClientRect()
  h1Bounds = h1.getBoundingClientRect()
}

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

function launchThunderFromMouse() {
  stroke(primary)

  thunder(mouseX, mouseY, random(width), 0)
  thunder(mouseX, mouseY, random(width), height)
  thunder(mouseX, mouseY, 0, random(height))
  thunder(mouseX, mouseY, width, random(height))
}

function launchThunderFromI() {
  stroke(primary)

  thunder(iBounds.left + iBounds.width / 2, iBounds.top + 5, random(width), 0)

  thunder(
    iBounds.left + iBounds.width / 2,
    iBounds.bottom - 5,
    random(width),
    height
  )

  thunder(
    iBounds.left + iBounds.width / 2,
    iBounds.bottom - 5,
    random(width),
    height
  )
}

function launchThunderFromH1() {
  stroke(primary)

  thunder(random(h1Bounds.left, h1Bounds.right), h1Bounds.top, random(width), 0)

  thunder(
    random(h1Bounds.left, h1Bounds.right),
    h1Bounds.bottom,
    random(width),
    height
  )

  thunder(
    0,
    random(height),
    h1Bounds.left,
    h1Bounds.top + h1Bounds.height / 2,
    5
  )

  thunder(
    h1Bounds.right,
    h1Bounds.top + h1Bounds.height / 2,
    width,
    random(height),
    5
  )
}

function thunder(fromX, fromY, toX, toY) {
  const points = [{ x: fromX, y: fromY }]
  const shift = 50
  const segmentCount = dist(fromX, fromY, toX, toY) / 60

  for (let i = 1; i < segmentCount - 1; i++) {
    const x = lerp(fromX, toX, i / segmentCount)
    const y = lerp(fromY, toY, i / segmentCount)

    points.push({
      x: x + random(-shift, shift),
      y: y + random(-shift, shift),
    })
  }

  points.push({ x: toX, y: toY })

  for (let i = 0; i < points.length - 1; i++) {
    const p1 = points[i]
    const p2 = points[i + 1]

    strokeWeight(random(1, 9))
    line(p1.x, p1.y, p2.x, p2.y)
  }
}
function isMouseInH1() {
  return (
    mouseX > h1Bounds.left &&
    mouseX < h1Bounds.right &&
    mouseY > h1Bounds.top &&
    mouseY < h1Bounds.bottom
  )
}

function setup() {
  primary = color(124, 58, 237)

  createCanvas(
    windowWidth,
    windowHeight,
    WEBGL,
    document.getElementById("canvas")
  )

  fetchBounds()

  frameRate(60)
  noStroke()
  noSmooth()

  blendMode(DIFFERENCE)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function draw() {
  if (!document.body.classList.contains("zap")) return

  if (frameCount % int(random(15, 40)) === 0) launchBrightLight()

  fetchBounds()
  translate(-width / 2, -height / 2)
  background(0, 0, 0, 0)
  fill(255)
  noStroke()

  const mouseInCanvas = true
  // mouseX > 50 && mouseX < width - 50 && mouseY > 50 && mouseY < height - 50

  if (globalAlpha > 0.5 && !mouseIsPressed) {
    globalAlpha -= 0.01
  } else if (globalAlpha < 1 && mouseIsPressed) {
    globalAlpha += 0.05
  }

  for (const light of brightLights) {
    light.draw()
  }

  // mouse/i thunders

  if (mouseIsPressed) {
    if (frameCount % int(random(5, 10)) === 0) {
      if (isMouseInH1()) launchThunderFromI()
      else launchThunderFromMouse()
    }
  }

  // intensity

  if (frameCount % 5 === 0) {
    intensity = int(random(10, 70))

    document.body.style.setProperty("--brightIntensity", `${intensity}px`)
  }

  // h1 thunders on start

  if ((intensity < 20 && randomThunders) || constantThunders) {
    if (frameCount % 2 === 0) launchThunderFromH1(mouseInCanvas)
  }

  // cursor

  cursorTail.unshift({ x: mouseX, y: mouseY })

  if (cursorTail.length > cursorTailLength) {
    cursorTail.pop()
  }

  for (let i = 0; i < cursorTail.length - 1; i++) {
    stroke(
      red(primary),
      green(primary),
      blue(primary),
      255 // * (1 - easeInOutCubic(i / cursorTailLength))
    )
    strokeWeight(cursorSize * (1 - easeInOutCubic(i / cursorTailLength)))
    line(
      cursorTail[i].x,
      cursorTail[i].y,
      cursorTail[i + 1]?.x,
      cursorTail[i + 1]?.y
    )
  }

  fill(255)
  noStroke()
  circle(mouseX, mouseY, cursorSize)
}

function mousePressed() {
  if (!document.body.classList.contains("zap")) return

  if (isMouseInH1()) {
    const i = document.getElementById("i")
    i.classList.add("bright")
  }

  requestAnimationFrame(() => {
    if (isMouseInH1()) launchThunderFromI()
    else launchThunderFromMouse()
  })
}

function mouseReleased() {
  if (!document.body.classList.contains("zap")) return

  const i = document.getElementById("i")
  i.classList.remove("bright")
}

randomThunders = true
setTimeout(() => {
  constantThunders = true

  setTimeout(() => {
    constantThunders = false

    setTimeout(() => {
      randomThunders = false
    }, 3000)
  }, 500)
}, 500)
