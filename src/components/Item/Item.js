import React from 'react'
import './Item.css'

const Item = ({value}) => {
  return (
    <div className='item'>
      <div className='name'>{value.name.first} {value.name.last}</div>
      <div className='email'>{value.email}</div>
      <img className='img' src={value.picture.medium} alt="user image" />
    </div>
  )
}

export default Item