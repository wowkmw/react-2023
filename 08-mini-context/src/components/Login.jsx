import { useState } from "react";
import { useUserContext } from "../context/userContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useUserContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
    console.log("submitted");
  };
  return (
    <>
      <h4>Login component</h4>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        style={{ marginRight: "10px" }}
      />{" "}
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        style={{ marginRight: "20px" }}
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default Login;
