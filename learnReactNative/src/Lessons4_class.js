import React from "react";
// import React, {Component} from "react";
import {Text, View, SafeAreaView, Button} from "react-native";

class App extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            counter: 0,
            userName: "",
            createDate: new Date()
        }
        console.log("constructor")
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    render (){
        console.log("render")
        return(
            <SafeAreaView>
                <View>
                    <Text>Hi Fullstack</Text>
                    <Text>This is a class</Text>
                    <Text>Count: {this.state.counter}</Text>
                </View>
                <Button 
                    title="UP!"
                    onPress={() => this.setState({
                        counter: this.state.counter + 1
                    })}
                />
            </SafeAreaView>
        )
    }
}

export default App;