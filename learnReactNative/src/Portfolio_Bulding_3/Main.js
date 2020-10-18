import React, { useEffect, useState} from "react";
import {View, Text, StyleSheet, SafeAreaView, FlatList, Alert, TextInput} from "react-native";

import productData from './components/product_data.json';

import { ProductCard, SearchBar } from './components';

const App = () => {

    const [searchValue, setSearchValue] = useState("");
    const [displayList, setDisplayList] = useState([])
    const renderListItem = ({item}) => <ProductCard product={item} />
    // const renderListItem = ({item}) => <Text>{item.title}</Text> 

    useEffect(() => {
        // Alert.alert("Hoşgeldiniz", "Keyifli Alışverişler")
        setDisplayList(productData)
    }, [])

    useEffect(() => {
        const filteredValue = productData.filter (item => {
            const text = searchValue.toUpperCase();
            const productTitle = item.title.toUpperCase();

            return productTitle.indexOf(text) > -1;
        })
        setDisplayList(filteredValue)
    }, [searchValue])

    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1}}>
                <Text style={styles.banner}>Serdar's Shop</Text>

                <SearchBar getName={(value) => setSearchValue(value)} />
                {/* <View style={styles.searchBar}>
                    <TextInput 
                        placeholder="Ürün ara..."
                        onChangeText={(value) => setSearchValue(value)}
                    />
                </View> */}

                <FlatList 
                    data= {displayList}
                    
                    renderItem = {renderListItem}
                    // renderItem={({item}) => <ProductCard productData={item} />}
                    // Bu uygulamada uygun değil, 1000 tane item olsa 1000 kere fonk çalışacak anlamına geliyor

                    keyExtractor={(_, index) => index.toString()}
                    // _ Det betyr jeg ikke bruker underline
                    // keyExtractor={(item, index) => index.toString()}

                    numColumns={2}
                />
            </View>
        </SafeAreaView>
    )
};

export default App;

const styles = StyleSheet.create({
    banner: {
        color: 'purple',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
    },
    // searchBar: {
    //     backgroundColor: "#eceff1",
    //     paddingLeft: 5,
    //     margin: 5,
    //     borderRadius: 10
    // }
})