// Components/MoveTo.js

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

class MoveTo extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <Text style={styles.welcome}>Se rendre a Moulins et Souvigny</Text>
                <Text style={styles.instructions}>En construction</Text>
                <Button title='GO!!!' onPress={() => {}}/>
            </View>
        )
    }
}

export default MoveTo