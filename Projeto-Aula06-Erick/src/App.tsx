import { Outlet } from "react-router-dom";
import Menu from "./routes/Menu/index";
import styles from "./App.module.css"
import Footer from "./components/rodape/Footer";

export default function App(){
  return (
    <div className={styles.container}>
      <Menu/>
      <Outlet/>
      <Footer/>
    </div>
  )
}