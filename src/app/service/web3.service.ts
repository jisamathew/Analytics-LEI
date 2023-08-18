import {Injectable} from '@angular/core';

// const marketPlaceArtifacts = require('../../../build/contracts/MarketPlace.json');
const registrationArtifacts = require('../../../build/contracts/Registration.json');
const myLogsArtifcats = require('../../../build/contracts/Logs.json');

const createClient = require('ipfs-http-client')


declare var require;
const Web3 = require('web3');
declare let window: any;

@Injectable({
  providedIn: 'root'
})
export class Web3Service {

  private messageResult: any;
  ipfsHex:any;

  constructor() {
  }


  public checkAndInstantiateWeb3(): Promise<string> {
    return new Promise((resolve, reject) => {
      if (window.ethereum) {
        this.messageResult = 'connected';
        window.web3 = new Web3(window.ethereum);
        window.ethereum.enable();
        resolve(this.messageResult);
      } else if (window.web3) {
        this.messageResult = 'connected';
        window.web3 = new Web3(window.web3.currentProvider);
        resolve(this.messageResult);
      } else {
        this.messageResult = 'No Erthereum browser detected. you should consider trying MetaMask';
        reject(this.messageResult);
      }
    });
  }

  public loadBlockChainData(): Promise<string> {
    return new Promise((resolve, reject) => {
      const web3 = window.web3;
      const account = web3.eth.getAccounts();
      if (account !== undefined) {
        resolve(account);
      } else {
        this.messageResult = 'There is no account';
        reject(this.messageResult);
      }
    });
0  }

  // public getContract() {
  //   return new Promise((resolve) => {
  //     const web3 = window.web3;
  //     let networkId;
  //     web3.eth.net.getId()
  //       .then((netId: any) => {
  //         networkId = netId;
  //         const abi = marketPlaceArtifacts.abi;
  //         const networkAddress = marketPlaceArtifacts.networks[networkId].address;
  //         const marketplace = new web3.eth.Contract(abi, networkAddress);
  //         resolve(marketplace);
  //       });
  //   });
  // }

  public async getUtf8(data) {
    return new Promise((resolve) =>{
    const web3 = window.web3;
    // console.log(web3.utils.toUtf8(data))
    resolve(web3.utils.toUtf8(data));
    });
  }

  public async getAllContract() {
    return new Promise((resolve) =>{
    const web3 = window.web3;
    let networkId;
    let contracts = [];
    // web3.utils.toHex()
    web3.eth.net.getId()
    .then((netId: any) => {
      networkId = netId;

      const abi2 = registrationArtifacts.abi;
      const networkAddress2 = registrationArtifacts.networks[networkId].address;
      const registration = new web3.eth.Contract(abi2, networkAddress2);
      contracts.push(registration);

      const abi7 = myLogsArtifcats.abi;
      const networkAddress7 = myLogsArtifcats.networks[networkId].address;
      const myLogs = new web3.eth.Contract(abi7, networkAddress7);
      contracts.push(myLogs);

      resolve(contracts);
    });
    });
  }

// public get1

public async convertToHex(data){
  const web3 = window.web3;
// this.ipfsHex =
return await web3.utils.toHex(data);
  // return new Promise((resolve) =>{
  //   const web3 = window.web3;
  //   resolve(web3.utils.toHex(data));
  // })
}

  // public getOrderContract() {
  //   return new Promise((resolve) => {
  //     const web3 = window.web3;
  //     let networkId;
  //     web3.eth.net.getId()
  //       .then((netId: any) => {
  //         networkId = netId;
  //         const abi = marketPlaceArtifacts.abi;
  //         const networkAddress = marketPlaceArtifacts.networks[networkId].address;
  //         const marketplace = new web3.eth.Contract(abi, networkAddress);
  //         resolve(marketplace);
  //       });
  //   });
  // }

  // public getRegistrationContract() {
  //   return new Promise((resolve) => {
  //     const web3 = window.web3;
  //     let networkId;
  //     web3.eth.net.getId()
  //       .then((netId: any) => {
  //         networkId = netId;
  //         const abi = marketPlaceArtifacts.abi;
  //         const networkAddress = marketPlaceArtifacts.networks[networkId].address;
  //         const marketplace = new web3.eth.Contract(abi, networkAddress);
  //         resolve(marketplace);
  //       });
  //   });
  // }

  // public getDocumentContract() {
  //   return new Promise((resolve) => {
  //     const web3 = window.web3;
  //     let networkId;
  //     web3.eth.net.getId()
  //       .then((netId: any) => {
  //         networkId = netId;
  //         const abi = marketPlaceArtifacts.abi;
  //         const networkAddress = marketPlaceArtifacts.networks[networkId].address;
  //         const marketplace = new web3.eth.Contract(abi, networkAddress);
  //         resolve(marketplace);
  //       });
  //   });
  // }

  // public getLogsContract() {
  //   return new Promise((resolve) => {
  //     const web3 = window.web3;
  //     let networkId;
  //     web3.eth.net.getId()
  //       .then((netId: any) => {
  //         networkId = netId;
  //         const abi = marketPlaceArtifacts.abi;
  //         const networkAddress = marketPlaceArtifacts.networks[networkId].address;
  //         const marketplace = new web3.eth.Contract(abi, networkAddress);
  //         resolve(marketplace);
  //       });
  //   });
  // }

  public convertPriceToEther(price) {
    const web3 = window.web3;
    return web3.utils.toWei(price.toString(), 'Ether');
  }

  public convertEtherToPrice(price) {
    const web3 = window.web3;
    return web3.utils.fromWei(price.toString(), 'Ether');
  }

  public getEtherBalance(account) {
    return new Promise((resolve) => {
      const web3 = window.web3;
      const balance = web3.eth.getBalance(account)
        .then(ba => {
          resolve(web3.utils.fromWei(ba, 'Ether'));
        });
    });
  }

}
