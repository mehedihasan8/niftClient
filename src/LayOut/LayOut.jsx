import { Outlet } from "react-router-dom";
import NavBar from "../Component/NavBar/NavBar";
import Footer from "../Component/Footer/Footer";

const LayOut = () => {
  return (
    <div>
      <NavBar />
      <main className="min-h-[calc(100vh-515px)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayOut;
