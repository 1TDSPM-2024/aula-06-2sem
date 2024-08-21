import { Outlet } from "react-router-dom";
import style from "./App.module.css";
import Menu from "./routes/Menu";

function App() {
  return (
    <div className={style.container}>
      <Menu />
      <Outlet />
    </div>
  );
}
export default App;