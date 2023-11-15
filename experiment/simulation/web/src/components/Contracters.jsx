// CompileContract.js
import React, { useEffect } from "react";
import fs from "fs";

const CompileContract = () => {
  useEffect(() => {
    const compileContract = async () => {
      const contractPath = "../src/myContract.sol";
      const contractSource = fs.readFileSync(contractPath, "utf-8");

      // Convert the contract source code to bytes
      const byteArray = new TextEncoder().encode(contractSource);

      // Prepend the WebAssembly magic word and version to the byte array
      const magicWord = new Uint8Array([0x00, 0x61, 0x73, 0x6d]); // WebAssembly magic word
      const version = new Uint8Array([0x01, 0x00, 0x00, 0x00]); // WebAssembly version 1
      const compiledBytes = new Uint8Array([
        ...magicWord,
        ...version,
        ...byteArray,
      ]);

      // Compile the contract using WebAssembly.compile
      try {
        const compiledModule = await WebAssembly.compile(compiledBytes);

        // Access compiled output, e.g., ABI and bytecode
        const output = solc.compile(compiledModule);
        const contractAbi =
          output.contracts["MyContract.sol"]["MyContract"].abi;
        const contractBytecode =
          output.contracts["MyContract.sol"]["MyContract"].evm.bytecode.object;

        console.log("Contract ABI:", contractAbi);
        console.log("Contract Bytecode:", contractBytecode);
      } catch (error) {
        console.error("Error compiling the contract:", error);
      }
    };

    compileContract();
  }, []);

  return (
    <div>
      <h1>Compiling Solidity Contract</h1>
      {/* Add any UI elements or content here */}
    </div>
  );
};

export default CompileContract;
