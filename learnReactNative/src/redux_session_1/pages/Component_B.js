import React from 'react';
import { Component } from 'react';
import {View, Text} from 'react-native';

import { useSelector } from 'react-redux';

const Component_B = (props) => {
    const ourCounter = useSelector(myGlobalState => myGlobalState.counter)
    return(
        <View style={{backgroundColor: "#f48fb1", flex: 1}}>
            <Text style={{color: "white", fontSize: 20}}>Component_B</Text>
            <Text style={{color: "white", fontSize: 30}}>Counter: {ourCounter}</Text>
        </View>
    );
};

export default Component_B;