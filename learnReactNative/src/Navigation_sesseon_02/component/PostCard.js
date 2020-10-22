import React from 'react';
import {Text, Image, TouchableOpacity, StyleSheet, Dimensions, View} from 'react-native';

const PostCard = (props) => {
    return (
        <TouchableOpacity>
            <Image 
                style={styles.image}
                source={{uri: props.post.img}}
            />
            <View style={styles.footercontainer}>
                <Text style={styles.title}>{props.post.userName}</Text>
                <Text>{props.post.description}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PostCard;

const styles = StyleSheet.create({
    image:{
        height: Dimensions.get("window").height/3
    },
    title: {
        fontWeight: "bold",
    },
    footercontainer: {
        padding: 5,
    }
})