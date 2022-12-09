import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Moment from 'moment';

import AppText from '../components/AppText';
import AppBackButton from '../components/AppBackButton';
import AppTextButton from '../components/AppTextButton';
import AppGuestList from '../components/AppGuestList';
import AppRsvp from '../components/AppRsvp';

const formatDate = (date) => {
    Moment.locale('en');
    return Moment(date).format('LLLL');
};

function EventScreen({route}) {
    const navigation = useNavigation();
    const doSomething = () => {
        navigation.navigate('HomeScreen')
    }
    
    return (
        <View style={styles.background}>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <AppBackButton back='HomeScreen' textStyle={{fontSize: 18, fontWeight: 'none'}} type='text' />
                    <AppTextButton label='Edit' textStyle={{fontSize: 18, color: 'dodgerblue', fontWeight: 'none'}}/>
                </View>
            
                <View style={styles.body}>
                    <View style={styles.title}>
                        <AppText style={{fontWeight: 'bold', fontSize: 30}}>{route.params.event.title}</AppText>
                    </View>
                </View>
                
                <View style={styles.date}>
                    <AppText style={{color: 'grey', fontSize: 18}}>{formatDate(route.params.event.date)}</AppText>
                </View>
                
                <View style={styles.description}>
                    <AppText style={{fontSize: 18}}>{route.params.event.description}</AppText>
                </View>
                <View style={styles.guestList}>
                    <View style={styles.guestListHeader}>
                        <AppText style={{fontWeight: 'none', fontSize: 24}}>Who's going?</AppText> 
                    </View>
                    <View style={styles.divider}/>
                    <AppGuestList event={route.params.event}/>
                </View>
                
                <View>
                    <AppRsvp event={route.params.event}/>
                </View>
                
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container: {
        flex: 1,
        margin: 18,
    },
    date: {
        marginTop: 10,
    },
    description: {
        marginTop: 10,
        minHeight: 80,
    },
    divider: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'grey',
        width: '100%',
        alignSelf: 'center'
        
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 30,
    },
    guestList: {
        backgroundColor: 'white',
       alignItems: 'center', 
       maxHeight: 380,
       borderRadius: 8,
       padding: 15,
    },
    guestListHeader: {
        width: '100%',
        marginBottom: 10,
    },
    title: {
        marginTop: 5,
        maxWidth: 200,
    },
})

export default EventScreen;