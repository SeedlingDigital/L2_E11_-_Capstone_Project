import React, { useEffect } from "react";
import "./UserAuth.css"
import {FaUser, FaLock} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {useRef, useState} from "react";
import {UserModel} from "../../Models/UserModel";
import {useSelector, useDispatch} from "react-redux";
import {addUser, removeUser, editUser} from "../../store/UserListState";
import MessageModal from "../../Components/Modal/MessageModal";
import {MessageModel} from "../../Models/MessageModel";
import { Link, useNavigate } from "react-router-dom";


const LoginPage = () => {

  //State management
  const state = useSelector(state => state.userList);
  const dispatch = useDispatch();

  //Routing
  const navigate = useNavigate();


  //Local state management
  const [formState, setFormState] = useState("Login");
  const [forgotText, setforgotText] = useState("Forgot password?");
  const [showModal, setShowModal] = useState(false);
  const messageModelInit = new MessageModel("NONE", "NONE", false);
  const [modalMessage, setModalMessage] = useState(messageModelInit);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});


  //Input variable refs
  const firstNameInput = useRef();
  const lastNameInput = useRef();
  const userNameInput = useRef();
  const emailInput = useRef();
  const passWordInput = useRef();
  const confirmPasswordInput = useRef();
  const rememberMeCheckBoxInput = useRef();

  let userList = [];
  userList = state.userList;




  function signIn() {
    listUsers();

    //For testing purpose, take this out once we want to run the full page
    const userRecord = new UserModel("Ruaan", "Nortje", "test@test.com", "Ruaann", "09098902", "YES");
    dispatch(addUser(userRecord));
    let userName1 = "Ruaan";
    navigate("/landing", {state: {user: userName1}});


/*
    if(formHasErrors())
    {
      return;
    }


    let firstName = firstNameInput.current.value;
    let lastName = lastNameInput.current.value;
    let email = emailInput.current.value;
    let userName = userNameInput.current.value;
    let password = passWordInput.current.value;
    let confirmPassword = confirmPasswordInput.current.value;
    let rememberMe = '';

    if(rememberMeCheckBoxInput.current.value) {
      rememberMe = rememberMeCheckBoxInput.current.value;
    }

    //Check if User exists
    let userIndex = -1;
    if (userName) {
      userIndex = state.userList.indexOf(userRec => userRec.userName === userName);
      userIndex = checkIfUserExists(userName);
    }
    //If login
    if(formState === "Login") {
      //if password does match then log in.
      //If password does not match error and try again.
      //If user does not exist please prompt them to register.

      //Check if user exists.
      if (userIndex >= 0) {

        if(password == state.userList[userIndex].password) {
          //Continue to the landing page
          navigate("/landing", {state: {user: userName}});
        }
        else
        {
          displayMessage("Sign in error", `User ${userName} did not supply a correct username and password`);
        }
      }
      else
      {
        setModalMessage("No user found.");
        setShowModal(true);
      }
    }
    else if (formState === "ForgotPassword") {
      //If Change password
      //Check if user exists.
      if (userIndex >= 0) {
        //Check if both password and confirm password match
        if(password === confirmPassword) {
          //If it is the same then update the user record in the state
          const userRecord = new UserModel(state.userList[userIndex].firstName,
              state.userList[userIndex].lastName,
              state.userList[userIndex].email,
              state.userList[userIndex].userName,
              password,
              rememberMe);
          dispatch(editUser(userRecord));
          displayMessage("Password changed", "You have successfully changed your password, please login");
        }
        //If password does not match error and try again.
        else {
          displayMessage("Error changing password", "User password does not match");
        }
      }
      else
      {
        //If user does not exist please prompt them to register
        displayMessage("No user found", `User ${userName} was not found, please try again or register a new account`);
      }
    }
    //User does not exist.
    else
    {
      if(formState === "Register") {
        if(userIndex >= 0)
        {
          //Cant register user already exists
          const message = new MessageModel("User exists","The user already exists, please log in", true);
          setModalMessage(message);
          setShowModal(true);

          clearAllVariables();

          setFormState("Login");
        }
        else {
          const userRecord = new UserModel(firstName, lastName, email, userName, password, rememberMe);
          dispatch(addUser(userRecord));
        }
      }
    }

 */
    listUsers();
  }


  //I did not use YUP or Formik for the validations as I wanted to try something new
  function formHasErrors()
  {


     let userName = userNameInput.current.value ?? "";
     let password = passWordInput.current.value ?? "";

    const validationErrors = {};

    if(formState === "Register")
    {
      let firstName = firstNameInput.current.value ?? "";
      let lastName = lastNameInput.current.value ?? "";
      let email = emailInput.current.value ?? "";

      if(!firstName.trim())
      {
        validationErrors.firstName = "First Name is required";
      }

      if(!lastName.trim())
      {
        validationErrors.lastName = "Last Name is required";
      }

      if(!email.trim())
      {
        validationErrors.email = "Email is required";
      }
      else if(!/\S+@\S+\.\S+/.test(email.value))
      {
        validationErrors.email = "Email is not valid";
      }
    }
    else if(formState === "Forget")
    {
      let confirmPassword = confirmPasswordInput.current.value ?? "";
      if(password !== confirmPassword)
      {
        validationErrors.confirmPassword = "Password does not match";
      }
    }

    if(!userName.trim())
    {
      validationErrors.userName = "User name is required";
    }

    if(!password.trim())
    {
      validationErrors.password = "Password is required";
    }
    else if(passWordInput.current.value < 8)
    {
      validationErrors.password = "Password should be at least 8 characters long";
    }

    setFormData(validationErrors);
    setErrors(validationErrors);

    return !!validationErrors;
  }




  function listUsers() {
    for(var i = 0; i < state.userList.length; i++) {
      console.log(userList[i]);
    }
  }

  function checkIfUserExists(userName) {
    for(var i = 0; i < state.userList.length; i++)
    {
      if(state.userList[i].userName === userName)
      {
        return i;
      }
    }

    return -1;
  }

  function displayMessage(heading, message)
  {
    const messageModel = new MessageModel(heading,message, true);
    setModalMessage(messageModel);
    setShowModal(true);
  }


  function clearAllVariables()
  {
    userNameInput.current.focus();
    userNameInput.current.value = "";
    passWordInput.current.value = "";
    confirmPasswordInput.current.value = "";
    firstNameInput.current.value = "";
    lastNameInput.current.value = "";
    emailInput.current.value = "";
    rememberMeCheckBoxInput.current.value = "";
  }




  function changeFormState(stateDescription) {

    // setFormState(stateDescription);

    if ((stateDescription !== "Login")) {
      setFormState(stateDescription.replace("?", ""));
      setforgotText("Login");

    } else {
      setFormState(stateDescription.replace("?", ""));
      setforgotText("Forgot password?");
    }
  }


  return (
     //<body className="login-body">
      <div className="login-body">
        <div className="login-wrapper">
          <form action={""}>
            <h1>{formState}</h1>
            {
              (formState === "Register") ?
                  <div>
                    <div className="label">
                      <label>First Name</label>
                      <div className="login-input-box">
                        <input ref={firstNameInput} type="text" placeholder="Joe" required

                        />
                        <FaUser className={"login-icon"}/>
                      </div>
                      {errors.firstName && <span className={"error-text"}> {errors.firstName} </span>}
                    </div>
                    <div>
                      <label>Last Name</label>
                      <div className="login-input-box">
                        <input ref={lastNameInput} type="text" placeholder="Soap" required/>
                        <FaUser className={"login-icon"}/>
                      </div>
                      {errors.lastName && <span className={"error-text"}> {errors.lastName} </span>}
                    </div>
                  </div>
                  : null
            }
            <div>
              <label>User name</label>
              <div className="login-input-box">
                <input ref={userNameInput} type="text" placeholder="myUserName" required/>
                <FaUser className={"login-icon"}/>
              </div>
              {errors.userName && <span className={"error-text"}> {errors.userName} </span>}
            </div>
            {
              (formState === "Register") ?
                  <div>
                    <label>Email</label>
                    <div className="login-input-box">
                      <input ref={emailInput} type="email" placeholder="joe.soap@example.com" required/>
                      <MdEmail className={"login-icon"}/>
                    </div>
                    {errors.email && <span className={"error-text"}> {errors.email} </span>}
                  </div>
                  : null
            }
            <div>
              <label>Password</label>
              <div className="login-input-box">
                <input ref={passWordInput} type="password" placeholder="Test@123" required/>
                <FaLock className={"login-icon"}/>
              </div>
              {errors.password && <span className={"error-text"}> {errors.password} </span>}
            </div>
            {(formState === "Login") ? null :
                <div>
                  <label>Confirm Password</label>
                  <div className="login-input-box">
                    <input ref={confirmPasswordInput} type="password" placeholder="Test@123" required/>
                    <FaLock className={"login-icon"}/>
                  </div>
                  {errors.confirmPassword && <span className={"error-text"}> {errors.confirmPassword} </span>}
                </div>
            }

            <div className="login-forgot">
              {(formState === "Login") ?
                  <label><input ref={rememberMeCheckBoxInput} type={"checkbox"}/>Remember me</label> : null
              }
              {<a href="#" onClick={() => changeFormState(forgotText)}> {forgotText} </a>}
            </div>

            <button type="button" onClick={() => signIn()}>{formState}</button>

            {(formState === "Register") ? null :
                <div className="login-register-link">
                  <p>Don't have an account? <a href="#" onClick={() => changeFormState("Register")}>Register</a>
                  </p>
                </div>
            }

          </form>

          {(showModal) ?
              <MessageModal show={showModal} heading={modalMessage.heading}
                            message={modalMessage.message}/> : null}
        </div>
      </div>
  //   </body>
  );

}
export default LoginPage;
