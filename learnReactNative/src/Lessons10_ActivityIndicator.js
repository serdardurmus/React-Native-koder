import React from 'react';
import { ActivityIndicator, Text, View} from 'react-native';

const Main = () => {
    return (
        <View>
            <Text> </Text>
            <Text style={{textAlign: "center"}}> --Small-- </Text>
            <ActivityIndicator size= "small" color= "#00ff00"/>
            <Text style={{textAlign: "center"}}> --Large-- </Text>
            <ActivityIndicator size= "large" color= "#00ff00"/>
            <Text style={{textAlign: "center"}}> --Color Change-- </Text>
            <ActivityIndicator size= "large" color= "#ff0000"/>
        </View>
    )
}

export default Main;