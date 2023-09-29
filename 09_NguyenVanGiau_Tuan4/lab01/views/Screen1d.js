import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import 'boxicons';

export default function Screen1d() {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={{ fontWeight: 'bold', fontSize: '40px', textAlign: 'center' }}> LOGIN </Text>

            </View>
            <View style={styles.middle}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Email'
                    textContentType='emailAddress'
                    inputMode='email'
                />
                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Password'
                        secureTextEntry={true}
                    />
                    <TouchableOpacity>
                        <box-icon style={{ marginTop: -45, marginLeft: 260, height: 40, zIndex: 1 }} name='show' type='solid' size='lg'></box-icon>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.middle1}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>LOGIN</Text>
                </TouchableOpacity>
                <Text>When you agree to terms and conditions</Text>
                <TouchableOpacity>
                    <Text style={{ color: '#5D25FA' }}>For got your password?</Text>
                </TouchableOpacity>
                <Text>Or login with</Text>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity>
                    <box-icon style={styles.buttonLink} type='logo' name='facebook' size='lg'></box-icon>
                </TouchableOpacity>
                <TouchableOpacity>
                    <box-icon style={styles.buttonLink} name='twitter' type='logo' size='lg'></box-icon>
                </TouchableOpacity>
                <TouchableOpacity>
                    <box-icon style={styles.buttonLink} type='logo' name='google-plus' size='lg'></box-icon>
                </TouchableOpacity>



            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D8EFDF',
        width: '100%',
    },
    top: {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    middle: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    middle1: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    bottom: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        width: '320px',
        height: '50px',
        border: '1px solid #E3C000',
        padding: '5px',
        backgroundColor: '#E53935',

    },
    textButton: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: '30px',
        color: '#D8EFDF',
    },
    textInput: {
        height: 45,
        width: 320,
        margin: 1,
        backgroundColor: 'rgba(196, 196, 196, 0.3)',
        paddingLeft: '30px',
    },
    iconEmail: {
        border: '3px solid #524f4e',
        margin: 12,
        height: 40,
        backgroundColor: '#C4C4C4'
    },
    buttonLink: {
        border: '1px solid #000000',
        width: 100
    }

});
