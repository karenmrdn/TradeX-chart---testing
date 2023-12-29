import "./styles.css";
/* eslint-disable no-undef, no-unused-vars */
import * as TX from "tradex-chart";

import config from "./config";
import d2tConfig from "./d2tConfig";

const chart = document.createElement("tradex-chart");
const app = document.getElementById("app");

const newDiv = document.createElement("div");
newDiv.classList.add("loading");
const newContent = document.createTextNode("Loading...");
newDiv.appendChild(newContent);
app.appendChild(newDiv);

setTimeout(() => {
  newDiv.remove();

  app.appendChild(chart);
  chart.start(config);
}, 3000);

window.chart = chart;
