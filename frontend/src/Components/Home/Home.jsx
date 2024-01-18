import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Header from './header';
import Details from './details';
// import { useAuthContext } from '../../hooks/useAuthContext';
// import IncomeDetails from './incomeDetails';
Modal.setAppElement('#root');
const Home = () => {
  const [isIncomeModalVisible, setIncomeModalVisible] = useState(false);
  const [isExpenseModalVisible, setExpenseModalVisible] = useState(false);
  // const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [incomeList, setIncomeList] = useState([]);
  const [expenseList, setExpenseList] = useState([]);
  const [title, setTitle] = useState('Income');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date());


  // const handleUserIconClick = () => {
  //   setDropdownVisible(!isDropdownVisible);
  // };

  // const [transactions, setTransactions] = useState(null);
  // const { user } = useAuthContext();

  // useEffect(() => {
  //   const fetchTransactions = async () => {
  //     const response = await fetch('http://localhost:4000/api/transactions', {
  //       headers: {
  //         'Authorization': `Bearer ${user.token}`
  //       }
  //     });
  //     const json = await response.json();

  //     if (response.ok) {
  //       setTransactions(json);
  //     }
  //   }

  //   if (user) {
  //     fetchTransactions();
  //   }

  // }, [])


    const showIncomeModal = () => {
      setIncomeModalVisible(true);
    };
    const showExpenseModal = () => {
      setExpenseModalVisible(true);
    };
    const handleIncomeModalOk = () => {
      // Ensure that amount is defined (use an empty string if it's initially undefined or null)
      const newIncome = {
        title,
        amount: amount || '', // Use an empty string if amount is falsy (undefined or null)
        date: date ? date.toLocaleDateString() : '',
      };
    
      setIncomeList([...incomeList, newIncome]);
      setIncomeModalVisible(false);
    
      resetForm();
    };
  
    const handleExpenseModalOk = () => {
      const newExpense = {
        title,
        amount: amount || '',
        date: date ? date.toLocaleDateString() : '',
      };
  
      setExpenseList([...expenseList, newExpense]);
      setExpenseModalVisible(false);
  
      resetForm();
    };

    const handleModalCancel = () => {
      setIncomeModalVisible(false);
      setExpenseModalVisible(false);
      resetForm();
    };

    const resetForm = () => {
      setTitle('');
      setAmount('');
      setDate(new Date());
    };
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
              <button className="add-button" id='income' onClick={showIncomeModal}>ADD INCOME</button>
              <button className="add-button" id='expense' onClick={showExpenseModal}>ADD EXPENSE</button>
            </div>
          </div>
          <div className="mainsecContent">
            <div className="mainsecContent-left">
              <h3>Income Records</h3>
              <div className="income-records">
                {incomeList.map((income, index) => (
                  <div key={index} className='income-details'>
                    <h4>Title:{income.title}</h4>
                    <p>Amount: {income.amount}</p>
                    <p>Date: {income.date}</p>
                    {/* Additional fields if needed */}
                  </div>
              ))}
  
              </div>

            </div>
            <div className="mainsecContent-right">
              <h3>Expense Records</h3>
              <div className="expense-records">
                {expenseList.map((expense, index) => (
                    <div key={index} className='expense-details'>
                      <h4>Title: {expense.title}</h4>
                      <p>Amount: {expense.amount}</p>
                      <p>Date: {expense.date}</p>
                      {/* Additional fields if needed */}
                    </div>
                  ))}
              </div>
            </div>



          </div>

          
          {/* <div className="mainsecContent">
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
          </div> */}

        </section>
      </div>

      <footer className="home-footer">
        <p>&copy; 2024 Your Website. All rights reserved.</p>
      </footer>

      {/* Income Modal */}
      <Modal
        isOpen={isIncomeModalVisible}
        onRequestClose={handleModalCancel}
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
          <input type="date" value={date.toISOString().split('T')[0]} onChange={(e) => setDate(e.target.value)}
          style={{ width: '100%', padding: '5px' }}
          />
        </label>
        <br />
        <div style={{ textAlign: 'right' }}></div>
        <button onClick={handleIncomeModalOk}
        style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 15px', marginRight: '10px' }}
        >Add Income</button>
        <button onClick={handleModalCancel}
        style={{ backgroundColor: '#f44336', color: 'white', padding: '10px 15px' }}  
        >Cancel</button>
      </Modal>


         {/* Expense Modal */}
      <Modal
        isOpen={isExpenseModalVisible}
        onRequestClose={handleModalCancel}
        contentLabel="Add Expense"
        style={{
          content: {
            maxWidth: '300px',
            width: '80%',
            height: '50%',
            margin: 'auto',
            background: 'linear-gradient(#570055, #002a57)',
            borderRadius: '18px',
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
          <input type="date" value={date.toISOString().split('T')[0]} onChange={(e) => setDate(e.target.value)}
          style={{ width: '100%', padding: '5px' }}
          />
        </label>
        <br />
        <div style={{ textAlign: 'right' }}></div>
        <button
          onClick={handleExpenseModalOk}
          style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 15px', marginRight: '10px' }}
        >
          Add Expense
        </button>
        <button
          onClick={handleModalCancel}
          style={{ backgroundColor: '#f44336', color: 'white', padding: '10px 15px' }}
        >
          Cancel
        </button>
      </Modal>

    </div>
    
    


  );
}

export default Home;
