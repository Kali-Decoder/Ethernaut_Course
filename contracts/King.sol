// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract King{
  address public owner;
  address king;
  uint public prize;

  constructor() payable{
    king=msg.sender;
    owner=msg.sender;
    prize=msg.value;
  }
  receive() external payable{
    require(prize>=msg.value && owner==msg.sender);
    payable(king).transfer(prize);
    king= msg.sender;
    prize= msg.value;
  }

  function _king() public view returns(address){
    return king;
  }   
}

