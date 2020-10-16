import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, SectionList} from 'react-native';

const App = () => {


    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <Text >Hei Fullstack</Text>
                <Text >This is a SectionList</Text>
                <Text ></Text>
                <SectionList 
                    sections = {[
                        {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
                        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Joel', 'John', 'Julie']},
                        {title: 'T', data: ['Tom']},
                    ]}
                renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                keyExtractor={(item, index) => index}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e57373',
        padding: 10,
        margin: 20,
        borderRadius: 10,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

export default App;