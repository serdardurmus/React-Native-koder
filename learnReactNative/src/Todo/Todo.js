import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, SafeAreaView, Image, TouchableOpacity, Dimensions, ScrollView, KeyboardAvoidingView, FlatList} from 'react-native';

let toDoList = [
  {
      id:0,
      title:"Alışverişe git"
  },
  {
      id:1,
      title:"Nohut yemeği yap"
  }
];
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);




const App = () => {

  const [userText, setUserText] = useState("")
  const [id, setID] = useState(2);

  const changeData = () => {
    toDoList.push({id: id, title: userText});
    setUserText("");
    setID(id+1);
  }
  const resetData = () => {
    toDoList = [];
    setUserText("");
    setID(0);
  }
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.headingtext}>To Do</Text>
          <Text style={styles.headingtext}>{toDoList.length}</Text>
        </View>
        <View style={styles.list}>
          <FlatList 
            data = {toDoList}
            renderItem={renderItem}
            keyExtractor ={item => item.id.toString()}
            
          />
          
        </View>
        <View style={styles.todo}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setUserText(text)}
            value={userText}
            
          />
          <TouchableOpacity 
          style={styles.button}
          onPress={changeData}
          >
              <Text style={{color: "white", fontWeight: "bold"}}>Add Todo</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.button}
          onPress={resetData}
          >
              <Text style={{color: "white", fontWeight: "bold"}}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#37474f",
  },
  heading: {
    height: Dimensions.get("window").height * 0.05,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
    // flex: 1,
  },
  headingtext: {
    fontWeight: "bold",
    color: "#ffa726",
    fontSize: 30,
  },
  list: {
    // backgroundColor: "#f2f2f2",
    flex: 1,
  },
  todo: {
    backgroundColor: "#b0bec5",
    // flex: 0.2,
    marginHorizontal: 20,
    marginVertical: 30,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 7,
    // height: 100,
    height: Dimensions.get("window").height*0.3,
  },
  item: {
    backgroundColor: "#546e7a",
    marginHorizontal: 20,
    marginVertical: 5,
    padding: 7,
    borderRadius: 7,
  },
  title: {
    color: "white",
    textAlign: "left",
    fontSize: 20,
  },
  input: {
    backgroundColor: "#f2f2f2",
    borderRadius: 7,
    width: "70%",
    fontSize: 15,
    paddingLeft: 10,
    margin: 3,
  },
  button: {
    width: "50%",
    height: "28%",
    backgroundColor: "#546e7a",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 1,
  }
})