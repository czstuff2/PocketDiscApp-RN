import React from 'react';
import { Image, Text, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body } from 'native-base';

export default class MainScreen extends React.Component {
    render() {
        let myNavigator = this.props.myNavigator;
        const manu = this.props.manu;
        let manuButton = <Button transparent textStyle={{ color: '#87838B' }}
                                onPress={() => myNavigator.navigate(manu.name, {
                                    manuName: manu.name,
                                })}>
                                <Icon name="logo-github" />
                                <Text>Show Discs</Text>
                         </Button>
        return (
            <Card style={styles.card}>
                <CardItem
                    style={{
                        borderBottomWidth: 1,
                        borderBottomColor: 'lightgray',
                        width: 400,
                    }}>
                    <Left>
                        <Thumbnail source={{ uri: manu.image }} />
                        <Body>
                            <Text style={styles.title}>{manu.name}</Text>
                            <Text note>Established: {manu.est}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Body>
                        <Image source={{ uri: manu.image }} style={{ height: 200, width: '100%'}} />
                        <Text>{manu.description}</Text>
                    </Body>
                </CardItem>
                <CardItem>
                    <Left style={styles.container}>
                        {manuButton}
                    </Left>
                </CardItem>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        flex: 0,
        width: '95%',
        margin: 50
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})