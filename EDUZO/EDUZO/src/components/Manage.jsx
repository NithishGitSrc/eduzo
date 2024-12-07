import React from "react";
import OthersAccCard from "./OthersAccCard";
import notifyIcon from "../../icons/alarm 1.png";
import sarahDP from "../../Icons/sarahDP.png"
import AdminAcc from "./AdminAcc"
import OthersAcc from "./OthersAcc";

function Manage() {
  return (
    <div id="Manage">
      <div className="manage-header">
        <h2>Manage</h2>
        <div>
          <img id="notify-icon" src={notifyIcon} alt=""  />
          <div className="basicPlanBtn">Basic Plan</div>
        </div>
      </div>

      <div className="admin-acc-section">
        <div className="admin-acc-header">
          <div>
            <h2>Your Account</h2>
            <div className="school-code">Schoole Code : 1902</div>
          </div>

          <button id="acc-edit-btn">Edit</button>
        </div>

        <p>
          We will use this to get intouch with you regarding the latest updates{" "}
          <br /> and new games in the market
        </p>

     <AdminAcc/>
        
      </div>

     <OthersAcc/>

    </div>
  );
}

export default Manage;
