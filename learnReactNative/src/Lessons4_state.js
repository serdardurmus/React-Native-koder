import React, {useState} from "react";
import {Text, View, SafeAreaView, Button} from "react-native";

const App = (props) => {

    const [counter, setCounter] = useState(0); 
    return(
        <SafeAreaView  style={{backgroundColor: "#3f51b5"}}>
            <View>
                <Text style={{textAlign: "center", color:"white"}}>Hei Mustafa Abi</Text>
                <Text style={{textAlign: "center", color:"white"}}>This is a Counter</Text>
    <Text style={{textAlign: "center", color:"white", fontSize: 250}}>{counter}</Text>
                <Button
                    title= "UP!"
                    onPress = {() => setCounter(counter + 1)}
                />
            </View>
        </SafeAreaView>
    )
}

export default App;