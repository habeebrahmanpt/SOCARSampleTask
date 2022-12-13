import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Cars from '../src/cars'
import Home from '../src/home'
import Profile from '../src/profile'
import Settings from '../src/settings'
import Splash from '../src/splash'



const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const CarsStack = () => (
    <Stack.Navigator initialRouteName={'Cars'}
        screenOptions={{
            headerShown: false
        }}>
        <Stack.Screen name={'Cars'} component={Cars} />
    </Stack.Navigator>
);

const BottomStack = () => (
    <Tab.Navigator initialRouteName='Home'
        shifting={false}>
        <Tab.Screen name={'Home'} component={Home} />
        <Tab.Screen name={'Cars'} component={CarsStack} />
        <Tab.Screen name={'Profile'} component={Profile} />
        <Tab.Screen name={'Settings'} component={Settings} />
    </Tab.Navigator>
)


const RootNavigation = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={'BottomStack'}
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name={'Splash'} component={Splash} />
            <Stack.Screen name={'BottomStack'} component={BottomStack} />
        </Stack.Navigator>
    </NavigationContainer>
)
export default RootNavigation
const styles = StyleSheet.create({

    animatedViewOnline: {
        // position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        height: 20,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
    },
    animatedViewOffline: {
        // position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        height: 20,
        backgroundColor: '#757575',
        justifyContent: 'center',
        alignItems: 'center',
    },
    noInternetTextStyle: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '400',
    },
});