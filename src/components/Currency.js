import React, { Component } from 'react'

export default class Currency extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedValue: ""
        }
    }
    handleChangeValue = (e) => {
        e.preventDefault();
        let selectedValue = e.target.value;
        this.setState({ selectedValue })
        this.props.changeValue(selectedValue);
    };

    render() {
        return (
            <div>
                <div className="select-container"  >
                    <select style={{ width: "5em", height: "2em" }} onChange={this.handleChangeValue}>
                        {this.props.options.map((option) => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
            </div>
        )
    }
}
