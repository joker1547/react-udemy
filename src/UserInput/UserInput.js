import React from 'react'
import './UserInput.css'
class UserInput extends React.Component {
    render(props){
        return <div >            
            <input className="userInput" type='text' onChange={this.props.changed}></input>
        </div>    
    }
}

export default UserInput;