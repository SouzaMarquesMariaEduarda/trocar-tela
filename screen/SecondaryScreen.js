import React from 'react';
import {View, Text, Button, StyleSheet}
from 'react-native';
export default function SecondaryScreen({navigation}) {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Escolha sua Delicia!</Text> 
    <View style={styles.buttonContainer}>
    <Button title="Café"onPress={()=>
    navigation.navigate('Café')}
    color="#a0522d"
    />
    </View>
    <View style={style.buttonContainer}>
    <Button
    title="Bolo de Chocolate"
    onPress={()=>navigation.navigate
    ('Bolo')}
    color="8b4513"
  )}
 </View>
 <View style={styles.buttonContainer}>
 Button
 title="Pão Caseiro"
 onPress={()=>navigation.navigate
 ('Pao')}
 color"8b4513"
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'Center',
    backgroundColor:'#fffafa',
  },
  title:{
    fontSize:26,
    fontWeight:'bold',
    marginBottom:40,
    color:'444',
  },
  buttonContainer:{
    marginVertical:10,
    widht:'60%',
  }
});