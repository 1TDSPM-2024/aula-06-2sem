import { Outlet } from "react-router-dom";
import Menu from "./routes/Menu";
import styles from "./App.module.css";

function App() {
    return(
    <div className= {styles.container}>
        <Menu />
        <Outlet />
    </div>
);
}

export default App