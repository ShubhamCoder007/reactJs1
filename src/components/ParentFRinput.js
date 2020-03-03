import React, { Component } from 'react'
import FRinput from './FRinput'
import ParentComponent from './ParentComponent'

class ParentFRinput extends Component {
    render() {
        return (
            <div>
                <FRinput/>
                <button>Focus Input</button>
            </div>
        )
    }
}

export default ParentFRinput