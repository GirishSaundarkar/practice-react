import React, { Component } from 'react'

export default class ClassState1 extends Component {
    constructor(props) {
        super();
        this.state = {
            color : props.color
        }
    }
  render() {
    return (
        <h1>ClassState component1 -- {this.state.color}</h1>
    )
  }
}
