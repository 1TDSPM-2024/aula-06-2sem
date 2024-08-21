import { Outlet } from "react-router-dom";
import Menu from "./routes/Menu/index";

export default function App(){
  return (
    <div>
      <Menu/>
      <Outlet/>
    </div>
  )
}