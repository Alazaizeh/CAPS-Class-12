"use strict";

// const io = require("socket.io")(3000);
const io = require("socket.io")(3000);
const uuid = require("uuid").v4; // random uuid
const caps = io.of("/caps"); // http://localhost:3000/health

caps.on("connection", (socket) => {
  socket.on("pickup", (payload) => {
    socket.join(payload.store);

    console.log("Event ", {
      event: "pickup",
      time: new Date().toISOString(),
      payload: payload,
    });

    caps.emit("pickup", payload);
  });

  socket.on("in-transit", (payload) => {
    console.log("Event ", {
      event: "in-transit",
      time: new Date().toISOString(),
      payload: payload,
    });

    caps.emit("in-transit", payload);
  });

  socket.on("delivered", (payload) => {
    console.log("Event ", {
      event: "delivered",
      time: new Date().toISOString(),
      payload: payload,
    });
    caps.emit("delivered", payload);
  });

  console.log("done");
});
