import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import Home from "./pages/Home";
import Plantoes from "./pages/Plantoes"
import Favoritos from "./pages/favorites"
import Account from "./pages/Account"

import {Entypo, Feather} from '@expo/vector-icons'

const Tab = createMaterialBottomTabNavigator();

export default function Routes(){
  return (
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#6d7a78"
    inactiveColor="#6d7a78"
    barStyle={{ backgroundColor: '#fff' }}>
      <Tab.Screen name="Home" component={Home}
        options={{
            tabBarIcon: ({size, color}) =>(
                <Entypo name="home" size={20} color={color}></Entypo>
            )
        }} />

      <Tab.Screen name="Pantoes" component={Plantoes}
              options={{
                tabBarIcon: ({size, color}) =>(
                    <Feather name="clipboard" size={20} color={color}></Feather>
                )
            }} />

      <Tab.Screen name="Favoritos" component={Favoritos} 
              options={{
                tabBarIcon: ({size, color}) =>(
                    <Feather name="heart" size={20} color={color}></Feather>
                )
            }}/>
      <Tab.Screen name="Conta" component={Account} 
              options={{
                tabBarIcon: ({size, color}) =>(
                    <Feather name="user" size={20} color={color}></Feather>
                )
            }}/>
    </Tab.Navigator>
  );
}