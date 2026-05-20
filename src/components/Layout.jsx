import "./layout.css"
import { Outlet } from "react-router-dom"
import Navbar from './Navbar.jsx'
const Layout = () => {
    return (
        <>
            <Navbar />
            <div className="childdiv">
                <Outlet/>
            </div>
        </>
    )
}

export default Layout