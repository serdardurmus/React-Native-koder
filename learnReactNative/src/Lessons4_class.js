import React from "react";
// import React, {Component} from "react";
import {Text, View, SafeAreaView} from "react-native";

class App extends React.Component {
    constructor (props) {
        super (props);
    }
    render (){
        return(
            <SafeAreaView>
                <View>
                    <Text>Hi Fullstack</Text>
                    <Text>This is a class</Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default App;