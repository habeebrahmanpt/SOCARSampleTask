import { StyleSheet } from 'react-native';
import { Color } from '../../../Style/Colors';


export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: '90%',
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: '90%',
        borderRadius: 30,
    },
    signupButton: {
        backgroundColor: Color.PRIMARY
    },
    signupButtonDisabled: {
        backgroundColor: Color.DISABLED
    },
    signUpText: {
        color: 'white',
    },
    title: {
        color: Color.BLACK,
        fontSize: 24,
        marginBottom: 10
    },
    title2: {
        color: Color.BLACK,
        fontSize: 18,
        marginBottom: 10
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
    },
    cardFooter: {
        flex: 1,
        width: '100%',
        padding: 10,
        alignItems: 'center'
    },
    cardImage: {
        height: 150,
        width: '80%',
    },

});



