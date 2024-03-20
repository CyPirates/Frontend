import { BottomNavigation, BottomNavigationAction, Icon, Box } from "@mui/material";
import styled from "styled-components";

function BotNavBar() {
    return (
        <Container>
        <Tab>asdf</Tab>
        <Tab>asdf</Tab>
        <Tab>asdf</Tab>
        <Tab>asdf</Tab>
        </Container>
    )
}
export default BotNavBar;

const Container = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: #ced4da;
    

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Tab = styled.div`
    width: 50px;
    //background-color: white;

    display: flex;
    justify-content: center;
    align-items: center;
`