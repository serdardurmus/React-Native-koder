import React, {useState} from 'react';
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
import InputPanel from './components/Lessons9_InputPanel';

const App = () => {
    
    const [userName, setUserName] = useState("");

    const sayHello = () => {
      alert("Hello there!")
    };

    return (
      <SafeAreaView>
        <KeyboardAvoidingView><ScrollView>
        <View>
        <Text style={{fontSize: 30, alignSelf: "center"}}>Hei Fullstack 😊</Text>
        <Text style={{fontSize: 30, alignSelf: "center"}}>Hei {userName}</Text>
        </View>

        <Button banner="Press me!" color="#a862a2" sayingHello={sayHello}/>
        <Button banner="Press me too!" sayingHello={() => {Alert.alert("SD Programmer","4ever")}}/>
        <Text> </Text>
        <InputPanel 
          sendText= {(myValue) => {
            setUserName(myValue)
          }}
        />
        </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
};

export default App;

