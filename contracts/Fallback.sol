// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import '@openzeppelin/contracts/math/SafeMath.sol';


contract Fallback{

    using SafeMath for uint256;
    mapping(address=>uint) public contributions;
    address public owner;

    constructor ()  {
        owner= msg.sender;
        contributions[msg.sender]= (1000) *(1 ether);
    }
   
    function contribute() public payable returns(bool){
        require(msg.value>=1 ether,"Contribute amount should be greater than 0");
        contributions[msg.sender]+=msg.value;
        if(contributions[msg.sender] > contributions[owner]) {
            owner = msg.sender;
        }
    }

    function getContribution() public view returns(uint){
        return contributions[msg.sender];
    }

    function withdraw() onlyOwner public {
        payable(owner).transfer(address(this).balance);
    }


    modifier onlyOwner(){
        require(msg.sender==owner,"You are not owner");
        _;
    }

    receive() payable external{
        require(msg.value>0 && contributions[msg.sender]>0);
        owner=msg.sender;
    }

}