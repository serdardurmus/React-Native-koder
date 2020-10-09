import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, TextInput, Platform, TouchableOpacity} from 'react-native';

import Lesson3_banner from './components/Lesson3_banner';
import Lesson3_button from './components/Lesson3_button';

const food_data = [
    {
        title:"Çorbalar",
        desc:"Şefe özel çorbalar içinizi ısıtacak",
        color:"#ef9a9a",
        isActive : true,
    },
    {
        title:"Ara Sıcaklar",
        desc:"Lezzetli aperatifler yüzünüzü güldürecek",
        color:"#ce93d8",
        isActive : false,
    },
    {
        title:"Ana Yemekler",
        desc:"Ana yemekler karnınızı doyuracak",
        color:"#9fa8da",
        isActive : true,
    },
    {
        title:"Alkolsüz içecekler",
        desc:"Buz gibi alkolsüz içecekler",
        color:"#26a69a",
        isActive : true,
    },
    {
        title:"Alkollü içecekler",
        desc:"Buz gibi alkollü içecekler",
        color:"#ff9800",
        isActive : false,
    },
]

const App = () => {

    return (
        <SafeAreaView style={{flex: 0, }}>
            <View style={styles.container}>
                <Text style={styles.text}>Serdar Durmus</Text>
                <Text style={styles.text, styles.text_2}>React-Native : Lessons3.js </Text>
            </View>

            {
                food_data.map((food) => {
                    return (<Lesson3_banner
                        title = {food.title}
                        desc = {food.desc}
                        color = {food.color}
                        isActive = {food.isActive}
                    />
                    )
                })
            }
            <Lesson3_button buttonTitle = "Update" />
        </SafeAreaView>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: "white", 
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: 10,
    },
    text: {
        color: 'rgb(170,71,126)', 
        fontWeight: 'bold',
        fontSize: 16,
    },
    text_2: {
        color: 'black', 
        fontWeight: 'bold',
        fontSize: 18,
    },
});