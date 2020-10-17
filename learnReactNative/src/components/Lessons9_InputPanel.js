import React, {useState} from 'react';
import { TextInput, View, TouchableOpacity, Text, StyleSheet, TextPropTypes } from 'react-native';

const InputPanel = (props) => {
    // Kulanıcının girdiği input değeri
    const [inputText, setInputText] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    // Klavyeden yazılanları alıyoruz
                    onChangeText={value => setInputText(value)}
                    // -
                    placeholder="Arama.."
                />
            </View>

            <TouchableOpacity 
                style={styles.buttonContainer}
                // Klavyeden aldıklarımızı ekrana basmak için kullanıyoruz
                // onPress={() => alert(inputText)}
                onPress = {() => props.sendText(inputText)}
            >
                <Text style={{
                    textAlign: 'center'
                }}>Seç</Text>
            </TouchableOpacity>

        </View>
    )
}

export default InputPanel;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#cfd8dc',
        padding: 10,
        margin: 10,
        borderRadius: 5
    },
    inputContainer: {
        backgroundColor: '#eceff1',
        paddingLeft: 5,
        margin: 10,
        borderRadius: 5
    },
    buttonContainer: {
        backgroundColor: '#b2dfdb',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    }
})