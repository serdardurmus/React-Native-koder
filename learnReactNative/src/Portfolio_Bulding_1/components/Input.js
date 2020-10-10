import React from 'react';
import { View, TextInput, StyleSheet, Platform} from 'react-native';

const Input = ({holder}) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={holder}
                keyboardType ="email-address"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eceff1',
        paddingLeft: Platform.OS == "ios" ? 15 : 10,
        margin: 10,
        borderRadius: 10,
        marginVertical: 10
    }
})

export { Input }