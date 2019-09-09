import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Context} from "../Context/BlogContext";
import { EvilIcons } from '@expo/vector-icons';
import CreateScreen from "./CreateScreen";

const ShowScreen = ({navigation}) =>{
    const id = navigation.getParam('id');
    const {state} = useContext(Context);
    const blogPost = state.find(
        blogPost => blogPost.id === id
    );

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({navigation})=>{
    return {
        headerRight: <TouchableOpacity onPress={ ()=> navigation.navigate('Edit',{id: navigation.getParam('id')}) }>
            <EvilIcons style={{marginRight: 10, fontSize: 30}} name="pencil" />
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({});

export default ShowScreen