const { expect } = require("chai")
const {
    loadFixture,
  } = require("@nomicfoundation/hardhat-network-helpers");

describe("Bank", function () {
    async function deployBank() {
        // Contracts are deployed using the first signer/account by default
    const amount = 1_000_000_000;
    const [owner, otherAccount] = await ethers.getSigners();
    const Counter = await ethers.getContractFactory("Bank");
    const counter = await Counter.deploy();
    await counter.connect(otherAccount).transfer({value:amount});
    return {owner, otherAccount, counter, amount}

    }

    describe("store", function (){
        it("Should equal amount by call function getCustomerBalance", async function() {
            const {counter, otherAccount, amount} = await loadFixture(deployBank);
            
            expect(await counter.connect(otherAccount).getCustomerBalance(otherAccount.address)).to.be.equal(amount);
        })
    })

 

 

})