import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  ScrollView} from 'react-native';

const Button = (props) => {

    return (
        <TouchableOpacity onPress={props.sayingHello} style={[styles.buttonContainer, {backgroundColor: props.color === undefined ? "#a5d6a7" : props.color}]}>
            <Text style={styles.text}>{props.banner}</Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create ({
buttonContainer: {
    backgroundColor: "#a5d6a7",
    padding: 15,
    margin: 10,
    borderRadius: 5,
    alignItems: "center",
},
text: {
    color: "black",
    fontSize: 20,
}
})