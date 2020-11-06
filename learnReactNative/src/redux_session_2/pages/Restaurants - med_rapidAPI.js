import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, FlatList} from 'react-native';

import { RestaurantItem } from '../components';

const Restaurants = (props) => {
    
     const [ list, setList] = useState([]);
     const fetchData = () => {
         axios.post(
             'https://worldwide-restaurants.p.rapidapi.com/search',
             {
                 "limit": '30', 
                 "language": 'en_US', 
                 "location_id": '297704', 
                 "currency": 'USD'
             },
             {
                 headers: {
                    "content-type": "application/json",
                    "x-rapidapi-host": "worldwide-restaurants.p.rapidapi.com",
                    "x-rapidapi-key": "2f54c0d1c9msh0bf3af70b64943fp183230jsn4c2cde50458a",
                 }
             }
             )
             .then(response => setList(response.data.results.data))
             // .catch(error => console.log(error))
     }

     useEffect(() =>  fetchData(), []);

    const renderList = ({item}) => <RestaurantItem item={item}/>

    return (
        <SafeAreaView>
            <View>
                <Text style={{fontSize: 20, textAlign: "center", fontWeight:"bold"}}>Restaurants</Text>
                <FlatList 
                keyExtractor={(_, index) => index.toString()}
                    data={list}
                    renderItem={renderList}
                />
            </View>
        </SafeAreaView>
    );
};

export { Restaurants }
