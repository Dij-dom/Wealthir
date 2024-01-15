import React, { useState } from 'react';
import './home.css';
import logo from '../assets/logo-color.png';
import { useNavigate } from 'react-router-dom';
import { Modal, Form, Input, Select, Button } from 'antd';

const { Option } = Select;

const Home = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();
  const handleUserIconClick = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleLogoutClick = () => {
    navigate('/');
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const handleFinish = (values) => {
    // Handle form submission here
    console.log('Received values:', values);
    setModalVisible(false);
  };

  return (
    <div className="home-container">
      <header className="home-header">
      <div className="header-content">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="user-profile" onClick={handleUserIconClick}>
            <i className="fas fa-user" style={{ color: '#808080' }}></i>
            {isDropdownVisible && (
              <div className="dropdown" style={{ backgroundColor: '#808080', color: '#002a57' }}>
              <button onClick={handleLogoutClick} className="dropdown-button">
                Logout
              </button>
            </div>
            )}
          </div>
        </div>
      </header>

      <div className="home-content">
        <section className="home-section1">
        <div className="section1-container">
            <div className="section11-box">
            <div className="ss1left-content">
              {/* User avatar image goes here */}
              {/* <img src={userAvatar} alt="User Avatar" /> */}
              avatar img
            </div>
            <div className="ss1right-content">
              {/* Textual content goes here */}
              <>
                <p>Username: </p>
                <br />
                <p>Level: </p>
                <br />
                <p>Points: </p>
              </>
            </div>
            </div>
            <div className="section12-box">
            <h3 style={{ marginBottom: '15px', color: '#fff' }}>Account Summary</h3>
              <p style={{ marginBottom: '10px', color: '#fff' }}>Total Income: <span>{/* Add total income value here */}</span></p>
              <p style={{ marginBottom: '10px', color: '#fff' }}>Total Expense: <span>{/* Add total expense value here */}</span></p>
              <p style={{ marginBottom: '0', color: '#fff' }}>Total Balance: <span>{/* Add total balance value here */}</span></p>
            </div>
            <div className="section13-box">
              {/* Content for the third box goes here */}
            </div>
          </div>
        </section>

        <section className="home-section2">
          <div className="mainsecSearch">
          <div className="mainsecSearchleft">
            <i className="fas fa-filter fa-lg" style={{ color: '#808080' }}></i>
          </div>
          <div className="mainsecSearchmiddle">
            <input type="text" placeholder="Search..." className="search-bar" />
          </div>
          <div className="mainsecSearchright">
            <button className="add-button" onClick={showModal}>ADD INCOME</button>
            <button className="add-button">ADD EXPENSE</button>
          </div>
          
          {/* Ant Design Modal */}
      <Modal
        title="Add Income"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form layout="vertical" onFinish={handleFinish}>
          <Form.Item label="Title" name="title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Amount" name="amount" rules={[{ required: true }]}>
            <Input type="number" min={0} />
          </Form.Item>
          <Form.Item label="Type" name="type" rules={[{ required: true }]}>
            <Select>
              <Select.Option value="Income">Income</Select.Option>
              <Select.Option value="Expense">Expense</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input />
          </Form.Item>
          <Form.Item label="Date" name="date" rules={[{ required: true }]}>
            <Input type="date" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>

          </div>
          <div className="mainsecContent">
            <div className="mainsecContent-left">
            <h3>Income Records</h3>
            <div className="income-records">
              {/* Content for Income Records goes here */}
            </div>
            </div>
            <div className="mainsecContent-right">
            <h3>Expense Records</h3>
          <div className="expense-records">
            {/* Content for Expense Records goes here */}
          </div>
            </div>
          </div>

        </section>
      </div>

      <footer className="home-footer">
        <p>&copy; 2024 Your Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
