import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Detailscountry({countrys}) {
    const {name}=useParams();
    const c = countrys.find(c=>c.name.common==name)
  return (
    <div>
    
      <div>
        <img src={c.flags['png']} alt={c.name} />
        <h1>{c.name.common}</h1>
        <h1>capital : {c.capital}</h1>
        <h1> region {c.region}</h1>
        <p>population {c.population}</p>
        </div>

<Link to={'/'}>Return to countrys page (home page )</Link>
    </div>
  )
}
