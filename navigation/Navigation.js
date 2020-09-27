import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import Home from "../screens/Home";
import Setting from "../screens/Setting";

const Stack = createStackNavigator();

export default function Navigation(){
    return (
        <Stack.Navigator screenOptions={{
            headerTintColor: "#fff",
            headerStyle: {
                backgroundColor: "red",
            }
        }}>
            <Stack.Screen name="Home" component={Home} options={{
                title: "Home Screen",
                
            }}/>
            <Stack.Screen name="Setting" component={Setting}/>
        </Stack.Navigator>
    )
}