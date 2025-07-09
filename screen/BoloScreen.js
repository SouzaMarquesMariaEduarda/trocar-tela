import React from 'react';

import{View, Text, Image, StyleSheet}
from'react-native'

export default function BoloScreen(){
  return(
    <View style={styles.container}>
<Text style=styles.title}> Um Bolo
<image 
source={{uri:'https://static.vecteezy.com/ti/fotos-gratis/p1/47103548-uma-peca-do-bolo-em-uma-branco-prato-gratis-foto.jpg'}}
style={styles.image}
<Text style={styles .description}>
comece o dia com uma fatia de bolo aromatico e revigorante.
</Text>
<View>
 );
}
const styles = StyleSheet.create ({
  container: {
    flex:1,
    justifyContent:'center',
    alighItems:'center',
    backgroundColor:'#f8f8ff',
    padding:20,
  },

  title: {
    fontSize:24,
    fontWeight:'bold',
    marginBottom:20,
    color:'#4a2c2a',
  },
  image: {
    widht:200,
    height:200,
    borderRadius:100,
    marginBottom:20,
    borderColor:'#6b3e2e',
    borderWidth:3,
    },
    description: {
      fontSize:18,
      textAlign:'center',
      color:'#5e403d',
      marginHorizontal:15,
      lineHeight: 25,
    },
});