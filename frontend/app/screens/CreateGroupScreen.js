import React, { useState, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';

import AppBackButton from '../components/AppBackButton';
import AppInformationInput from '../components/AppInformationInput';
import AppAddMembers from '../components/AppAddMembers';
import AppShowMembers from '../components/AppShowMembers';
import AppColorPicker from '../components/AppColorPicker';
import AppText from '../components/AppText';
import AppTextButton from '../components/AppTextButton';

//createGroupAPI, 
import { personsAPI } from '../data/api';

function CreateGroupScreen(props) {
    const text = React.useState("starting text");
    const [results, setResults] = useState([]);
    const [groupName, setGroupName] = useState('');
    const [personsAdded, setPersonsAdded] = useState([]);
    const [color, setColor] = useState('');
    
    const onAddPersonHandler = (item) => {
        console.log(item);
        if(personsAdded.includes(item)) {
            setPersonsAdded(personsAdded.filter(person => person !== item));
        } else {
            setPersonsAdded(prevArray => [...prevArray, item]);
        }
    };
    
    const onGroupCreated = () => {
        props.navigation.navigate('HomeScreen');
    };
    
    const onChangeTextHandler = (text) => {
        if(text.length === 0) {
            setResults([]);
            return;
        }
        personsAPI(global.PERSON_ID, text)
        .then(res => res.json())
        .then(json => { 
            const res_array = []; 
            for(let i in json) { 
                res_array.push(json[i]); 
            }; 
            setResults(res_array);
        })
        .catch((error) => {
            console.error(error);
        })
    };
    
    const onSubmitHandler = () => {
        for (let i=0; i<personsAdded.length; i++) {
            let groupId, personId;
            if (i == 0) {
                groupId = global.PERSON_ID+groupName;
                personId = personsAdded[i];
            } else {
                groupId = personsAdded[i]+groupName;
                personId = personsAdded[i].id;
            }

            createGroupAPI(color, 
                i == 0 ? global.PERSON_ID+groupName : personsAdded[i]+groupName, 
                groupName, 
                global.PERSON_ID,
                i == 0 ? personsAdded[i] : personsAdded[i].id)
            .then(res => {
                onGroupCreated();
            })
            .catch(err => {
                console.log(err);
            });
        }
    };
    
    useFocusEffect(
        useCallback( () => {
            setPersonsAdded(prevArray => [...prevArray, PERSON_ID]);
        }, [])
    );
    
    return (
        <SafeAreaView style={styles.background}>   
            <View style={styles.header}>
                <AppBackButton back='HomeScreen' label='Cancel' textStyle={{fontSize: 20, fontWeight: 'none'}} type='text'/>  
                <AppText style={{fontSize: 18, fontWeight: 'bold', left: -11}}>New Group</AppText>
                <AppTextButton label='Add' onPress={onSubmitHandler} textStyle={{color: 'dodgerblue', fontSize: 20, fontWeight: 'none'}}/>
            </View>
            <View style={styles.top}>
                <AppInformationInput 
                    onChangeText={(text) => setGroupName(text)}
                    placeholder='Group name'/>
            </View>
            <View style={styles.mid}>
                <AppText style={{alignSelf: 'center', fontSize: 18, marginLeft: 10}}>Color</AppText>
                <AppColorPicker onChangeValue={(value) => {setColor(value); console.log(value)}}/>
            </View>
            
            <View style={styles.bottom}>
                <AppAddMembers
                    placeholder='Add members'
                    onChangeText={text => onChangeTextHandler(text)}
                    onPress={item => onAddPersonHandler(item)}
                    data={results}/>
                <AppShowMembers/>
            </View>
            
            
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        padding: 20
    },
    bottom: {
        backgroundColor: 'white',
        borderRadius: 8,
     },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    input: {
        backgroundColor: 'white',
    },
    mid: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        zIndex: 10,
    },
    top: {
        backgroundColor: 'white',
        borderRadius: 8,
        height: 48,
        marginBottom: 20, 
    }
})

export default CreateGroupScreen;