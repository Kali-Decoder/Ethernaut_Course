// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
contract SimpleToken{
    using SafeMath for uint256;
    string public name;
    string public symbol;
    address public tokenOwner;
    uint public totalSupply;
    mapping(address=>uint) public tokenHolders;
    constructor(uint _totalSupply,string memory _name,string memory _symbol){
        totalSupply=_totalSupply;
        tokenOwner=msg.sender;
        name=_name;
        symbol=_symbol;
        tokenHolders[tokenOwner]=totalSupply;
    }

    function transferTokensFrom(address from ,address to,uint amount) public returns(bool){
        require(tokenHolders[from]>=amount,"You have not enough tokens");
        tokenHolders[from]= tokenHolders[from].sub(amount);
        tokenHolders[to]= tokenHolders[to].add(amount);
        return true;
    }
    
    function transferTokens(address to ,uint amount) public onlyOwner returns  (bool){
        require(tokenHolders[msg.sender]-amount>=0,"No tokens are avail to owner");
        tokenHolders[msg.sender]= tokenHolders[msg.sender].sub(amount);
        tokenHolders[to]= tokenHolders[to].add(amount);

        return true;
    }


    function balanceOf() view public returns(uint){
        return tokenHolders[msg.sender];
    }
    modifier onlyOwner(){
        require(msg.sender==tokenOwner,"You are not owner");
        _;
    }

    
}