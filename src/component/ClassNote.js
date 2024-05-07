import '../App.css'
import React from "react";

function ClassNote() {
   const [contact, setContact] = React.useState({
      firstName: "Shabs",
      lastName: "Doe",
      phone: "+1 (719) 555-1212",
      email: "itsmyrealname@example.com",
      isFavorite: false
   })

   // console.log(contact);

   let starIcon = contact.isFavorite ? `https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-star-vector-icon-png-image_696411.jpg` : `https://www.pngitem.com/pimgs/m/124-1240811_transparent-star-icon-png-empty-star-icon-png.png`
    
   function toggleFavorite() {
      // console.log("Toggle Favorite")
      setContact(preState => {
         return {
            ...preState,
            isFavorite: !preState.isFavorite
         }
      })
   }
    
   return (
      <main>
         <article className="card">
            <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?semt=ais_hybrid" className="card--image" alt='user-img'/>
            <div className="card--info">
               <img 
                  src={starIcon} 
                  alt='star-icon'
                  className="card--favorite"
                  onClick={toggleFavorite}
               />
               <h2 className="card--name">
                  {contact.firstName} {contact.lastName}
               </h2>
               <p className="card--contact">{contact.phone}</p>
               <p className="card--contact">{contact.email}</p>
            </div>
                
         </article>
      </main>
   )
}


export default ClassNote