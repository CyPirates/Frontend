import React, { useEffect, useState } from "react";
import styled from "styled-components";

function CustomInput(props) {
  const [value, setValue] = useState('개시발'); // 입력된 값의 상태 정의

  const handleChange = (event) => {
    setValue(event.target.value);
    props.setData(event.target.value);

  };
  useEffect(() => {
    setValue(""); // 렌더링 시에만 값을 초기화합니다.
  }, [props.label]);
 
  return (
    <Container>
      <EntryArea>
        <StyledInput
          required
          type={props.type}
          value={value}
          onChange={handleChange} // 입력 값이 변경될 때마다 handleChange 함수 호출
        />
        <Label>{props.label}</Label>
      </EntryArea>
    </Container>
  );
}

export default CustomInput;

const Container = styled.div`
  min-height: 70px;
  display: flex;
  margin-bottom: 0;
`;

const EntryArea = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Label = styled.div`
  position: absolute;
  left: 15vw;
  font-size: 1em;
  font-weight: bold;
  width: auto;
  transition: 0.2s ease;
  color: #868e96;
  background-color: white;
`;

const StyledInput = styled.input`
  position: absolute;
  width: 75vw;
  outline: none;
  font-size: 1em;
  line-height: 43px;
  border-radius: 10px;
  border: 2px solid gray;
  background: transparent;
  transition: 0.1s ease;
  z-index: 1111;

  &:focus,
  &:valid {
    border: 3px solid black;
  }

  &:focus + ${Label},
  &:valid + ${Label} {
    color: black;
    transform: translate(0px, -25px) scale(0.8);
    z-index: 1111;
  }
`;