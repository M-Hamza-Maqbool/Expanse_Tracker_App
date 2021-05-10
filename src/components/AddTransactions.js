import React, {useState,useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

function AddTransactions() {

    const [text,setext] = useState()
    const [amount,setamount] = useState(0)


    const { addTransaction }=useContext(GlobalContext)

const onSubmit=(e)=>  {
       e.preventDefault();
       const newTransaction={
         id:Math.floor(Math.random()*10000)
         ,text,amount:+amount
       }
       addTransaction(newTransaction);
}

    return (

        <>
        <h3>Add new transaction</h3>
      <form id="form" onSubmit={ onSubmit }>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" placeholder="Enter text..." value={text} onChange={(e)=>{
              setext(e.target.value)
          }} />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br />
            (negative - expense, positive - income)</label>
          <input type="number" id="amount" placeholder="Enter amount..."  value={amount} 
          onChange={(e)=>{
            setamount(e.target.value)
        }}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
    )
}

export default AddTransactions
