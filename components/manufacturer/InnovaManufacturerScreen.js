import React from 'react';
import { Text, View } from 'react-native'
import { Container, Header, Item, Input, Icon, Button, Content, Form} from 'native-base';

import ManuListComponent from './manuListComponent'
import TypePickerComponent from './typePickerComponent'
import StatPickerComponent from './statPickerComponent'

import { observer } from "mobx-react";
import { observable, computed, autorun } from "mobx";



@observer
export default class ManufacturerScreen extends React.Component {
    /*constructor(props) {
        super(props);
        this.state = {
            typeSelected: "driver",
            statSelected: "speed",
            searchParam: undefined,
            discs: undefined,
            defaultDiscs: require('../../data/innova-discs.json'),
            manu: this.props.navigation.getParam('manuName', 'ManuName?')
        };
        //this.onTypeValueChange = this.onTypeValueChange.bind(this)
        //this.onStatValueChange = this.onStatValueChange.bind(this)
    }*/
    @observable searchedDiscsHolder = []
    @observable typeSelected = "driver"
    @observable statSelected = "speed"
    @observable searchParam = ""
    @observable displayDiscs;
    @observable discs = {
        driver: require('../../data/innova/innova-drivers.json'),
        fairway: require('../../data/innova/innova-fairway.json'),
        midrange: require('../../data/innova/innova-midrange.json'),
        putter: require('../../data/innova/innova-putter.json'),
    }
    @observable manu = this.props.navigation.getParam('manuName', 'ManuName?')
    
    @observable isSearching = false;
    @observable lastSearchString = "";

    @computed
    get fetchDiscs() {
        if (this.manu === "Innova") {
            return this.discs.driver
        }
    }
    reactionOnTypeChange = autorun(() => {
        if (this.typeSelected === "driver") {
            this.displayDiscs = this.discs.driver
        } else if (this.typeSelected === "fairway") {
            this.displayDiscs = this.discs.fairway
        } else if (this.typeSelected === "midrange") {
            this.displayDiscs = this.discs.midrange
        } else {
            this.displayDiscs = this.discs.putter
        }
    })
    reactionOnStatChange = autorun(() => {
        console.log("stat changed to "+`${this.statSelected}`+" on manuScreen")
    })
    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('manuName', 'Manu Name?'),
        };
      }
    
    onTypeValueChange = (value) => {
        if (value === 0) {

        } else {
            this.typeSelected = value
            this.searchSelectedFunction(this.lastSearchString)
        }
    }
    onStatValueChange = (value) => {
        if (value === 0) {

        } else {
            this.statSelected = value
        }
    }
    componentWillMount() {
        this.displayDiscs = this.fetchDiscs
    }
    searchSelectedFunction = text => {
        this.searchParam = text

        const searchedDiscs = this.displayDiscs.filter(disc => {
            const discData = `${disc.discName.toUpperCase()}`
            const textData = text.toUpperCase()
            return discData.indexOf(textData) > -1
        })
        this.searchedDiscsHolder = searchedDiscs
        if(this.searchedDiscsHolder) {
            this.isSearching = true
            this.lastSearchString = text
        }
    }
    render() {
        let myNavigator = this.props.navigation;
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search"
                               onChangeText={text => this.searchSelectedFunction(text)}
                        />
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <Form style={{flex: 0, flexDirection: 'row'}}>
                    <TypePickerComponent
                        selectedValue={this.typeSelected}
                        onSelectionChange={this.onTypeValueChange}
                    />
                    <StatPickerComponent
                        selectedValue={this.statSelected}
                        onSelectionChange={this.onStatValueChange}
                    />
                </Form>
                <Content>
                    <ManuListComponent myNavigator={myNavigator} 
                        currentDiscs={this.isSearching ? this.searchedDiscsHolder : this.displayDiscs}
                        statSelected={this.statSelected}
                    />
                </Content>
            </Container>
        )
    }
}