import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

function GroupIcon({small}) {
    return (
        <View style={styles.container}>
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
    large: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: 80,
        height: 80,
        margin: 10,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
    },
    small: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: 50,
        height: 50,
        margin: 10,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 0.5,
    }
})

export default GroupIcon;