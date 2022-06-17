// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "@openzeppelin/contracts/utils/math/SafeMath.sol";


contract CoinFlip{
    enum Call {HEAD,TAIL}
    using SafeMath for uint256;
    uint consecutiveWins;
    uint lastHash;
    uint constant FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;

    constructor(){
        consecutiveWins=0;
    }

    function chooseToss(Call _call)  public payable {
        require(msg.value==1 ether,"Please Provide Sufficient Balance");
        uint blockValue= uint(blockhash(block.number.sub(1)));
        if(blockValue==lastHash){
            revert();
        }
        lastHash=blockValue;
        uint coinFlip = blockValue.div(FACTOR);
        Call _gcall = coinFlip==1 ? Call.TAIL : Call.HEAD ;
        if(_gcall==_call){
            consecutiveWins++;
            if(consecutiveWins==3){
                payable(msg.sender).transfer(address(this).balance);
            }
        }else{
            consecutiveWins=0;
        }
    }

}