// Components/Planning.js

import React from 'react'
import {Container, Content, List} from "native-base";
import event from "../../Helpers/Event";
import ItemListPlanning from "../../Components/ItemListPlanning";

class Planning extends React.Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        {event.map(item =>
                            <ItemListPlanning item={{item}} navigation={this.props.navigation}/>
                        )}
                    </List>
                </Content>
            </Container>
        )
    }
}

export default Planning