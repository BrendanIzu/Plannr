import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import AppText from './AppText';
import AlertItem from './AlertItem';

const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';

function AppShowMembers({users}) {  
    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                renderItem={ 
                    ({ item }) => {return <View><AppText>{item.name}</AppText></View>} }
                ListEmptyComponent={<AppText></AppText>}
                keyExtractor={item => item.event_id}
                scrollEnabled={true}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'Natared',
    }
})

export default AppShowMembers;