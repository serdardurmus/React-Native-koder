import React from 'react';
import {Text, Image, TouchableOpacity, StyleSheet, Dimensions, View, TouchableWithoutFeedback} from 'react-native';

const PostCard = (props) => {
    return (
        <TouchableWithoutFeedback
            onPress= {() => props.onSelect()}
        >
            <View>
            <Image 
                style={styles.image}
                source={{uri: props.post.img}}
            />
            <View style={styles.footercontainer}>
                <Text style={styles.title}>{props.post.userName}</Text>
                <Text numberOfLines={3}>{props.post.description}</Text>
            </View>
            </View>
        </TouchableWithoutFeedback>
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