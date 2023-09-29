import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import 'boxicons';


export default function Screen1a() {
    return (
        <View style={styles.container}>
            <View style={styles.textGroup}>
                <box-icon name='circle' style={{ width: 300, height: 300 }} size='lg'></box-icon>
                <Text style={{ fontWeight: 'bold', fontSize: '36px', textAlign: 'center' }}> GROW YOUR BUSINESS </Text>
                <Text style={{ fontWeight: 'bold' }}> We will help you to grow your business using online server </Text>
            </View>
            <View style={styles.groupButton}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 0.5 }}>
                <Text style={{ fontWeight: 'bold', fontSize: '30px', textAlign: 'center' }}> HOW WE WORK? </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundImage: 'linear-gradient(180deg, #C7F4F6, #D1F4F6, #E5F4F5, #00CCF9)',
    },
    textGroup: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    groupButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        width: '120px',
        height: '50px',
        border: '1px solid #E3C000',
        padding: '15px',
        backgroundColor: '#E3C000',
        borderRadius: '10px',

    },
    textButton: {
        fontWeight: 'bold',
        textAlign: 'center',
    },

});
