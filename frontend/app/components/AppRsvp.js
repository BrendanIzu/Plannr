import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import AppButtonRsvp from './AppButtonRsvp';

import { updateRsvpAPI } from '../data/api';

function AppRsvp({event}) {
    const [selected, setSelected] = useState('');
    const isSelected = (button) => {
        return button == selected;
    }
    
    useFocusEffect(
        useCallback( () => {
            if(event.rsvp) {
                setSelected(event.rsvp); 
            } else {
                setSelected('MAYE'); 
            }
        }, [])
    );
    
    return (
        <View style={styles.container}>
            {/* <AppText style={{fontSize: 30, alignSelf: 'center', fontWeight: 'bold'}}>RSVP</AppText> */}
            <View style={styles.buttonContainer}>
                <AppButtonRsvp icon='closecircleo' onPress={() => {setSelected('NO'); updateRsvpAPI(event.event_id, 'NO')}} style={ isSelected('NO') ? styles.buttonSelectedNo : styles.buttonNormal}/>
                <AppButtonRsvp icon='minuscircleo' onPress={() => {setSelected('MAYBE'); updateRsvpAPI(event.event_id, 'MAYBE')}} style={ isSelected('MAYBE') ? styles.buttonSelectedMaybe : styles.buttonNormal}/>
                <AppButtonRsvp icon='checkcircleo' onPress={() => {setSelected('YES'); updateRsvpAPI(event.event_id, 'YES')}} style={ isSelected('YES') ? styles.buttonSelectedYes : styles.buttonNormal}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    buttonSelectedMaybe: {
        backgroundColor: 'yellow',
    },
    buttonSelectedNo: {
        backgroundColor: 'tomato',
    },
    buttonSelectedYes: {
        backgroundColor: 'green',
    },
    container: {
        width: '100%',
        height: 150,
    }
})

export default AppRsvp;