import React from "react";

export default class CheckBoxGroup extends React.Component {
    state = {
        age:15
    };
    static getDerivedStateFromProps(props) {
        return {
            loves: props.loves,
            chooice: props.chooice
        }
    }
    render() {
        const checkbox = this.state.loves.map((item, index, array) =>
            <label key={index}>
                <input type="checkbox" name={this.props.name} value={item.value} checked={this.state.chooice.includes(item.value)} onChange={this.props.onChange} />
                {item.name}
            </label>
        )
        return checkbox;
    }
}