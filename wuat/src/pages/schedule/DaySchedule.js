import TopNavBar from "../../components/common/TopNavBar";

import { useParams } from "react-router-dom";
import styled from "styled-components";

function DaySchedule(){
    const {day} = useParams();
    const parsedDay = day.split('+');
    
    return(
        <>
        <TopNavBar/>
        <Container>
            <div>{parsedDay[0]}년 {parsedDay[1]}월 {parsedDay[2]}일</div>
        </Container>
        </>
    )
}
export default DaySchedule;

const Container = styled.div`
    margin-top: 70px;
    margin-left: 30px;
`