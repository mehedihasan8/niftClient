import { Outlet } from "react-router-dom";
import NavBar from "../Component/NavBar/NavBar";

const LayOut = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default LayOut;
