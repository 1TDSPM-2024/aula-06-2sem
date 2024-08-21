import { Outlet } from "react-router-dom";
import Menu from "./routes/Menu";
import styles from "/src/App.module.css";

export default function App() {
  return (
    <div className={styles.container}>
      <Menu/>
      <Outlet/>
    </div>
  );
}
