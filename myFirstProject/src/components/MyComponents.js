import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MyComponent = () => {
    return (
        <View style={styles.container}>
            <Text>Hi</Text>
            <Text>Welcome to Home</Text>
            <View>
                <Text>Klar for å være Fullstack Developer</Text>
            </View>
        </View>
    )
}

export default MyComponent;

const styles = StyleSheet.create({
    container: {
      padding: 10,
      margin: 15,
      borderRadius: 10,
      borderColor: 'purple',
      borderWidth: 2,
    },
  })