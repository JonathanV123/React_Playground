import React, { Component } from 'react';
import WithLoader from '../HOC/WithLoader';
import Dog from "./Dog";
import '../App.css';

class Hello extends Component {
    static defaultProps = {
        name: 'Hello I Loaded!',
        data: [{
            user1: 'Jim',
            id: 1,
        }],
    }
    render() {
        const props = this.props;
        return (
            <WithLoader loading={this.props.loading} render={() => (
                <div className="helloContainer">
                    <Dog testProp={this.props} />
                </div>
            )
            } />
        );
    }
}
export default Hello;

// render() {
//     const props = this.props;
//     return (
//         <WithLoader loading={this.props.loading} render={() => (<Dog testProp={this.props} />)} />
//     );
// }