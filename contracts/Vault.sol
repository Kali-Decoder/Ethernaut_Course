// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Vault {
    uint private pin;
    bool public locked;

    constructor(uint  _password) {
        require(_password<=9999,"Pin Should be of four digit");
        pin=_password;
        locked=true;
    }

    function unLock(uint _pin) public returns(bool){
        require(pin==_pin,"You Entered Wrong Pin");
        locked=false;
        return true;
    }
}