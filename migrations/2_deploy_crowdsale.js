const LDHToken = artifacts.require("./LDHToken.sol");

module.exports = function(deployer) {
  const name = "LDHToken";
  const symbol = "LDHT";
  const decimals = 18;

  deployer.deploy(LDHToken, name, symbol, decimals);
};
