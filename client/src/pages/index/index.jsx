import Taro, { Component } from '@tarojs/taro'
import { AtSearchBar } from 'taro-ui'
import { View } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  constructor() {
    super(...arguments)
    this.state = {
      value: '',
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



  render() {
    const { bookList } = this.state;
    console.log(bookList);
    return (
      <View className='wrapper'>
        <AtSearchBar
          value={this.state.value}
          onChange={this.onChange.bind(this)}
          onActionClick={this.onActionClick.bind(this)}
        />
      </View>
    )
  }
}
