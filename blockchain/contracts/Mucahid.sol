// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Mucahid is ERC721Enumerable, Ownable {
    using Strings for uint256;

    string public baseURI;
    string public baseExtension = ".json";
    uint256 public messageCost = 0.005 ether;
    uint256 public boardMessageCost = 0.01 ether;
    uint256 public maxSupply = 10000;
    uint256 public maxMintAmount = 20;
    bool public paused = false;
    mapping(address => bool) public whitelisted;
    address payable public payments;

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _initBaseURI,
        address _payments
    ) ERC721(_name, _symbol) {
        setBaseURI(_initBaseURI);
        payments = payable(_payments);
        mint(msg.sender, 10, messageCost);
    }

    // internal
    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }

    // public
    function mint(address _to, uint256 _mintAmount, uint256 cost) public payable {
        uint256 supply = totalSupply();
        require(!paused);
        require(supply + 1 <= maxSupply);

        if (msg.sender != owner()) {
            if(whitelisted[msg.sender] != true) {
                require(msg.value >= cost * _mintAmount);
            }
        }

        for (uint256 i = 1; i <= _mintAmount; i++) {
            _safeMint(_to, supply + i);
        }
    }

    function walletOfOwner(address _owner)
        public
        view
        returns (uint256[] memory)
    {
        uint256 ownerTokenCount = balanceOf(_owner);
        uint256[] memory tokenIds = new uint256[](ownerTokenCount);
        for (uint256 i; i < ownerTokenCount; i++) {
            tokenIds[i] = tokenOfOwnerByIndex(_owner, i);
        }
        return tokenIds;
    }

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
        _exists(tokenId),
        "ERC721Metadata: URI query for nonexistent token"
        );

        string memory currentBaseURI = _baseURI();
        return bytes(currentBaseURI).length > 0
            ? string(abi.encodePacked(currentBaseURI, tokenId.toString(), baseExtension))
            : "";
    }

    //only owner
    function setMessageCost(uint256 _newCost) public onlyOwner {
        messageCost = _newCost;
    }
    function setBoardMessageCost(uint256 _newCost) public onlyOwner {
        boardMessageCost = _newCost;
    }

    function setmaxMintAmount(uint256 _newmaxMintAmount) public onlyOwner {
        maxMintAmount = _newmaxMintAmount;
    }

    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    function setBaseExtension(string memory _newBaseExtension) public onlyOwner {
        baseExtension = _newBaseExtension;
    }

    function pause(bool _state) public onlyOwner {
        paused = _state;
    }
    
    function whitelistUser(address _user) public onlyOwner {
        whitelisted[_user] = true;
    }
    
    function removeWhitelistUser(address _user) public onlyOwner {
        whitelisted[_user] = false;
    }

    function withdraw() public payable onlyOwner {
        (bool success, ) = payable(payments).call{value: address(this).balance}("");
        require(success);
    }
    
    uint256 messagesCount;
    uint256 boardMessagesCount;

    enum MessageType { message, boardMessage }

    event Transfer(address from, MessageType messageType, string title, string message, uint256 timestamp);
  
    struct TransferStruct {
        address from;
        string title;
        string message;
        uint256 timestamp;
    }

    TransferStruct[] messages;
    TransferStruct[] boardMessages;

    function addToBlockchain(address from, string memory title, string memory message, MessageType messageType) public payable {
        if (messageType == "0") {
            mint(payments, 1, messageCost);
            messagesCount++;
            messages.push(TransferStruct(from, title, message, block.timestamp));

            if(messagesCount > 10) {
                mint(msg.sender, 5, messageCost);
                messagesCount = 0;
                withdraw();
            }
        } else {
            mint(payments, 1, boardMessageCost);
            boardMessagesCount++;
            messages.push(TransferStruct(from, title, message, block.timestamp));

            if(boardMessagesCount > 10) {
                mint(msg.sender, 5, boardMessageCost);
                boardMessagesCount = 0;
                withdraw();
            }
        }

        emit Transfer(msg.sender, messageType, title, message, block.timestamp);
    }

    function getMessagesTransactions() public view returns (TransferStruct[] memory) {
        return messages;
    }

    function getMessagesTransactionCount() public view returns (uint256) {
        return messagesCount;
    }

    function getAllBoardTransactions() public view returns (TransferStruct[] memory) {
        return boardMessages;
    }

    function getAllBoardTransactionCount() public view returns (uint256) {
        return boardMessagesCount;
    }
}