import React, {Component} from "react";
import {Text, 
        View, 
        SafeAreaView, 
        Button, 
        Alert, 
        StyleSheet, 
        TextInput,
        Platform,
        TouchableHighlight,
        TouchableOpacity,
        TouchableNativeFeedback,
        TouchableWithoutFeedback
    } from "react-native";

    export default class App extends Component {
        _onPressButton() {
          alert('You tapped the button!')
        }
      
        _onLongPressButton() {
          alert('You long-pressed the button!')
        }
      
      
        render() {
          return (
            <View style={styles.container}>
                <Text style={{color: "white"}}>Buttons</Text>
                <Text></Text>
              <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
                <View style={styles.button}>
                  <Text style={styles.buttonText}>TouchableHighlight</Text>
                </View>
              </TouchableHighlight>
              <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>TouchableOpacity</Text>
                </View>
              </TouchableOpacity>
              <TouchableNativeFeedback
                  onPress={this._onPressButton}
                  background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>TouchableNativeFeedback {Platform.OS !== 'android' ? '(Android only)' : ''}</Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableWithoutFeedback
                  onPress={this._onPressButton}
                  >
                <View style={styles.button}>
                  <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Touchable with Long Press</Text>
                </View>
              </TouchableHighlight>
            </View>
          );
        }
      }

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0288d1",
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        paddingTop: 70,
        paddingBottom: 40,
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'white'
    },
})