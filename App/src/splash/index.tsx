import React from 'react'; 
import {
  View,
  Text,
} from 'react-native'; 
import { style } from './style';

export default function Splash(props): JSX.Element { 
  return (
    <View style={style.container}>
       <Text>Splash</Text>
    </View>
  );
}


