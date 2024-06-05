import React from 'react'

function Avatar(props) {
  return (
    <div>
      
      
<div className="w-96 rounded-xl justify-center ml-2 h-24 flex items-center gap-4 opacity-70 bg-slate-200 mt-6">
   <img className=' w-10 h-10 rounded-full' src={props.perfil} alt="" srcset="" />
    <div class="font-medium dark:text-black">
        <p className='text-xl'>{props.name}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">Agente inmobilario</p>    
    </div>
    <img className='  w-10 h-10 rounded-full' src='https://imgs.search.brave.com/HFuaJI7DSEIu29y82Y_Z2Vam3CwFDul1ocYvrdZo8uI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudmV4ZWxzLmNv/bS9tZWRpYS91c2Vy/cy8zLzEzNjM5Ny9p/c29sYXRlZC9wcmV2/aWV3LzM3NWUwZTc4/NGExNjIzNTE3Yjc1/ZWE2MWJjMWRiNTU1/LWljb25vLWRlLW1l/bnNhamUtYmFzaWNv/LnBuZw' alt="" srcset="" />
</div>


    </div>
  )
}

export default Avatar
