import "./App.css";
import NewsPage from "./pages/NewsPage";
import AuthPage from "./pages/AuthPage";
import AuthResultPage from "./pages/AuthResultPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/news" element={<NewsPage />}></Route>
          <Route path="/" element={<AuthPage />}></Route>
          <Route path="/authResult" element={<AuthResultPage />}></Route>
          <Route path="/main" element={<MainPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
