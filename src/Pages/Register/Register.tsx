import React, { useState } from "react";
import { useStyles } from "./RegisterStyle";
import CardBox from "../../components/Base/CardBox/CardBox";
import { LargeTitle, SmallTitle } from "../../components/Base/Text/Text";
import ActionInput from "../../components/Base/ActionInput/ActionInput";
import ActionButton from "../../components/Base/ActionButton/ActionButton";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../store/auth";
import { showAlert } from "../../store/alert";
import { useAppDispatch } from "../../store/hooks";

const Register: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleToLogin = () => {
    navigate("/login");
  };

  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdErr, setPwdErr] = useState("");
  const [confirmpwd, setConfirmpwd] = useState("");
  const [confirmpwdErr, setConfirmpwdErr] = useState("");

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePwd = (e: any) => {
    setPwd(e.target.value);
  };

  const handleConfirmPwd = (e: any) => {
    setConfirmpwd(e.target.value);
  };

  const handleRegister = async () => {
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
    } else {
      setPwdErr("");
      validation = true;
    }
    if (confirmpwd === "") {
      setConfirmpwdErr("Please enter Confirm Password.");
      validation = false;
    } else if (confirmpwd !== pwd) {
      setConfirmpwdErr("Password does not match, please check again.");
      validation = false;
    } else {
      setConfirmpwdErr("");
      validation = true;
    }
    if (validation) {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", pwd);
      formData.append("confirmpassword", confirmpwd);
      const res = await registerUser(formData);
      if (!res.Success) {
        dispatch(showAlert({ message: res.Error.Msg, severity: "error" }));
      } else {
        dispatch(
          showAlert({
            message: "you have successfully registered",
            severity: "success",
          })
        );
        navigate("/login");
      }
    }
  };
  return (
    <div className={classes.root}>
      <CardBox>
        <div className={classes.title}>
          <LargeTitle>Register</LargeTitle>
        </div>
        <div>
          <div className={classes.loginItems}>
            <div className={classes.smallTitle}>
              <SmallTitle>Email:</SmallTitle>
            </div>
            <ActionInput
              placeholder="Email"
              handleChange={handleEmail}
              error={emailErr}
            />
          </div>
          <div className={classes.loginItems}>
            <div className={classes.smallTitle}>
              <SmallTitle>Password:</SmallTitle>
            </div>
            <ActionInput
              placeholder="Password"
              type="password"
              error={pwdErr}
              handleChange={handlePwd}
            />
          </div>
          <div className={classes.loginItems}>
            <div className={classes.smallTitle}>
              <SmallTitle>Confirm Password:</SmallTitle>
            </div>
            <ActionInput
              placeholder="Confirm Password"
              type="password"
              handleChange={handleConfirmPwd}
              error={confirmpwdErr}
            />
          </div>
        </div>
        <div className={classes.footer}>
          <ActionButton
            color="blue"
            className={classes.loginBtn}
            statusClick={handleRegister}
          >
            Register
          </ActionButton>
          <p className={classes.link} onClick={handleToLogin}>
            Log In now
          </p>
        </div>
      </CardBox>
    </div>
  );
};

export default Register;
