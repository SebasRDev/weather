import React, { useContext, useState } from 'react'
import { AuthContext } from '../auth/authContext'

export const Home = () => {
  const {user} = useContext(AuthContext);
  const [city, setCity] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);

  
  const {user:username} = user;

  const handleCity = (e) => {
    setCity(e.target.value)
  }

  const handleSearchCity = (e) => {
    e.preventDefault();
    const recentCities = recentSearches;
    // lanzar query al api con la ciudad escrita
    if(recentCities.length >= 6){
      recentCities.pop()
    }
    recentCities.unshift(city)
    setRecentSearches(recentCities)
    setCity('')
  }

  return (
    <>
      <div className='searcher'>
        <div className="container">
          <h1>Hi {username}</h1>
          <h2>Check the weather by city</h2>
          <form onSubmit={handleSearchCity}>
            <input
              type="text"
              placeholder='Search City'
              value={city}
              onChange={handleCity}
            />
          </form>
        </div>
      </div>
      <div className='gallery__wrapper'>
        <div className="container">
          <h2>My recent searches</h2>
          <div className='gallery'>
            {recentSearches.length === 0 && <p>you dont have recent searches</p>}
            {
              recentSearches.map((city,index) => {
                return(
                  <div key={index} className="recent__city">
                    {city}
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}
