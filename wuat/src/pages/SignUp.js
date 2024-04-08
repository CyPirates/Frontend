import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import CustomInput from "../components/login/TextInput";
import SignUpUI from "../components/signup/SignUpUI";
import styled from "styled-components";



function SignUpPage() {
    const [index, setIndex] = useState(0);
    const [inputID, setID] = useState("");
    const [inputPW, setPW] = useState("");
    const [inputName, setName] = useState("");
    const navigate = useNavigate();

    const handleArray = [setID, setPW, setName];
    const labelArray = ['ID', 'Password', 'Name'];

    const handleOnClick = () =>{
        setIndex(index+1);
        if(index === 2){
            postData();
        }
    }

    const postData = async () => {
        const data = {'user_id':inputID, 'name':inputName, 'password1':inputPW, 'password2':inputPW};
        axios.post("/user/signup", data)
        .then(response => {
            console.log(response.data)
            navigate('/main');
        })
        .catch(e => {console.log(e)});
     }

    return (
        <>
            <SignUpUI setData = {handleArray[index]} label = {labelArray[index]} index = {index}></SignUpUI>
            <Container>
                <Button onClick={handleOnClick}>다음</Button>
            </Container>
            <div>{inputID},{inputPW},{inputName}</div>
        </>
    )
}

export default SignUpPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: 50px 0px 30px 50px;
  font-weight: 900;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 77vw;
  background-color: #898e96;
  height: 43px;
  border-radius: 10px;
  
  border: none;
`;