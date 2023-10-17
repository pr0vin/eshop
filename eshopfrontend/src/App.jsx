import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./auth/Login";
import Index from "./pages/Index";
import Help from "./pages/Help";
import Register from "./auth/Register";
import authIndex from "./auth/authIndex";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Index}>
          <Route path="" index Component={Home} />
          <Route path="help" Component={Help} />
        </Route>

        <Route path="/auth/*" Component={authIndex}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
