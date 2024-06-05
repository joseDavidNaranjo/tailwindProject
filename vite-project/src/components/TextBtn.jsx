import React from 'react'

function TextBtn(props) {
  return (
  
          <div onClick={props.click} className=' m-3 flex items-center p-4  drop-shadow-2xl cursor-pointer rounded-full w-fit h-12 justify-center items-center relative' >
     {props.icon}
    </div>
   
  )
}

export default TextBtn
