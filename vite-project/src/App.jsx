import { useState } from 'react'
import './App.css'
import Btn from "./components/Btn"
import Card from './components/Card'
import PhotoTarget from './components/PhotoTarget'
import Caract from './components/Caract'
import TextBtn from './components/TextBtn'
import Avatar from './components/Avatar'
import React from "react"
import MyMap from './components/Mymap'


function App() {

  const casa =  {
    "nombre": "Res. Chacao Es Lindo ",
    "Precio": [39.000,"39.000"],
    "ubicacion": "Chacao,Caracas",
    "habitaciones":["2 habitaaciones","1 Baño","2 Lavaderos","Sala de estar", "2 Estacionamientos"],
    "coordenadas": [10.489894, -66.860915],
    "cerca": ["2 hospitales","4 automercados","2 escuelas"],
    "imagenes":["https://imgs.search.brave.com/BTr5vJZuS332PsGEd_xZLyO3cfoupekYBqt1RFKpyeM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vb2ZpY2luYS1l/bi1jaGFjYW8tZnVu/Y2lvbmFsLXktZXF1/aXBhZGEtRF9OUV9O/UF85MDE0ODQtTUxW/NDQxODEyMzk3NTRf/MTEyMDIwLVcud2Vi/cA",
                  "https://imgs.search.brave.com/iq05_iUvw1Q8JVuvB3nOHME8eBCOVSIWDv4HjlIdcJc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWct/Y2wtMS50cm92aXQu/Y29tLzFsdHZ2YjF6/bjFPLzFsdHZ2YjF6/bjFPLjFfMTEuanBn",
                  "https://imgs.search.brave.com/Yufqilr-T-o5nXX41htPTaVdV33uGdv_WI14HOHLSlU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWdh/bnVuY2lvcy5taXR1/bGEubmV0L3ZlbmRv/X2Nhc2FfMTA4MG0y/XzExaDE0YjhwX2Fs/dGFtaXJhX25vcnRl/XzQxNjAwOTk2NjQw/MjMzMTA5NjYuanBn",
              "https://imgs.search.brave.com/Yufqilr-T-o5nXX41htPTaVdV33uGdv_WI14HOHLSlU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWdh/bnVuY2lvcy5taXR1/bGEubmV0L3ZlbmRv/X2Nhc2FfMTA4MG0y/XzExaDE0YjhwX2Fs/dGFtaXJhX25vcnRl/XzQxNjAwOTk2NjQw/MjMzMTA5NjYuanBn",
              "https://imgs.search.brave.com/Yufqilr-T-o5nXX41htPTaVdV33uGdv_WI14HOHLSlU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWdh/bnVuY2lvcy5taXR1/bGEubmV0L3ZlbmRv/X2Nhc2FfMTA4MG0y/XzExaDE0YjhwX2Fs/dGFtaXJhX25vcnRl/XzQxNjAwOTk2NjQw/MjMzMTA5NjYuanBn"
          ],
    "perfil":"https://imgs.search.brave.com/pvFlp82G3fu6tRrrBZ4niz92sL-YEW7ljggA3KPQp-k/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by91/c2VyLXByb2ZpbGUt/aWNvbi1mcm9udC1z/aWRlXzE4NzI5OS0z/OTU5Ni5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw",
    "Agente":"Anderson"  ,
     "direccion": "Av.Simon Bolivar 13, Res. Chacao, Chacao, Caracas"   
  };

  /* carrusel funcionamiento*/
   const imagenes= casa.imagenes
   const contImg= casa.imagenes.length - 3 ;
   function photoNumber() {

  return(
    <p   className='relative  border-solid border-4 border-white -mt-14 rounded-2xl text-2xl flex-col w-full h-full text-center align-bottom relative block text-white  bg-slate-700 opacity-90 py-2' >+{contImg}</p> 
  )
  
   }    
   const [state, setstate] = useState(0)
   const imagen = imagenes[state];
   console.log (imagen)
  /* carrusel funcionamiento*/

 
  /* Botones iconos-strings*/
    function Up() {
    return (
      <div className=' flex justify-center drop-shadow-2xl aling-center w-max h-max'>
       <svg className='m-2.5' xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 8l-5-5-5 5M12 4.2v10.3"/></svg>
      </div>
    )
   }
   function Back() {
    return (
      <div className=' flex drop-shadow-2xl justify-center aling-center w-max h-max'>
        <svg className='m-2.5' xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
      </div>
    )
   }
    function Fav() {
  return (
    <div  className=' drop-shadow-2xl flex justify-center aling-center w-max h-max bg-lime-400 rounded-full drop-shadow-2xl' >
   <svg className="m-3 ml-2,5" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
  </div>
  )

   }
   
   function Pin() {
    return (
      <div  className=' flex justify-center aling-center w-max h-max bg-lime-400 rounded-full drop-shadow-2xl' >
     <img className='w-8 h-8' src="https://imgs.search.brave.com/0SrO0pb6ofi5_A88r4doePX6Y7BAhb01bLsyUEdGyi0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/MzQ1MTQ3MS92ZWN0/b3IvbWFwLXBpbi12/ZWN0b3ItZ2x5cGgt/aWNvbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9d3VXVmVI/dXRoTkFYempPTzVf/Vlk5U1VPZC02Y3h3/cFZIOFZWZmg2WTdM/Yz0" alt="" srcset="" />


    </div>
    )
  
     }
     function Pin2() {
      return (
        <div  className=' flex justify-center aling-center bg-slate-300 w-max h-max bg-lime-400 rounded-full drop-shadow-xl' >
       <img className='w-20 rounded-full h-20' src="https://imgs.search.brave.com/0SrO0pb6ofi5_A88r4doePX6Y7BAhb01bLsyUEdGyi0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/MzQ1MTQ3MS92ZWN0/b3IvbWFwLXBpbi12/ZWN0b3ItZ2x5cGgt/aWNvbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9d3VXVmVI/dXRoTkFYempPTzVf/Vlk5U1VPZC02Y3h3/cFZIOFZWZmg2WTdM/Yz0" alt="" srcset="" />
  
  
      </div>
      )
    
       }
 
   function I360() {
      return (
        <div  className=' bg-slate-200 flex justify-center aling-center w-20 h-20 items-center -mt-4 rounded-full drop-shadow-2xl' >
       <img className='w- 8 h-8' src="https://imgs.search.brave.com/jyzHronA6sF8AojKcNAD7A7MqRaEZZVWQqQDujLZFBg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjEvMzYw/LVBORy5wbmc" alt="" srcset="" />
         
     
      </div>
      )
    
       }
    
   function Bed() {
    return (
      <div  className=' flex justify-center aling-center w-8 h-8 items-center -mt-4 rounded-full mt-2 mr-2' >
     <img className='w-6 h-6' src="https://img.icons8.com/?size=100&id=59736&format=png&color=40C057" alt="" srcset="" />
       
   
    </div>
    )
  
     }
  function Bathroom() {
      return (
        <div  className=' flex justify-center aling-center w-8 h-8 items-center -mt-4 rounded-full mt-2 mr-2' >
       <img className='w-6 h-6' src="https://img.icons8.com/?size=100&id=5qFBnctChIMS&format=png&color=40C057" alt="" srcset="" />
         
     
      </div>
      )
    
       }
  function wash() {
        return (
          <div  className=' flex justify-center aling-center w-8 h-8 items-center -mt-4 rounded-full mt-2 mr-2' >
         <img className='w-6 h-6' src="https://img.icons8.com/?size=100&id=JZfSzZCKtDU6&format=png&color=40C057" alt="" srcset="" />
           
       
        </div>
        )
      
         }
  function sala() {
          return (
            <div  className=' flex justify-center aling-center w-8 h-8 items-center -mt-4 rounded-full mt-2 mr-2' >
           <img className='w-6 h-6' src="https://img.icons8.com/?size=100&id=CjQTITr242oN&format=png&color=40C057" alt="" srcset="" />
             
         
          </div>
          )
        
           }
           
  function parking() {
          return (
              <div  className=' flex justify-center aling-center w-8 h-8 items-center  -mt-4 rounded-full mt-2 mr-2' >
             <img className='w-6 h-6' src="https://img.icons8.com/?size=100&id=wkVBUTUD2a51&format=png&color=40C057" alt="" srcset="" />
               
           
            </div>
            )
          
             }
             
        
     
    function Apartamento() {
   return(
    <p className='text-white text-xs w-fit h-12 text-center py-4 px-8 rounded-3xl  bg-sky-900'>Apartamento</p>
   )
   }
   function Ofertar() {
    return(
     <p className='  drop-shadow-3xl  text-white text-sm uppercase bg-lime-500 w-28 h-16 text-center pt-6 py-4  px-8 rounded-3xl'>Ofertar</p>
    )
    }


  /* Botones iconos-strings*/


  return (
    <>
     
 <div className='flex justify-center'>
  <div className="  bg-white fit-content ml-8 max-w-screen my-12  md:max-w-[500px] h-full">
     <div className='relative flex mt-16'>
       <div className='w-1/2 ml-12'>
        <Btn icon={Back()}/>
       </div>
        <div className='w-1/2 flex  justify-end mr-6'>
         <Btn icon={Up()}/>
        <div className='-mb-44 flex-col mr-8 w-16 flex-col block'> 
         <Btn icon={Fav()}/>
         <section className='pt-16 w-16'>
         <PhotoTarget 
           gallery={ function change2() {
         setstate(0)
              }
            } 
           img={casa.imagenes[0]}/>
        <PhotoTarget 
           gallery={ function change2() {
         setstate(1)
              }
            } 
           img={casa.imagenes[1]}/>
        <PhotoTarget 
           number= {photoNumber()}
            gallery={ function change3() {
      console.log(contImg)
      if (state >= casa.imagenes.length -1) {
        setstate(2)
        console.log(state)
       }
      else{
        setstate(state+ 1)
        console.log(state)
           }  }
            } 
           img={casa.imagenes[3]}/>
           </section>
           </div>
       </div>   
    </div >
    <div className='block -mt-56'>
      <Card  img = {imagen}/>
    
    <div className='-mt-28 ml-12 flex-col  flex-col block'>

    <TextBtn
        icon= {Apartamento()}/>
   </div>
  

     
     
</div>
   
   <div className='w-full mt-12'> 
     <div className='w-full flex arround text-2xl mt-8 justify-start ml-10'>
      <p className='font-bold text-3xl'>{casa.nombre}${casa.Precio[1]}</p>
      </div>
      <div className='-mt-4 flex items-center ml-8'>
      <Btn icon= {Pin()}/> <p>{casa.ubicacion}</p>
      </div>
    
    <div className='flex justify-between px-8 m-2 border-b-2'>
    <TextBtn icon={Ofertar()}/>
      <Btn icon= {I360()}/>
    </div>

    <div className='flex justify-center'>
      <Avatar perfil={casa.perfil} name={casa.Agente}/>
      </div>
      <div>
       
        <div  className='mx-12 mt-12 flex flex-wrap justify-start'>
          
       <Caract icon={Bed()} texto={casa.habitaciones[0]}/>
       <Caract icon={Bathroom()} texto={casa.habitaciones[1]}/>
       <Caract icon = {wash()} texto={casa.habitaciones[2]}/>
       <Caract icon={sala()} texto={casa.habitaciones[3]}/>
       <Caract icon= {parking()}texto={casa.habitaciones[4]}/>
       </div>

       <div className='mx-8'>
        <h1 className='font-bold text-3xl'> Ubicacion y al rededor</h1>
       </div>

       <div className='flex  drop-shadow-2xl items-center border-solid border-4 w-fit m-12 border-gray-200 rounded-xl m'>
       <Btn icon={Pin2()}/>
       <p className='text-2xl text-gray-500'>{casa.direccion}</p>

       </div>
       <div className='mx-12 mt-12 flex flex-wrap justify-start'>
       <Caract  texto={casa.cerca[0]}/>
       <Caract texto={casa.cerca[1]}/>
       <Caract  texto={casa.cerca[2]}/>
       </div>
       <div className=' m-12 rounded-b-xl h-320 justify-center bg-slate-200  '>
        <MyMap coordenadas ={casa.coordenadas}/>
        <p className='text-lg text-center p-4 text-slate-700'>Ver en el mapa</p>
       </div>
      </div>
    </div>


</div>

      

   
   
     
      
     
      
     
      
   </div>
   
  
      
    
  </>
  )
}

export default App
