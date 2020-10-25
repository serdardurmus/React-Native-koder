/*
"id": 0,
"name": "Cafe Oslo",
"country": "Oslo",
"imgURL": "https://m.media-amazon.com/images/I/51uguxa9nYL._AC._SR360,460.jpg",
"address_1": "111 8th Ave SW",
"address_2": "Calgary / Southern Alberta",
"telephone": "+4032635330"
*/

import React from 'react';
import {TouchableOpacity, Image, Text, Dimensions, StyleSheet} from 'react-native';

const PostCard = (props) => {
    return(
        <TouchableOpacity>
            <Text style={styles.text}>{props.post.neighborhood}</Text>
        </TouchableOpacity>
    )
}

export default PostCard;

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        textAlign: "center",
        
    }
})