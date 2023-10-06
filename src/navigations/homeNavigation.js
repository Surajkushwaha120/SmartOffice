import React,{useState,useContext} from 'react';
import Dashboard from '../screens/Dashboard';
import ClockinOut from '../screens/ClockinOut';
import {NavigationContainer} from '@react-navigation/native'; 
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Menu from '../screens/Menu';
import LeaveSummary from '../screens/LeaveSummary';
import Profile from '../screens/Profile';
import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';

import ModelContext from '../utils/ModelContext';
import DrawerNavigation from './drawerNavigation';
const Tab = createBottomTabNavigator();


const DummyComponent = () => null;

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onPress={onPress}>
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#e32f45',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);





const HomeNavigation = () => {


  const [showModal, setShowModal] = useState(false);
  // const {showModal, setShowModal} = useContext(ModelContext)

  return (
    
  
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
      screenOptions={{
        tabBarStyle: {
          height: 60,
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../assets/Icons/Home.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#5C5CFF' : '#748c94',
                }}
              />
            </View>
          ),
        }}
      />

     
      <Tab.Screen
        name="Menu"
        component={DummyComponent}
      listeners={({ navigation, route }) => ({
        tabPress: (e) => {
          e.preventDefault(); // Prevent default navigation
          setShowModal(!showModal)
          console.log(showModal)
        },
      })}
        screenOptions={{
          headerShown: false,
        }}
        options={{
         
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/Icons/menu.png')}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: '#fff',
              }}
            />
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="LeaveSummary"
        component={LeaveSummary}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../assets/Icons/flight.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#5C5CFF' : '#748c94',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../assets/Icons/human.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#5C5CFF' : '#748c94',
                }}
              />
            </View>
          ),
        }}
      />
      
    </Tab.Navigator>

   
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  tab: {
    left: 20,
    right: 20,
    bottom: 25,
    elevation: 0,
    borderRadius: 15,

    height: 290,
  },
});

export default HomeNavigation;
