// SPDX-License-Identifier: SimPL-2.0
pragma solidity ^0.8.2;

contract add {
    uint public count;
    constructor () {
        count = 0;
    }
    function addCount(uint _count) public  {
        count += _count;
    }
    function getCount() public view returns(uint) {
        return count;
    }
}