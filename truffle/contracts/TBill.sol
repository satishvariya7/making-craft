// SDPX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TBill is ERC20 {
    uint256 initialSupply = 100000000000*(10**18);
    constructor() ERC20("BILL", "BILL") {
        _mint(msg.sender, initialSupply);
    }
}
