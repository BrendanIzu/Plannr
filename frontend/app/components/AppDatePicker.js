import React from 'react';
import { StyleSheet, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import AppText from './AppText';

function AppDatePicker({ date, label, onChange }) {
    return (
        <View style={styles.container}>
            <AppText style={{alignSelf: 'center', fontSize: 18, justifyContent: 'center', marginLeft: 20}}>{label}</AppText>
            <DateTimePicker 
                style={styles.picker}
                mode="datetime" 
                value={date} 
                onChange={onChange}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    picker: {
        flex: 1,
        alignSelf: 'center',
        marginRight: 10,
    }
})

export default AppDatePicker;