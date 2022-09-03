import React, { useEffect, useState } from "react";
import { useStyles } from "./LoginStyle";
import CardBox from "../../components/Base/CardBox/CardBox";
import { LargeTitle, SmallTitle } from "../../components/Base/Text/Text";
import ActionInput from "../../components/Base/ActionInput/ActionInput";
import ActionButton from "../../components/Base/ActionButton/ActionButton";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loginUser } from "../../store/auth";
import { showAlert } from "../../store/alert";
import { selectLoginStatus, selectErrMsg } from "../../store/auth/selectors";

const Login: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdErr, setPwdErr] = useState("");

  let loginStatus = useAppSelector(selectLoginStatus);
  let errMsg = useAppSelector(selectErrMsg);

  const handleToRegister = () => {
    navigate("/register");
  };

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePwd = (e: any) => {
    setPwd(e.target.value);
  };

  const handleLogin = async () => {
    var validation = true;
    let regEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email === "") {
      setEmailErr("Please enter Email address.");
      validation = false;
    } else if (!regEmail.test(email)) {
      setEmailErr("Please enter a correct Email address");
      validation = false;
    } else {
      setEmailErr("");
      validation = true;
    }
    if (pwd === "") {
      setPwdErr("Please enter Password.");
      validation = false;
    } else if (pwd.length < 7) {
      setPwdErr("Password must be at least 8 characters");
      validation = false;
    } else {
      setPwdErr("");
      validation = true;
    }
    if (validation) {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", pwd);
      await dispatch(loginUser(formData));
    }
  };

  useEffect(() => {
    if (!loginStatus && errMsg.length > 0) {
      dispatch(showAlert({ message: errMsg, severity: "error" }));
    }
  }, [loginStatus, errMsg]);

  return (
    <div className={classes.root}>
      <CardBox>
        <div className={classes.title}>
          <LargeTitle>Log In</LargeTitle>
        </div>
        <div>
          <div className={classes.loginItems}>
            <div className={classes.smallTitle}>
              <SmallTitle>Email:</SmallTitle>
            </div>
            <ActionInput
              placeholder='Email'
              handleChange={handleEmail}
              error={emailErr}
            />
          </div>
          <div className={classes.loginItems}>
            <div className={classes.smallTitle}>
              <SmallTitle>Password:</SmallTitle>
            </div>
            <ActionInput
              placeholder='Password'
              type='password'
              handleChange={handlePwd}
              error={pwdErr}
            />
          </div>
        </div>
        <div className={classes.footer}>
          <ActionButton
            color='blue'
            className={classes.loginBtn}
            statusClick={handleLogin}>
            Log In
          </ActionButton>
          {/* <p className={classes.link} onClick={handleToRegister}>
            Register now
          </p> */}
        </div>
      </CardBox>
    </div>
  );
};

export default Login;
