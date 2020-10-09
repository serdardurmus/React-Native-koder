import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';

import Components_Lessons1 from './components/Components_Lessons1';

const App = () => {

    const my_name = "Serdar Durmus"
    const isAdmin = true;
    function my_function() {
        return <Text>"This is a function"</Text>;
    }
    function my_function_2() {
        const isAdmin = false;
        return isAdmin ? <Text>Velkommen Admin</Text> : <Text>Velkommen User</Text>;
    }
    function my_function_3 () {
        const myArray = ["Oslo", "Bergen", "Trondheim", "Lier", "Asker"];
        return myArray.map( city => {
            return <Text>{city}</Text>
        }

        )
    }
    return (
        <SafeAreaView>
            <View>
                {/* ------------------- STYLE ------------------- */}
                <View>
                    <View style ={{
                        backgroundColor: 'purple',
                        padding: 10,
                        margin: 20,
                    }}>
                        <Text style={{
                            color: 'white',
                        }}>
                            This is a Lesson 1
                        </Text>
                        <Text style={{
                            color: 'white',
                        }}>
                            We use inline-style
                        </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.text}>
                        We use not inline-style
                        </Text>
                    </View>
                </View>

                {/* ------------------- component ------------------- */}
                <View>
                    <Components_Lessons1 />
                </View>

                {/* ------------------- variable ------------------- */}
                <View style={styles.container_2}>
                    <Text>Hei {my_name}, 3x3={3*3}.</Text>
                </View>

                {/* ------------------- function ------------------- */}
                <View style={styles.container}>
                    {my_function()}
                </View>
                <View style={styles.container_2}>
                    {my_function_2()}
                </View>
                <View style={styles.container}>
                    {isAdmin && <Text>Velkommen Admin</Text>}
                </View>
                <View style={styles.container_2}>
                    {my_function_3()}
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e57373',
        padding: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        // marginTop: 10,
        borderRadius: 10,
    },
    container_2: {
        backgroundColor: '#64b5f6',
        padding: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        // marginTop: 10,
        borderRadius: 10,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    }
})

export default App;