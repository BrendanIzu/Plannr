import React, { useState } from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, TextInput, View, Button, Pressable } from 'react-native';

import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import AppTextButton from '../components/AppTextButton';
import AppTextInput from '../components/AppTextInput';

import { authAPI, loginAPI, personIdAPI } from '../data/api.js';

function LoginScreen(props) {
    const text = React.useState("starting text");
    
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    
    const onChangeHandler = () => {
        setIsLogin(!isLogin);
        setMessage('');
    };
    
    const onLoggedIn = token => {
        personIdAPI(email)
        .then((res) => res.json())
        .then((json) => {
            global.PERSON_ID = json.id;
            console.log(global.PERSON_ID);
        })
        
        loginAPI(token)
        .then(async res => {
            try {
                const jsonRes = await res.json();
                if (res.status === 200) {
                    setMessage(jsonRes.message);
                    props.navigation.navigate('HomeScreen');
                } else {
                    console.log("something's wrong I can feel it");
                }
            } catch (err) {
                console.log(err);
            };
        });
    }
    
    const onSubmitHandler = () => {    
        authAPI(email, isLogin, name, password)
        .then(async res => { 
            try {
                const jsonRes = await res.json();
                
                if (res.status !== 200) {
                    setIsError(true);
                    setMessage(jsonRes.message);
                } else {
                    onLoggedIn(jsonRes.token);
                    setIsError(false);
                    setMessage(jsonRes.message);
                }
            } catch (err) {
                console.log(err);
            };
        })

    };
    
    const getMessage = () => {
        const status = isError ? `Error: ` : `Success: `;
        return status + message;
    }
    
    return (
        <View style={styles.background}>
            <SafeAreaView style={styles.header}>
                <AppText style={{fontWeight: 'bold'}}>Planner</AppText>
            </SafeAreaView>
            <SafeAreaView style={styles.body}>
                <AppText style={[styles.message, {color: isError ? 'red' : 'green'}]}>{message ? getMessage() : null}</AppText>
                
                <AppTextInput 
                    label='email'
                    onChangeText={(text) => setEmail(text)}/>
                { !isLogin  && <AppTextInput 
                    label='name'
                    onChangeText={(text) => setName(text)}/> }
                <AppTextInput 
                    label='password'
                    onChangeText={(text) => setPassword(text)}/>
                    
                <AppButton
                    label={isLogin ? 'Login' : 'Sign Up'}
                    onPress={onSubmitHandler}/> 
                    
                <AppTextButton
                    label='Forgot password?'/> 
            </SafeAreaView>
            
            <SafeAreaView style={styles.footer}>
                <View style={styles.footerItem}>
                    <AppText style={{fontWeight: 'bold', color: 'grey'}}>{isLogin ? 'Don\'t have an account? ' : 'Already have an account? '}</AppText>
                    <AppTextButton
                            label={isLogin ? 'Sign up' : 'Sign in'}
                            onPress={onChangeHandler}/>
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'white',
        display: 'flex',
    },
    body: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    footerItem: {
        flexDirection: 'row',
    },
    header: {
        alignItems: 'center',
    },
    message: {
        fontSize: 16,
        marginVertical: '5%',
    },
})

export default LoginScreen;

