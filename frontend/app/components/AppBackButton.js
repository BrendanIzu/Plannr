import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import AppText from '../components/AppText';
import AppTextButton from './AppTextButton';

function AppBackButton({back, label, style, textStyle, type}) {
    const navigation = useNavigation();
    
    const goBack = () => {
        navigation.navigate(back);
    }
    
    return (
        <View>
            {type != 'text' && 
                <TouchableOpacity style={[styles.button, style]} onPress={goBack}>
                    <AppText style={[styles.text, textStyle]}>{'back'}</AppText>
                </TouchableOpacity>}
            {type == 'text' && 
                <AppTextButton label={label ? label : 'back'} onPress={goBack} textStyle={[styles.blue, textStyle]}/>}
        </View>
    );
}

const styles = StyleSheet.create({
    blue: {
        color: 'dodgerblue',
    },
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

export default AppBackButton;