import React from 'react';
import {View, Text, Button} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const Component_B = (props) => {
    const ourCounter = useSelector(globalState => globalState.counter);
    const myUserName = useSelector(globalUserName => globalUserName.userName);
    const dispatch = useDispatch();
    return (
        <View style={{backgroundColor: "#f48fb1", flex: 1}}>
            <Text style={{color: "white", fontSize: 20}}>Component_B</Text>
            <Text style={{color: "white", fontSize: 30}}>Counter: {ourCounter}</Text>
            <Text style={{color: "white", fontSize: 30}}>Name: {myUserName}</Text>
            <Button 
                title = "Kullanıcı Adını Getir"
                onPress= { () => dispatch({ 
                    type: "SET_USERNAME",
                    payLoad: {
                        newUserName: "Serdar"
                    }
                })}
                color = "#242424"
            />
        </View>
    );
};

export default Component_B;