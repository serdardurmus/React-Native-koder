import React, {useEffect, useState} from "react";
import {Text, View, SafeAreaView, Button, Alert, StyleSheet, TextInput} from "react-native";

const App = (props) => {

    const [name, setName] = useState("Serdar");
    const [age, setAge] = useState("35");

    return(
    <SafeAreaView  style={styles.container}>
        <View>
            <Text style={styles.text}>Enter name:</Text>
            <TextInput 
                multiline
                style={styles.input}
                placeholder='Hva er navnet ditt?'
                onChangeText={(navn) => setName(navn)}
            />
            <Text style={styles.text}>Enter age:</Text>
            <TextInput 
                style={styles.input}
                placeholder = 'Hvor gammel er du?'
                onChangeText={(alder) => setAge(alder)}
                keyboardType= "numeric"
            />
            <Text style={styles.text}></Text>
            <Text style={styles.text}>Name: {name}, Age: {age}</Text>
        </View>
    </SafeAreaView>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#0288d1",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "white",
        fontSize: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "white",
        paddingLeft: 10,
        color: "white",
        width: 300,
    },
})