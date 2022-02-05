import "./settings/firebaseConfig";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NotFound } from "./components/NotFound";
import { Register } from "./components/Register";
import { AuthRoute } from "./components/AuthRoute";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./settings/firebaseConfig";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
      } else {
        console.log("nikogo nie ma...");
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AuthRoute>
              <Home />
            </AuthRoute>
          }
        />

        <Route path="/logowanie" element={<Login />} />
        <Route path="/rejestracja" element={<Register />} />
        <Route path="/wylogowano" element={<Logout />} />
        <Route path="/oddaj-rzeczy" element={<Form />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
