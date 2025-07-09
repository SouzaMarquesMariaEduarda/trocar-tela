import React from 'react';

import{View, Text, Image, StyleSheet}
from'react-native'

export default function PaoScreen(){
  return(
    <View style={styles.container}>
<Text style=styles.title}> Pao caseiro fresco></Text>
<image 
source={{uri:'https://files.agro20.com.br/uploads/2020/03/P%C3%A3o-franc%C3%AAs-2-1024x576.jpg'}}
style={styles.image}
<Text style={styles .description}>
o aroma e o sabor de um pao caseiro fesquinho,feito com carinho.
</Text>
<View>
 );
}
const styles = StyleSheet.create ({
  container: {
    flex:1,
    justifyContent:'center',
    alighItems:'center',
    backgroundColor:'#fffaf0',
    padding:20,
  },

  title: {
    fontSize:24,
    fontWeight:'bold',
    marginBottom:20,
    color:'#8b4513',
  },
  image: {
    widht:200,
    height:200,
    borderRadius:100,
    marginBottom:20,
    borderColor:'#deb887',
    borderWidth:3,
    },
    description: {
      fontSize:18,
      textAlign:'center',
      color:'#a0522d',
      marginHorizontal:15,
      lineHeight: 25,
    },
});
