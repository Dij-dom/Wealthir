import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';
import {useAuthContext} from '../../hooks/useAuthContext';
import { useTransactionContext } from '../../hooks/useTransactionContext';

const AddExpense = () => {
    const { dispatch } = useTransactionContext();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [error, setError] = useState(null);
    const {user} = useAuthContext();

    const handleSubmit = async (value) => {
        let transaction = {...value};
        transaction.type = 'Expense';

        const response = await fetch('http://localhost:4000/api/transactions', {
                method: 'POST',
                body: JSON.stringify(transaction),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json  = await response.json();

            if (!response.ok){
                setError(json.error);

            }
        if(response.ok){
            setError(null)
            dispatch({type: 'CREATE_TRANSACTION', payload: json})
        }
    }

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
                <Button className='add-button' id='income' onClick={showModal}>
                    ADD EXPENSE
                </Button>
                <Modal 
                    title="Add Income" 
                    open={isModalOpen} 
                    style={{
                          maxWidth: '300px',
                          width: '80%',      
                          height: '50%',
                          margin: 'auto',     
                          background: 'linear-gradient(#570055, #002a57)',
                          borderRadius: '18px'
                        }}
                         footer={false}
                         onCancel={handleCancel}>
                    <Form layout='vertical' onFinish={handleSubmit}>
                        <Form.Item label='Title' name='title'>
                            <Input type='text' />
                        </Form.Item>
                        <Form.Item label='Amount' name='amount'>
                            <Input type='Number' min='0' />
                        </Form.Item>
                        <Form.Item label='Description' name='description'>
                            <Input type='text' />
                        </Form.Item>
                        <Form.Item label='Date' name='date'>
                            <Input type='Date' />
                        </Form.Item>
                        <button type= "submit" onClick={() => setIsModalOpen(false)} style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 15px', marginRight: '10px',cursor:'pointer' }}
                        >Add Expense</button>

                    </Form>
                </Modal>

        </>
    );
};
export default AddExpense;