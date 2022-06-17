// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Fallout{
    using SafeMath for uint256;
    address public owner;
    mapping(address=>uint) public allocations;
    constructor() payable {
        owner=msg.sender;
        allocations[owner]=msg.value;
    }
    function postAllocation() public payable {
        require(msg.value>0,"Greater than zero");
        allocations[msg.sender]=allocations[msg.sender].add(msg.value);
    }
    function sendAllocation(address allocator) public {
        require(allocations[allocator]>0,"Not suffcient Balance");
        payable(allocator).transfer(allocations[allocator]);
    }
    function collectAllocations() public onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }
    function getAllocateBalance() public view returns(uint){
        return allocations[msg.sender];
    }

    modifier onlyOwner(){
        require(owner==msg.sender,"You r not owner");
        _;
    } 
}