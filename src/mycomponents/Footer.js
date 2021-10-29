import React, { Component } from 'react'
let myStyle = {
    color:'#fff',
    backgroundColor:'#000',
    bottom:'0px',
    height:'50px',
    paddingTop:'12px',
    fontWeight:'500',
    fontSize:'19px'
}
export class Footer extends Component {
    render() {
        return (
            <div className="footer text-center" style={myStyle}>
                <p>Copyright@2021 All Rights Reserved | by Shubham Bawankar </p>
            </div>
        )
    }
}

export default Footer
