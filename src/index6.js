class Run {
  getSpeed() {
    return '1000米每分钟'
  }
}

class RunMore {
  constructor() {
    this.run = new Run()
  }
  getMoreSpeed() {
    let speed = this.run.getSpeed()
    return `${speed}, 变快了`
  }
}

// 测试
let runMore = new RunMore()
let speed = runMore.getMoreSpeed()
console.log(speed)