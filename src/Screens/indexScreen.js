import React, { useContext} from 'react';
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import {Context} from "../Context/BlogContext";
import {Feather} from '@expo/vector-icons';

const IndexScreen = ({navigation}) =>{
    const {state, deleteBlogPost} = useContext(Context);


    return(
        <View>
            <Text>Screen</Text>
            <FlatList
                data={state}
                keyExtractor = { blogPost => blogPost.title}
                renderItem = { ({item}) =>{
                    return <TouchableOpacity onPress={()=> navigation.navigate('Show', {id: item.id})}>
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress={()=> deleteBlogPost(item.id) }>
                                <Feather style={styles.icon} name="trash"  />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    }
                }
            />
        </View>
    );
};
IndexScreen.navigationOptions = ({navigation })=>{
    return {
        headerRight: <TouchableOpacity onPress={ ()=> navigation.navigate('Create') }>
            <Feather style={{marginRight: 10, fontSize: 25}} name="plus" />
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    title:{
        fontSize: 18
    },
    icon:{
        fontSize: 15
    }
});

export default IndexScreen;
