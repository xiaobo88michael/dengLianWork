// SPDX-License-Identifier: SimPL-2.0
pragma solidity ^0.8.2;

contract Counter {
    uint  count;
    address owner;
    constructor () {
        count = 0;
        owner = msg.sender;
    }
    function addCount(uint _count) public  {
        require(msg.sender==owner,"only deployer can call this method!");
        count += _count;
    }
    function getCount() public view returns(uint) {
        return count;
    }
}