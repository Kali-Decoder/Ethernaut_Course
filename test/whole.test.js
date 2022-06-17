const Fallback = artifacts.require("Fallback");
let fallback;

contract("Testing smart contract",(accounts)=>{
    beforeEach(async ()=>{
        fallback= await Fallback.deployed();

    });
    it("Should test first smart contract ",async ()=>{
        let owner= await fallback.owner();
        assert.equal(accounts[0],owner);

        let ether = await web3.utils.toWei("1","ether");
        
        await fallback.contribute({from:accounts[2],value:ether,gas:'1000000'});
         await fallback.contributions(accounts[2]);
        
        let bal = await fallback.getContribution({from:accounts[2]});

        bal = await fallback.getContribution({from:owner});
        console.log(bal.toString());

        await fallback.withdraw({from:owner});

        let b= await web3.eth.getBalance(owner);
        console.log(b.toString())

    });
})