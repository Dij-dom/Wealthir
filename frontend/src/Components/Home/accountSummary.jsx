import React, { useState, useEffect } from 'react';
import {useAuthContext} from '../../hooks/useAuthContext'

const MainDashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [balance, setBalance] = useState(0);
  const { user } = useAuthContext();

  useEffect(() => {
    // Fetch transactions from the server and calculate totals
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/transactions', {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
       // Adjust the API endpoint
        const fetchedTransactions = await response.json();
        console.log(fetchedTransactions);

        const incomeTotal = fetchedTransactions
          .filter(transaction => transaction.type === 'Income')
          .reduce((total, transaction) => total + transaction.amount, 0);

        const expenseTotal = fetchedTransactions
          .filter(transaction => transaction.type === 'Expense')
          .reduce((total, transaction) => total + transaction.amount, 0);

        setTransactions(fetchedTransactions);
        setTotalIncome(incomeTotal);
        setTotalExpense(expenseTotal);
        setBalance(incomeTotal - expenseTotal);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Run the effect once on component mount


  return (
    <div className='check'>
       <h3 style={{ marginBottom: '15px'}}>Account Summary</h3>
          <p style={{ marginBottom: '10px' }}>Total Income: ₹{totalIncome} <span>{/* Add total income value here */}</span></p>
          <p style={{ marginBottom: '10px'}}>Total Expense: ₹{totalExpense} <span>{/* Add total expense value here */}</span></p>
          <p style={{ marginBottom: '0' }} className={balance < 0 ? 'nbal' : balance > 0 ? 'pbal' : 'dcol'}>Total Balance:₹{balance} <span>{/* Add total balance value here */}</span></p>
    </div>
  );
};

export default MainDashboard;
