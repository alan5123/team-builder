import React from "react";


const Members = props => {
    return (
        <div >
            {props.team.map(TeamsForm => (
                
                <div  key={TeamsForm.id}>
                    <h2>{TeamsForm.name}</h2>
                    <p>{TeamsForm.email}</p>
                    <p>{TeamsForm.role}</p>
                </div>
            ))}
        </div>
    )
}

export default Members;
    
