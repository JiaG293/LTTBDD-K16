import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import 'boxicons';

export default function Screen1c() {
    return (
        <View style={styles.container}>
            <View style={styles.textGroup}>
                <Text style={{ fontWeight: 'bold', fontSize: '60px', textAlign: 'center' }}> CODE </Text>
                <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '30px', }}> VERIFICATION </Text>
                <Text style={{ fontWeight: 'bold', textAlign: 'center' }}> Enter ontime password sent on
                    ++849092605798 </Text>

            </View>
            <View style={styles.groupTextInput}>
                <TextInput
                    style={styles.textInput}
                    inputMode='numberic'
                    maxLength={1}
                />
                <TextInput
                    style={styles.textInput}
                    inputMode='numberic'
                    maxLength={1}
                />
                <TextInput
                    style={styles.textInput}
                    inputMode='numberic'
                    maxLength={1}
                />
                <TextInput
                    style={styles.textInput}
                    inputMode='numberic'
                    maxLength={1}
                />
                <TextInput
                    style={styles.textInput}
                    inputMode='numberic'
                    maxLength={1}
                />
                <TextInput
                    style={styles.textInput}
                    inputMode='numberic'
                    maxLength={1}
                />


            </View>
            <View style={{ flex: 0.3, alignItems: 'center' }}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>VERIFY CODE</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundImage: 'linear-gradient(180deg, #C7F4F6, #D1F4F6, #E5F4F5, #00CCF9)',
        width: '100%',
    },
    textGroup: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    groupTextInput: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'center',
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
        height: 45,
        width: 45,
        margin: 1,
        border: '1px solid #000000',
        padding: '20px'
    },
    iconEmail: {
        border: '3px solid #524f4e',
        margin: 12,
        height: 40,
        backgroundColor: '#C4C4C4'
    }

});
