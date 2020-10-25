import axios from 'axios';
import React from 'react'; 
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  FlatList
} from 'react-native'; 

const Main = (props) => {

    const fetchData_Then = () => {
        let myData=[];
        console.log("fetch starting")
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((respons) => {
                console.log(respons);
                myData = respons.data;
            })
            .catch((error) => console.log(error)) // Hata alırsak çalışır
        console.log(myData)
            console.log("end fetch..")
    }

    const fetchData_Await = async () => {
        console.log("starting await fetch")
        const reponse = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(respons)
        console.log("end await fetch")
    }

    return(
        <SafeAreaView>
            <View>
                <Text>APII</Text>
                <Button title="Fetch Data With Then" onPress={fetchData_Then}/>
                <Button title="Fetch Data With Await" onPress={fetchData_Await}/>
            </View>
        </SafeAreaView>
    )
}

export default Main;