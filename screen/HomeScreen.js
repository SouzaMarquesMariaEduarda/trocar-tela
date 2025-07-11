import React from 'react';
import {View, Text, Button, StyleShee} from 'react-native';
export default function HomeScreen ({navigation}) {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>
    <Button title="Ir para Opções deliciosas" onPress={() => navigation.navigate ('Secondary') {style={style.Image}
    <Text style={style.description}>
    Comece o dia com uma xicara de cafe aromatica e revigorante.
    <Text>
    </View>
  );
    }

    const styles = styleSheet.creater({
      container: {
        flex:1,
        justifyContent:'center',
        backgroundColor:'#f5f5dc',
        padding:20,
      };
      Title: {
        fontSize:24,
        fontWeight:"bold"
        marginBottom:20,
        color'#5c4033
      };
    })



}
import{NavigationContainer}
from '@react-navigation/native';
import{createStackNavigator}
from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreem';
import SecondaryScreen from './screens/SecondaryScreen';
import CafeScreen from './screens/CafeScreen';
import BoloScreen from './screens/BoloScreen';
import PaoScreen from './screens/PaoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigation initialRouteName="Home"
    <Stack.Screen name="Home" component=
    {HomeScreen}options={{title:'Bem Vindo!'}}/>
    <Stack.Screen name="Secondary"
    component={SecondaryScreen}options=
    {{title:'Opções Deliciosas'}}/>

    <Stack.Screen name="Cafe" component=
    {CafeScreen} options={{title:'Nosso Café'}}/>
    <Stack.Screen name="Bolo" component=
    {BoloScreen} options= 
  {{title:'Bolo de Chocolate'}}/>

  <Stack.Screen name="Pao" component=
  {PaoScreen} options={{title:'Pão Caseiro'}}/>

  </Stack.Navigator>
   
  

  )
}