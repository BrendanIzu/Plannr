import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppBackButton from '../components/AppBackButton';
import AppDatePicker from '../components/AppDatePicker';
import AppGroupPicker from '../components/AppGroupPicker';
import AppInformationInput from '../components/AppInformationInput';
import AppText from '../components/AppText';
import AppTextButton from '../components/AppTextButton';

import { createEventAPI, membersAPI } from '../data/api';

function CreateEventScreen(props) {   
    const [date, setDate] = useState(new Date());
    const [description, setDescription] = useState('');
    const [groupId, setGroupId] = useState('');
    const [isError, setIsError] = useState(false);
    const [location, setLocation] = useState('');
    const [message, setMessage] = useState('');
    const [title, setTitle] = useState('');
    const [disabled, setDisabled] = useState(true);
    
    const onSubmitHandler = () => {  
        if(groupId == '') {
            setMessage('Must select group');
            setIsError(true);
            return;
        }

        membersAPI(groupId)
        .then((response) => response.json())
        .then((json) => {
            const res_array = [];
            for(let i in json) {
                res_array.push(json[i].person_id);
            }
            return res_array;
        })
        .then((res_array) => {
            for(let i=0; i<res_array.length; i++) {
                createEventAPI(date, description, groupId, location, res_array[i], title)
                .then(async res => { 
                    try {
                        const jsonRes = await res.json();
                        
                        if (res.status !== 200) {
                            console.log('failed to create event');
                        }
                    } catch (err) {
                        console.log(err);
                    };
                })
                .catch(err => {
                    console.log(err);
                });
            }
        })
        .catch((error) => {
            console.error(error);
        })
        props.navigation.navigate('HomeScreen');
    };
    
    const getMessage = () => {
        const status = isError ? `Error: ` : `Success: `;
        return status + message;
    };
    
    const updateDisabled = () => {   
        const status = (title.length === 0 || location.length === 0 || description.length === 0);
        setDisabled(status);
    }
    
    return (
        <SafeAreaView style={styles.background}>   
            <View style={styles.header}>
                <AppBackButton back='HomeScreen' label='Cancel' type='text' textStyle={{fontSize: 18, fontWeight: 'none'}}/>
                <AppText style={{fontWeight: 'bold', fontSize: 20, left: -11, top: -5}}>New Event</AppText>
                <AppTextButton disabled={disabled} label='Add' onPress={onSubmitHandler} textStyle={{color: 'dodgerblue', fontSize: 18, fontWeight: 'none'}}/>
            </View>
            
            <View style={styles.top}>
                <AppInformationInput 
                    onChangeText={(text) => {setTitle(text); updateDisabled()}}
                    placeholder='Title'/>
                <View style={styles.divider}/>
                    
                <AppInformationInput 
                    onChangeText={(text) => {setLocation(text); updateDisabled()}}
                    placeholder='Add location'/>
                <View style={styles.divider}/>
                    
                <AppInformationInput 
                    onChangeText={(text) => {setDescription(text); updateDisabled()}}
                    placeholder='Description'
                    type='long'/>
            </View>
            
            <View style={styles.mid}>
                <AppGroupPicker label='Group' onChangeValue={(groupId) => {setGroupId(groupId); updateDisabled()}} onPress={() => setIsError(false)}/>
            </View>
            
            <View style={styles.bottom}>
                <View style={styles.time}>
                    <AppDatePicker 
                        date={date}
                        label='Starts'
                        onChange={(event, date) => setDate(date)}/>
                        <View style={styles.divider}/>
                        <AppDatePicker 
                        date={date}
                        label='Ends'
                        onChange={(event, date) => setDate(date)}/>
                </View>
            </View>
            
            { isError && <View style={{marginLeft: 20, marginTop: -10}}>
                <AppText style={[styles.message, {color: isError ? 'red' : 'green'}]}>{message ? getMessage() : null}</AppText>  
            </View> }

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
    },
    divider: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'grey',
        width: '90%',
        alignSelf: 'center'
        
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-between',
    },
    input: {
        backgroundColor: 'white',
    },
    message: {
        fontSize: 16,
        marginVertical: '5%',
    },
    mid: {
        zIndex: 10,
        width: 350,
        backgroundColor: 'white',
        marginBottom: 25,
        borderRadius: 8,
    },
    bottom: {
        backgroundColor: 'white',
        width: 350,
        borderRadius: 8,
    },
    row: {
        width: '90%',
    },
    time: {
       justifyContent: 'row',
       width: '100%'
    },
    top: {
        backgroundColor: 'white',
        width: 350,
        borderRadius: 8,
        marginBottom: 25,
    },
})

export default CreateEventScreen;