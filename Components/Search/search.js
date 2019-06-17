// Components/Search.js

import React from 'react'
import {StyleSheet, View, TextInput, Button } from 'react-native'

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    text_input: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        paddingLeft: 5
    }
})
class Search extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <TextInput style={styles.text_input} placeholder='Titre du film'/>
                <Button style={styles.text_input} title='Rechercher' onPress={() => {}}/>
            </View>
        )
    }

}

export default Search
