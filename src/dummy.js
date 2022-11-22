import React from 'react'

function Cart({ CartItems, removeCart,NumOfItems,addItems,removeItems }) {
    return (
       <>
       {
        CartItems.length === 0 ? "No Items in Cart" :
       <>

            <ol className="list-group list-group-numbered">
                {
                    CartItems.map((item) => {
                        return <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">{item.name}</div>
                                Rs:{item.price}
                            </div>
                            <span>
                                <button onClick={()=>{
                                
                                    addItems(item)}}>+</button>
                                <span>{item.quantity}</span>
                                <button className="me-3" onClick={()=>{
                                    removeItems(item)}}>-</button>
                                </span>
                            <span onClick={() => {
                                removeCart(item);
                            }} className="badge bg-primary rounded-pill">X</span>
                        </li>
                    })
                }

            </ol>
            <h3>Total Rs= {
                CartItems.reduce((acc, cur) => {
                    return acc = acc + (cur.price * cur.quantity)
                }, 0)

            }</h3>

        </>
       }
       </>
    )
}

export default Cart