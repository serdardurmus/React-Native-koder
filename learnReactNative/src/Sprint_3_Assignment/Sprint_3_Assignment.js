import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, TextInput, Platform, TouchableOpacity} from 'react-native';



const App = () => {

    return (
        <SafeAreaView style={{flex: 1,}}>
            <View style={styles.container1}>
                <View style={styles.container1_1}>
                    <Text style={styles.text1}>Orange Circle</Text>
                    <Text style={styles.text2}>Yellow Box</Text>
                </View>
            </View>
            <View  style={styles.container2}>
                <View style ={{flexDirection: "row",}}>
                    <View>
                        <Text style={styles.text3}>Black Box</Text>
                    </View>
                    <View  style={styles.box_text4}>
                        <Text style={styles.text4}>Brown Box</Text>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default App;

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: "red",
        justifyContent: 'center', 
        alignItems: 'center',
    },
    container1_1: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#808080", 
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 10,
        padding: 30,
        paddingBottom: 15,
        paddingTop: 10,
    },
    container2: {
        flex: 2,
        backgroundColor: "#ffc0ca", 
    },
    text1: {
        margin: 10,
        backgroundColor: "orange",
        textAlign: "center",
        textAlignVertical: "center",
        width: 130,
        height: 130,
        borderRadius: 100,
    },
    text2: {
        backgroundColor: "yellow",
        padding: 20,
        borderRadius: 20,
        margin: 10,
    },
    text3: {
        margin: 20,
        backgroundColor: "black",
        color: "white",
        width: 180,
        height: 370,
        borderRadius: 20,
        textAlign: "center",
        textAlignVertical: "center",
    },
    box_text4: {
        backgroundColor: 'brown',
        height: 380,
        width: 70,
        borderRadius: 90,
        justifyContent: 'center',
        margin: 15,
        marginLeft: 40,
    },
    text4: {
        transform: [{ rotate: '-90deg' }],
        color: 'white',
        textAlign: 'center'
    },
});