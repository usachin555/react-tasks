import { useState } from "react";

var array = [];
const Controolled = () => {
  const [username, setUserName] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const [usernameError, setUserNameError] = useState(null);
  const [genderError, setGenderError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);
  const [mobileNumberError, setMobileNumberError] = useState(null);

  // usernamehandler
  const usernameHandler = (event) => {
    let usernameInput = event.target.value;
    setUserName(usernameInput);
    if (usernameInput.length > 7) {
      setUserNameError("username must be of 5 charaters");
    } else if (usernameInput.length === 0) {
      setUserNameError("username cannot be empty");
    } else {
      setUserNameError(null);
    }
  };

  // genderhandler
  const genderHandler = (event) => {
    let gender = event.target.value;
    setGender(gender);
    if (gender === null) {
      setGenderError("please select the gender");
    } else {
      setGenderError(null);
    }
  };

  // passwordhandler
  const passwordHandler = (event) => {
    let passwordInput = event.target.value;
    setPassword(passwordInput);
    if (passwordInput.length > 5 ) {
      setPasswordError("password must be of 5 charaters");
    } else if (passwordInput.length == 0) {
      setPasswordError("password cannot be empty");
    }
    else
    {
      setPasswordError(null);
    }
  };

  // confirmpasswordhandler
  const confirmPasswordHandler = (event) => {
    let cpassInput = event.target.value;
    setConfirmPassword(cpassInput);
    if (password !== cpassInput) {
      setConfirmPasswordError("passwords do not match");
    } else {
      setConfirmPasswordError(null);
    }
  };

  // emailhandler
  const emailHandler = (event) => {
    let emailInput = event.target.value;
    setEmail(emailInput);
    if (emailInput.length === null) {
      setEmailError("please fill this box");
    } else {
      setEmailError(null);
    }
  };

  //   mobilenumber handler
  const mobileNumberHandler = (event) => {
    let mobileNum = event.target.value;
    setMobileNumber(mobileNum);
    if (!mobileNum.match(/^[6-9]\d{9}$/)) {
      setMobileNumberError(
        "Mobile number must start with 6, 7, 8, or 9 and be 10 digits long"
      );
    } else {
      setMobileNumberError(null);
    }
  };
//   console.log("sachin")
  const handleSubmit = (event) => {
    event.preventDefault();
      const obj = {
        username: username,
        email: email,
        mobile_number: mobileNumber,
        password: password,
        gender: gender
      };
      array.push(obj);
      localStorage.setItem("users", JSON.stringify(array));
      console.log(array);
    }

  return (
    <>
      <h2>Registration Form</h2>

      {/* enter username */}

      <div class="container mt-3">
        <form onSubmit={handleSubmit}>
          <div class="mb-3 mt-3">
            <label for="uname">userName:</label>
            <input
              type="text"
              class="form-control"
              id="uname"
              placeholder="Enter email"
              name="email"
              value={username}
              onChange={usernameHandler}
              style={{
                border: usernameError ? "2px solid red" : "1px solid black",
              }}
            />
            {usernameError && (
              <span style={{ color: "red" }}>{usernameError}</span>
            )}
          </div>

          {/* enter email */}
          <div class="mb-3 mt-3">
            <label for="email">Email:</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={emailHandler}
              style={{
                border: emailError ? "2px solid red" : "1px solid black",
              }}
            />
            {emailError && <span style={{ color: "red" }}>{emailError}</span>}
          </div>

          {/* enter gender */}

          <label>Gender:</label>
          <br></br>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id="radio1"
              name="optradio"
              value="male"
              onChange={genderHandler}
              checked
            />
            <label class="form-check-label" for="radio1">
              Female
            </label>
          </div>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id="radio2"
              name="optradio"
              value="male"
              onChange={genderHandler}
            />
            <label class="form-check-label" for="radio2">
              male
            </label>
          </div>

          {/* enter pw */}

          <div class="mb-3">
            <label for="pwd">Password:</label>
            <input
              type="password"
              class="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pswd"
              value={password}
              onChange={passwordHandler}
              style={{
                border: passwordError ? "2px solid red" : "1px solid black",
              }}
            />
            {passwordError && (
              <span style={{ color: "red" }}>{passwordError}</span>
            )}
          </div>

          {/* confirm password */}
          <div class="mb-3">
            <label for="cpwd">Re-enter Password:</label>
            <input
              type="password"
              class="form-control"
              id="cpwd"
              placeholder="Enter password"
              name="cpswd"
              value={confirmPassword}
              onChange={confirmPasswordHandler}
              style={{
                border: confirmPasswordError
                  ? "2px solid red"
                  : "1px solid black",
              }}
            />
            {confirmPasswordError && (
              <span style={{ color: "red" }}>{confirmPasswordError}</span>
            )}
          </div>

          {/* mobilehandler */}
          <div class="mb-3">
            <label for="mobNumber">enter mobile:</label>
            <br></br>
            <input
              type="tel"
              name="mobNumber"
              value={mobileNumber}
              placeholder="Enter Mobile Number"
              onChange={mobileNumberHandler}
              style={{
                border: mobileNumberError ? "2px solid red" : "1px solid black",
              }}
            />
            {mobileNumberError && (
              <span style={{ color: "red" }}>{mobileNumberError}</span>
            )}
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Controolled;
