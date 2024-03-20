import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/Login";
import CalendarPage from "./pages/schedule/Calendar";
import DaySchedule from "./pages/schedule/DaySchedule";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/main" element={<CalendarPage/>} />
      <Route path="/day" element={<DaySchedule/>} />
    </Routes>
  );
}

export default App;
