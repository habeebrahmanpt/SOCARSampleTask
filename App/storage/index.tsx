import storage from '@react-native-firebase/storage';
import database from '@react-native-firebase/database';


export const databaseRef = database().ref('/socar_test');
export const carsRef = database().ref('/socar_test/cars');
export const storageRef = storage();

export default { databaseRef, storageRef }


