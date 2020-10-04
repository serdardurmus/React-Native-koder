

import React from 'react';  // 
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';  // 
import MyComponents from './components/MyComponents';


// Android için SafeAreaView yazmak zorunda değildir
// View JS'deki div ve p lere denk geliyor

/*
* style =""  // HTML
* style = {}  // RN
* 
*/

/**
  <View style={{  // inline style neredeyse iç tercih edilmez
    backgroundColor:"purple",
    padding: 10,
    margin: 20,
  }}>
    <Text>
      Hello World!
    </Text>
  </View> 
*/

const my_name = "Serdar";

// function myFunction() {
//   const isAdmin = false;
//   if (isAdmin) return <Text>Admin kullanıcısı</Text>
//   return <Text>Üye kullanıcısı</Text>
// }

// function myFunction() {
//   const isAdmin = false;
// isAdmin ? <Text>Admin kullanıcısı</Text> : null
// }

function myFunction2() {
  return <Text>Denne teksten kommer fra function2</Text>
}

function myFunction3(userName) {
return <Text>{userName}</Text>
}
function myFunction4() {
  const myArray = [1,2,3,4,5]
  return myArray.map((number) => {
    return <Text>{number}</Text>
  });
  }

const App = () => {
  const isAdmin2 = false;
  function myFunction() {}
  return(
    <SafeAreaView>  
        <View style={styles.container}>
          <Text style={styles.text}>
            Hello World!
          </Text>
        </View>
      <MyComponents />
      <Text>Variable:</Text>
      <Text style ={styles.hello}>Velkommen {my_name}</Text>
      <Text style ={styles.hello}>4 X 5 = {4 * 5}</Text>
      <Text> </Text>
      <Text>Function:</Text>
    {/* <Text>{myFunction()}</Text> */}
    {isAdmin2 ? <Text>Admin kullanıcısı</Text> : null}
    {isAdmin2 && <Text>Admin kullanıcısı</Text> /*Sadece True'da  çalışır*/}
    
    {myFunction2()}
    {myFunction3("Serdar")}
    {myFunction4()}
    </SafeAreaView>
  );
};

// Style ler buraya oluşturulacak
const styles = StyleSheet.create({
  container: {
    backgroundColor:"purple",
    padding: 10,
    margin: 20,
    borderRadius: 15,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: "center",
  },
  hello: {
    fontSize: 30,
  }
});

export default App;
