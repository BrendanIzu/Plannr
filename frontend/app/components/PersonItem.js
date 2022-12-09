import React, { useCallback, useState } from 'react';
import { StyleSheet,  View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import AppText from './AppText';

import { eventsAPI } from '../data/api';

function PersonItem({added, eventId, person, onPress, style}) {
    const [status, setStatus] = useState('');
    
    const getPersonStatus = () => {
        eventsAPI(eventId, person.id)
        .then(res => res.json())
        .then(json => {
            setStatus(json.rsvp);
        })
        .catch(err => {
            console.error(err);
        });
    };
    
    useFocusEffect(
        useCallback( () => {
            if(eventId) {
                getPersonStatus();
            }
        }, [])
    );
    
    return (
        <View>
            { onPress != 'disable' &&<TouchableOpacity style={[styles.container, styles.extra, style, added ? styles.added : styles.yeet]} onPress={onPress}>
                <View style={{flexDirection: 'row', padding: 8}}>
                    <Ionicons name="person-circle-outline" size={30} color="black" />
                    <AppText style={{fontSize: 20, marginLeft: 5, bottom: -2}}>
                        {person.name}
                    </AppText>
                </View>
                
                { added && <View>
                    <AntDesign name="checkcircleo" size={26} color="black" style={{left: -10}}/>
                </View> } 
            </TouchableOpacity>} 
            
            { onPress == 'disable' && <View style={[styles.container, style]}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Ionicons name="person-circle-outline" size={40} color="black" style={{marginRight: 10}}/>
                    <AppText style={{fontSize: 20, fontWeight: 'bold'}}>
                        {person.name}
                    </AppText>
                </View>
                { status == 'YES' && <AntDesign name="checkcircleo" size={30} color="black"/> } 
                { status == 'NO' && <AntDesign name="closecircleo" size={30} color="black"/> }
                { status == 'MAYBE' && <AntDesign name="minuscircleo" size={30} color="black"/> }
                { status == null && <AntDesign name="questioncircleo" size={30} color="black"/> }
                
            </View> }
        </View>
    );
}

const styles = StyleSheet.create({
    added: {
        backgroundColor: 'white'
    },
    container: {
        width: 100,
        height: 60,
        padding: 5,
        margin: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    extra: {
        backgroundColor: 'white',
        width: '95%',
        justifyContent: 'space-between',
    },
})

export default PersonItem;