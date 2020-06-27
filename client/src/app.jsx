import Taro, { Component } from '@tarojs/taro'
import 'taro-ui/dist/style/index.scss'
import Index from './pages/index'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidMount () {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init()
    }
  }

  config = {
    pages: [
      'pages/index/index',
      'pages/bookMall/bookMall',
      'pages/videoCenter/videoCenter',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '微信读书',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [{
        pagePath: 'pages/bookMall/bookMall',
        text: '福 利',
        iconPath: 'res/icon/fuli.png',
        selectedIconPath: 'res/icon/_fuli.png'
      },{
        pagePath: 'pages/index/index',
        text: '书 城',
        iconPath: 'res/icon/shucheng.png',
        selectedIconPath: 'res/icon/_shucheng.png'
      },{
        pagePath: 'pages/videoCenter/videoCenter',
        text: '视 频',
        iconPath: 'res/icon/vid.png',
        selectedIconPath: 'res/icon/_vid.png'
      }],
      selectedColor: '#1296db'
    },
    cloud: true
  }


  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
