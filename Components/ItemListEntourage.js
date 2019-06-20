import React, { Component } from 'react';
import {Badge, Body, Left, ListItem, Right, Text, Thumbnail} from "native-base";

// create a component
class ItemListEntourage extends Component {
    render() {
        const {item} = this.props;
        return (
            <ListItem avatar>
                <Left>
                    <Thumbnail source={require('../images/01.jpg')} />
                </Left>
                <Body>
                <Text>{item.nom + " " + item.prenom}</Text>
                <Text note>{item.mail}</Text>
                </Body>
                <Right>
                    <Badge success>
                        <Text>{item.role}</Text>
                    </Badge>
                </Right>
            </ListItem>
        )
    }
}

//make this component available to the app
export default ItemListEntourage;