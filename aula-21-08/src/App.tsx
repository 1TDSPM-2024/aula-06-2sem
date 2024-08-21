import { Outlet } from "react-router-dom"
import styles from './App.module.css'
import Menu from "./routers/Menu"

function App() {

  return (
    <>
      <div className={styles.container}>
        <Menu />
        <Outlet />
      </div>
    </>
  )
}

export default App
