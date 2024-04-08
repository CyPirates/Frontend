import TopNavBar from "../../components/common/TopNavBar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import styled from "styled-components";
import ParseDay from "../../utils/schedule/ParseDay";
import { yearArray, monthArray } from "../../constants/YearMonth";

function CalendarPage() {
    const navigate = useNavigate();
    const today = new Date();
    const [year, setYear] = useState(today.getFullYear());
    const [month, setMonth] = useState(today.getMonth());
    const [selectedDay, setSelectedDay] = useState(today);

    const handleYearChange = (event) => {
        const year = parseInt(event.target.value);
        setYear(year);
    };

    const handleMonthChange = (event) => {
        const month = parseInt(event.target.value);
        setMonth(month - 1);
    }

    const handleNavigate = (day) => {
        const parsedDay = ParseDay(day);
        navigate(`/schedule/${parsedDay.year}+${parsedDay.month}+${parsedDay.day}`)
    }

    return (
        <>
            <TopNavBar />
            <Container>
                <DateContainer>
                    <CustomSelect
                        value={year}
                        onChange={handleYearChange}
                        className="year-select"
                    >

                        {yearArray.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </CustomSelect>
                    <p>년</p>
                    <CustomSelect
                        value={month + 1}
                        onChange={handleMonthChange}
                        className="year-select"
                    >

                        {monthArray.map((month) => (
                            <option key={month} value={month}>
                                {month}
                            </option>
                        ))}
                    </CustomSelect>
                    <p>월</p>
                </DateContainer>
                <Calendar
                    onClickDay={(value) => setSelectedDay(value)}
                    showNavigation={false}
                    activeStartDate={new Date(year, month)}
                    calendarType="gregory" // 일요일 부터 시작
                    showNeighboringMonth={false} // 전달, 다음달 날짜 숨기기
                    next2Label={null} // +1년 & +10년 이동 버튼 숨기기
                    prev2Label={null} // -1년 & -10년 이동 버튼 숨기기
                    minDetail="year" // 10년단위 년도 숨기기
                />
                {selectedDay.toLocaleDateString()}
                <button onClick={() => handleNavigate(selectedDay)}>test</button>
            </Container>

        </>
    )
}

export default CalendarPage;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
    
    .react-calendar {
    width: 90%;
    border: none;
    border-radius: 1rem;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.13);
    padding: 3% 5%;
    background-color: white;
    }
    .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
    font-weight: 800;
    }
    
    .react-calendar__tile--now{
    background: lightgray;
    border-radius: 0.5rem;
    abbr {
      font-weight: bold;
    }
  }

.react-calendar__tile--active,
.react-calendar__tile--active:enabled:focus {
 background: black;
 border-radius: 0.5rem;
 color: white;
}
  
`

const DateContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: start;
    padding-left: 10%;

`

const CustomSelect = styled.select`
    outline: none;
    border: none;
`