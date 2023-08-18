// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;
// pragma solidity ^0.4.20;

/// @title Logs contract of BOL creation, access, dispatch, fund transfer
/// @author Mithun
/// @dev Contract under development

contract Logs {

    struct log{
        string bolHash;
    }
    mapping(bytes32 => log) logHashMap;



    function saveLog(string memory a,bytes32 b) public returns(bool){
        logHashMap[b].bolHash = a;
        return true;
    }

        function getLog(bytes32 stoneid) public view returns(string memory) {
        return (logHashMap[stoneid].bolHash);
    }

}