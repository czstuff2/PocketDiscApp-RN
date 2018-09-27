import React from "react";
import { Container, Header, Content, Icon, Picker, Form } from "native-base";

export default class statPickerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.onValueChange = this.onValueChange.bind(this)
    }
    onValueChange(value: string) {
        if (value === 0) {

        } else {
            this.props.onSelectionChange(value)
        }
    }
    render() {
        const selection = this.props.selectedValue
        return (
            <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                placeholder="Sort by stat"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                style={{ width: undefined }}
                selectedValue={selection}
                onValueChange={this.onValueChange}
            >
                <Picker.Item label="Sort by Speed" value="speed" />
                <Picker.Item label="Sort by Glide" value="glide" />
                <Picker.Item label="Sort by Turn" value="turn" />
                <Picker.Item label="Sort by Fade" value="fade" />
            </Picker>
        );
    }
}