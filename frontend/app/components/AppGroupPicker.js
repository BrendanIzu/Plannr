import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useFocusEffect } from '@react-navigation/native';

import { groupsAPI } from '../data/api';
import AppText from './AppText';

function AppGroupPicker({ label, onChangeValue, onPress, style }) {
    const [open, setOpen] = useState(false);
    const [groupId, setGroupId] = useState('');
    const [groups, setGroups] = useState([]);
    
    const getGroupsFromApi = () => {
        groupsAPI(PERSON_ID)
        .then((response) => response.json())
        .then((json) => {          
            const res_array = []; 
            for(let i in json) { 
                res_array.push(json[i]); 
            }; 
            setGroups(res_array);
        })
        .catch((error) => {
            console.error(error);
        })
    }
    
    useFocusEffect(
        useCallback( () => {
            getGroupsFromApi();
        }, [])
    );
  
    return (
      <View style={[styles.container, style]}>
        <AppText style={{alignSelf: 'center', right: -7, fontSize: 18}}>{label}</AppText>
        <View>
          <DropDownPicker 
              containerStyle={styles.dropwdown}
              style={{height: 20, borderColor: 'white'}}
              items={groups}
              onPress={onPress}
              onChangeValue={onChangeValue}
              open={open}
              placeholder={''}
              schema={{label: 'group_name', value: 'group_id'}}
              setItems={setGroups}
              setOpen={setOpen}
              setValue={setGroupId}
              value={groupId}/>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    },
  dropwdown: {
    borderWidth: 0,
    width: 200,
    height: 50,
    right: -15
  },
})

export default AppGroupPicker;