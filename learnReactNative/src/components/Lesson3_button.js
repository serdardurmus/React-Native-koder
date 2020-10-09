import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';

const Lesson3_button = (props) => {
    return(
        <TouchableOpacity 
        style={styles.container}
        onPress = {() => alert("God Appetid")}
        onLongPress = {() => alert("I Love You")}
        >
            <Text style={styles.text}>{props.buttonTitle}</Text>
        </TouchableOpacity>
    );
}


export default Lesson3_button;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#512da8",
        margin: 20,
        padding: 10,
        borderRadius: 10,
    },
    text: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
    },
});