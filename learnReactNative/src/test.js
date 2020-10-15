import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const App = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigBlue}>just bigBlue</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
      </View>
    );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },

});
export default App;