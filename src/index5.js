class LoginState {
  constructor() {
    this.state = false
  }
  login() {
    if (this.state) {
      alert('已经登陆了。。。。')
      return
    }
    this.state = true
    alert('登录成功')
  }
  logout() {
    if (!this.state) {
      alert('已经退出登录了。。。。')
      return
    }
    this.state = false
    alert('退出成功')
  }
}

LoginState.getInstance = (function() {
  let instance
  return function () {
    if (!instance) {
      instance = new LoginState()
    }
    return instance
  }
})()

let obj1 = LoginState.getInstance()
obj1.login()

let obj2 = LoginState.getInstance()
obj2.login()

obj2.logout()
obj1.logout()

console.log(obj1 === obj2)