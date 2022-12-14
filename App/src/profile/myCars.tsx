import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    Button,
    TouchableOpacity,
} from 'react-native';
import { carsRef } from '../../storage';
import { Color } from '../../Style/Colors';
import { formateValue } from '../utils/Utils';
import { ApplicationStyle as styles } from '../../Style/ApplicationStyle';
import database from '@react-native-firebase/database';

export default function MyCars(props): JSX.Element {

    const [carList, setCarList] = useState([])

    useEffect(() => {
        const onValueChange = carsRef
            // .equalTo('8089578788','ownerUser')
            // .limitToFirst(2)
            // .equalTo('-NJAueRAcxmHm2pisRfr',)
            // .orderByChild('name')
            .on('value', snapshot => {
                if (snapshot.val()) {
                    const entries = formateValue(snapshot.val());
                    console.log('User data: ', snapshot);
                    setCarList(entries)
                }
            });

        // Stop listening for updates when no longer required
        return () => carsRef.off('value', onValueChange);
    }, []);
    const remove = (carDetails) => {
        database().ref('/socar_test/cars/' + carDetails.id).remove()
    }

    const renderItem = (post) => {
        const item = post.item;
        return (
            <View style={styles.card}>
                <Image style={styles.cardImage} source={{ uri: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
                <View style={styles.cardHeader}>
                    <View>
                        <Text style={styles.title}>{item.company} {item.name}</Text>
                        <Text style={styles.description}>{item.model}</Text>
                        {(item.description) ? <Text style={styles.description}>{item.description}</Text> : null}
                    </View>
                </View>
                <View style={styles.cardFooter}>
                    <TouchableOpacity style={styles.socialBarContainer} onPress={() => {
                        remove(item)
                    }}>
                        <Text style={styles.button}>Remove</Text>
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


