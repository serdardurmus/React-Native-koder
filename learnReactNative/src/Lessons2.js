import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, TextInput, Platform, TouchableOpacity} from 'react-native';

const App = () => {

    const platform = Platform.OS
    const platform2 = Platform.Version
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'purple',}}>
            <View style={styles.container}>
                <Text style={styles.text}>Serdar Durmus</Text>
                <Text style={styles.text}>Telefonen min: {platform}</Text>
                <Text style={styles.text}>Version: {platform2}</Text>
            </View>

            {/* TextInput -------------- */}
            <TextInput 
                style={styles.textInput}
                placeholder="Tast navnet ditt"
                keyboardType = "default"
            />
            <TextInput 
                style={styles.textInput}
                placeholder="Tast e-posten din"
                keyboardType = "email-address"
            />
            <TextInput 
                style={styles.textInput}
                placeholder="Tast telefonnumeret ditt"
                keyboardType = "number-pad"
            />


             {/* TouchableOpacity -------------- */}
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={{fontSize: 19,}}>Search</Text>
            </TouchableOpacity>


            {/* FLEX -------------- */}
            <View style={{flex: 1, backgroundColor: '#e57373',}}>
                <View style={{flex: 3, backgroundColor: '#ba68c8', flexDirection: "row"}}>
                    <View style={{flex: 1, backgroundColor: '#42a5f5',}}/>
                    <View style={{flex: 1, backgroundColor: '#1e88e5',}}/>
                </View>
                <View style={{flex: 1, backgroundColor: '#9575cd',}}/>
                <View style={{flex: 1, backgroundColor: '#673ab7',}}/>
                <View style={{flex: 1, backgroundColor: '#512da8',}}/>
            </View>
        </SafeAreaView>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 0, 
        backgroundColor: "purple", 
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: 10,
    },
    text: {
        color: 'white', 
        fontWeight: 'bold',
    },
    textInput: {
        height: 40,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        paddingLeft: 10,
        color: '#0f0f0f',
    },
    buttonContainer: {
        backgroundColor: "#d1c4e9",
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 10,
        alignItems: "center",
    }
});