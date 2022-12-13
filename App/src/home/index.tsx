import React from 'react';
import { View, } from 'react-native';
import { style } from './style';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default function Home(props): JSX.Element {
    return (
        <View style={style.container}>
            {/* <Text>Home</Text> */}
            <MapView
                style= {{flex :1 , minHeight : 300 , height : '100%' , width : '100%'}}
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }} />
        </View>
    );
}


