"use strict";

const caps = require("../caps");

let order = {
  store: "1-206-flowers",
  orderID: "e3669048-7313-427b-b6cc-74010ca1f8f0",
  customer: "Jamal Braun",
  address: "Schmittfort, LA",
};

jest.useFakeTimers();

describe("CAPS", () => {
  it("connection", async () => {
    expect(caps.emit("connection", order)).toEqual(true);
  });

  it("in-transit", () => {
    expect(caps.emit("in-transit", order)).toEqual(true);
  });

  it("delivered", () => {
    expect(caps.emit("delivered", order)).toEqual(true);
  });
});
