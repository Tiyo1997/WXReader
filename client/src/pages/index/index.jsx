import Taro, { Component } from '@tarojs/taro'
import { AtSearchBar, AtTabs, AtTabsPane } from 'taro-ui'
import { View, Image, Text } from '@tarojs/components'
import Banner from '../../res/qingchun.png'
import './index.less'

export default class Index extends Component {

  constructor() {
    super(...arguments)
    this.state = {
      value: '',
      current: 0,
      bookList: []
    }
  }

  async componentDidMount() {
    Taro.request({
      url: 'https://example.com/ajax?dataType=reader',
      dataType: 'json',
      success: res => {
        this.setState({ bookList: res.data.bookList });
      }
    })
  }

  onChange(value) {
    this.setState({
      value: value
    })
  }

  onActionClick() {
    console.log('开始搜索')
  }

  handleClick(value) {
    this.setState({
      current: value
    })
  }



  render() {
    const { bookList } = this.state;
    // console.log(bookList);
    return (
      <View className='wrapper'>
        <AtSearchBar
          value={this.state.value}
          onChange={this.onChange.bind(this)}
          onActionClick={this.onActionClick.bind(this)}
          fixed
        />
        <Image className='box-wrapper' src={Banner} style='margin-top:10%'></Image>
        <AtTabs
          current={this.state.current}
          scroll
          tabList={[
            { title: '推荐' },
            { title: '分类' },
            { title: '排行' },
            { title: '男生小说' },
            { title: '女生小说' }
          ]}
          onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0}>
            <View>
              {
                bookList.map((item, index) => {
                  return (
                    <View className='book-wrapper' key={index}>
                      <Image className='book-img' src={item.img} />
                      <View className='book-name'>{item.bookName}</View>
                      <Text className='p1'>{item.writer} | {item.grade}</Text>
                      <Text className='p2'>{item.remarks}</Text>
                    </View>
                  )
                })
              }
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View>标签页二的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View>标签页三的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={3}>
            <View>标签页四的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={4}>
            <View>标签页五的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={5}>
            <View>标签页六的内容</View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
