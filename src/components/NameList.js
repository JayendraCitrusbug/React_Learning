import React from "react";
import Person from "./Person";

function NameList(){
    const persons = [
        {
            id:1,
            name:'Bruce',
            age:30,
            skill:'React',
        },
        {
            id:2,
            name:'Clerk',
            age:35,
            skill:'Node',
        },
        {
            id:3,
            name:'Diana',
            age:25,
            skill:'Angular',
        },
    ]

    // const perosnList = persons.map(person => <Person key={person.id} person={person} />)
    const perosnList = persons.map((person, index) => <Person key={index} person={person} />)
    return <div>{perosnList}</div>
}

export default NameList