import React from 'react';
import { Text } from 'react-native'
import { ListItem, Body, Right } from 'native-base';


export default class ManuListItem extends React.Component {
    handleDiscClick = () => {
        console.log(this.props);
        this.props.myNavigator.navigate("DiscRoute", {
            manuName: this.props.myNavigator.state.params.manuName,
            disc: this.props.currentDisc,
            discName: this.props.currentDisc.discName
        })
    }
    render() {
        const disc = this.props.currentDisc
        const stat = this.props.statSelected
        let statText;
        if (stat === 'speed') {
            //console.log("speed")
            statText = <Text>{disc.speed}</Text>
        } else if (stat === 'glide') {
            //console.log("glide")
            statText = <Text>{disc.glide}</Text>
        } else if (stat === 'turn') {
            //console.log("turn")
            statText = <Text>{disc.turn}</Text>
        } else {
            //console.log("fade")
            statText = <Text>{disc.fade}</Text>
        }
        return (
            <ListItem button onPress={this.handleDiscClick}>
                <Body>
                    <Text>{disc.discName}</Text>
                </Body>
                <Right>
                    {statText}
                </Right>
            </ListItem>
        )
    }
}