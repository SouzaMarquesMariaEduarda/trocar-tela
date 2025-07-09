import React from 'react';

import{View, Text, Image, StyleSheet}
from'react-native'

export default function CafeScreen(){
  return(
    <View style={styles.container}>
<Text style=styles.title}> Um Cafe
<image 
source={{uri:'https://uniquecafes.com.br/wp-content/uploads/2021/08/Destaque-cafe-Latte.jpg'}}
style={styles.image}
<Text style={styles .description}>
comece o dia com uma xicara de cafe aromatico e reigorante.
</Text>
<View>
 );
}
const styles = StyleSheet.create ({
  container: {
    flex:1,
    justifyContent:'center',
    alighItems:'center',
    backgroundColor:'#f5f5dc',
    padding:20,
  },

  title: {
    fontSize:24,
    fontWeight:'bold',
    marginBottom:20,
    color:'#5c4033',
  },
  image: {
    widht:200,
    height:200,
    borderRadius:100,
    marginBottom:20,
    borderColor:'#d2b48c',
    borderWidth:3,
    },
    description: {
      fontSize:18,
      textAlign:'center',
      color:'#654321',
      marginHorizontal:15,
      lineHeight: 25,
    },
});