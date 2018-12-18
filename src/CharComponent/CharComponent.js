import React from 'react'

class CharComponent extends React.Component {
    
    render(props) {
        const charStyle = {
            display : "inline-block",
            padding : "16px",
            textAlign : "center",
            margin : "16px",
            border : "1px solid black"


        }
        return <div className="charInfo" style={charStyle}>
                <p onClick={this.props.clicked}>{this.props.charValue}</p>
               </div>
    }
}

export default CharComponent;