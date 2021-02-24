import React, { Component } from 'react';
import {
  SafeAreaView,
  Button,
  Image,
  View,
} from 'react-native';
// https://github.com/react-native-image-picker/react-native-image-picker
import { launchImageLibrary } from 'react-native-image-picker'

var photoOptions = { // 配置项
  mediaType: 'photo',
}

export default class imagePicker extends Component {

  constructor(...args) {
    super(...args);

    this.state = {
      imgUrl: 'https://mifbb-upload-image.oss-cn-hangzhou.aliyuncs.com/mifbb_test_app/decoration/20200417/68d24a84846613219c4c3de6beb735b9.jpeg',
    };
  }

  cameraAction() {
    launchImageLibrary(photoOptions, (res) => {
      console.log('res', res)
      if (res.didCancel) return
      this.setState({
        imgUrl: res.uri
      })
    })
  }

  render() {
    return (
      <SafeAreaView>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Image source={{ uri: this.state.imgUrl }} style={{ width: 160, height: 160, borderRadius: 80, }}></Image>
        </View>
        <Button title="拍照" onPress={this.cameraAction.bind(this)}></Button>
      </SafeAreaView>
    )
  }

}
