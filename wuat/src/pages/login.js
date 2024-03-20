import styled from "styled-components";

import logo from "../assets/images/wuat_logo.png"
import CustomInput from "../components/login/TextInput";
import { Navigate, Link} from "react-router-dom";

function LoginPage() {

    

    return (
        <>
            <Container>
                <Logo src={logo} />
            </Container>
            <CustomInput label="ID" type="text" />
            <CustomInput label="PW" type="password" />
            <Container>
                <Link to={'/main'} style={{textDecoration: 'none'}}>
                <Button >Log in</Button>
                </Link>
            </Container>
        </>
    )
}

export default LoginPage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Logo = styled.img`
margin-top: 10%;
    width: 50vw;
    height: 50vw;
    margin-bottom: 20px;
`

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
    
`