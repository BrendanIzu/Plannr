import React, { useState} from 'react';
import { FlatList, TextInput, View, StyleSheet } from 'react-native';

import AppText from './AppText';
import PersonItem from './PersonItem';

function AppAddMembers({ onChangeText, onPress, placeholder, data }) { 
    const [personsAdded, setPersonsAdded] = useState([]);
    
    const onAddPersonHandler = (item) => {
        onPress(item);
        if(personsAdded.some(u => u.email === item.email)) {
            setPersonsAdded(personsAdded.filter(person => person.email !== item.email));
        } else {
            setPersonsAdded(prevArray => [...prevArray, item]);
        }
    };
    
    return (
        <View style={styles.container}>
            <FlatList
                data={personsAdded}
                horizontal={false}
                numColumns={2}
                renderItem={ 
                    ({ item }) => {return <PersonItem person={item}/>} }
                ListEmptyComponent={<AppText></AppText>}
                keyExtractor={item => item.id}
                scrollEnabled={false}
                style={styles.added}/>
            <TextInput
                multiline={true}
                placeholder={placeholder}
                autoCorrect={false}
                onChangeText={onChangeText}
                style={styles.input}
                autoCapitalize={'none'}/>
            <View style={styles.divider}/>
            <FlatList
                data={data}
                renderItem={ 
                    ({ item }) => {return <PersonItem onPress={() => onAddPersonHandler(item)} person={item} added={personsAdded.some(u => u.email === item.email)}/>} }
                ListEmptyComponent={<AppText></AppText>}
                keyExtractor={item => item.id}
                scrollEnabled={false}/>
        </View>
    );
}

const styles = StyleSheet.create({
    added: {
        padding: 10,
    },
    container: {
        height: 'auto',
        maxWidth: 400,
        margin: 10,
        justifyContent: 'flex-start',
    },
    divider: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'grey',
        width: '90%',
        alignSelf: 'center'
        
    },
    input: {
        color: 'black',
        maxHeight: 100,
        paddingLeft: 30,
        paddingRight: 20,
        paddingBottom: 10,
    },
})

export default AppAddMembers;