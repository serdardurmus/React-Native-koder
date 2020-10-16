import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, FlatList} from 'react-native';

const App = () => {


    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <Text style={styles.text}>Hei Fullstack</Text>
                <Text style={styles.text}></Text>
                <Text style={styles.text}>This is a FlatList:</Text>
                <FlatList 
                    data = {[
                        {key: 'Devin'},
                        {key: 'Dan'},
                        {key: 'Dominic'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                    ]}
                renderItem={({item}) => <Text>{item.key}</Text>}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e57373',
        padding: 10,
        margin: 20,
        borderRadius: 10,
    },
    text: {
        color: "white",
    }
})

export default App;