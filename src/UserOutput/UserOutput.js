import React from 'react'
import './UserOutput.css'
class UserOutput extends React.Component {
    render( props ){
        return <div className="userOutput">
            <p className='paragraph'>paragraph 1 {this.props.name}</p>
            <p className='paragraph'>paragraph 2 </p>
        </div>
    }

}

export default UserOutput;