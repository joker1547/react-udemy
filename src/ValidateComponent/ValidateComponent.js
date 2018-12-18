import React from 'react'

class ValidateComponent extends React.Component {
    render(props) {
        return <div>
            <p>data length: {this.props.inputDataLength} </p>
            {this.props.inputDataLength > 5 ? "Input Data too long" : "Input Data too short"}
            </div>
    }
}
export default ValidateComponent;