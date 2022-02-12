const Moralis = require("moralis/node");
require('dotenv').config()
Moralis.initialize(process.env.MORALIS_APP_ID);
Moralis.serverURL = process.env.MORALIS_SERVER_URL;

async function login() {
  try {
    user = await Moralis.User?.current()
    if (!user) user = await Moralis.Web3.authenticate();
    console.log(user);
    alert("User logged in");
  } catch (error) {
    console.log(error);
  }
}

login();

// async function flip(side) {
//   let amount = document.getElementById("amount").value;
//   alert(side + " " + amount);
//   window.web3 = await Moralis.Web3.enable();
//   let contractInstance = new web3.eth.Contract(
//     window.abi,
//     "0x97f11C80A50b80cea1838ED56c4Ea980D5a9A335"
//   );
//   contractInstance.methods
//     .flip(side == "heads" ? 0 : 1)
//     .send({
//       value: amount,
//       from: ethereum.selectedAddress,
//     })
//     .on("receipt", (receipt) => {
//       console.log(receipt);
//       if (receipt.events.bet.returnValues.win) alert("you won");
//       else alert("you lost");
//     });
// }
// 
// document.getElementById("login_button").onclick = login;
// document.getElementById("heads_button").onclick = () => flip("heads");
// document.getElementById("tails_button").onclick = () => flip("tails");
