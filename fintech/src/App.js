import "./App.css";
import NewsPage from "./pages/NewsPage";
import AuthPage from "./pages/AuthPage";
import AuthResultPage from "./pages/AuthResultPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import BalacePage from "./pages/BalancePage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/news" element={<NewsPage />}></Route>
          <Route path="/" element={<AuthPage />}></Route>
          <Route path="/authResult" element={<AuthResultPage />}></Route>
          <Route path="/main" element={<MainPage />}></Route>
          <Route path="/balance" element={<BalacePage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
