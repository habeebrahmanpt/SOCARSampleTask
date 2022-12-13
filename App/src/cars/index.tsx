import React from 'react';
import { useEffect } from 'react';
import { View, Text, } from 'react-native';
import { style } from './style';
import { databaseRef,carsRef} from '../../storage/index'; 
import database from '@react-native-firebase/database';

export default function Cars(props): JSX.Element {

    useEffect(() => {
        // carsRef
        // .set({
        //     name: 'Tiago',
        //     company : 'Tata',
        //     model: 2022,
        // }).then(() => console.log('Data set.'));
        // carsRef.push({
        //         name: 'Carnival',
        //         company : 'Kia',
        //         model: 2021,
        //     })
    })
    return (
        <View style={style.container}>
            <Text>Cars</Text>
        </View>
    );
}


