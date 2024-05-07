import '../App.css'
import React from 'react'


function View(props){
   return(
      <div className='viewImg'>
         <img src={props.img} alt='MemoRandomImg' />
        </div>
   )
}

export default View