const TBILL = artifacts.require("TBill");

module.exports = function (deployer) {
  deployer.deploy(TBILL);
};
