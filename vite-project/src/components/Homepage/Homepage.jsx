import React from 'react'
import './Homepage.css'
import PersonCard from '../PersonCard/PersonCard'
import { userData } from '../../utils/users'

function Hompage({users}) {
  return (
    <div className='homepage-container'>
      <h1>User Directory</h1>
      <div className='person-container'>
        {
          users.map(item => <PersonCard person={item}/>)
        }
      </div>
    </div>
  )
}

export default Hompage