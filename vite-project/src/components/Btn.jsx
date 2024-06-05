import React from 'react'
import Back from './icon/Back'
import Up from './icon/Up'
import Fav from './icon/Fav'

function Btn(props) {
  return (
    <div onClick={props.click} className=' m-3 drop-shadow-2xl cursor-pointer bg-white opacity-80 rounded-full w-fit h-fit justify-center items-center relative' >
     {props.icon}
    </div>
  )
}

export default Btn
