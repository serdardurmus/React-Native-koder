import React from 'react';
import { 
  StyleSheet, 
  Alert,
  Text, 
  View, 
  SafeAreaView, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  ScrollView} from 'react-native';

import Button from './components/Lessons9_gjenta_Button';

const App = () => {

    const sayHello = () => {
      alert("Hello there!")
    };

    return (
      <SafeAreaView>
        <View>
        <Text style={{fontSize: 30, alignSelf: "center"}}>Hei Fullstack 😊</Text>
      </View>

      <Button banner="Press me!" color="#a862a2" sayingHello={sayHello}/>
      <Button banner="Press me too!" sayingHello={() => {Alert.alert("SD Programmer","4ever")}}/>

      </SafeAreaView>
    );
};

export default App;

