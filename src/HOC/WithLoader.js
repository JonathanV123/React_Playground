import React, { Component } from 'react';
import '../App.css';

const LoaderAnimation = (props) => {
    return (
        <div className="loadNotification">
            {props.loading && '💃💃💃💃💃Loading Dance🕺🕺🕺🕺🕺'}
        </div>
    )
}

// HOC example
// const WithLoader = (WrappedComponent) => {
//     const Wrapper = ({ ...props }) => {
//         return (
//             <div className="withLoaderContainer">
//                 {props.loading && <LoaderAnimation loading={props.loading} />}
//                 {!props.loading && <WrappedComponent />}
//             </div>
//         )
//     }
//     return Wrapper;
// }

const WithLoader = (props) => {
    const { render } = props;
    return (
        <div>
            {!props.loading ? render() : <LoaderAnimation {...props} />}
        </div>
    )
}



export default WithLoader;