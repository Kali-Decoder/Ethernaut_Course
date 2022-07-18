// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import '@openzeppelin/contracts/math/SafeMath.sol';

contract Re_entrancy{
    using SafeMath for uint256;
    mapping(address=>uint) public balances;

    function donate(address _donate,uint amount) public returns(bool){
        balances[_donate]=balances[_donate].add(amount);
        return true;

    }
    function withdraw(uint _amount)public returns(bool){
        require(balances[msg.sender]>=_amount,"Not Sufficient Balances");
        balances[msg.sender]=balances[msg.sender].sub(_amount);
        return true;
    }
    function checkBalance() view public returns(uint){
        return balances[msg.sender];
    }

}