"use strict";
const io = require("socket.io-client");
const socket = io.connect("http://localhost:3000/caps");

socket.on("pickup", (payload) => {
  setTimeout(() => {
    console.log(`DRIVER: picked up ${payload.orderID}`);
    socket.emit("in-transit", payload);
  }, 1000);
});

socket.on("in-transit", (payload) => {
  setTimeout(() => {
    console.log(`DRIVER: delivered  up ${payload.orderID}`);
    socket.emit("delivered", payload);
  }, 3000);
});
