import { Outlet } from "react-router-dom";
import Header from "./header/Header";
const Layout: React.FC = () => {
  return (
    <div className="container">
      {/* main top header */}
      <Header />
      <main style={{ padding: "32px 104px", marginTop: 100 }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
