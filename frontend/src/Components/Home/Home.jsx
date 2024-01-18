import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
//import './home.css';
import Header from './header';
import Details from './details';
import { useAuthContext } from '../../hooks/useAuthContext';
import IncomeDetails from './incomeDetails';

const Home = () => {
  const [isIncomeModalVisible, setIncomeModalVisible] = useState(false);
  const [transactions, setTransactions] = useState(null);

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
        setTransactions(json);
      }
    }

    if (user) {
      fetchTransactions();
    }

  }, [])


  /*
    const showIncomeModal = () => {
      setIncomeModalVisible(true);
    };
  
    const handleIncomeModalOk = () => {
      const newIncome = {
        title,
        amount,
        date: date ? date.toLocaleDateString() : '',
      };
  
      setIncomeList([...incomeList, newIncome]);
      setIncomeModalVisible(false);
  
      setTitle('');
      setAmount('');
      setDate(null);
    };
  
    const handleIncomeModalCancel = () => {
      setIncomeModalVisible(false);
    };
  */

  return (
    <div className="home-container">
      <Header />
      <div className="home-content">
        <Details />
        <section className="home-section2">
          <div className="mainsecSearch">
            <div className="mainsecSearchleft">
              <i className="fas fa-filter fa-lg" style={{ color: '#808080' }}></i>
            </div>
            <div className="mainsecSearchmiddle">
              <input type="text" placeholder="Search..." className="search-bar" />
            </div>
            <div className="mainsecSearchright">
              <button className="add-button" id='income'>ADD INCOME</button>
              <button className="add-button" id='expense'>ADD EXPENSE</button>
              {/* <div className="dropdown-content">
              <p>INCOME</p>
              <p>EXPENSE</p>
            </div> */}
            </div>
          </div>
          <div className="mainsecContent">
            <div className="mainsecContent-left">
              <h3>Income Records</h3>
              <div className="income-records">
              {transactions && transactions.map((transaction) => (
            transaction.type === 'Income' && (
                <IncomeDetails key={transactions._id} transaction={transaction} />
                )))}
  
              </div>

            </div>
            <div className="mainsecContent-right">
              <h3>Expense Records</h3>
              <div className="expense-records">
                {transactions && transactions.map((transaction) => (
                  transaction.type === 'Expense' && (
                    <div key={transaction._id} className='income-details'>
                      <h4>{transaction.title}</h4>
                      <p>Amount: {transaction.amount}</p>
                      <p>Date: {transaction.date}</p>
                      <p>Description: {transaction.description}</p>
                    </div>
                  )))}
              </div>
            </div>
          </div>

        </section>
      </div>

      <footer className="home-footer">
        <p>&copy; 2024 Your Website. All rights reserved.</p>
      </footer>

      {/* Income Modal 
      <Modal
        isOpen={isIncomeModalVisible}
        onRequestClose={handleIncomeModalCancel}
        contentLabel="Add Income"
        style={{
          content: {
            maxWidth: '300px',  // Set the maximum width of the modal
            width: '80%',       // Set the overall width of the modal
            height: '50%',
            margin: 'auto',     // Center the modal horizontally
            background: 'linear-gradient(#570055, #002a57)',
            borderRadius: '18px'
          },
        }}
      >
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} 
          style={{width: '100%', padding: '5px' }}
          />
        </label>
        <br />
        <label>
          Amount:
          <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)}
          style={{ width: '100%', padding: '5px' }}
          />
        </label>
        <br />
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
          style={{ width: '100%', padding: '5px' }}
          />
        </label>
        <br />
        <div style={{ textAlign: 'right' }}></div>
        <button onClick={handleIncomeModalOk}
        style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 15px', marginRight: '10px' }}
        >Add Income</button>
        <button onClick={handleIncomeModalCancel}
        style={{ backgroundColor: '#f44336', color: 'white', padding: '10px 15px' }}  
        >Cancel</button>
      </Modal>
      */}
    </div>

  );
}

export default Home;
