import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pen from "./pages/pen";
import NotFound from "./pages/NotFound";
import Signup from "./pages/accounts/Signup";
import Login from "./pages/accounts/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pen" element={<Pen />} />
      <Route path="/accounts/signup" element={<Signup />} />
      <Route path="/accounts/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
