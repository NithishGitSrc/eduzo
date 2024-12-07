import React from 'react'
import OthersAccCard from "./OthersAccCard";
function OthersAcc() {
  return (
    <>
          <div className="other-acc-section">
        <div className="other-acc-header">
          <div className="heading">
            <h3>Other Accounts</h3>
            <p>
              Configure and manage other accounts from here. All in one place
            </p>
          </div>

          <div className="add-instructor">+Add Instructor</div>
        </div>

        <div className="other-accs-container">
          <OthersAccCard />
          <OthersAccCard />
          <OthersAccCard />
          <OthersAccCard />
        </div>
      </div>
    </>
  )
}

export default OthersAcc