import { Component } from 'react';

export default class State extends Component {
    constructor() {
        super();
        this.state = {
            name: 'girish',
            roll: 23,
            age: 30
        };
    }
    // note :  state is only used in class components
    render() {
        return (
            <>
                <h1>State name is {this.state.name}</h1>
            </>
        )
    };

}