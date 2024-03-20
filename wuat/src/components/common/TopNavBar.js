import styled from "styled-components";

function TopNavBar(){
    return(
        <>
        <Container>Where U At</Container>
        </>
    )
}

export default TopNavBar;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 50px;
    background-color: #ced4da;
`