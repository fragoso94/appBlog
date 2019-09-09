import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const BlogPostForm = ({onSubmit, initialValues})=>{
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View>
            <Text style={styles.label}>Ingrese título:</Text>
            <TextInput style={styles.input} value={title} onChangeText={ (text)=>setTitle(text) } />
            <Text style={styles.label}>Ingrese contenido:</Text>
            <TextInput style={styles.input} value={content} onChangeText={ (content)=>setContent(content) } />
            <Button
                title = "Guardar post"
                onPress={()=> onSubmit(title, content) }
            />
        </View>
    );
};

BlogPostForm.defaultProps = {
    initialValues:{
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    input:{
        fontSize: 15,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label:{
        marginBottom: 10,
        fontSize: 15,
        marginLeft: 5
    }
});

export default BlogPostForm;