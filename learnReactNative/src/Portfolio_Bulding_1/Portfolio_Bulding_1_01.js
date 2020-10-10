import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, TextInput, Platform, TouchableOpacity, Button} from 'react-native';



const App = () => {

    const pressFunction = () => {
        console.log("merhaba")
        // Spread Operator ------------------------------
        const user = {
            name: "Serdar",
            age: 30,
            isAdmin: false
        }
        const member = {
            ...user, 
            password: "12345",
            type: null
        }

        // const myArr = [1,2,3,4]
        // const myArr2 = [5,6, ...myArr]

        const myObj = {
            url: "www.google.com.tr",
            data: [1,2,3],
            config: "EMPTY"
        }
        console.log(myObj.config);
        const {config} = myObj;

        /*
        ({target, domain}) => {
            target
            //
            //
            //
            domain
          }*/
    }

    return (
        <SafeAreaView style={{flex: 1,}}>
            <View style={{flex:1, justifyContent: "center", alignItems: "center",}}>
                <Text >Hello React Native</Text>
                <Button title="Log" onPress={pressFunction}/>
            </View>
            
        </SafeAreaView>
    )
}

export default App;

