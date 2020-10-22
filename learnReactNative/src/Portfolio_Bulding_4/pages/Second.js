import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

const Second = (props) => {
    const userText = props.route.params.myText
    const userText2 = props.route.params.selectedValue
    return (
        <SafeAreaView>
            <View>
                <Text style={{fontSize: 30}}>Second</Text>
                <Text style={{fontSize: 30}}>Text: {userText}</Text>
                <Text style={{fontSize: 30}}>Text2: {userText2}</Text>
                <Button 
                    title="Go Back!"
                    onPress={() => props.navigation.goBack()}
                />
            </View>
        </SafeAreaView>
    )
}

export default Second;