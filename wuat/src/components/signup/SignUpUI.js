import { useState } from "react";

import CustomInput from "../login/TextInput";
import styled from "styled-components";

export default function SignUpUI(props) {
    const [value, setValue] = useState(""); // 입력된 값의 상태 정의

    const titleArray = ['아이디를 입력해주세요', '비밀번호를 입력해 주세요', '이름을 입력해주세요']
    const handleChange = (event) => {
        
        props.setData(event.target.value);
    };

    return (
        <>
            <Container>
                <Title>{titleArray[props.index]}</Title>
            </Container>
            <CustomInput label={props.label} type={(props.label === 'Password'? 'password' : 'text')} setData={props.setData}/>
            <CircleBox>
                {[...Array(3)].map((_, index) => (
                    <Circle key={index} isSelected={index === props.index} />
                ))}
            </CircleBox>
            
        </>
    )
}

const Title = styled.div`
    
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: 50px 0px 30px 50px;
  font-weight: 900;
`;

const CircleBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 200px;
`
const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: ${({ isSelected }) => (isSelected ? "black" : "gray")};
`;

