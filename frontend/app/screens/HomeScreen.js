import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

import AppAlerts from '../components/AppAlerts';
import AppPopupItem from '../components/AppPopupItem';
import AppTextButton from '../components/AppTextButton';

function HomeScreen(props, {route}) {
    const [showPopup, setShowPopup] = useState(false)
    
    const onPressPopupHandler = () => {
        setShowPopup(!showPopup);
    }
    
    useFocusEffect(
        useCallback( () => {
            setShowPopup(false);
        }, [])
    );
    
    return (
        <View style={styles.background}>
            { showPopup && <View style={styles.popup}>
                    <AppPopupItem icon='group-add' label='New Group' onPress={() => {props.navigation.navigate('CreateGroupScreen')}} buttonStyle={{margin: 2, height: 30}} textStyle={{fontWeight: 'none'}}></AppPopupItem>
                    <AppPopupItem icon='event' label='New Event' onPress={() => {props.navigation.navigate('CreateEventScreen')}} buttonStyle={{margin: 2}} textStyle={{fontWeight: 'none'}}></AppPopupItem>
                </View>} 
            <SafeAreaView style={styles.header}>
                <View style={styles.headerContainer}>
                    <AppTextButton label='Settings' textStyle={{color: 'dodgerblue', fontSize: 18, fontWeight: 'none'}}/>
                    <AppTextButton label='New' onPress={onPressPopupHandler} textStyle={{color: 'dodgerblue', fontSize: 18, fontWeight: 'none'}}/>
                </View> 
            </SafeAreaView>
            <View style={styles.body}>
                <View style={styles.bodyScroll}> 
                    <View style={styles.upcoming}>
                        <AppAlerts/>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: { 
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    body: {
        flex: 15,
    },
    bodyScroll: {
        flex: 1,
    },
    header: {
        flex: 1.1,
        borderBottomWidth: 0.5,
        borderColor: 'lightgrey',
        height: 200,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 17,
    },
    popup: {
        backgroundColor: 'white',
        width: 250,
        position: 'absolute',
        alignSelf: 'flex-end',
        right: 7,
        top: 83,
        zIndex: 100,
        alignItems: 'flex-end',
        justifyContent: 'center',
        borderRadius: 8,
        borderWidth: 0.2,
        borderColor: 'lightgrey',
    },
    upcoming: {
        flex: 1,
        width: '100%',
        height: 800,
    },
})

export default HomeScreen;