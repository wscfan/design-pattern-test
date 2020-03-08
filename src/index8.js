class ReadImg {
  constructor(fileName) {
    this.fileName = fileName
    this.loading()
  }
  display() {
    console.log('display..........' + this.fileName)
  }
  loading() {
    console.log('loading..........' + this.fileName)
  }
}

class ProxyImg {
  constructor(fileName) {
    this.realImg = new ReadImg(fileName)
  }
  display() {
    this.realImg.display()
  }
}

// 测试
let proxyImg = new ProxyImg('a.txt');
proxyImg.display()