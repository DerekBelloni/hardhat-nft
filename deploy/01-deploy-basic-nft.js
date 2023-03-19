const { network } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");
const { verify } = require("../utils/verify");

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();

    log("------------------------------------------");
    const args = []; // constructor parameters if they are required, here they are not
    const basicNft = await deploy("BasicNft", {
        from: deployer,
        args: args,
        log: true,
        // @ts-ignore
        waitConfirmations: network.config.blockConfirmations || 1,
    });

    if (
        !developmentChains.includes(network.name) &&
        process.env.ETHERSACE_API_KEY
    ) {
        log("Verifying...");
        await verify(basicNft.address, args);
    }
    log("------------------------------------------");
};
module.exports.tags = ["all", "BasicNft"];
