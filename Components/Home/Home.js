// Components/Search.js

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

class Home extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <Text style={styles.welcome}>Welcome to Potato Native!</Text>
                <Text style={styles.instructions}>Pour découvrir l'application cliquez sur le bouton !</Text>
                <Button styles={} title='GO!!!' onPress={() => {}}/>
            </View>
        )
    }
}

export default Home