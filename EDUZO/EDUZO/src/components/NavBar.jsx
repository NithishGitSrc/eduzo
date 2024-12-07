import React from "react";
import sarahIcon from "../../icons/sarah.png";
import analyticsIcon from "../../icons/analytics.png"
import buildIcon from "../../icons/build.png";
import manageIcon from "../../icons/manage.png";
import gamesIcon from "../../icons/games.png";
import helpIcon from "../../icons/help.png";
import classIcon from "../../icons/class.png"
function NavBar() {
  return (
    <div id="navBar">
      
        <div id="logo">
          <span style={{ color: "#0134fe" }}>Edu</span>
          <span style={{ color: "#fe0180" }}>zo</span>.labs
        </div>

        <div id="menu">
        <div className="item"><img src={gamesIcon} alt="" /> Games</div>
        <div className="item"><img src={classIcon} alt="" /> Class</div>        
          <div className="item"><img src={analyticsIcon} alt="" /> Analytics</div>
          <div className="item"><img src={buildIcon} alt="" /> Build</div>
          <div className="item"><img src={manageIcon} alt="" /> Manage</div>
          <div className="item"><img src={helpIcon} alt="" /> Help</div>
        </div>
      

      <div id="qv-userProfile">
        <img src={sarahIcon} alt="" />
        <h3>Sarah Cooper</h3>
      </div>
    </div>
  );
}

export default NavBar;
