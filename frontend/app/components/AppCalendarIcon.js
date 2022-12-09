import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

function AppCalendarIcon({style}) {
    return (
        <View style={[styles.container, style]}>
           <Image style={styles.image}
            source={require('../assets/calendar.png')}/>  
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        flex: 1,
        padding: 20,
    },
    image: {
        flex: 1,
        width: 'auto',
        height: 'auto',
        resizeMode: 'contain',
    },
})

export default AppCalendarIcon;