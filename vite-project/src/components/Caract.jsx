import React from 'react'

function Caract(props) {
  
  return (
    
    <button onClick={props.click} className=' p-5  m-3 flex drop-shadow-2xl cursor-pointer bg-slate-200 opacity-80 rounded-full w-fit h-fit p-4 justify-center items-center relative' >
      {props.icon}
     <p className='text-xl' >{props.num}   {props.texto}</p>
    </button>

  
  )
}

export default Caract
