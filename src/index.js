import "./styles.css";
/* eslint-disable no-undef, no-unused-vars */
import * as TX from "tradex-chart";
import config from "./config";
import d2tConfig from "./d2tConfig";

const chart = document.createElement("tradex-chart");
const app = document.getElementById("app");
app.appendChild(chart);
chart.start(d2tConfig);

window.chart = chart;
