import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button } from '@tarojs/components'
import Welfare from '../../res/welfare'
import './bookMall.less'


export default class Bookmall extends Component {

  // config = {
  //   navigationBarTitleText: '首页'
  // }
  state = {
    img: Welfare
  }

  componentWillMount() { }

  componentDidMount() {
    Taro.request({
      url: 'https://example.com/ajax?dataType=reader',
      dataType: 'json',
      success: res => {
        this.setState({ welfare: res.data.welfare });
      }
    })
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { welfare } = this.state
    console.log(welfare);
    return (
      <View className='wrapper'>
        {
          welfare.map((item, index) => {
            return (
              <View className='box-wrapper' key={index}>
                <Image className='welfare-img' src={item.img} />
                <View className='text-wrapper'>
                  <View className='text-container'>
                    <View className='theme'>{item.theme}</View>
                    <Text className='p2'>{item.note}</Text>
                  </View>

                  <Button className='entrance-btn'>{item.entrance}</Button>
                </View>
              </View>
            )
          })
        }
        <View className='p1'>你还可以通过“阅读时长积累”获得无限卡</View>
        <View className='p2'>1.阅读即送无限卡。阅读时间越长，赠送无限卡越多。每周最多可获得4天无限卡</View>
      </View>
    )
  }
}
