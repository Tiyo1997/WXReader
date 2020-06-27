import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './videoCenter.less'


export default class VideoCenter extends Component {

  // config = {
  //   navigationBarTitleText: '首页'
  // }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='video'>
        视频中心
      </View>
    )
  }
}
