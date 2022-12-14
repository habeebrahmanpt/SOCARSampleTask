import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
} from 'react-native';
import { carsRef } from '../../../storage';
import { Color } from '../../../Style/Colors';
import { style } from './style';

export default function AddCar(props): JSX.Element {

    const [name, setName] = useState('')
    const [company, setCompany] = useState('')
    const [model, setModel] = useState('')
    const [description, setDescription] = useState('')

    const addCar = () => {
        carsRef.push({
            name: name,
            company: company,
            model: model,
            description: description,
            booked : false,
            ownerUser : '8089578788',
            ownerName : 'Habeeb',
        })
        clearData()
        props.navigation.goBack();
    }
    const clearData = () => {
        setModel('')
        setName('')
        setDescription('')
        setCompany('')
    }
    

    return (
        <View style={style.container}>
            <Text style={style.title}>Enter Car Details</Text>
            <TextInput placeholder='Name'
                style={style.inputContainer}
                onChangeText={setName}
                value={name}
                maxLength ={20}
                keyboardType='default' />
            <TextInput placeholder='Company'
                style={style.inputContainer}
                value={company}
                onChangeText={setCompany}
                maxLength ={20}
                keyboardType='default' />
            <TextInput placeholder='Model'
                style={style.inputContainer}
                onChangeText={setModel}
                maxLength ={20}
                value={model}
                keyboardType='number-pad' />
            <TextInput placeholder='Description'
                style={style.inputContainer}
                value={description}
                maxLength ={200}
                onChangeText={setDescription}
                keyboardType='default' />

            <TouchableHighlight style={[style.buttonContainer, (name && model && company) ? style.signupButton : style.signupButtonDisabled]}
                disabled={(name && model && company) ? false : true}
                onPress={addCar}>
                <Text style={style.signUpText}>Submit</Text>
            </TouchableHighlight>


        </View>
    );
}


