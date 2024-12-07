import React from "react";
import sarahDP from "../../Icons/sarahDP.png"

function AdminAcc() {
  return (
    <>
      <div className="admin-acc">
        <div
          className="admin-acc-profile"
          style={{ backgroundImage: `url(${sarahDP})` }}
        ></div>
        <div className="admin-details">
          <div>
            <h2>Sarah Cooper</h2>
            <div className="admin-tag">Admin</div>
          </div>
          <p>sarah@bcschools.in</p>
          <p>(316) 555-0116</p>
        </div>
      </div>
    </>
  );
}

export default AdminAcc;
