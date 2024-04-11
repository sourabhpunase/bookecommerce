import React from 'react'
import './brands.css'
import { brandsData } from '../Navbar/Data'
export const Brands = () => {
  return (
    <div className='brands'>
        <div className="container brands-container">

{
    brandsData.map(({img},index)=>{

        return (
            <div className="brand">
<img src={img} alt='brand'/>

            </div>
        )
    })
}
        </div>

    </div>
  )
}
