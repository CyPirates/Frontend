import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import MainPage from "./pages/main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/main" element={<MainPage/>} />
    </Routes>
  );
}

export default App;
