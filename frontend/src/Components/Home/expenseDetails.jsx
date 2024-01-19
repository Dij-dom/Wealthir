import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useTransactionContext } from '../../hooks/useTransactionContext';
import { useAuthContext } from '../../hooks/useAuthContext';

const ExpenseDetails = ({ transaction }) => {
    const { dispatch } = useTransactionContext();
    const {user} = useAuthContext();

    const handleClick = async () => {

        if (!user){
            return
        }
        const response = await fetch('http://localhost:4000/api/transactions/' + transaction._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if(response.ok){
            dispatch({type: 'DELETE_TRANSACTION', payload: json})
        }
    }
    return (
        <div className='expense-details'>
            <h4>{transaction.title}</h4>
            <p>Amount: ₹ {transaction.amount}</p>
            <p>Date: {transaction.date}</p>
            <p>Description: {transaction.description}</p>
            <br/>
            <p>Added {formatDistanceToNow(new Date(transaction.createdAt), {addSuffix: true})}</p>
            <span onClick={handleClick} className="material-symbols-outlined">delete</span>
        </div>
    )
}

export default ExpenseDetails;