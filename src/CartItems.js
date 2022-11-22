import axios from "axios";
import { Formik, useFormik } from "formik";
import React, { useContext, useState } from "react";
import { UserContext } from "./Context";
import { Config } from './Config';
import Calender from "./Calender";


function CartItems() {
  const cartitems = useContext(UserContext);
  let a = cartitems.CartItems;
  let addItems = (id) => {
    console.log(id);
    let index = a.findIndex((cart) => cart._id == id);
    console.log(index);
    if (a[index].quantity != 5) {
      a[index].quantity += 1;
    }
    cartitems.setCartItems([...a]);
  };
  let removeItems = (id) => {
    console.log(id);
    let index = a.findIndex((cart) => cart._id == id);
    console.log(index);
    if (a[index].quantity != 0) {
      a[index].quantity = a[index].quantity - 1;
    }
    cartitems.setCartItems([...a]);
  };
  // console.log(cartitems);

  var total = cartitems.CartItems.reduce((acc, curr) => {
    return (acc = acc + curr.price * curr.quantity);
  }, 0);
  

  return (
    <div className="container">
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">price</th>
            <th scope="col">days</th>
            <th scope="col">Total Hours</th>
            <th scope="col">quantity</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {cartitems.CartItems.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <Calender id={item._id} ></Calender>
                </td>
                <td>{item.hours}</td>
                <td>
                  <button
                    className="me-3 btn btn-warning"
                    onClick={() => {
                      addItems(item._id);
                    }}
                  >
                    +
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="ml-3 btn btn-warning"
                    onClick={() => {
                      removeItems(item._id);
                    }}
                  >
                    -
                  </button>
                </td>
                <td>{item.price * item.quantity*item.hours}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h3>Total Rs = {total}</h3>
      <button className="btn btn-warning">Place Order</button>
    </div>
  );
}

export default CartItems;
