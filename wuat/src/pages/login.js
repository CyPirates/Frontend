import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/images/wuat_logo.png";
import CustomInput from "../components/login/TextInput";
import { Link } from "react-router-dom";

function LoginPage() {
  const [id, setId] = useState(""); // ID 입력값 상태
  const [password, setPassword] = useState(""); // PW 입력값 상태

  return (
    <>
      <Container>
        <Logo src={logo} />
      </Container>
      <CustomInput
        setData = {setId}
        label="ID"
        type="text"
        value={id} // ID 입력값 상태 전달
        onChange={(e) => {
            setId(e.target.value)
            console.log(e.target.value)
        }} // ID 입력값 업데이트
      />
      <CustomInput
        label="PW"
        type="password"
        value={password} // PW 입력값 상태 전달
        onChange={(e) => setPassword(e.target.value)} // PW 입력값 업데이트
      />
      <Container>
        <Link to={"/main"} style={{ textDecoration: "none" }}>
          <Button>Log in</Button>
        </Link>
        <Link to={"/signup"} style={{ textDecoration: "none" }}>
          <Button>Sign up</Button>
        </Link>
      </Container>
    </>
  );
}

export default LoginPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  margin-top: 10%;
  width: 50vw;
  height: 50vw;
  margin-bottom: 20px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 77vw;
  background-color: #898e96;
  height: 43px;
  border-radius: 10px;
  margin-top: 10px;
  border: none;
`;