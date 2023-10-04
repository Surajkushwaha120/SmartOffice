import React from 'react';
import {TextInput, Button} from 'react-native-paper';

import {View, style, StyleSheet} from 'react-native';
import {SegmentedButtons} from 'react-native-paper';

import Dashboard from './Dashboard';
import ClockinOut from './ClockinOut';
const Menu = props => {
  return (
  
      <View style={styles.btns}>
        <Button
          style={styles.btnout}
          mode="contained"
          textColor="white"
          onPress={() => props.navigation.navigate('LoginScreen')}>
          LOGOUT
        </Button>

        <Button
          style={styles.btn}
          mode="contained"
          textColor="white"
          onPress={() => props.navigation.navigate('Dashboard')}>
          Back
        </Button>
      </View>
 
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 100,
    backgroundColor: 'red',
    padding: 10,

    marginTop: 30,
    fontWeight: 'bold',
  },

  btnout: {
    width: 100,
    backgroundColor: 'red',
    padding: 10,

    marginTop: 30,
    fontWeight: 'bold',
  },
  btns: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default Menu;
