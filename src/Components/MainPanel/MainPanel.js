import React from "react";
import CircleChart from '../CircleChart/CircleChart';
import Chart from "../Chart/Chart";

import "./MainPanel.css";

function MainPanel(props) {

    return(
        <div className="mainPanel">
            <Chart />
            <CircleChart/>
            <CircleChart/>
            <CircleChart/>
        </div>
    );
}

export default MainPanel;