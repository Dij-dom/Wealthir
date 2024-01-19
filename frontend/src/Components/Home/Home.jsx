import React, { useEffect } from 'react';
import Header from './header';
import Details from './details';
import { useAuthContext } from '../../hooks/useAuthContext';
import IncomeDetails from './incomeDetails';
import ExpenseDetails from './expenseDetails';
import Footer from './footer';
import AddIncome from './addIncome';
import AddExpense from './addExpense';
import { useTransactionContext } from '../../hooks/useTransactionContext';

const Home = () => {
  const { transactions, dispatch } = useTransactionContext();

  const { user } = useAuthContext();

  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await fetch('http://localhost:4000/api/transactions', {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_TRANSACTIONS', payload: json })
      }
    }

    if (user) {
      fetchTransactions();
    }

  }, [dispatch, user])

  return (
    <div className="home-container">
      <Header />
      <div className="home-content">
        <Details />
        <section className="home-section2">
          <div className="mainsecSearch">
            {/*<div className="mainsecSearchleft">
              <i className="fas fa-filter fa-lg" style={{ color: '#808080' }}></i>
            </div>
            <div className="mainsecSearchmiddle">
              <input type="text" placeholder="Search..." className="search-bar" />
            </div>*/}
            <div className='mainsecSearchright'>
              <AddIncome />
              <AddExpense />
            </div>
          </div>
          <div className="mainsecContent">
            <div className="mainsecContent-left">
              <h3>Income Records</h3>
              <div className="income-records">
                {transactions && transactions.map((transaction) => (
                  transaction.type === 'Income' && (
                    <IncomeDetails key={transaction._id} transaction={transaction} />
                  )))}

              </div>

            </div>
            <div className="mainsecContent-right">
              <h3>Expense Records</h3>
              <div className="expense-records">
                {transactions && transactions.map((transaction) => (
                  transaction.type === 'Expense' && (
                    <ExpenseDetails key={transaction._id} transaction={transaction} />
                  )))}
              </div>
            </div>
          </div>

        </section>
      </div>

      <Footer />
    </div>

  );
}

export default Home;
