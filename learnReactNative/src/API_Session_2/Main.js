

import axios from 'axios';
import React, { useState } from 'react'; 
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  FlatList
} from 'react-native'; 

const Main = (props) => {

    const [userData, setUserData] = useState([]);
    const fetchData_Then = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(({data}) => {
                setUserData(data)
            })
    }

    const fetchData_Await = async () => {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUserData(data);
        // const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        // setUserData(response.data)
    }

    function promiseFunction (number) {
        return new Promise((resolve, reject) => {
              if (number>5) {
                  resolve("Sayı 5 ten büyüktür!")
              } else {
                  reject("Sayı 5 ten küçüktür..")
              }
        })
    }
    const checkNumber = () => {
        // const result = promiseFunction(10);
        promiseFunction(10)
            .then( response => {
                console.log("response: ")
                console.log(response)
            })
            .catch ( error => {
                console.log("error: ")
                console.log(error)
            })
    }

    return(
        <SafeAreaView>
            <View>
                <Text>API 2</Text>
                <Text> </Text>
                <Button title="Fetch Data With Then" onPress={fetchData_Then}/>
                <Text> </Text>
                <Button title="Fetch Data With Await" onPress={fetchData_Await}/>
                <Text> </Text>
                <Button title="Number" onPress={checkNumber}/>

                <FlatList 
                    data={userData}
                    renderItem={({item}) => <Text>{item.name}</Text>}
                />
            </View>
        </SafeAreaView>
    )
}

export default Main;