import React from "react";
function List(){
    const name =['BRUCE, CLARK']
    const persons =[
        {
            id:1,
            name:'Bruce',
            age : 30,
            skill :'React'
        },
        {
            id:1,
            name:'Bruce',
            age : 30,
            skill :'React'
        },
        {
            id:1,
            name:'Bruce',
            age : 30,
            skill :'React'
        },
        {
            id:1,
            name:'Bruce',
            age : 30,
            skill :'React'
        }

    ]
    const nameList = persons.map(persons =><h2>I am {persons.name} && Age is {persons.age}</h2>)
    return(
        <div>{nameList}</div>
    // For variables    
        // <div>
        //     <h2>{name[0]}</h2>
        //     <h2>{name[1]}</h2>
        //     <h2>{name[2]}</h2>
         
            
        // </div>
// For Map
        // <div>
        //     {
        //        name.map(name => <h2>{name}</h2>) 
        //     }
        // </div>

    )
}

export default List