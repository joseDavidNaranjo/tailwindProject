import React from 'react'

function PhotoTarget(props) {
  


  return (
    <button onClick={props.gallery} className='w-14 h-14 m-2 border-solid border-white rounded-2xl ' > 
      <img className="relative w-full h-full m-0 border-solid border-4 border-white rounded-2xl" src={props.img} alt="" srcset="" />
       {props.number}
    </button>
  )
}

export default PhotoTarget
