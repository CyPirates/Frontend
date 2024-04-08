import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider as MyProvider } from "react-redux";

import LoginPage from "./pages/Login.js";
import CalendarPage from "./pages/schedule/Calendar";
import DaySchedule from "./pages/schedule/DaySchedule";
import SignUpPage from "./pages/SignUp.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/main" element={<CalendarPage/>} />
      <Route path="/schedule/:day" element={<DaySchedule/>} />
      <Route path="/signup" element={<SignUpPage/>}/>
    </Routes>
  );
}

export default App;
