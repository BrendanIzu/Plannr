import React from 'react';
import { isWithinInterval } from 'date-fns';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import AppText from '../components/AppText';

function AppButton({ label, onPress, style }) {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <AppText style={styles.AppText}>{label}</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'dodgerblue',
        width: 'auto',
        margin: 5,
        padding: 10,
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 30,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    }
})

export default AppButton;