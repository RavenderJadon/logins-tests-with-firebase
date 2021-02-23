import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import fire from "./firebase/fire_config";
import Phoneverification from "./Phoneverification";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [passwordError, setPasswordError] = useState("");

  console.log("user", user);

  const handelSignup = () => {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
        setUser(user);
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        // var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        setPasswordError(errorMessage);
      });
  };
  console.log("errorMessage", passwordError);
  const handleLogin = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
        setUser(user);
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        setPasswordError(errorMessage);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          Í<label>Username</label>
          <input
            type="text"
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>{passwordError}</p>
          <button onClick={handelSignup}>Sign up</button>
          <button onClick={handleLogin}>Sign in</button>
        </div>
        {user ? (
          <>
            <p>hi</p>
          </>
        ) : (
          <></>
        )}
      </header>
      <Phoneverification />
    </div>
  );
}

export default App;
