import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import moment from "moment";
import { _campaign } from './type/IExternal';

const dateStart = moment.unix(_campaign.periodStart);
const dateEnd = moment.unix(_campaign.periodEnd);

// console.log(dateStart.diff(dateEnd, "hours"));
// console.log(moment().format("DD"));

ReactDOM.render(<App />, document.getElementById("root"));
