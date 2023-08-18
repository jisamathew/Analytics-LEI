// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;
// pragma solidity 0.8.6;

// pragma solidity ^0.4.20;
// import "./Escrow.sol";

/// @title User Registration
/// @author Jisa
/// @notice Use this contract for saving and retreiving registered users

contract Registration {
    address[] sellerList;
    address[] carrierList;
    address[] AgencyList;
    bytes32[] carriers;
     bytes32[] Agencies;
    bytes32[] consignee;
    bytes32[] bank;
    address escrow;
    bytes32[] forwardingAgentList;
    address[] test;
    // constructor(address escrow_address)public{
    //     escrow = escrow_address;
    // }
    string public UType;
    // to save userHash and usertype
    struct User{
        string userHash;
        string uType;
    }
    mapping( address => User) userTable;
    // to save seller address with a name
    struct UserSeller{
        address userAdd;
    }
    mapping( bytes32 => UserSeller) userSellerTable;


    // to save carrier address with a name
    struct UserS{
        address userH;
    }
    mapping( bytes32 => UserS) userSTable;

    //to save consignee address with a name
    struct UserConsignee{
        address userWallet;
    }
    mapping( bytes32 => UserConsignee) userConsigneeTable;
    //to save bank address with a name
    mapping( bytes32 => address) bankTable;

    event LogBank(bytes32 bank);
/// @notice Function for registering stakeholders

    function saveUserDetailsToBC(address metamaskAdd,string memory hash,string memory uType,bytes32 cus) public  returns(bool) {
        UType = uType;
        // Escrow instance = Escrow(escrow);
        test.push(metamaskAdd);
        if (stringsEqual(UType, "Seller")) {
            userTable[metamaskAdd].userHash = hash;
            sellerList.push(metamaskAdd);
            userTable[metamaskAdd].uType = uType;
            userSellerTable[cus].userAdd = metamaskAdd;
            return true;

        } else if (stringsEqual(UType, "Carrier")) {
            userTable[metamaskAdd].userHash = hash;
            carrierList.push(metamaskAdd);
            userTable[metamaskAdd].uType = uType;
            userSTable[cus].userH = metamaskAdd;
            carriers.push(cus);
            return true;

        } else if (stringsEqual(UType, "Bank")) {
            userTable[metamaskAdd].userHash = hash;
            userTable[metamaskAdd].uType = uType;
            bank.push(cus);
            bankTable[cus] = metamaskAdd;
            // instance.createWallet(metamaskAdd,cus);
            emit LogBank(cus);
            return true;
            } else if (stringsEqual(UType, "ShippingAgency")) {
            userTable[metamaskAdd].userHash = hash;
            AgencyList.push(metamaskAdd);
            userTable[metamaskAdd].uType = uType;
            userSTable[cus].userH = metamaskAdd;
            Agencies.push(cus);
            return true;
        }
        else {
            userTable[metamaskAdd].userHash = hash;
            userTable[metamaskAdd].uType = uType;
            return true;
        }
    }

        function gettestAd() public view returns(address[] memory) {
        return (test);
    }
    function saveUserDetailsToBCConsignee(address metamaskAdd,string memory hash,string memory uType,bytes32 cus,address bankAddress) public returns (bool)
    {
            UType = uType;
            userTable[metamaskAdd].userHash = hash;
            userTable[metamaskAdd].uType = uType;
            userConsigneeTable[cus].userWallet = metamaskAdd;
            consignee.push(cus);
            // Escrow instance = Escrow(escrow);
            // instance.addOwner(bankAddress,metamaskAdd);
            return true;
    } 
/// @notice Function for fetching user_hash and user_type
    function getUserHashType(address metamaskAdd) public view returns(string memory,string memory)
    {
        return (userTable[metamaskAdd].userHash,userTable[metamaskAdd].uType);
    }
    function getUserType(address metamaskAdd) public view returns(string memory) {
        return (userTable[metamaskAdd].uType);
    }
 /// @notice Function  to return address for a username
    function retselleradd(bytes32 sellerName) public view returns(address){
          return (userSellerTable[sellerName].userAdd);
    }
    function retcarrieradd(bytes32 carrierName) public view returns(address){
          return (userSTable[carrierName].userH);
    }
    function retconsigneeadd(bytes32 consigneeName) public view returns(address){
          return (userConsigneeTable[consigneeName].userWallet);
    }

    function retbankadd(bytes32 bankName) public view returns(address){
          return (bankTable[bankName]);
    }
    function retbanks() public view returns(bytes32[] memory){
          return (bank);
    }

    /// @dev used to return the list of registered carriers
    /// @return bytes32[] array
    function retCarriers() public view returns(bytes32[] memory){
          return (carriers);
    }

/// @notice Function for string comparison
    function stringsEqual(string storage _a, string memory _b) internal view returns (bool) {
		bytes storage a = bytes(_a);
		bytes memory b = bytes(_b);
		if (a.length != b.length){
			return false;
        }
        for (uint i = 0; i < a.length; i ++){
		    if (a[i] != b[i]){
				return false;
            }
        }
		return true;
    }
//ERC721 TOKEN CODE
    struct Tokens{
        uint256[] ERC721Tokens;
    }

    mapping(address => Tokens) TokenData;

    event Tok(uint256[] t, address ad);

    function saveTokenData(address shipperAddress, uint256[] memory token) public returns(bool) {
        for(uint k = 0;k<token.length;k++){
            TokenData[shipperAddress].ERC721Tokens.push(token[k]);
        }
        emit Tok(token, shipperAddress);
        return true;
    }

    function popToken(address user) public view returns(uint256){
        return TokenData[user].ERC721Tokens[0];
    }

    function deleteToken(address shipperAddress) public returns(bool){
        delete TokenData[shipperAddress].ERC721Tokens[0];
            for (uint k = 0; k<TokenData[shipperAddress].ERC721Tokens.length-1;k++){
                TokenData[shipperAddress].ERC721Tokens[k] = TokenData[shipperAddress].ERC721Tokens[k+1];
            }
        return true;
    }
//ERC721 TOKEN CODE END

//code added by MITHUN
//Forwarding Agent
struct agentM{
    string hashIPFS;
}
mapping(address =>agentM) agentMap;

    /// @dev registering a agent by a shipping agency
    /// @param shippingAgencyAdd metamask wallet address of the shipping agency
    /// @param dataHash hash containing agents data
    /// @return boolean

function updateAgent(bytes32 agentName,address shippingAgencyAdd, string memory dataHash) public returns(bool){
        agentMap[shippingAgencyAdd].hashIPFS = dataHash;
        forwardingAgentList.push(agentName);
        userSTable[agentName].userH = shippingAgencyAdd;
        return true;
}

    /// @dev returning the agent linked to shipping agency
    /// @param shippingAgencyAdd metamask wallet address of the shipping agency
    /// @return bytes IPFS hash containing agents data
    function getAgent(address shippingAgencyAdd) public view returns(string memory) {
        return (agentMap[shippingAgencyAdd].hashIPFS);
    }
    /// @dev used to return the list of registered Forwarding Agent
    /// @return bytes32[] array
    function retforwardingAgentList() public view returns(bytes32[] memory){
          return (forwardingAgentList);
    }
    /// @dev used to return the list of registered shipping Agencies
    /// @return bytes32[] array
    function retAgencies() public view returns(bytes32[] memory){
          return (Agencies);
    }
    /// @dev used to return address based on userName
    /// @return address
    function retagencyadd(bytes32 agencyName) public view returns(address){
          return (userSTable[agencyName].userH);
    }
    mapping(address => string) role;
    function saveRole(address _user, string memory hash) public returns(bool){
        role[_user] = hash;
        return true;
    }

    function returnRole(address _user) public view returns(string memory){
        return(role[_user]);
    }
}
