import './navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
	return (
		<div className='nav'>
			<NavLink to={"/"}>Home</NavLink>
			<NavLink to={"/about"}>About</NavLink>
			<NavLink to={"/viewpastes"}>ViewNotes</NavLink>
		</div>
	)
}

export default Navbar