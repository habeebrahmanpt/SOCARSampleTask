import React from 'react';
import { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { ApplicationStyle as styles } from '../../Style/ApplicationStyle';
import { databaseRef, carsRef } from '../../storage/index';
import { useState } from 'react';
import { formateValue } from '../utils/Utils';

export default function Cars(props): JSX.Element {


    const [carList, setCarList] = useState([])

    useEffect(() => {
        const onValueChange = carsRef
            .on('value', snapshot => {
                const entries = formateValue(snapshot.val());
                // console.log('User data: ', entries);
                setCarList(entries)
            });

        // Stop listening for updates when no longer required
        return () => carsRef.off('value', onValueChange);
    }, []);
    const buttonClickedHandler = (car :any) => {
        console.log('You have been clicked a button!');
        // do something
        props.navigation.navigate('CarDetails',car);
      };
    const renderItem = (post) => {
        const item = post.item;
        return (
            <View style={styles.card}>
                <Image style={styles.cardImage}
                    source={{ uri: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
                <View style={styles.cardHeader}>
                    <View>
                        <Text style={styles.title}>{item.company} {item.name}</Text>
                        <Text style={styles.description}>{item.model}</Text>
                        {(item.description) ? <Text style={styles.description}>{item.description}</Text> : null}
                    </View>
                </View>
                <View style={styles.cardFooter}>
                    <TouchableOpacity style={styles.socialBarContainer} onPress={()=>{
                        buttonClickedHandler(item)
                    }}>
                        <Text style={styles.button}>Book now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    };
    return (
        <View style={styles.container}>
            <FlatList style={styles.list}
                data={carList}
                keyExtractor={(item) => {
                    return item.id;
                }}
                ItemSeparatorComponent={() => {
                    return (
                        <View style={styles.separator} />
                    )
                }}
                renderItem={renderItem} />
        </View>
    );
}



