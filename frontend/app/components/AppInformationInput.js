import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

function AppInformationInput({ onChangeText, placeholder, label, type}) {
    return (
        <View style={[styles.container, type=='long' ? styles.long : styles.fake]}>
            <TextInput
                multiline={true}
                placeholder={placeholder}
                secureTextEntry={label === 'password'}
                autoCorrect={false}
                onChangeText={onChangeText}
                style={styles.input}
                autoCapitalize={'none'}
                scrollEnabled={type == 'long'}/></View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        width: '95%',
        margin: 8,
        justifyContent: 'flex-start',
    },
    input: {
        color: 'black',
        maxHeight: 100,
        paddingLeft: 10,
        fontSize: 18,
    },
    long: {
        height: 100,
    }
})

export default AppInformationInput;