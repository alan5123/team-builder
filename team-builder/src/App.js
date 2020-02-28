import React, {useState} from 'react';
import TeamsForm from './components/TeamsForm'
import Members from './components/Members'
import './App.css';



function App() {

const [team, setTeam]= useState ([])

const addNewMember = teams => {
const newMember = {
  name: teams.name,
  email: teams.email,
  role: teams.role
}; 
setTeam([...team, newMember])
}

return (
  <div className="container">
    <h1 className="h1Title">Team Builder</h1>
    <div className="form">
     
      <TeamsForm addNewMember={addNewMember}/>
      <Members team={team} />
    </div>
  </div>
);
}


export default App;

