const Fallback = artifacts.require("Fallback");
const Fallout = artifacts.require("Fallout");
const CoinFlip = artifacts.require("CoinFlip");
const Telephone = artifacts.require("Telephone");
const SimpleToken= artifacts.require("SimpleToken");
const ElectionFactory = artifacts.require("ElectionFactory.sol");
const Election = artifacts.require("Election.sol");
const Vault= artifacts.require("Vault");
let vault;
let simpleToken;
let fallback;
let fallout;
let coinflip;
let telephone;
let electionFactory;
let election;
contract("Testing smart contract",(accounts)=>{
    beforeEach(async ()=>{
        fallback= await Fallback.deployed();
        let ether= await web3.utils.toWei("1","ether");
        fallout= await Fallout.deployed({from:accounts[0],value:ether});
        coinflip= await CoinFlip.deployed();
        telephone= await Telephone.deployed({from:accounts[2]});
        simpleToken= await SimpleToken.deployed(18000,"Deccan Changer","DCT");
        electionFactory= await ElectionFactory.deployed();
        await electionFactory.createElection("neerajchoubisa876@gmail.com","Student of the year","For choosing student of year");

        let electionData = await electionFactory.getDeployedElection("neerajchoubisa876@gmail.com");

        election =await Election.at(electionData.deployedAddress);

        vault= await Vault.deployed(1256);
        
    });
    // it("Should test first smart contract ",async ()=>{
    //     let owner= await fallback.owner();
    //     assert.equal(accounts[0],owner);

    //     let ether = await web3.utils.toWei("1","ether");
        
    //     await fallback.contribute({from:accounts[2],value:ether,gas:'1000000'});
    //      await fallback.contributions(accounts[2]);
        
    //     let bal = await fallback.getContribution({from:accounts[2]});

    //     bal = await fallback.getContribution({from:owner});
    //     console.log(bal.toString());

    //     await fallback.withdraw({from:owner});

    //     let b= await web3.eth.getBalance(owner);
    //     console.log(b.toString())

    // });

    // it("Should Test Fallout contract",async()=>{
    //     let owner= await fallout.owner();
    //     let bal = await fallout.allocations(owner)
    //     await fallout.postAllocation({from:accounts[1],value:'10000'});
    //     bal = await  fallout.allocations(accounts[1]);
    //     assert.equal(bal.toNumber(),10000);

    //     let c=await fallout.getAllocateBalance({from:accounts[1]});
    //     console.log(c)
    //     await fallout.sendAllocation(accounts[1]);
    //     let b = await web3.eth.getBalance(accounts[1]);

    //     await fallout.collectAllocations({from:accounts[0]})
    //     let x = await web3.eth.getBalance(accounts[1]);
    //     console.log(await web3.utils.fromWei(x,"ether"));
        

    // })
    // it("Should test Coinflip contract ",async ()=>{
    //     let status = await coinflip.status();
    //     let consecutiveValue= await coinflip.consecutiveWins();

    //     assert.equal(status,"Start");
    //     let ether= await web3.utils.toWei("1","ether");
    //     await coinflip.choice(0,{from:accounts[2],value:ether});
    //     consecutiveValue= await coinflip.consecutiveWins();
    //     console.log(consecutiveValue.toNumber())
    //     await coinflip.choice(1,{from:accounts[2],value:ether});
    //     consecutiveValue= await coinflip.consecutiveWins();
    //     console.log(consecutiveValue.toNumber())

    //     await coinflip.choice(1,{from:accounts[2],value:ether});
    //     consecutiveValue= await coinflip.consecutiveWins();
    //     console.log(consecutiveValue.toNumber())

    //     await coinflip.choice(0,{from:accounts[2],value:ether});
    //     consecutiveValue= await coinflip.consecutiveWins();
    //     console.log(consecutiveValue.toNumber())

    //     await coinflip.choice(1,{from:accounts[2],value:ether});
    //     consecutiveValue= await coinflip.consecutiveWins();
    //     console.log(consecutiveValue.toNumber())



    // })

    // it("Should test telephone contract",async()=>{
    //     let owner= await telephone.owner();
    //     assert.equal(accounts[2],owner);

    //     await telephone.changingOwner(accounts[0],{from:accounts[2]});
    //     owner= await telephone.owner();
    //     console.log(owner);
    // });

    // it("Should text Simple token contract",async()=>{
    //     let obj= {
    //         name: await simpleToken.name(),
    //         symbol:await simpleToken.symbol(),
    //         owner: await simpleToken.tokenOwner(),
    //         totalSupply: await simpleToken.totalSupply(),
    //     }
    //     let ownerTokens= await simpleToken.tokenHolders(obj.owner);
    //     await simpleToken.transferTokens(accounts[1],5000);
    //     let acc1Bal = await simpleToken.balanceOf({from:accounts[1]})
    //     assert.equal(acc1Bal.toNumber(),5000);

    //     await simpleToken.transferTokensFrom(accounts[1],accounts[2],2500);
    //     let acc2Bal= await simpleToken.balanceOf({from:accounts[2]});
    //     assert.equal(acc2Bal.toNumber(),2500);
    // })
    // it("Should Testing Election Contract",async ()=>{
    //     let obj= {
    //         electionName:await election.electionName(),
    //         electionDesc:await election.electionDesc(),
    //         electionAuthority:await election.electionAuthority(),
    //         status:await election.status(),
    //     }
    //     // adding Candidate ..... 
    //     await election.addCandidate("Neeraj Choubisa","NC","www.nikku","neerajchoubisa876@gmail.com");
    //     await election.addCandidate("Sneha Gupta","SG","www.sneha","snehA345@gmail.com");
    //     await election.addCandidate("Tanmay Bhatt","TB","www.tanmay","gtanmay654@gmail.com");
    //     let numCandidates= await election.getNumberCandidates();
    //     await election.vote(1,"nee@gmail.com",{from:accounts[1]});
    //     await election.vote(2,"mee@gmail.com",{from:accounts[2]});
    //     await election.vote(3,"pee@gmail.com",{from:accounts[3]});
    //     await election.vote(1,"qee@gmail.com",{from:accounts[4]});
    //     await election.vote(2,"ree@gmail.com",{from:accounts[5]});
    //     await election.vote(3,"see@gmail.com",{from:accounts[6]});
    //     await election.vote(2,"tee@gmail.com",{from:accounts[7]});
    //     await election.vote(2,"uee@gmail.com",{from:accounts[8]});
    //     await election.vote(1,"vee@gmail.com",{from:accounts[9]});
    //     let numVoters= await election.getNumberVoters();
    //     assert.equal(9,numVoters.toNumber());
    //     assert.equal(3,numCandidates.toNumber());
    //     let candidateDetail= await election.getCandidateDetail(1);
    //     let electionDetail = await election.getElectionDetail();
    //     assert.equal(candidateDetail.id,1);
    //     assert.equal(electionDetail[3],true);
    //     let winner= await election.getWinner({from:accounts[0]});
    //     let status= await election.status();
    //     assert.equal(status,false);

    // })

    it("Should check vault contract",async()=>{
        let locked = await vault.locked();
        assert.equal(true,locked);
        await vault.unLock(1256);
        assert.equal(false,locked);

    })

})
