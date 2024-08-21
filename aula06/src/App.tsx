import Menu from "./routes/Menu";
import {Outlet} from "react-router-dom";
import styles from "./App.module.css";


function App() {
  return(
    <div className={styles.container}>
      <Menu/>
      <Outlet/>

    </div>
  );
}

export default App;