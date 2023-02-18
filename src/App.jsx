import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pen from "./pages/pen";
import NotFound from "./pages/NotFound";
import Signup from "./pages/accounts/Signup";
import ForgotPassword from "./pages/accounts/Forgot";
import Login from "./pages/accounts/Login";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/pen" element={<Pen />} />
      <Route exact path="/accounts/signup" element={<Signup />} />
      <Route exact path="/accounts/login" element={<Login />} />
      <Route
        exact
        path="/accounts/forgot-password"
        element={<ForgotPassword />}
      />
      <Route exact path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
