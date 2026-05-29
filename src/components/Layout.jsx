import "./layout.css"
import { Outlet } from "react-router-dom"
import Navbar from './Navbar.jsx'

const Layout = () => {
    return (
        <>
            <h1 className="main-heading">
                <span>Notes</span>Vault
            <Navbar />
            </h1>
            <div className="childdiv">
                <Outlet/>
            </div>
        </>
    )
}

export default Layout