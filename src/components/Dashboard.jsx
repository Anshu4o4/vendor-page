import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    onLogout();
    navigate("/");
  };

  const products = [
    { id: 1, name: "Wine Glass", price: "₹500" },
    { id: 2, name: "Water Glass", price: "₹300" },
    { id: 3, name: "Glass Vase", price: "₹800" },
  ];

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-left">
          <h2 style={{ fontSize: "20px", color: "#1e293b" }}>
            Glazzarto Admin
          </h2>
        </div>

        <div
          className="header-right"
          style={{ display: "flex", alignItems: "center", gap: "15px" }}
        >
          <span style={{ color: "#64748b", fontSize: "14px" }}>
            Anshu (Vendor)
          </span>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>

      
      <div className="cards">
        <div className="card">
          <p>Total Products</p>
          <h3>12</h3>
        </div>
        <div className="card">
          <p>Orders</p>
          <h3>8</h3>
        </div>
        <div className="card">
          <p>Revenue</p>
          <h3>₹15,000</h3>
        </div>
      </div>

      
      <div className="products">
        <h3 style={{ marginBottom: "20px" }}>Product Inventory</h3>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h4>{product.name}</h4>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
