import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';


export default function Header(){
    return (
        <View style={styles.container}>
            <Ionicons 
            name='cloud-outline'
            color='black'
            size={54}
            style={styles.icon}
            />
            <Text style={styles.text}>Verifique o clima!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingTop: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection:'row'
    },
    text: {
        color: "black",
        fontSize: 35,
        marginRight: 60
    },
    icon: {
        paddingLeft: 30
    }
})