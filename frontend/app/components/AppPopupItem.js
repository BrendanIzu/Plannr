import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import AppText from './AppText';

function AppPopupItem({ buttonStyle, icon, label, onPress, style, textStyle }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <View style={styles.container}>
                <View style={{alignItems: 'flex-start', flex: 0.5}}>
                    <MaterialIcons name={icon} size={24}/>  
                </View>
                <View style={{alignItems: 'flex-end', flex: 1.5}}>
                    <AppText style={styles.text}>{label}</AppText>  
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        padding: 13,
    },
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    text: {
        fontSize: 18
    }
})

export default AppPopupItem;