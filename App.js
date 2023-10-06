import React, {useState} from 'react';
import RootNavigation from './src/navigations/rootNavigation';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import ModelProvider from './src/utils/ModelContext';


function App() {
  return (
    <ModelProvider>
      <RootNavigation />
    </ModelProvider>
  );
}

export default App;
