import React from 'react'
import PhotoTarget from './PhotoTarget'
function Card(props) {
  return (
    <div className=' w-full   -mt-20 m-2 border-white fit-content rounded-3xl p-6 ' >
     <img onClick={props.change} className=' w-full h-96 border-white rounded-3xl ' src={props.img} alt="" srcset="" />
     <div>
     
      
     </div>
    </div>
  )
}

export default Card
