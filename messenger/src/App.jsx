import MainPage from "../src/pages/MainPage";
import LoginPage from "../src/pages/LoginPage";
import { Route, Routes } from "react-router-dom";
import { Path } from "../src/utills/constants";

function App() {
  return (
    <>
      <Routes>
        <Route path={Path.Home} element={<LoginPage />} />
        <Route path={Path.Chat} element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
