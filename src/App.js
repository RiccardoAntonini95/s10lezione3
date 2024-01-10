import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MyNavBar from "./components/MyNavBar";
import MyMain from "./components/MyMain";
import TvShows from "./components/TvShows";
import MyFooter from "./components/MyFooter";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MyNavBar />
      <Routes>
        <Route path="/" element={<MyMain />} />
        <Route path="/TvShows" element={<TvShows />} />
      </Routes>
      </BrowserRouter>
      <MyFooter />
    </div>
  );
}

export default App;
