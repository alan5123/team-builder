import React, {useState} from 'react';
import ReactDom from 'react-dom';


const TeamsForm = props => {

const [teams, setTeams] = useState ({
name: '',
email:'',
role: ''

})

const handleChanges = e => {
    setTeams ({...teams, [e.target.name]: e.target.value})
}

const submitForm = e => {
    e.preventDefault();
    props.addNewMember(teams)
    setTeams({name:"", email:"", role:""})
}
 
return (
<form onSubmit={submitForm}>
<label htmlFor= 'name'>Name:</label>
<input id="name"  type= "text" name= 'name' value= {teams.name} onChange={handleChanges}  />

<label htmlFor= 'email'>Email:</label>
<input id="email"  type= 'text' name= "email"  value= {teams.email}  onChange={handleChanges} />

<label htmlFor= 'role'>Role:</label>
<input id= "role"  type= 'text' name= 'role'  value= {teams.role}  onChange={handleChanges} />

<button type="submit">Submit New Member</button>


</form>

)

}

export default TeamsForm