import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import Transactions from '../components/Transactions'

function Transactionlist() {
  const {transactions}=useContext(GlobalContext)
  console.log(transactions);
    return (
        <>
              <h3>History</h3>
      <ul id="list" className="list">
         {transactions.map((transactions)=>( 
    <Transactions key={transactions.id} transactions={transactions}/>
         ))}
        
      </ul>
        </>
    )
}

export default Transactionlist
