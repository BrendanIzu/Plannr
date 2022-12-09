import React, { useState, useCallback } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { userAPI, groupsFromEventAPI } from '../data/api';

import AppText from './AppText';
import PersonItem from './PersonItem';
import AppButton from './AppButton';

function AppRsvp({event}) {
    const [usersArray, setUsersArray] = useState([]);
    const [eventsArray, setEventsArray] = useState([]);
    const [status, setStatus] = useState('');
    
    const getGroupsByEvent = () => {
        groupsFromEventAPI(event.group_id)
        .then(res => res.json())
        .then(json => {
            const res_array = []; 
            for(let i in json) { 
                res_array.push(json[i]); 
            }; 
            setEventsArray(res_array);
            return res_array;
        })
        .then(groups => {
            for(let i in groups) {
                userAPI(groups[i].person_id)
                .then(res => res.json())
                .then(json => {
                    setUsersArray(prevArray => [...prevArray, json[0]]);
                })
                .catch(err => {
                    console.error(err);
                });
            }
        })
        .catch(err => {
            console.error(err);
        });
    };
    
    useFocusEffect(
        useCallback( () => {
            setUsersArray([]);
            getGroupsByEvent();
        }, [])
    );
    
    // status={getPersonStatus(item.id)}
    
    return (
        <View style={styles.container}>
            <FlatList
                data={usersArray}
                horizontal={false}
                numColumns={1}
                renderItem={ 
                    ({ item }) => {return <PersonItem onPress='disable' person={item} eventId={event.group_id} style={{width: '90%', margin: 3}}/>} }
                ListEmptyComponent={<AppText></AppText>}
                keyExtractor={item => item.id}
                scrollEnabled={true}
                style={styles.list}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 500,
        width: 350,
        padding: 10,
    },
    list: {
        width: '100%',
    }
});

export default AppRsvp;