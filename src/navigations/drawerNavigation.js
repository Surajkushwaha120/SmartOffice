import React, {useState} from 'react';
import {
  View,
  Modal,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

const DrawerNavigation = () => {
  // const [showmodal, setShowModal] = useState(false);

  return (
    <View style={styles.main}>
      <Modal transparent={true} visible={false} animationType='fade'>
        <View style={styles.centerView}>
          <View style={styles.modelView}>
            <Text style={styles.modeltext}>This is SmartOffice</Text>
            <Button title="Close model" />
          </View>
        </View>
      </Modal>

      <View style={styles.btnview}>
        {/* <Button title="open Model"  onPress={() => setShowModal(true)}/> */}
      </View>

     
    </View>

  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  btnview: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modelView: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 20,
    height:'70%',
    position:'absolute',
    bottom:0,
    width:'100%',
    shadowColor: 'black',
    elevation: 5,
  },
  modeltext: {
    fontSize: 20,
  },
});

export default DrawerNavigation;
