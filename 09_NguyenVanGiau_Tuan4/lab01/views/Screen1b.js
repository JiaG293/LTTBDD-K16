import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import 'boxicons';

export default function Screen1b() {
    return (
        <View style={styles.container}>
            <View style={styles.textGroup}>
                <box-icon name='lock' style={{width: 300, height: 300}} size='lg'></box-icon>
                <Text style={{ fontWeight: 'bold', fontSize: '36px', textAlign: 'center' }}> FORGET PASSWORD </Text>
                <Text style={{ fontWeight: 'bold', textAlign: 'center' }}> Provide your account’s email for which you want to reset your password </Text>
            </View>
            <View>
                <box-icon style={{marginBottom: -55, marginLeft: 20, width: 30}} name='envelope' animation='tada' size='lg'></box-icon>
                <TextInput
                    style={styles.textInput}
                    placeholder='Email'
                    inlineImageLeft='../assets/envelope-regular-24.png'
                />
            </View>
            <View style={{ flex: 0.3, alignItems: 'center' }}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>NEXT</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundImage: 'linear-gradient(180deg, #C7F4F6, #D1F4F6, #E5F4F5, #00CCF9)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textGroup: {
        flex: 0.6,
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: '20px',
    },
    button: {
        width: '320px',
        height: '50px',
        border: '1px solid #E3C000',
        padding: '5px',
        backgroundColor: '#E3C000',
        borderRadius: '10px',

    },
    textButton: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: '30px'
    },
    textInput: {
        height: 40,
        width: 320,
        margin: 12,
        paddingLeft: 50,
        backgroundColor: '#C4C4C4',
        border: '3px solid #524f4e',

    }

});
