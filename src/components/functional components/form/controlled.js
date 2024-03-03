import { useState } from "react";

const Controlled = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUserNameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const usernameHandler = (event) => {
    let usernameInput = event.target.value;
    setUserName(usernameInput);
    if (usernameInput.length > 5) {
      // alert("please enter less than 5 characters")
      showError();
    } else {
      setUserNameError(null);
    }
  };

  const showError = () => {
    setUserNameError("username must be of 5 characters ");
  };

  const passwordHandler = (event) => {
    let passwordInput = event.target.value;
    setPassword(passwordInput);
    if (passwordInput.length > 4) {
      showError1();
    } else {
      setPasswordError(null);
    }
  };

  const showError1 = () => {
    setPasswordError("password must be of 8 characters");
  };

  return (
    <>
      <h1>Controlled components</h1>
      <form>
        <div class="mb-3 mt-3">
          <label htmlFor="email" class="form-label">
            Email:
          </label>
          <input
            type="text"
            class="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            value={username}
            onChange={usernameHandler}
            style={{ border: usernameError ? "2px solid red" : "0px" }}
          />
          {usernameError && (
            <span style={{ color: "red" }}>{usernameError}</span>
          )}
        </div>
        <div class="mb-3">
          <label for="pwd" class="form-label">
            Password:
          </label>
          <input
            type="password"
            class="form-control"
            id="pwd"
            placeholder="Enter password"
            name="pswd"
            value={password}
            onChange={passwordHandler}
            style={{ border: passwordError ? "2px solid red" : "0px" }}
          />
          {passwordError && (
            <span style={{ color: "red" }}>{passwordError}</span>
          )}
        </div>

        <div class="form-check mb-3">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" name="remember" />{" "}
            Remember me
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Controlled;
