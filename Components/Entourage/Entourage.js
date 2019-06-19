// Components/Entourage.js

import React from 'react'
import {StyleSheet, View, Button} from 'react-native'
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import entourage from '../../Helpers/Temoins'

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
        const {navigate} = this.props.navigation;

        const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
        return (
            <Container>
                <Content>
                    <List>
                        {entourage.map(item =>
                            <ListItem avatar>
                                <Left>
                                    <Thumbnail source={require('../../images/01.jpg')} />
                                </Left>
                                <Body>
                                <Text>{item.nom + " " + item.prenom}</Text>
                                <Text note>{item.mail}</Text>
                                </Body>
                                <Right>
                                    <Text note>{item.role}</Text>
                                </Right>
                            </ListItem>
                        )}
                    </List>
                </Content>
            </Container>
        )
    }
}

export default Entourage