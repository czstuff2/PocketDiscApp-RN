import React from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';
import { Container, Content } from 'native-base'
import ManufacturerCard from './manufacturerCard'

import { Ionicons } from '@expo/vector-icons';

//Import manufacturer data
import { manufacturers } from '../../data/manufacturers.json'

export default class MainScreen extends React.Component {
    static navigationOptions = {
        title: 'PocketDisc'
    };

    render() {
        let myNavigator = this.props.navigation;
        return (
            <Container>
                <Content contentContainerStyle={styles.container}>
                    {manufacturers.map((manufacturer, i) => 
                        <ManufacturerCard 
                            manu={manufacturer} 
                            key={i}
                            myNavigator={myNavigator}
                        />)
                    }
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})