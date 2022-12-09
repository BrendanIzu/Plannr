import React from 'react';
import { TextInput, View, StyleSheet, Platform, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { reloadAsync } from 'expo-updates';

function AppTextInput({ onChangeText, placeholder, label, }) {
    return (
        <View style={styles.container}>
                    <View style={styles.label}>
                        <Text 
                            numberOfLines={1}
                            style={label ? styles.text : styles.noText}>{label}</Text>
                    </View>
                    <TextInput
                        placeholder={placeholder}
                        autoCorrect={false}
                        secureTextEntry={label === 'password'}
                        onChangeText={onChangeText}
                        style={styles.input}
                        autoCapitalize={'none'}/></View>
    );
}

const styles = StyleSheet.create({
    input: {
        color: 'black',
        height: 40,
        top: -12,
        right: -20,
    },
    container: {
        height: 50,
        width: '75%',
        margin: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 45,
        justifyContent: 'flex-start',
    },
    text: {
        backgroundColor: 'white',
        paddingLeft: 4,
        paddingRight: 5,
    },
    label: {
        color: 'black',
        bottom: 8,
        left: 20,
        alignSelf: 'flex-start',
    },
})

export default AppTextInput;