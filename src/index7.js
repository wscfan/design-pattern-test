class Circle {
  draw() {
    console.log("正在画圆")
  }
}

class CircleDecorator {
  constructor(circles) {
    this.circle = circles
  }
  draw() {
    this.circle.draw()
    this.drawMore(circle)
  }
  drawMore(circle) {
    console.log('画更多的圆')
  }
}

// 测试
let circle = new Circle()
let circleMore = new CircleDecorator(circle)
circleMore.draw()