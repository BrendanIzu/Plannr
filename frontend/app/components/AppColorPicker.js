import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

function AppColorPicker({ onChangeValue }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'red', value: 'tomato'},
      {label: 'blue', value: 'dodgerblue'},
      {label: 'green', value: 'forestgreen'},
      {label: 'yellow', value: 'mustard'},
      {label: 'orange', value: 'sandybrown'},
      {label: 'purple', value: 'rebeccapurple'},
      {label: 'pink', value: 'salmon'},
    ]);
    
    const onSetValueHandler = async (selected) => {
        setValue(selected);
        console.log("HEY"+value);
    }
  
    return (
        <View>
            <DropDownPicker
                containerStyle={styles.dropwdown}
                style={{height: 20, borderColor: 'white'}}
                dropDownStyle={styles.item}
                open={open}
                value={value}
                items={items}
                onChangeValue={onChangeValue}
                placeholder={''}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}/>
        </View>
    );
}

const styles = StyleSheet.create({
    dropwdown: {
        borderWidth: 0,
        width: 200,
        height: 50,
    },
    item: {
        backgroundColor: 'green',
    }
})

export default AppColorPicker;