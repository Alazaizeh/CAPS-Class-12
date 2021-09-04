"use strict";
const io = require("socket.io-client");
const socket = io.connect("http://localhost:3000/caps");
const uuid = require("uuid").v4; // random uuid

let payload = {
  store: "1-206-flowers",
  orderID: `${uuid()}`,
  customer: "Jamal Braun",
  address: "Schmittfort, LA",
};

socket.emit("pickup", payload);

socket.on("delivered", (payload) => {
  setTimeout(() => {
    console.log(`thank you for delivering ${payload.orderID}`);
    process.exit();
  }, 5000);
});

module.exports;
