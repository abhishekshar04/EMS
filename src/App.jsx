import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthProvider.jsx";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage.jsx";

// setLocalStorage();
// getLocalStorage();
function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const userData = useContext(AuthContext);
  console.log(userData);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    const storedUserData = localStorage.getItem("loggedInUserData");

    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }

    if (storedUserData) {
      setLoggedInUserData(JSON.parse(storedUserData));
    }
  }, []);

  const handleLogin = (email, password) => {
    const { employees, admin } = userData;

    const employeeUser = employees.employees.find(
      (employee) => employee.email === email && employee.password === password
    );
    console.log(employeeUser)

    if (userData.admin.email === email && userData.admin.password === password) {
      const loggedInUser = { role: "admin", email };
      setLoggedInUserData(userData.admin);
      setUser(loggedInUser);
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
      localStorage.setItem("loggedInUserData", JSON.stringify(userData.admin));
      return;
    }

    if (employeeUser) {
      const loggedInUser = { role: "employee", email };
      setLoggedInUserData(employeeUser);
      setUser(loggedInUser);
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
      localStorage.setItem("loggedInUserData", JSON.stringify(employeeUser));
      return;
    }

    console.log("Invalid login credentials");
  };

  return (
    <>
      {user?.role === "admin" ? <AdminDashboard /> : ""}
      {user?.role === "employee" ? <EmployeeDashboard loggedInUserData={loggedInUserData} /> : ""}
      {!user ? <Login handleLogin={handleLogin} /> : ""}
    </>
  );
}

export default App;
