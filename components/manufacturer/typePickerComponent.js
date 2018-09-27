import React from "react";
import { Container, Header, Content, Icon, Picker, Form } from "native-base";

export default class PickerComponent extends React.Component {
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
                placeholder="Sort by type"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                style={{ width: undefined }}
                selectedValue={selection}
                onValueChange={this.onValueChange}
            >
                <Picker.Item label="Drivers" value="driver" />
                <Picker.Item label="Fairways" value="fairway" />
                <Picker.Item label="Midranges" value="midrange" />
                <Picker.Item label="Putters" value="putter" />
            </Picker>
        );
    }
}