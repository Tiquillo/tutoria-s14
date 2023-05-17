import React from "react";
import axios from "axios";

function App() {
  const myStyle = {
    backgroundColor: "#2f4e1c",
    color: "darkblue",
    padding: "10px",
    margin: "auto",
    width: "300px",
    height: "150px",
    textAlign: "center",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  };

  const myStyle2 = {
    backgroundColor: "darkblue",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const username = e.target[1].value;
    console.log(name);
    console.log(username);
    axios.post("http://localhost:5251/user/register/" + name + "/" + username);
  };

  return (
    <div>
      <form style={myStyle} onSubmit={handleSubmit}>
        <h1>Registra tu usuario</h1>
        <input type="text" placeholder="Nombre" style={myStyle2} />
        <input type="text" placeholder="Usuario" style={myStyle2} />
        <button>¡Registrar!</button>
      </form>
    </div>
  );
}

export default App;
