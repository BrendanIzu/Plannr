import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

import AppButton from './AppButton';

function AppButtonRsvp({ icon, onPress, style }) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
            <AntDesign name={icon} size={50} color="black" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default AppButtonRsvp;