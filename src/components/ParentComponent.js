import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component{

    constructor(props){
        super(props)

        this.state = {
            parentName: 'Parent'
        }

        //binding this method since we are using in the method
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        //alert('Hello' + this.state.parentName)
        //template literal
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render(){
        return(
            <div>
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent