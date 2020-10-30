import React from 'react';
import { Component } from 'react';
import {View, Text} from 'react-native';

const Component_B = (props) => {
    return(
        <View style={{backgroundColor: "#f48fb1", flex: 1}}>
            <Text style={{color: "white", fontSize: 30}}>Component_B</Text>
        </View>
    );
};

export default Component_B;