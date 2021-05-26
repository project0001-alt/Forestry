// migrations/2_deploy.js
const Forestry = artifacts.require('Forestry');

module.exports = async function (deployer) {
  await deployer.deploy(Forestry);
};