// Components/Photo.js

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

class Photo extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <Text style={styles.welcome}>Si vous etes ici, c'est que l'on vous a invitez à cet heureux evenement qu'est notre mariage !</Text>
                <Text style={styles.instructions}>Pour en savoir plus sur ce jour fabuleux cliquez ci dessous!</Text>
                <Button title='GO!!!' onPress={() => {}}/>
            </View>
        )
    }
}

export default Photo