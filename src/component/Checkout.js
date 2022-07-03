import React from 'react'
import { FaCodeBranch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Checkout = () => {
  const state = useSelector((state) => state.handleCart)
  var total = 0;
  const itemList = (item) => {
    total = total + item.price;
    return (

      <li className="list-group-item d-flex justify-content-between ">

        <h6 className="my-0">{item.title}</h6>

        <span className="text-muted">${item.price}</span>
      </li>

    );
  }

  
  return (
    <>
      
      {/* <div className='container-fluid w-25 m-5 float-end'>
        <h4 className="list-group-item d-flex  justify-content-between mb-3">
          <span className="text-primary ">Your cart</span>
          <span className="badge bg-primary rounded-pill ">{state.length}</span>
        </h4>
        <ul className="list-group list-group-flush w-100 mb-3">
          {state.map(itemList)}

          <li className="list-group-item d-flex justify-content-between">
            <span>Total (INR)</span>
            <strong>${total}</strong>
          </li>
        </ul>

        <form className="card ms-2 p-2  w-100">
          <div className="input-group ">
            <input type="text" className="form-control" placeholder="Promo Code" />
            <button type="submit" className="btn btn-secondary">Redeem</button>
          </div>
        </form>

      </div> */}
      <center>
        <h1 className='m-5'><FaCodeBranch/>Development process is on</h1>
      </center>
    </>
  )
}

export default Checkout;