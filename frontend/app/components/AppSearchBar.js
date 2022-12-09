import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from './AppText';

function AppSearchBar(props) {
    return (
        <View style={styles.container}>
            <AppText>{"search bar"}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'grey',
    }
})

export default AppSearchBar;