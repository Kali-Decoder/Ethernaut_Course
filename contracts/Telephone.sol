// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Telephone{
    address public owner;
    constructor(){
        owner= msg.sender;
    }

    function changingOwner(address _owner) public returns(bool){
        // Changing owner of the contract 
        if(tx.origin==msg.sender){// only owner can give its authority
            owner=_owner;
            return true;
        }

        return false;
    }
}