import Header from "../components/common/Header";
import UserWelcome from "../components/common/UserWelcome";
import QuizMain from "../components/quiz/QuizMain";
import useToken from "../hooks/useToken";

export default function HomePage() {
  const token = useToken();

  return (
    <div className="container mx-auto py-3">
      <Header />
      {token && <UserWelcome />}
      <QuizMain />
    </div>
  );
}
