// Components/Entourage.js

import React from 'react'
import {StyleSheet, View, Button} from 'react-native'
import { Header, Container, Badge, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import entourage from '../../Helpers/Temoins'
import ItemListEntourage from "../../Components/ItemListEntourage";

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

class Entourage extends React.Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        {entourage.map(item =>
                           <ItemListEntourage item={() => item}/>
                        )}
                    </List>
                </Content>
            </Container>
        )
    }
}

export default Entourage