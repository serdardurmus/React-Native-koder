import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, TextInput, Platform, TouchableOpacity, Button} from 'react-native';



const App = () => {

    const pressFunction = () => {
        console.log("merhaba")
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

