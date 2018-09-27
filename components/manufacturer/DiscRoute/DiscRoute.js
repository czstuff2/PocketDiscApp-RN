import React from 'react'
import { observer } from "mobx-react";
import { observable, computed, autorun } from "mobx";
import { Container, Card, Content } from 'native-base'
import { Text, Image } from 'react-native'

@observer
export default class DiscRoute extends React.Component {
    constructor(props) {
        super(props)
    }
    @observable manuName = this.props.navigation.getParam('manuName', 'Manu Name?')
    @observable disc = this.props.navigation.getParam('disc', 'IDK?')
    @observable isLoading = true;
    @observable img = this.disc.flightPath

    componentDidMount() {
        //this.fetchImg(this.img);
    }

    fetchImg = (url) => {
        fetch(url).then(response => response.blob())
                  .then(image => {

                  })
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('discName', 'disc Name?'),
        };
    }
    render() {
        return(
            <Container style={{alignItems: 'center', justifyContent: 'center'}}>
                <Content contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}>
                    <Card style={{ width: '95%'}}>
                        <Text>{this.manuName}</Text>
                        <Image source={{ uri: this.img }}
                            style={{ width: 400, height: 200 }} />
                    </Card>
                </Content>
            </Container>
        )
    }
}