import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./Contexts/AuthProvider";
import Home from "./pages/Home/Home";
import Navigation from "./pages/Navigation/Navigation";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={
              <Home/>
          } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
