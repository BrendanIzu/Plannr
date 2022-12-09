import React from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';

function AppText({children, style}) {
    return <Text style={[styles.text, style]}>{children}</Text>
}

const styles = StyleSheet.create({
    text: {
        fonSize: 18,
        color: 'black'
    }
})

export default AppText;