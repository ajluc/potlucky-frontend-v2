import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Log In</Link>
        <Link to="/newevent">New Event</Link>
      </nav>
    </div>
  )
}

export default NavBar
