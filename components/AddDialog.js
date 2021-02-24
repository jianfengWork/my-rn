import React, { Component } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
// https://github.com/react-native-picker/picker
import { Picker } from '@react-native-picker/picker';
import { Actions } from 'react-native-router-flux';

export default class AddDialog extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      income: 0,
      title: '1',
      amount: 0
    };
  }

  async submit() {
    try {
      let url = `http://localhost:3030/add/${this.state.title}/${this.state.amount}/${this.state.income}`;
      let res = await fetch(url);
      let { ok } = await res.json();

      if (ok) {
        Actions.pop();
        Actions.push('list', {});
      } else {
        Alert.alert('错误', '请确认网络畅通', [
          { text: '确定' }
        ]);
      }
    } catch (e) {
      Alert.alert('错误', '请确认网络畅通', [
        { text: '确定' }
      ]);
    }
  }

  cancel() {
    Actions.pop();
  }

  render() {
    return (
      <View>
        <View>
          <Picker
            selectedValue={this.state.income}
            onValueChange={value => this.setState({ income: value })}
          >
            <Picker.Item label="支出" value={0} />
            <Picker.Item label="收入" value={1} />
          </Picker>
        </View>
        <View>
          <TextInput style={{ fontSize: 20, textAlign: 'center', }} onChangeText={text => this.setState({ title: text })} placeholder="请输入标题" />
        </View>
        <View>
          <TextInput style={{ fontSize: 20, textAlign: 'center', paddingBottom: 100, }} onChangeText={text => this.setState({ amount: text })} keyboardType="number-pad" placeholder="请输入金额" />
        </View>
        <View style={{ flexDirection: 'row', paddingBottom: 100, }}>
          <View style={{ flex: 1 }}>
            <Button title="提交" color="#fada63" onPress={this.submit.bind(this)} />
          </View>
          <View style={{ flex: 1 }}>
            <Button title="取消" color="#CCC" onPress={this.cancel.bind(this)} />
          </View>
        </View>
      </View>
    );
  }
}
