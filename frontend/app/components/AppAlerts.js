import React, { useCallback, useState } from 'react';
import { View, RefreshControl, StyleSheet, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import AppText from './AppText';
import AlertItem from './AlertItem';

import { upcomingAPI } from '../data/api.js'

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

function AppAlerts({onPress}) {
    const [eventsArray, setEventsArray] = useState([]);
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
        getEventsFromApi();
    }, []);
    
    const getEventsFromApi = () => {
        upcomingAPI(global.PERSON_ID)
        .then(res => res.json())
        .then(json => {          
            const res_array = []; 
            for(let i in json) { 
                res_array.push(json[i]); 
            }; 
            setEventsArray(res_array);
        })
        .catch(err => {
            console.error(err);
        });
    }

    useFocusEffect(
        useCallback( () => {
            getEventsFromApi();
        }, [])
    );
    
    return (
        <View style={styles.container}>
            <FlatList
                refreshControl={<RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}/>}
                data={eventsArray}
                renderItem={ 
                    ({ item }) => {return <AlertItem alert={item}/>} }
                ListEmptyComponent={<AppText>No upcoming Events</AppText>}
                keyExtractor={item => item.event_id}
                scrollEnabled={true}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    }
})

export default AppAlerts;