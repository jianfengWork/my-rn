import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.body}>
          <Text style={{lineHeight: 100, textAlign: 'center'}}>Hello RN</Text>
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  body: {
    height: 100,
    backgroundColor: '#00ADEF',
  },
});

export default App;
