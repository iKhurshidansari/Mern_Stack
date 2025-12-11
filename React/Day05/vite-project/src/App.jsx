import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  async function fetchGithubProfile() {
    try {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching GitHub users:", error);
    }
  }

  useEffect(() => {
    fetchGithubProfile();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <>
      <h1>Github Users</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px"
        }}
      >
        {users.map((user) => (
          <div key={user.id} style={{ textAlign: "center" }}>
            <img
              src={user.avatar_url}
              alt={user.login}
              height={"100px"}
              width={"100px"}
              style={{ borderRadius: "50%" }}
            />
            <p>{user.login}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;