import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

const metin = "Fullstack Developer"

const First = (props) => {
    return (
        <SafeAreaView>
            <View>
                <Text style={{fontSize: 30}}>First Hello</Text>
                <Text style={{fontSize: 30}}>{metin}</Text>
                <Button 
                    title="Go!"
                    onPress={() => props.navigation.navigate('SecondPage', {
                        myText: metin
                    })}
                />
            </View>
        </SafeAreaView>
    )
}

export default First;