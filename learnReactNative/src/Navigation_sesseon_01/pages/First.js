import React, { useState} from 'react';
import {SafeAreaView, View, Text, Button, TextInput} from 'react-native';

const metin = "Fullstack Developer"

const First = (props) => {
    const [userName, setUserName] = useState("")
    return (
        <SafeAreaView>
            <View>
                <Text style={{fontSize: 30}}>First Hello</Text>
                <Text style={{fontSize: 30}}>{metin}</Text>
                <Text style={{fontSize: 30}}>Girilen Değer: {userName}</Text>
                <View style={{backgroundColor: "gray", margin: 5, padding: 5}}>
                    <TextInput 
                        value={userName}
                        onChangeText={text => setUserName(text)}
                    />
                </View>

                <Button 
                    title="Go!"
                    onPress={() => props.navigation.navigate('SecondPage', {
                        myText: metin,
                        selectedValue: userName
                    })}
                />
            </View>
        </SafeAreaView>
    )
}

export default First;