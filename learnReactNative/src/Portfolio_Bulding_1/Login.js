import React from 'react';
import {
    SafeAreaView, 
    Text, 
    View, 
    Image, 
    StyleSheet, 
    Dimensions,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';

import {Input, Button} from './components';

const Login = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#b2dfdb' }}>
            <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS = "android" ? null : "padding"}> 
            <ScrollView style={{flex: 1}} bounces={false}>
            <View style={{ flex: 1 }}>
                <Image
                    source={require('./logo.png')}
                    style={styles.logoStyle}
                />

                <Input holder="E-posta adresinizi giriniz.." />
                <Input holder="Şifrenizi giriniz.." />
                <Button Text="Giriş Yap"/>
            </View>
            </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create ({
    logoStyle: {
        // backgroundColor: "red",
        // tintColor: 'black',
        resizeMode: 'contain',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.40,
    }
})