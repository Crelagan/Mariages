import React, { Component } from 'react';
import {Body, Left, ListItem, Right, Text, Thumbnail} from "native-base";

// create a component
class ItemListPlanning extends Component {
    render() {
        const { item } = this.props.item;
        const { navigation } = this.props;
        return (
            <ListItem avatar onPress={() => {navigation.navigate('EventDetail')}}>
                <Left>
                    <Thumbnail source={require('../images/01.jpg')} />
                </Left>
                <Body>
                    <Text>{item.nom}</Text>
                    <Text note>{item.lieu}</Text>
                </Body>
                <Right>
                    <Text note>{item.date}</Text>
                </Right>
            </ListItem>
        )
    }
}

//make this component available to the app
export default ItemListPlanning;