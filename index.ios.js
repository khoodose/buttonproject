/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS,
} from 'react-native';

export default class ButtonProject extends Component {

  _onPressButtonDispense() {
      fetch("https://api-http.littlebitscloud.cc/v2/devices/00e04c02bca7/output", {
        method: "POST",
        headers: {
          "Authorization": "b5478bcd3b5ff33e5337d95b8d183b345358d42703515f45b2b4bdbdcf77a6c2",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "percent": 100,
          "duration_ms": 1600})})
      .then((response) => response.json())
      .then((responseData) => {
          AlertIOS.alert(
              "POST Response",
              "Response Body -> " + JSON.stringify(responseData)
          );
          console.log(responseData);
      })
      .done();
  };

  // _onPressButtonHEAVYLOAD() {
  //     fetch("https://api-http.littlebitscloud.cc/v2/devices/00e04c02bca7/output", {
  //       method: "POST",
  //       headers: {
  //         "Authorization": "b5478bcd3b5ff33e5337d95b8d183b345358d42703515f45b2b4bdbdcf77a6c2",
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({
  //         "percent": 100,
  //         "duration_ms": 3200})})
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //         AlertIOS.alert(
  //             "POST Response",
  //             "Response Body -> " + JSON.stringify(responseData)
  //         );
  //         console.log(responseData);
  //     })
  //     .done();
  // };

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButtonDispense} style={styles.button}>
            <Text>LIGHT LOAD</Text>
        </TouchableHighlight>
        <TouchableHighlight
        onPress={(event) => {
          this._onPressButtonDispense();
          setTimeout (() => this._onPressButtonDispense(), 4000);}}
        style={styles.button}>
            <Text>HEAVY LOAD</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        backgroundColor: '#eeeeee',
        padding: 10,
        marginRight: 5,
        marginLeft: 5,
    }
});

AppRegistry.registerComponent('ButtonProject', () => ButtonProject);
