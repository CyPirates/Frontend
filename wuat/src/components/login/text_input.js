import styled from "styled-components";

function CustomInput(props) {
    return (
        <Container>
                <EntryArea>
                <StyledInput required type={props.type} />
                <Label>{props.label}</Label>
                </EntryArea>
        </Container>
    )
}

export default CustomInput;

const Container = styled.div`
    min-height: 70px;
    display: flex;
    margin-bottom: 0;
`

const EntryArea = styled.div`
   position: relative;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`
const Label = styled.div`
    position: absolute;
    left: 15vw;
    font-size: 1em;
    font-weight: bold;
    width: auto;
    transition: 0.2s ease;
    color: #868e96;
    background-color: white;
`

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

    &:focus, &:valid{
        border: 3px solid black;
    }

    &:focus + ${Label}, &:valid + ${Label} {
    color: black;
    transform: translate(0px, -25px) scale(0.8);
    z-index: 1111;
  }
`;

