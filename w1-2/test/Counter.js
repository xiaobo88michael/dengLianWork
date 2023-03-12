const { expect } = require("chai")
const {
    loadFixture,
  } = require("@nomicfoundation/hardhat-network-helpers");

describe("Counter", function () {
    async function deployCounter() {
        // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    return {owner, otherAccount, counter}

    }

    describe("onlyOwner", function (){
        it("Should only contract deployer can call function addCounter", async function() {
            const {counter, otherAccount} = await loadFixture(deployCounter);
            await expect(counter.connect(otherAccount).addCount(1)).to.be.revertedWith(
                "only deployer can call this method!"
            );
        })
    })

    describe("addCounter",function () {
        it("Should the value of counter is equal 1 after call function addCounter",async function() {
            const {counter} = await loadFixture(deployCounter);
            await counter.addCount(1);
            //const count = ;
            expect(await counter.getCount()).to.equal(1);
        })

    })

})