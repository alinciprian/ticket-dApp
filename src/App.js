import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Manager from "./artifacts/contracts/Greeter.sol/Manager.json";

function App() {
  const [name, setName] = useState("");
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState("");
  const [ticket, setTicket] = useState([]);
  return <div></div>;
}

export default App;
