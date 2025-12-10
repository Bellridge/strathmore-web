import { Route, Routes } from "react-router-dom";
import ErrorPage from "./Containers/ErrorPage/ErrorPage";
import HomePage from "./Pages/HomePage";
import ServicesPage from "./Pages/ServicesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
