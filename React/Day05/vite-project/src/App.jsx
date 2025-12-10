import { useState } from "react";

function App(){

  const [user, setUsers] = useState([]);

  async function GithubProfile() {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    setUsers(data);
    
  }
  GithubProfile();

  return(
    <>
    <h1>Github User</h1>
    <div style= {{display:"flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap"}}>
      {
        users.map(user =>(
          <img src = {user.avtar_url} height = {"100px"} width = {"100px"}/>
        ))
      }
    </div>
    </>
  )

}

export default App;