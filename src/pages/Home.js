import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { update } from '../features/user/userSlice'

const Home = () => {
  const user = useSelector((state) => state.user.value)
  const dispatch = useDispatch()

  const startState = {
    email: '',
    id: '1'
  }

  const [formState, setFormState] = useState(startState)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(update({ email: formState.email, id: '4' }))
    console.log(formState.email)
  }

  return (
    <div>
      <p>Home</p>
      <p>{user?.email}</p>
      <p>id #{user?.id}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          name="email"
          type="text"
          onChange={handleChange}
          placeholder="email"
          value={formState.email}
          required
        />
        <button>Update email</button>
      </form>
    </div>
  )
}

export default Home
