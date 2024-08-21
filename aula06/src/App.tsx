import { Outlet } from "react-router-dom";
import Menu from "./routes/Menu";
import Rodape from "./components/Rodape/Rodape";
import styles from "./App.module.css";

export default function App(){
    return(
        <div className={styles.container}>
            <Menu/>
            <Outlet/>
            <Rodape/>
        </div>
    );
}
