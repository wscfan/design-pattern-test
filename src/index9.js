let star = {
  name: '马匀',
  age: 49,
  sex: '男',
  phone: 13866666666
}

let agent = new Proxy(star, {
  get(target, key) {
    if (key === 'phone') {
      return `agent's phone is 15600000000`
    }
    if (key === 'salary') {
      return 120000
    }
    return target[key]
  },
  set(target, key, val) {
    if (key === 'cusSalary') {
      if (val < 100000) {
        throw new Error('报价太低')
      } else {
        target[key] = val
        return true
      }
    }
  }
})

// 测试
console.log(agent.name)
console.log(agent.phone)
console.log(agent.salary)

try {
  agent.cusSalary = 99999
} catch (e) {
  console.error(e)
}
console.log(agent.cusSalary)

agent.cusSalary = 100001
console.log(agent.cusSalary)