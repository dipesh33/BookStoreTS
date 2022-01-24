import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';
import { ButtonSpinner } from './src/components/buttons';
import widthPercentageToDP from './src/utils/Dimensions';

export class App extends Component {
  render() {
    return (
      <View>
        <Text>Hello World</Text>
        <TouchableOpacity style={styles.button}>
        <ButtonSpinner title="Login with Google" color="white" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: '20%'
  }
})

export default App;
