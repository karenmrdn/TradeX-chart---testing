import "./styles.css";
/* eslint-disable no-undef, no-unused-vars */
import * as TX from "tradex-chart";
import config from "./config";

const chart = document.createElement("tradex-chart");
const app = document.getElementById("app");
app.appendChild(chart);
chart.start(config);

window.chart = chart;
