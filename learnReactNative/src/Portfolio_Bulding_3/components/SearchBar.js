import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TextInput } from 'react-native';

const SearchBar = (props) => {
    const [onSearch, setOnSearch] = useState("");
    const sendValue = () => {
      props.getName(onSearch);
    };
  
    return (
      <View style={styles.searchBarStyle}>
        <TextInput
          value={onSearch}
          placeholder="Ürün ara..."
          onChangeText={(val) => {
            setOnSearch(val);
            sendValue();
          }}
        />
      </View>
    );
  };

export { SearchBar };

const styles = StyleSheet.create ({
    searchBarStyle: {
        backgroundColor: "#eceff1",
        paddingLeft: 5,
        margin: 5,
        borderRadius: 10
    },
});