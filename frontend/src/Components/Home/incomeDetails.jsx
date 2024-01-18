const IncomeDetails = ({ transaction }) => {
    return (
        <div key={transaction._id} className='income-details'>
            <h4>{transaction.title}</h4>
            <p>Amount: {transaction.amount}</p>
            <p>Date: {transaction.date}</p>
            <p>Description: {transaction.description}</p>
        </div>
    )

}

export default IncomeDetails;


