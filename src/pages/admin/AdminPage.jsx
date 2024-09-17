import React from 'react'


//const productFields = {
//  product : "",
//  description : "",
//  price : ""
//}


export const AdminPage = () => {
  return (
    <>
    <div className="container d-flex flex-row">
      <form>
        <input type="text" placeholder='name'/>
        <input type="text" placeholder='description'/>
        <input type="number" placeholder='price'/>
        <input type="submit" placeholder='enter' />
      </form>
    </div>
      
    </>
  )
}
