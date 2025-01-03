import React from "react";
import "./UserAuth.css"
import {FaUser, FaLock} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {useRef, useState} from "react";
import {UserModel} from "../../Models/UserModel";
import {useSelector, useDispatch} from "react-redux";
import {addUser, removeUser, editUser} from "../../store/UserListState";
import MessageModal from "../Modal/MessageModal";
import {MessageModel} from "../../Models/MessageModel";


const LoginPage = () => {

  //State management
  const state = useSelector(state => state.userList);
  const dispatch = useDispatch();

  //Local state management
  const [formState, setFormState] = useState("Login");
  const [forgotText, setforgotText] = useState("Forgot password?");
  const [showModal, setShowModal] = useState(false);
  const messageModelInit = new MessageModel("NONE", "NONE", false);
  const [modalMessage, setModalMessage] = useState(messageModelInit);


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
    let firstName = firstNameInput.current.value;
    let lastName = lastNameInput.current.value;
    let email = emailInput.current.value;
    let userName = userNameInput.current.value;
    let password = passWordInput.current.value;
    let confirmPassword = confirmPasswordInput.current.value;
    let rememberMe = rememberMeCheckBoxInput.current.value;

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
                displayMessage("Password changed", "You have succesfully changed your password, please login");

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

        listUsers();


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
      <div className="wrapper">
        <form action={""}>
          <h1>{formState}</h1>
          {
            (formState === "Register") ?
                <div>
                  <div className="label">
                    <label>First Name</label>
                    <div className="input-box">
                      <input ref={firstNameInput} type="text" placeholder="Joe" required/>
                      <FaUser className={"icon"}/>
                    </div>
                  </div>
                  <div>
                    <label>Last Name</label>
                    <div className="input-box">
                      <input ref={lastNameInput} type="text" placeholder="Soap" required/>
                      <FaUser className={"icon"}/>
                    </div>
                  </div>
                </div>
                : null
          }
          <div>
            <label>User name</label>
            <div className="input-box">
              <input ref={userNameInput} type="text" placeholder="myUserName" required/>
              <FaUser className={"icon"}/>
            </div>
          </div>
          {
            (formState === "Register") ?
                <div>
                  <label>Email</label>
                  <div className="input-box">
                    <input ref={emailInput} type="email" placeholder="joe.soap@example.com" required/>
                    <MdEmail className={"icon"}/>
                  </div>
                </div>
                : null
          }
          <div>
            <label>Password</label>
            <div className="input-box">
              <input ref={passWordInput} type="password" placeholder="Test@123" required/>
              <FaLock className={"icon"}/>
            </div>
          </div>
          {(formState === "Login") ? null :
              <div>
                <label>Confirm Password</label>
                <div className="input-box">
                  <input ref={confirmPasswordInput} type="password" placeholder="Test@123" required/>
                  <FaLock className={"icon"}/>
                </div>
              </div>
          }

          <div className="forgot">
            {(formState === "Login") ?
            <label><input ref={rememberMeCheckBoxInput} type={"checkbox"}/>Remember me</label> : null
            }
            {<a href="#" onClick={() => changeFormState(forgotText)}> {forgotText} </a>}
          </div>

          <button type="button" onClick={() => signIn()}>{formState}</button>

          {(formState === "Register") ? null :
              <div className="register-link">
                <p>Don't have an account? <a href="#" onClick={() => changeFormState("Register")}>Register</a>
                </p>
              </div>
          }

        </form>

        {(showModal) ?
            <MessageModal show={showModal} heading={modalMessage.heading}
                          message={modalMessage.message}/> : null}
      </div>
  );

}
export default LoginPage;