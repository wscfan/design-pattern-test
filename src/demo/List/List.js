import $ from 'jquery'
import { GET_LIST } from '../config/config.js'
import createItem from './CreateItem'

export default class List {
  constructor(app) {
    this.app = app
    this.$el = $("<div>")
  }

  // 获取数据
  loadData() {
    return fetch(GET_LIST).then(result => {
      return result.json()
    })
  }

  // 生成列表
  initItemList(data) {
    // data.map(itemData => {
    //   let item = createItem(this, itemData)
    //   item.init()
    //   return item
    // })
    data.forEach(itemData => {
      let item = createItem(this, itemData)
      item.init()
    })
  }

  // 渲染
  render() {

  }

  init() {
    this.loadData().then(data => {
      this.initItemList(data)
    }).then(() => {
      this.app.$el.append(this.$el)
    })
  }
}