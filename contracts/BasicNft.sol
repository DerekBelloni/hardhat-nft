// SPDX-License-Identifier: MIT
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

pragma solidity ^0.8.7;

contract BasicNft is ERC721 {
  uint256 private s_tokenCounter;

  constructor() ERC721("Doggie", "DOG") {
    s_tokenCounter = 0;
  }

  function mintNft() public return(uint256) {
    _safeMint(msg.sender, s_tokenCounter);
  }
}