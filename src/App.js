import { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/authContext";
import { authReducer } from "./auth/authReducer";
import { SetUser } from "./components/SetUser";

const init = ()=>{
  // return JSON.parse(localStorage.getItem('user')) || {user: 'guest'}
  return JSON.parse(localStorage.getItem('user'))
}

function App() {
  const [user, dispatch] = useReducer(authReducer, {}, init)
  console.log(user)

  useEffect(() => {
    if(!user) return;
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])
  


  return (
    <div className="App">
      <AuthContext.Provider value={{
          user, 
          dispatch
        }}
      >
        {!user
          ? <SetUser />
          : <h1>Weather App</h1>
        }
      </AuthContext.Provider>
    </div>
  );
}

export default App;
