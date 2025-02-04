import React, { Component } from 'react';
import ClassState1 from './ClassState1';

export default class ClassState extends Component {
    constructor(props) {
        super();
        this.state = {
            color: props.color
        }
    }
    render() {
        return (
            <>
                <h1>ClassState component -- {this.state.color}</h1>
                <ClassState1 color={this.props.color} />
            </>
        )
    }
}
