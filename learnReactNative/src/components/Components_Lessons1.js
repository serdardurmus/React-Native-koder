import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

const Components_Lessons1 = () => {
    return (
        <View style={styles.container}>
            <Text>Hello</Text>
            <Text>Welcom to SD</Text>
            <View>
                <Text>Er du klar for å være Fullstack Developer?</Text>
            </View>
        </View>
    )
}

export default Components_Lessons1;

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#ba68c8',
        padding: 10,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        marginBottom: 10,
    }
})