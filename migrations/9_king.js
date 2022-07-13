const King = artifacts.require("King");

module.exports= async function(deployer,network,accounts){
    deployer.deploy(King,{value:await web3.utils.toWei('2','ether'),from:accounts[0]})
}