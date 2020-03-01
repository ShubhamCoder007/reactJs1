import React from 'react'
import Person from './Person'

function NameList(){
    // const names = ['Bruce', 'Clerk', 'Diana']
    // const NameList = names.map((name) => <h2>{name}</h2>)
    // return <div>{NameList}</div>

    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Shubham',
            age: 24,
            skill: 'Omnipotent'
        }
    ]

const personList = persons.map(person => <Person person={person}/>)

return <div>{personList}</div>
}

export default NameList