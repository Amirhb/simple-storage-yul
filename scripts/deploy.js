
async function main () {
    const { abi } = require('../abis/SimpleStorageYul.json');
    const { bytecode } = require('../artifacts/contracts/SimpleStorageYul.yul/SimpleStorageYul.json')
    const SimpleStorageYul = await ethers.getContractFactory(abi, bytecode);
    const simpleStorageYul = await SimpleStorageYul.deploy();
    console.log(`SimpleStorageYul address: ${simpleStorageYul.address}`);

    await simpleStorageYul.store(10);

    const value = await simpleStorageYul.retrieve();
    console.log(`SimpleStorageYul retrieved value: ${value}`);
}

main().then(() => {
    process.exit(0);
}).catch(error => {
    console.log(error);
    process.exit(1);
});
