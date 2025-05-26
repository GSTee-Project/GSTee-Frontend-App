import { Outlet } from "react-router-dom"
import Navbar from "../../ui/guestNavbar/navbar"


const GuestLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default GuestLayout