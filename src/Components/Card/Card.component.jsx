import React from 'react'
import './Card.styles.css'

export default function Card(props) {
  return (
  <div className='card-container'>
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=400x400`} alt="" />
        <h1>{props.monster.name}</h1>
  </div>
  )
}
