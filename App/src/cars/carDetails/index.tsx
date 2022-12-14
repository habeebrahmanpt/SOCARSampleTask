import React from 'react';
import { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, TextInput, TouchableHighlight } from 'react-native';
import { ApplicationStyle as styles } from '../../../Style/ApplicationStyle';
import { databaseRef, carsRef } from '../../../storage/index';
import { useState } from 'react';
import { style } from './style';
import database from '@react-native-firebase/database';

export default function CarDetails(props): JSX.Element {

    const [carDetails, setCarList] = useState(props.route.params)
    const [name, setName] = useState('Habeeb 2')
    const [mobile, setMobile] = useState('8089578787')
    useEffect(()=>{
        console.log(carDetails)
    })
    const bookNow = () => {
        database().ref('/socar_test/cars/'+carDetails.id).update({
            booked : true,
            bookedUser : mobile,
            bookedName : name,
        })
    }


    return (
        <View style={style.container}>
            <Image style={style.cardImage}
                source={{ uri: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
            <Text style={style.title}>{carDetails.company} {carDetails.name}</Text>
            <Text style={style.title2}>{carDetails.model}</Text>
            {(carDetails.description) ? <Text style={styles.description}>{carDetails.description}</Text> : null}

            <View style={style.cardFooter}>
                <TextInput placeholder='Name'
                    style={style.inputContainer}
                    onChangeText={setName}
                    value={name}
                    maxLength={20}
                    keyboardType='default' />
                <TextInput placeholder='Mobile'
                    style={style.inputContainer}
                    value={mobile}
                    onChangeText={setMobile}
                    maxLength={10}
                    keyboardType='default' />
            </View>
            <TouchableHighlight style={[style.buttonContainer, (name && mobile ) ? style.signupButton : style.signupButtonDisabled]}
                disabled={(name && mobile) ? false : true}
                onPress={bookNow}>
                <Text style={style.signUpText}>Confirm</Text>
            </TouchableHighlight>
        </View>
    );
}



