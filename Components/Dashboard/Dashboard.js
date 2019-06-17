// Components/Dashboard.js

import React from 'react'
import {StyleSheet, View, Button, Text} from 'react-native'

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    }
})

class Dashboard extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <Text style={styles.welcome}>Ceci est un dashboard</Text>
                <Text style={styles.instructions}>En construction</Text>
                <Button title='Planning' onPress={() => {}}/>
                <Button title='MoveTo' onPress={() => {}}/>
                <Button title='Accomodation' onPress={() => {}}/>
                <Button title='Tourism' onPress={() => {}}/>
                <Button title='Covoiturage' onPress={() => {}}/>
                <Button title='Témoin' onPress={() => {}}/>
                <Button title='Contact' onPress={() => {}}/>
                <Button title='Remerciement' onPress={() => {}}/>
                <Button title='Photo' onPress={() => {}}/>
            </View>
        )
    }
}

export default Dashboard