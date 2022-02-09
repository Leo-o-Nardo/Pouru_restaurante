import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';

function findItem(menuList, Id) {
  return menuList.filter(item => {
    return item.idOpt === Id
  })
};

const rgButton = props => {
  const itemList = props.itemList
  const [value, setValue] = React.useState(itemList[0].idOpt);    
  console.log(global.descOpt)

  return (
    <RadioButton.Group 
      value={value} 
      style={styles.group}
      onValueChange={(newValue) => {
        setValue(newValue);
        global.descOpt = findItem(itemList, newValue)[0].nomeOpt
      }} 
    >
        <View style={styles.group}>
          {props.itemList.map(infoItem => 
            <View style={styles.Button}>
              <RadioButton value={infoItem.idOpt} color='#ff8207'/>
              <Text style={styles.fontText}>{infoItem.nomeOpt}</Text> 
            </View>
          )}
        </View>
    </RadioButton.Group>
  )
}

const styles = StyleSheet.create({
  Button: {
    paddingHorizontal: 10,
    flexDirection: 'row', 
    alignItems: 'center'
  },
  fontText: {
    fontFamily: 'Friz Quadrata Regular',
    fontSize: 22,
  },
  group: {
    flexDirection: 'row', 

  }
});

export default rgButton;