const SimpleToken= artifacts.require("SimpleToken");

module.exports=function(deployer){
    deployer.deploy(SimpleToken,18000,"Deccan Changer","DCT");
}