import React from "react";

function person({person}){
    return (
        <div>
            <h2>I am {person.name}. I am {person.age} Years old.I know {person.skill}</h2>
        </div>
    )
}

export default person