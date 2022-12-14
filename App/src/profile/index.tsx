import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { style } from './style';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyCars from './myCars'
import MyBooking from './myBooking'

const Tab = createMaterialTopTabNavigator();
export default function Profile(props): JSX.Element {

    const renderTabs = () => {

        return (
            <Tab.Navigator >
                <Tab.Screen
                    key={0}
                    name={'My Booking'}
                    options={{
                        tabBarShowIcon: false,
                        tabBarLabel: 'My Booking'
                    }}
                    component={MyBooking}
                />
                <Tab.Screen
                    key={1}
                    name={'My Cars'}
                    options={{
                        tabBarShowIcon: false,
                        tabBarLabel: 'My Cars'
                    }}
                    component={MyCars}
                />
            </Tab.Navigator>
        );
    }
    const buttonClickedHandler = () => {
        console.log('You have been clicked a button!');
        // do something
        props.navigation.navigate('AddCars');
      };
    return (
        <View style={style.container}>
            <View style={style.header}></View>
            <Image style={style.avatar}
                source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
            <View style={style.body}>
                {renderTabs()}
                <TouchableOpacity onPress={buttonClickedHandler}
                    style={style.roundButton1}>
                    <Text>Add</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}


