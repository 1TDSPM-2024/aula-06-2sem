import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import Menu from "./routes/Menu";
import Cabecalho from "./routes/components/Cabecalho/Cabecalho";
import Rodape from "./routes/components/Rodape/Rodape";

function App() {
  return (
    <div className={styles.container}>
      <Cabecalho />
      <Menu />
      <Outlet />
      <Rodape />
    </div>
  );
}


export default App