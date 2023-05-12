import React from 'react'
import './Header.css'
import { userData } from '../../utils/users';

function Header({userData, setUsers}) {
    // create state for user input
    const[country, setCountry] = React.useState('')

    const showAll = () => {
        console.log('show all')
        // set users to userData
        setUsers(userData)
    }

    const handleInput = (e) => {
        // store this in state
        setCountry(e.target.value)
    }

    const handleSearch = () => {
        console.log(country)
        // this is the data to filter on
        const newUsers = userData.filter(item => item.country.toLowerCase() === country.toLowerCase())
        console.log(newUsers)
        setUsers(newUsers)
        // clear textbox
        setCountry('')
    }

    return (
    <div className='header-container'>
        <button onClick={showAll}>Show All</button>
        <div className='search-container'>
            <input value={country} onChange={(e)=>setCountry(e.target.value)} type="text" name="" id="" placeholder='Enter country'/>
            <button onClick={handleSearch}>Search</button>
        </div>
    </div>
  )
}

export default Header