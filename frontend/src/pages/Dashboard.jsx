import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/login");
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <h1>University Club Management System</h1>

      <h2>Dashboard</h2>

      <p>Welcome! You are logged in.</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;