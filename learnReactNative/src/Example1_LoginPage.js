import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';

const App = () => {
    return (
        <SafeAreaView style={{flex: 1,}}>
            <View style={styles.container}>
                <View style={styles.image}>
                    <Image source={require("./images/Example1_LoginPage_img/dropbox-font.png")} style={{width: 250, height: 125,}}/>
                </View>
                <View>
                    <TextInput style={styles.input} placeholder="Username or E-mail" keyboardType="email-address"></TextInput>
                    <TextInput style={styles.input} placeholder="Password" keyboardType="visible-password"></TextInput>
                    <Text style={styles.password}>Forgot password?</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{color: 'white', fontSize: 16,}}>Log In</Text>
                    </TouchableOpacity>
                    <Text style={{color: 'black', alignSelf: 'center', fontWeight: 'bold'}}>OR</Text>
                    
                    <Text style={styles.google}>
                        Sign up With Google
                    </Text>
                
                    <TouchableOpacity style={styles.button}>
                        <Text style={{color: 'white', fontSize: 16,}}>Create New Account</Text>
                    </TouchableOpacity>

                <Image source={require("./images/Example1_LoginPage_img/dropbox-icon2.png")} style={{width:150, height:150, marginTop:10, alignSelf: "center"}}/>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(0, 126, 229)',
        zIndex: 2,
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        // marginBottom: 10,
    },
    input: {
        padding: 8,
        margin: 10,
        marginRight: 30,
        marginLeft: 30,
        borderColor: "black",
        backgroundColor: "white",
        borderRadius: 10,
        fontSize: 16,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#0D2481",
        padding: 10,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 10,
        fontSize: 14,
    },
    password: {
        color: 'white', 
        alignSelf: 'flex-end', 
        padding: 2, 
        // margin: 10,
        textDecorationLine: 'underline',
        marginRight: 30,
    },
    google: {
        fontSize: 18,
        color: 'white', 
        alignSelf: 'center', 
        // padding: 5, 
    },
})