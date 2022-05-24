import '../styles/components/setUser.css'
import { useContext, useState } from 'react'
import { AuthContext } from '../auth/authContext'
import { Types } from '../types/types'

export const SetUser = () => {
  const {dispatch} = useContext(AuthContext)
  const [user, setUser] = useState('')

  const handleUser = (e) => {
    setUser(e.target.value)
  }

  const handleSaveUser = (e) => {
    e.preventDefault();
    dispatch({
      type: Types.login,
      payload: {
        user
      }
    })
    // localStorage.setItem('user', user)
    
  }

  return (
    <div className="setuser__wrapper">
      <h1>Hi! welcome <br/> what's your name?</h1>
      <form onSubmit={handleSaveUser}>
        <input
          placeholder="Mathew"
          value={user}
          onChange={handleUser}
        />
      </form>
    </div>
  )
}
