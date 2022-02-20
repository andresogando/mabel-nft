// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract mabelParrot is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;
    string private mabelName;

    constructor(string memory _mabelName) ERC721("mabelParrot","MPP") {
        mabelName = _mabelName;
       
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://nft-s-phi.vercel.app/api/erc721/1";
    }

    function mint(address to)
        public returns (uint256)
    {
        require(_tokenIdCounter.current() < 3); 
        _tokenIdCounter.increment();
        _safeMint(to, _tokenIdCounter.current());

        return _tokenIdCounter.current();
    }
}