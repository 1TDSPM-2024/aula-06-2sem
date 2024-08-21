import { Outlet } from "react-router-dom";
import Menu from "./rotas/Menu";
import styles from "./App.module.css"

function App() {
  

  return (
    <div className={styles.container}>
      <Menu/>
      <Outlet/>
    </div>
      
     
  )
}

export default App;
