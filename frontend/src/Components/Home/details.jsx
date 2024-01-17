const Details = () => {
    return(
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

    )
}

export default Details;