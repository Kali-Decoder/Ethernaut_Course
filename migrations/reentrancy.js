const Reentrancy = artifacts.require("Re_entrancy");

mosule.exports= function(deployer,network,accounts){
    deployer.deploy(Reentrancy);
}