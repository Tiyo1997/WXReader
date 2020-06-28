import Taro, { Component } from '@tarojs/taro'
import { View, Text, Video, Image, Button } from '@tarojs/components'
import VideoSrc from '../../res/xinggan.mp4'
import Like from '../../res/icon/like.png'
import Wx from '../../res/icon/wx.png'
import './videoCenter.less'


export default class VideoCenter extends Component {

  // config = {
  //   navigationBarTitleText: '首页'
  // }

  componentWillMount() { }

  componentDidMount() {
    Taro.request({
      url: 'https://example.com/ajax?dataType=reader',
      dataType: 'json',
      success: res => {
        this.setState({ videoList: res.data.videoList });
      }
    })
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { videoList } = this.state
    return (
      <View>
        {
          videoList.map((item, index) => {
            return (
              <View className='video-wrapper' key={index}>
                <Video className='video'
                  // src='blob:https://www.bilibili.com/0a2c6823-75a6-48a6-bf4c-25c26c660bbf'
                  src='/res/xinggan.mp4'
                  // controls
                  autoplay={false}
                  poster='https://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg'
                  initialTime='0'
                  id='video'
                  loop={false}
                  muted={false}
                  showCenterPlayBtn
                // id='video'
                // controls={false}
                // showPlayBtn
                />
                <View className='wrapper'>
                  <View className='video-title'>{item.title}</View>
                  <View className='video-bottom'>
                    <Image className='like' src={Like} />
                    <Text className='like-num'>{item.likeNum}</Text>
                    <Button className='share-btn'>
                      <Image className='wx-icon' src={Wx} />
                      发给朋友
                    </Button>
                  </View>
                </View>
              </View>
            )
          })
        }
      </View>
    )
  }
}
