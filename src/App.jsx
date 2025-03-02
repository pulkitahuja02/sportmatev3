import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./pages/MyProfile";  // ✅ Import MyProfile

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/MyProfile" element={<MyProfile />} />  {/* ✅ Add Route */}
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;

