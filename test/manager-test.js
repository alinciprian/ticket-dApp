const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Manager", function () {
  let Manager, manager;

  beforeEach(async function () {
    Manager = await ethers.getContractFactory("Manager");
    manager = await Manager.deploy();
    await manager.deployed();
  });

  it("Should create a new ticket", async function () {
    await manager.createTicket("Daniel");
    let tickets = await manager.getTickets();
    expect(tickets[0].name).to.equal("Daniel");
  });

  it("Should update the ticket name", async function () {
    await manager.createTicket("Daniel");
    await manager.updateTicketName(0, "New Daniel");
    let tickets = await manager.getTickets();
    expect(tickets[0].name).to.equal("New Daniel");
  });

  it("should update a ticket status", async function () {
    await manager.createTicket("cip");
    await manager.updateTicketStatus(0, 3);
    let tickets = await manager.getTickets();
    expect(tickets[0].status).to.equal(3);
  });

  it("Should return a list of tickets", async function () {
    await manager.createTicket("My new Ticket");
    await manager.createTicket("My new Ticket");
    await manager.createTicket("My new Ticket");
    let tickets = await manager.getTickets();
    expect(tickets.length).to.equal(3);
  });
});
