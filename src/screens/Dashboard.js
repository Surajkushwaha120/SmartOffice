import React from 'react'
import { View,Text,StyleSheet } from 'react-native'



const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View  style={styles.backui}>
     
      </View>
   <View style={styles.carditem}>

    <Text style={{fontSize:30,color:'white',fontWeight:'bold'}}>Attendance</Text>
   
   </View>

    
        </View>
        
  )
}


const styles = StyleSheet.create({

  container:{
    flex: 1,
  
    backgroundColor:'#5C5CFF'
  },

  backui: {
    backgroundColor: 'white',
    height: 200,
    borderBottomEndRadius: 20,
    borderBottomLeftRadius:20,
    position:'absolute',
   
    width: 390,
  },

  carditem:{
    marginTop:220,
    margin:20,
  }
 
})


export default Dashboard  