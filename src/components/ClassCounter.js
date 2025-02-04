import { Component } from 'react';

export default class ClassCounter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    render() {
        return (
            <>
                <center>
                    <h1>Counter App</h1>
                    <h1>Count is : {this.state.count}</h1>
                    <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
                    <button onClick={() => this.setState({ count: this.state.count - 1 })}>Decrement</button>

                </center>
            </>
        )
    }
}