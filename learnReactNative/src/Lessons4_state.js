import React, {useState} from "react";
import {Text, View, SafeAreaView, Button} from "react-native";

const App = (props) => {

    const [counter, setCounter] = useState(0); 
    const countReset = () => setCounter(0); 
    return(
        <SafeAreaView  style={{backgroundColor: "#0288d1"}}>
            <View>
                <Text style={{textAlign: "center", color:"white"}}>Hei Mustafa Abi</Text>
                <Text style={{textAlign: "center", color:"white"}}>This is a Counter</Text>
    <Text style={{textAlign: "center", color:"white", fontSize: 250}}>{counter}</Text>
                <Button
                    title= "UP!"
                    onPress = {() => setCounter(counter + 1)}
                />
                <Text></Text>
                <Button
                    title= "DOWN!"
                    onPress = {() => setCounter(counter - 1)}
                />
                <Text></Text>
                <Button
                    title= "RESET!"
                    onPress = {countReset}
                />
                <Text style={{textAlign: "center", color:"white", height: 250,}}></Text>
            </View>
        </SafeAreaView>
    )
}

export default App;