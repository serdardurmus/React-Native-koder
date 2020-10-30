import React from 'react';
import { View , Text, Button} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

const Component_A = (props) => {
    const myCounter = useSelector(globalState => globalState.counter);
    const dispatch = useDispatch();
    return (
        <View style={{backgroundColor: "#ce93d8", flex: 1}}>
            <Text style={{color: "white", fontSize: 20}}>Component_A</Text>
            <Text style={{color: "white", fontSize: 30}}>Counter: {myCounter}</Text>
            <Button 
                title= "Arttır!"
                onPress={() => dispatch({ type: "INCREASE_COUNTER"})}
                color = "#ba68c8"
                
            />
            <Text> </Text>
            <Button 
                title= "Azalt!"
                onPress= { () => dispatch({ type: "DECREASE_COUNTER"})}
                color = "#ba68c8"
            />
        </View>
    );
};

export default Component_A;