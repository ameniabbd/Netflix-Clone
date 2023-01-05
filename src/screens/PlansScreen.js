import React from "react";
import './plansScreen.css'
function PlansScreen() {
  return (
    <div className="plansScreen">
      <div className="plansScreen-plan">
        <div className="plansScreen_info">
          <h5>Prenium</h5>
          <h6>4k+HDR</h6>
        </div>
        <button>Subscribe</button>
      </div>

      <div className="plansScreen-plan">
        <div className="plansScreen_info">
          <h5>Basic</h5>
          <h6>720p</h6>
        </div>
        <button>Subscribe</button>
      </div>

      <div className="plansScreen-plan">
        <div className="plansScreen_info">
          <h5>Standard</h5>
          <h6>1080p</h6>
        </div>
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default PlansScreen;
