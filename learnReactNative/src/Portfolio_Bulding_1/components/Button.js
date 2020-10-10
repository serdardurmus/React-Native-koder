import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const Button = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>Giriş Yap</Text>
        </TouchableOpacity>
    )
}

export { Button }

const styles = StyleSheet.create ({
    container: {
        backgroundColor: "#82ada9",
        padding: 20,
        width: Dimensions.get('window').width /2,
        alignSelf: "center",
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 15,
    },
    text: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    }
})