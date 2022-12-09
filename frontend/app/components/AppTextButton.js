import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import AppText from './AppText';

function AppTextButton({ buttonStyle, disabled, label, onPress, style, textStyle }) {
    return (
        <TouchableOpacity disabled={disabled} style={[styles.button, buttonStyle, style]} onPress={onPress}>
            <AppText style={[styles.text, textStyle, disabled ? styles.disabled : styles.yeet]}>{label}</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    disabled: {
      color: 'lightgrey',  
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
    }
})

export default AppTextButton;