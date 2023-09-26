import React, { useState } from 'react';


import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";




function App(): JSX.Element {
  const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
  return (

    <SafeAreaView style={styles.container}>
    <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="User Name"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      
  </View>

  <TouchableOpacity> 
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity> 

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity>

     

</SafeAreaView>

  );
}

const styles = StyleSheet.create({
 inputView: {
  backgroundColor: "#FFC0CB",
  borderRadius: 30,
  width: "70%",
  height: 45,
  marginBottom: 20,
  alignItems: "center",
},

TextInput: {
  height: 50,
  flex: 1,
  padding: 10,
  marginLeft: 20,
},

forgot_button: {
  height: 30,
  marginBottom: 30,
marginRight:80,

},

loginBtn: {
  width: "80%",
  borderRadius: 25,
  height: 50,
  alignItems: "center",
  justifyContent: "center",
  marginTop: 40,
  backgroundColor: "#FF1493",
},
loginText : {
 fontWeight: 'bold',
},

container:{
  flex: 1,
  // backgroundColor: "#fff",
  alignItems: "center",
  justifyContent: "center",

}

});


export default App;
