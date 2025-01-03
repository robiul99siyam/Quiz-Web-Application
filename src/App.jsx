import { Route, Routes } from "react-router-dom";
import DeshBoard from "./components/admin/DeshBoard";
import Quiz from "./components/quiz/Quiz";
import HomePage from "./pages/HomePage";
import LeaderBoardPage from "./pages/LeaderBoardPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PrivateRoute from "./routes/PrivateRoutes";

export default function App() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/leaderBoard" element={<LeaderBoardPage />} />
        <Route path="/DeshBoard" element={<DeshBoard />} />
        <Route path="/quiz" element={<Quiz />} />
        {/* <Route path="/quiz" element={<Quiz />} /> */}
      </Route>
      <Route path="/" element={<HomePage />} exact />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}
