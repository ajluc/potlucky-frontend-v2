import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { SignInUser } from '../services/Auth'

const LogIn = ({ setUser }) => {
  let navigate = useNavigate()

  const startState = {
    email: '',
    password: ''
  }

  const [formState, setFormState] = useState(startState)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formState)
    if (payload) {
      await setUser(payload)
      setFormState(startState)
      navigate('/')
    } else {
      window.alert('Incorrect Email or Password')
      setFormState({ email: formState.email, password: '' })
    }
  }

  const demoSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser({
      email: 'amayajlucas@gmail.com',
      password: 'potlucky1234'
    })
    await setUser(payload)
    navigate('/')
  }

  return (
    <div className="flex-column">
      <div className="events-container card">
        <div className="buffer">
          <form className="sign-in-box" onSubmit={handleSubmit}>
            <div className="things">
              <label htmlFor="email">Email</label>
              <input
                className="login-input"
                onChange={handleChange}
                name="email"
                type="text"
                placeholder="email"
                value={formState.email}
                required
              />
            </div>
            <div className="things">
              <label htmlFor="password">Password</label>
              <input
                className="login-input"
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="password"
                value={formState.password}
                required
              />
            </div>
            <div id="login-button">
              <button id="login-btn">Sign in!</button>
            </div>
          </form>
          <div className="new-user">
            <p id="newbie">New user?</p>
            <button id="reg-btn" onClick={() => navigate('/register')}>
              Register
            </button>
          </div>
          <div className="new-user">
            <p id="newbie">Want to take a test run?</p>
            <button id="reg-btn" onClick={demoSubmit}>
              Demo User
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogIn
