import React, { Component } from 'react';
import loading from './loading.gif';

let mystyle = {
    borderRadius:'50%'
}
export class spinner extends Component {

    
    render() {
        return (
            <div className="container d-flex justify-content-center">
                <img src={loading} alt="loading" style={mystyle}/>
            </div>
        )
    }
}

export default spinner
