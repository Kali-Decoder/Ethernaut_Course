const Telephone = artifacts.require("Telephone");

module.exports= function(deployer,network,accounts){
    console.log(network)
    deployer.deploy(Telephone,{from:accounts[2]});
}