import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import Menu from "./routes/Menu";

function App() {
  return (
    <div className={styles.container}>
      <Menu />
      <Outlet />

    </div>
  );
}

export default App;