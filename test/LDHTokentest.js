const LDHToken = artifacts.require("LDHToken.sol");
const BigNumber = web3.BigNumber;

require("chai")
  .use(require("chai-bignumber")(BigNumber))
  .should();
contract("LDHToken", accounts => {
  const _name = "LDHToken";
  const _symbol = "LDHT";
  const _decimals = 18;

  beforeEach(async () => {
    this.token = await LDHToken.new(_name, _symbol, _decimals);
  });

  describe("token attribute", () => {
    it("It has correct name", async () => {
      const name = await this.token.name();
      name.should.equal(_name);
      //assert.equal(_name, name);
    });
    it("It has correct symbol", async () => {
      const symbol = await this.token.symbol();
      symbol.should.equal(_symbol);
      //assert.equal(_name, name);
    });
    it("It has correct decimals", async () => {
      const decimals = await this.token.decimals();
      decimals.should.be.bignumber.equal(_decimals);
      //assert.equal(_name, name);
    });
  });
});
