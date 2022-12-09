import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppButton from '../components/AppButton';

function CreateScreen(props) {
    const onEventButtonHandler = () => {
        props.navigation.navigate('CreateEventScreen');
    }
    
    const onGroupButtonHandler = () => {
        props.navigation.navigate('CreateGroupScreen');
    }
    
    return (
        <SafeAreaView>
            <AppButton label='new event' onPress={onEventButtonHandler}/>
            <AppButton label='new group' onPress={onGroupButtonHandler}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    
})

export default CreateScreen;