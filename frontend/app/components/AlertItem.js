import React, { useCallback, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';

import AppCalendarIcon from './AppCalendarIcon';
import AppText from './AppText';

import { backgroundColorAPI } from '../data/api.js';

function AlertItem({alert, onPress}) {
    const navigation = useNavigation();
    const [color, setColor] = useState('silver');
    
    const doSomething = () => {
        navigation.navigate('EventScreen', {
            event: alert,
        })
    }
    
    const getBackgroundColorFromApi = () => {
        backgroundColorAPI(alert.group_id, alert.person_id)
        .then((response) => response.json())
        .then((json) => {  
            if(json) {
                setColor(json.color);   
            }
        })
        .catch((error) => {
            console.error(error);
        })
    }
    
    useFocusEffect(
        useCallback( () => {
            getBackgroundColorFromApi();
        }, [])
    );
    
    return (
        <TouchableOpacity style={styles.container}
            onPress={doSomething}>
            <View style={styles.iconContainer}>
                <AppCalendarIcon style={{backgroundColor: color}}></AppCalendarIcon>
            </View>
            <View style={styles.border}>
                <View style={styles.body}>
                    <AppText style={{fontWeight: 'bold'}}>{alert.title}</AppText> 
                    <AppText style={{color: 'lightgrey'}}>{alert.description}</AppText> 
                    <AppText style={{color: 'lightgrey'}}>{alert.group_id}</AppText> 
                </View> 
            </View>
                                  
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    body: {
        margin: 15,
    },
    border: {
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 0.5,
        width: '100%',
    },
    container: {
        flexDirection: 'row',
    },
    iconContainer: {
        width: 100,
        height: 100,
    }
})

export default AlertItem;