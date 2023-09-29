import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default function FirstScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.textGroup}>
                <Image
                    source={require('../assets/icon.png')}
                    style={{ width: '100px', height: '100px' }}
                ></Image>
                <Text style={{ fontWeight: 'bold', fontSize: '36px', textAlign: 'center'}}> GROW YOUR BUSINESS </Text>
                <Text style={{ fontWeight: 'bold'}}> We will help you to grow your business using online server </Text>
            </View>
            <View style={styles.groupButton}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00CCF9',
    },
    textGroup: {
        flex: 2,
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
    }
});
