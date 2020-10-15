import React, {useEffect, useState} from "react";
import {Text, View, SafeAreaView, Button, Alert} from "react-native";

const App = (props) => {

    const [orderCount, setOrderCount] = useState(0); 
    
    useEffect(() => {
        Alert.alert("VELKOMMEN", "SD Programmet")
    }, [])
    useEffect (() => {
        if (orderCount == 10) Alert.alert("HEİ!", "Det er 10")
    }, [orderCount])

    return(
        <SafeAreaView  style={{backgroundColor: "#0288d1"}}>
            <View>
    <Text style={{textAlign: "center", color:"white", fontSize: 250}}>{orderCount}</Text>
                <Button
                    title= "Select Order"
                    onPress = {() => setOrderCount(orderCount + 1)}
                />
            </View>
        </SafeAreaView>
    )
}

export default App;