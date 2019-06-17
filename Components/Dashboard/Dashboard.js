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

        const {navigate} = this.props.navigation;

        return (
            <View style={styles.main_container}>
                <Text style={styles.welcome}>Ceci est un dashboard</Text>
                <Text style={styles.instructions}>En construction</Text>
                <Button title='Planning' onPress={() => navigate('Planning')}/>
                <Button title='MoveTo' onPress={() => navigate('MoveTo')}/>
                <Button title='Accomodation' onPress={() => navigate('Accomodation')}/>
                <Button title='Tourism' onPress={() => navigate('Tourism')}/>
                <Button title='Covoiturage' onPress={() => navigate('CarSharing')}/>
                <Button title='Témoin' onPress={() => navigate('Entourage')}/>
                <Button title='Contact' onPress={() => navigate('Contact')}/>
                <Button title='Remerciement' onPress={() => navigate('Acknoledgement')}/>
                <Button title='Photo' onPress={() => navigate('Photo')}/>
            </View>
        )
    }
}

export default Dashboard