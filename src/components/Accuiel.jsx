import React from 'react'
import { Link } from 'react-router-dom'

export default function Accuiel({countrys}) {
  return (
   <div>
    {countrys.map((c,i)=>
      <div key={i}>
        <p>click in the image to see country information</p>
       <Link to={`/${c.name.common}`}>
       <img src={c.flags['png']} alt={c.name} />
       </Link> 
        <h1>{c.name.common}</h1>
        </div>  )}
   </div>
  )
}
