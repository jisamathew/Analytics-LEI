
// module.exports = function(deployer) {
//   deployer.deploy(MarketPlace);
// };
const Registration = artifacts.require('./Registration.sol');
const Logs = artifacts.require('./Logs.sol');


module.exports = function (deployer) { 
              return deployer.deploy(Registration).then(function () {
               return deployer.deploy(Logs);
            
  
    })
};