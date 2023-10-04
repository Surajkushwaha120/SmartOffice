import React, {useState} from 'react';
import Dashboard from './Dashboard';
import {TextInput, Button} from 'react-native-paper';
import {StyleSheet, View, Text} from 'react-native';

const LoginScreen = props => {
  const [textValue, setTextValue] = useState('');

  const handleInputChange = text => {
    // Update the state with the new text value
    setTextValue(text);
  };

  return (
    <View style={styles.backui}>
      <View style={styles.loginui}>
        <TextInput style={styles.textbox} label="User Name" mode="outlined" />
        <TextInput style={styles.textbox} label="Password" mode="outlined" />

        <Button
          style={styles.button}
          mode="contained"
          textColor="white"
          onPress={() => props.navigation.navigate('Tabs')}>
          LOGIN
        </Button>

        <View style={styles.container}>
          <View style={styles.line} />
          <Text style={styles.text}>OR</Text>
          <View style={styles.line} />
        </View>

        <Button
          style={styles.scanbutton}
          mode="contained"
          textColor="white"
          onPress={() => props.navigation.navigate('Tabs')}>
          LOGIN WITH QR CODE
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backui: {
    backgroundColor: 'teal',
    height: 300,
    borderBottomEndRadius: 20,
    width: 385,
  },
  loginui: {
    height: 400,
    width: 350,
    backgroundColor: 'white',
    marginLeft: 20,
    marginTop: 200,
    borderRadius: 10,
    alignItems: 'center',
    paddingTop: 10,
  },
  textbox: {
    width: 300,
    margin: 10,
  },
  button: {
    width: 300,
    backgroundColor: '#93C54B',
    fontSize: 50,
    marginTop: 30,
    fontWeight: 'bold',
  },

  scanbutton: {
    width: 300,
    backgroundColor: '#4682B4',
    fontSize: 50,
    marginTop: 50,
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  line: {
    flex: 1,
    height: 1,

    backgroundColor: 'black',
  },
  text: {
    marginHorizontal: 10,

  },
});

export default LoginScreen;
