import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
 Menu,
 MenuProvider,
 MenuOptions,
 MenuTrigger,
} from "react-native-popup-menu";
import AppTextButton from "./AppTextButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppText from "./AppText";

const Divider = () => <View style={styles.divider} />;

function AppPopup ({label, onPress}) {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        // <TouchableOpacity onPress={onPress}>
        //     <AppText>{label}</AppText>
        // </TouchableOpacity>
        <TouchableOpacity onPress={() => {setIsOpen(!isOpen)}}
            style={styles.container}>
            <AppText>{label}</AppText>
            {isOpen && 
                <View style={styles.menu}>
                    <TouchableOpacity onPress={() => console.log('option 1')}>
                        <AppText>option 1</AppText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('option 2')}>
                        <AppText>option 2</AppText>
                    </TouchableOpacity>
                </View>}
        </TouchableOpacity>
    );
};

export default AppPopup;

const styles = StyleSheet.create({
 container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
 },
 divider: {
   height: StyleSheet.hairlineWidth,
   backgroundColor: "#7F8487",
 },
 menu: {
    backgroundColor: 'red',
 }
});