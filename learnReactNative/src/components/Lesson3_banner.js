import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';


const myBanner = (props) => {
    return (
        <View style={[styles.container, {backgroundColor: props.color}]}>
            <View style={{flexDirection: "row", alignItems: "center",}}>
                <View style={{flex: 1,}}>
                    <Text style={styles.text}>{props.title}</Text>
                    <Text style={styles.text_2}>{props.desc}</Text>
                </View>
                <Text style={styles.text_2}>İnaktif</Text>
            </View>
        </View>
    )
}

export default myBanner;

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#ba68c8',
        padding: 10,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        marginBottom: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
    text_2: {
        fontSize: 13,
        // fontWeight: "bold",
        color: "black",
    },
})