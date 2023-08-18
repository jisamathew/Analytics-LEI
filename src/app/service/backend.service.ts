import { Injectable } from '@angular/core'
import { Web3Service } from './web3.service'
import { IpfsService } from './ipfs.service'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Location } from '@angular/common'

import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http'

declare var require
const bytes32 = require('bytes32')
const convertString = require('convert-string')
const utf8 = require('utf8')

var JSZip = require('jszip') //used for qrcode
var FileSaver = require('file-saver') //used for qrcode
var qr = require('qr-image') //used for qrcode
var QRCode = require('qrcode')
var axios = require("axios").default;
import * as moment from 'moment';

var options = {
  method: 'GET',
  url: 'https://world-clock.p.rapidapi.com/json/utc/now',
  headers: {
    'x-rapidapi-host': 'world-clock.p.rapidapi.com',
    'x-rapidapi-key': '3daf889109msh105101485f48d01p12e662jsnaa5e6cda106c'
  }
};

declare var Buffer

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  agency: any
  PLNo: any
  carrierName: any

  globalHash: any
  globalRow: any
  bidamount: any
  bidbankA: any
  bidbankN: any
  day: any
  bankName: any
  bid: any
  bankBidAd: any
  bankBidDAmo: any
  endDate: any
  week: any

  constructor(
    public web3: Web3Service,
    private ipfs: IpfsService,
    private snackBar: MatSnackBar,
    private location: Location,
    private httpClient: HttpClient
  ) {}
  accountNumber: any
  productName: any
  productPrice: any
  show = true
  totalProduct = []
  Order = []
  docs = []
  public marketPlace: any
  public registration: any
  public orders: any
  public escrow: any
  public documents: any
  public logs: any
  orderNo: any
  balance: any
  price: any
  resultArray = []
  count = 0
  lcNum: any
  bol: any
  plNum: any
  CINum:any;
  bank: any
  VG: any
  showalert = true
  durationInSeconds = 5
  ipfsConverted: any
  ipfsConverted2:any;
  ipfsConverted3:any;
  ipfsConverted4:any;

  message = 'User Not Registered!'
  action = 'Please Signup.'
  nameFromTS = 'Trade TRip User COnsinee'
  SignedIn: boolean
  //  SignedIn=false;//landing page
  // SignedIn=true;//for other pages
  consigneeLoggedIn = false
  sellerSignedIn = false
  consigneeName: string
  public cBank = '0x461994192BACd8734d4bCC5f2f70D69d3428B958'
  public sBank = '0x58d256712F73407A1551a2C75B6048E305df3BF9'

  dat: any
  dat2: any

  bolData = []

  loopData: any
  tokenValue: any;
  publishDate:any;
  pubDate:any;
  getProductsfromCookie() {
    return new Promise((res, rej) => {
      var ca = document.cookie.split(';')
      var oArray = new Array();
      console.log('value getting from cookie');
      console.log(c)
      var total_price = 0
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i].split('=')
        var products = c[0]
        var quan = c[1]
        var price = c[2]
        var actualprice = c[3]
        var vend = c[4]
        var prodCode = c[5]
        // var filesforUsr = {
        //   prodName: products,
        //   quantity: quan,
        //   prodPrice: price,
        //   manufacturer: vend,
        // };
        // oArray.push(filesforUsr);
        oArray.push({
          prodName: products,
          quantity: quan,
          prodPrice: price,
          actualAmount:actualprice,
          manufacturer: vend,
          productCode:prodCode
        })
      }
      res(oArray)
    })
  }

  getSellerAddress(seller) {
    return new Promise((res, rej) => {
      console.log('getSellerAddress')
      console.log(seller)
      this.bank = bytes32({ input: seller })
      this.web3.getAllContract().then((contractRes: any) => {
        this.registration = contractRes[1]
        this.registration.methods
          .retselleradd(this.bank)
          .call()
          .then((v) => {
            console.log(v)
            res(v)
          })
      })
    })
  }

  returnBankAddress(bankName) {
    return new Promise((resp, rej) => {
      this.bank = bytes32({ input: bankName })
      this.web3.getAllContract().then((contractRes: any) => {
        this.registration = contractRes[1]
        this.registration.methods
          .retbankadd(this.bank)
          .call()
          .then((v) => {
            console.log(v)
            resp(v)
          })
      })
    })
    // throw new Error('Method not implemented.');
  }

  getUserHashType() {
    return new Promise((res, rej) => {
      this.web3.loadBlockChainData().then((accountData: any) => {
        // console.log(accountData[0])
        this.accountNumber = accountData[0]
        this.web3.getAllContract().then((contractRes: any) => {
          this.registration = contractRes[1]
          this.registration.methods
            .getUserHashType(this.accountNumber)
            .call()
            .then((user) => {
              this.ipfs.getHashFromIPFS(user[0]).then((data: any) => {
                this.ipfsConverted = JSON.parse(
                  Buffer.from(data.value.buffer).toString(),
                )
                res(this.ipfsConverted)
              })
            })
        })
      })
    })
  }

  getUserData(address) {
    return new Promise((res, rej) => {
      this.web3.getAllContract().then((contractRes: any) => {
        this.registration = contractRes[1]
        this.registration.methods
          .getUserHashType(address)
          .call()
          .then((user) => {
            this.ipfs.getHashFromIPFS(user[0]).then((data: any) => {
              this.ipfsConverted = JSON.parse(
                Buffer.from(data.value.buffer).toString(),
              )
              // console.log(this.ipfsConverted)
              // this.message = "Hello "+ this.ipfsConverted.firstName+" "+this.ipfsConverted.lastName;
              // var sellername = data[0].manufacturer;
              res(this.ipfsConverted)
            })
          })
      })
    })
  }

  // applyLC(orderNo) {
  //   return new Promise((resp, rej) => {
  //     var price = 1
  //     this.getUserHashType().then((user: any) => {
  //       // console.log(user)
  //       // console.log(user.bankAddress)
  //       this.web3.getAllContract().then((contractRes: any) => {
  //         this.escrow = contractRes[3]
  //         // this..meth
  //         this.orderNo = bytes32({ input: orderNo })
  //         this.price = this.web3.convertPriceToEther(price)
  //         this.escrow.methods
  //           .ApplyForLC(user.bankAddress, this.orderNo)
  //           .send({ from: this.accountNumber, value: this.price })
  //           .once('receipt', (receipt) => {
  //             console.log(receipt)
  //             this.snackBar.open('LC Requested', 'Check order table', {
  //               duration: 3000,
  //             })
  //             // this.cookieDeletion();
  //             this.redirectBack();
              
  //             resp(receipt)
  //           })
  //       })
  //     })
  //   })
  // }

  applyLC(orderNo) {
    return new Promise((resp, rej) => {
      var price;
      this.getUserHashType().then((user: any) => {
        this.web3.getAllContract().then((contractRes: any) => {
          this.escrow = contractRes[3]
          this.orderNo = bytes32({ input: orderNo })
          this.returnBids(orderNo).then((result:any) => {
            console.warn("prinitng the checking conditions");
            console.log(result);
            if(result[0] && result[1]){
              this.getProductsinOrder(orderNo).then((product: any) => {
                this.getUSD().subscribe((usd:any)=>{
                  var USD = usd.USD;
                  console.log(USD);
                
              price =(parseFloat(product.actualAmount) - result[5])/USD;
                console.log('actualamt');
                console.log(product.actualAmount)
                console.log('result[5]')
                console.log(result[5]);
                console.log('price reduced')
                console.log(price)
                // this.bidamount = parseInt(bid[5])/USD;
                // console.log(this.bidamount)
                this.price = this.web3.convertPriceToEther(price);
 

          // this.price = this.web3.convertPriceToEther(price);
          this.bankBidAd = result[4];
          this.bankBidDAmo = result[5];
          console.log(this.price);
              this.escrow.methods
              .ApplyForLCBid(user.bankAddress, this.orderNo,this.bankBidAd,this.bankBidDAmo)
              .send({ from: this.accountNumber, value: this.price })
              .once('receipt', (receipt) => {
                console.log(receipt)
                this.snackBar.open('LC Requested', 'Check order table', {
                  duration: 3000,
                })
                // this.cookieDeletion();
                this.redirectBack();
                
                resp(receipt)
              }) 
              });
            });
            }else{
              this.getProductsinOrder(orderNo).then((product: any) => {
                console.log(product);
                // price = parseFloat(product.actualAmount) - result[5];
                price = parseFloat(product.prodPrice);
          this.price = this.web3.convertPriceToEther(price);
          console.log(this.price);
          this.escrow.methods
          .ApplyForLC(user.bankAddress, this.orderNo)
          .send({ from: this.accountNumber, value: this.price })
          .once('receipt', (receipt) => {
            console.log(receipt)
            this.snackBar.open('LC Requested', 'Check order table', {
              duration: 3000,
            })
            this.redirectBack();
            resp(receipt)
          })
        })

            }
          })

        })
      })
    })
  }


  saveOrderToBC(
    OrderNo,
    dataFile,
    dataFile2,
    consigneeAddress,
    sellerAddress,
    total_price,
    getTimeNow,
  ) {
    return new Promise((res, rej) => {
      this.orderNo = bytes32({ input: OrderNo })
      this.web3.getAllContract().then((contractRes: any) => {
        this.orders = contractRes[2]
        this.orders.methods
          .saveOrderData(
            this.orderNo,
            dataFile,
            dataFile2,
            this.accountNumber,
            sellerAddress,
            total_price,
            getTimeNow,
          )
          .send({ from: this.accountNumber })
          .once('receipt', (receipt) => {
            console.log(receipt)
            this.snackBar.open('Order Placed', 'Check order table', {
              duration: 3000,
            })
            // this.cookieDeletion();
            res(receipt)
          })
      })
    })
  }

  cookieDeletion() {
    return new Promise((resp, rej) => {
      if (navigator.cookieEnabled) {
        var res = document.cookie
        var multiple = res.split(';')
        for (var j = 0; j < multiple.length; j++) {
          var key1 = multiple[j].split('=')
          var keyvalue = key1[0].trim()
          var set_cookie =
            keyvalue + '=1=ven; expires = Thu, 01 Jan 1970 00:00:00 UTC'
          document.cookie = document.cookie + ' ' + set_cookie
          if (document.cookie.length == 0) {
            console.log('cookies completely deleted')
            break
          }
        }
        resp('ok')
      }
    })
  }

  getOrderDetails(OrderNO) {
    return new Promise((respo, rej) => {
      this.web3.getAllContract().then((response: any) => {
        console.log('getOrderData')
        // console.log(response);
        // console.log(OrderNO);
        this.orders = response[2]
        this.escrow = response[3]
        this.orderNo = bytes32({ input: OrderNO });

        this.orders.methods.getOrderData(this.orderNo).call().then((value: any) => {
            // console.log(value);
            this.ipfs.getHashFromIPFS(value).then((data: any) => {
              this.ipfsConverted = JSON.parse(
                Buffer.from(data.value.buffer).toString(),
              );

              // console.log(this.ipfsConverted );
              //  this.getDocuments(this.orderNo).then((ds:any)=>{
              //   console.log(ds);

              //  });
              respo(this.ipfsConverted)
            })
          })
      })
    })
  }

  getDocuments(orderNO) {
    this.docs = []
    return new Promise((resp, rej) => {
      this.web3.getAllContract().then((response: any) => {
        this.escrow = response[3]
        // console.log(this.escrow)
        this.orderNo = bytes32({ input: orderNO })
        this.escrow.methods
          .returnLC2(this.orderNo)
          .call()
          .then((LC2: any) => {
            this.escrow.methods
              .returnLC5(this.orderNo) 
              .call()
              .then((LC5: any) => {
                console.warn(LC2)
                console.warn("printing the status of lcrequested")
                console.warn(LC5)
                this.docs.push(LC2)
                this.docs.push(LC5)
                resp(this.docs)
              })
          })
      })
    })
  }

  getLCDetails(orderNO) {
    this.docs = []
    return new Promise((resp, rej) => {
      this.web3.getAllContract().then((response: any) => {
        this.escrow = response[3]
        // console.log(this.escrow)
        this.orderNo = bytes32({ input: orderNO })
        this.escrow.methods
          .returnLC2(this.orderNo)
          .call()
          .then((LC2: any) => {
            this.escrow.methods
              .returnLC3(LC2)
              .call()
              .then((LC5: any) => {
                this.ipfs.getHashFromIPFS(LC5).then((data: any) => {
                  this.ipfsConverted = JSON.parse(
                    Buffer.from(data.value.buffer).toString(),
                  )
                  resp(this.ipfsConverted)
                })
              })
          })
      })
    })
  }






  getProductsinOrder(orderNO) {
    return new Promise((resp, rej) => {
      this.web3.getAllContract().then((response: any) => {
        this.orders = response[2]
        this.orderNo = bytes32({ input: orderNO })
        this.orders.methods
          .getOArray(this.orderNo)
          .call()
          .then((value: any) => {
            this.ipfs.getHashFromIPFS(value).then((data: any) => {
              this.ipfsConverted = JSON.parse(
                Buffer.from(data.value.buffer).toString(),
              )
              // console.log(this.ipfsConverted );
              resp(this.ipfsConverted)
            })
          })
      })
    })
  }

  getUserOrders() {
    return new Promise((resp, rej) => {
      this.web3.loadBlockChainData().then((accountData: any) => {
        // console.log(accountData[0])
        this.accountNumber = accountData[0]
        this.web3.getAllContract().then((contractRes: any) => {
          this.orders = contractRes[2]
          this.orders.methods
            .getConsigneeOrders(this.accountNumber)
            .call()
            .then((value: any) => {
              console.log("check for consignee's list of order")
              console.log(value)
              resp(value)
            })
        })
      })
    })
  }

  getSellerOrders() {
    return new Promise((resp, rej) => {
      this.web3.loadBlockChainData().then((accountData: any) => {
        // console.log(accountData[0])
        this.accountNumber = accountData[0]
        this.web3.getAllContract().then((contractRes: any) => {
          this.orders = contractRes[2]
          this.orders.methods
            .getSellerOrders(this.accountNumber)
            .call()
            .then((value: any) => {
              console.log(value)
              resp(value)
            })
        })
      })
    })
  }

  getBankIssueLC() {
    return new Promise((resp, rej) => {
      var count = 0;
      var resultArray = [];
      this.web3.loadBlockChainData().then((accountData: any) => {
        // console.log(accountData[0])
        this.accountNumber = accountData[0]
        this.web3.getAllContract().then((contractRes: any) => {
          this.escrow = contractRes[3]
          this.escrow.methods
            .returnOrders(this.accountNumber)
            .call()
            .then((result: any) => {
              // console.log(result)
              // resp(value)
              if (result.length == 0) {
                resp(resultArray)
              } else {
                for (var i = 0; i < result.length; i++) {
                  try {
                    throw i
                  } catch (ii) {
                    this.web3.getUtf8(result[ii]).then((utf: any) => {
                      // console.log("ii data: " + ii + ";" + utf);
                      this.sendII(this.accountNumber, utf).then((data) => {
                        // this.count += 1
                        count++;
                       resultArray.push(data)
                      //  setTimeout(()=>{
                       if (count == result.length) { 
            resp(resultArray);
          }
                      //  },1000);
                        
                      })
                    })
                    // var b = utf8(result[ii]);
                  }
                }
              }
            })
        })
      })
    })
  }

  sendII(addr: any, b: any) {
    console.log(addr, b)
    var count = 0
    var CH
    var resultArray = []
    return new Promise((res, rej) => {
      this.web3.getAllContract().then((contractRes: any) => {
        this.escrow = contractRes[3]

        this.web3.convertToHex(b).then((ord: any) => {
          // console.log(ord)
          this.escrow.methods
            .returnLC1(addr, ord)
            .call()
            .then(function (resultSum) {
              // console.log('amount' + resultSum / 1000000000000000000)
              // console.log(contractRes[3])

              // contractRes[3].methods.returnLC4(ord).call()
              //         .then((result: any) => {
              //           console.log(result)
              //         });
              contractRes[3].methods
                .returnLC4(ord)
                .call()
                // this.escrow.methods.returnLC4(ord).call()
                .then(function (result2) {
                  // console.log('lkljkjkhhjhjjg' + result2)
                  if (result2 == false) {
                    console.log('nope')
                    resultArray.push({
                      0: b,
                      1: result2,
                      2: resultSum,
                      3: ord,
                    })
                    console.log(resultArray)

                    res(resultArray)
                  } else if (result2 == true) {
                    console.log('yup')
                    contractRes[3].methods
                      .returnLC2(ord)
                      .call()
                      .then(function (result3) {
                        // console.log("result3 is" + utf8(result3));
                        // var c = utf8(result3);
                        contractRes[3].methods
                          .returnLC3(result3)
                          .call()
                          .then(function (result4) {
                            resultArray.push({
                              0: b,
                              1: result2,
                              2: resultSum,
                              3: ord,
                              4: result3,
                              5: result4,
                            })
                            console.log(resultArray)
                            res(resultArray)
                          })
                      })
                  } else {
                    console.log('Error')
                  }
                  count++
                })
            }) //1
        })
      })
    })
  }

  saveLC(
    lcNum,
    accountNumber,
    consigneeWalletAddress,
    sellerWallet,
    files,
    order,
    wallets,
    a,
  ) {
    return new Promise((res, rej) => {
      // console.log(
      //   lcNum,
      //   accountNumber,
      //   consigneeWalletAddress,
      //   sellerWallet,
      //   files,
      //   order,
      //   wallets,
      //   a,
      // )
      this.ipfs.saveToIpfs(files).then((ipfsHash: any) => {
        this.lcNum = bytes32({ input: lcNum })
        this.orderNo = bytes32({ input: order })
        this.web3.getAllContract().then((contractRes: any) => {
          this.escrow = contractRes[3]
          this.escrow.methods
            .issueLC(
              this.lcNum,
              accountNumber,
              consigneeWalletAddress,
              sellerWallet,
              ipfsHash,
              this.orderNo,
              wallets,
              a,
            )
            .send({ from: this.accountNumber })
            .once('receipt', (receipt) => {
              console.log(receipt)
              this.snackBar.open('LC issued', 'Check data', { duration: 3000 })
              this.redirectBack();
              res(receipt)
            })
        })
      })

      // App.Escrow.issueLC(LC,App.account,odata.consigneeWalletAddress,odata.sellerWallet,dataFile,order,wallets,odata.TotalAmount,{ from: App.account })
      // .then(function (v) {
      //   console.log(v);
      // });

      res('done')
    })
  }


  // saving lc by bid bank
  saveBidLC(
    lcNum,
    accountNumber,
    files,
    order
  ) {
    return new Promise((res, rej) => {
      this.ipfs.saveToIpfs(files).then((ipfsHash: any) => {
        this.lcNum = bytes32({ input: lcNum })
        this.orderNo = bytes32({ input: order })
        this.web3.getAllContract().then((contractRes: any) => {
          this.escrow = contractRes[3]
          this.escrow.methods
            .issueLCBidBank(
              this.lcNum,
              this.accountNumber,
              ipfsHash,
              this.orderNo
            )
            .send({ from: this.accountNumber })
            .once('receipt', (receipt) => {
              console.log(receipt)
              this.snackBar.open('LC issued', 'Check data', { duration: 3000 })
              this.redirectBack();
              res(receipt)
            })
        })
      })
      res('done')
    })
  }
  // 
  getAgency() {
    return new Promise((resp, rej) => {
      this.web3.getAllContract().then((contractRes: any) => {
        this.registration = contractRes[1]
        this.registration.methods
          .retAgencies()
          .call()
          .then((value: any) => {
            // console.log(value)
            resp(value)
          })
      })
    })
  }

  getAgencyAdd(agency) {
    return new Promise((resp, rej) => {
      this.web3.getAllContract().then((contractRes: any) => {
        this.registration = contractRes[1]
        this.agency = bytes32({ input: agency })
        this.registration.methods
          .retagencyadd(this.agency)
          .call()
          .then((value: any) => {
            // console.log(value)
            resp(value)
          })
      })
    })
  }
  retcarrieradd(carrier) {
    return new Promise((resp, rej) => {
      this.web3.getAllContract().then((contractRes: any) => {
        this.registration = contractRes[1]
        this.agency = bytes32({ input: carrier })
        this.registration.methods
          .retcarrieradd(this.agency)
          .call()
          .then((value: any) => {
            // console.log(value)
            resp(value)
          })
      })
    })
  }

  sellerSavePackingList(
    orderno,
    dataFile,
    PLNo,
    PL_dataFile,
    shippingAgencyAddress,
    products_updated,
  ) {
    return new Promise((res, rej) => {
      this.PLNo = bytes32({ input: PLNo })
      this.orderNo = bytes32({ input: orderno })
      this.web3.getAllContract().then((contractRes: any) => {
        this.orders = contractRes[2]
        this.documents = contractRes[4]
        this.orders.methods
          .sellerSavePackingList(
            this.orderNo,
            dataFile,
            this.PLNo,
            PL_dataFile,
            shippingAgencyAddress,
            products_updated,
          )
          .send({ from: this.accountNumber })
          .once('receipt', (receipt) => {
            console.log(receipt)
            this.snackBar.open('PL generated', 'Check data', { duration: 3000 })
            this.redirectBack();
            res(receipt)
            // console.log(PL_dataFile)
            // console.log(this.PLNo)
            // this.documents.methods.savePLHashSeller(this.orderNo,this.PLNo,PL_dataFile)
            // .send({from: this.accountNumber})
            //     .once('receipt', (receipt) => {
            //       console.log(receipt);
            //       this.snackBar.open("PL created in docs", "Check data", {duration:3000});
            //       // this.cookieDeletion();
            //         res(receipt);

            //     });
          })
      })
    })
  }

  agencySavePackingList(
    orderno,
    dataFile,
    PLNo,
    PL_dataFile,
    carrierAgencyAddress,
  ) {
    return new Promise((res, rej) => {
      this.PLNo = bytes32({ input: PLNo })
      this.orderNo = bytes32({ input: orderno })
      this.orders.methods
        .agencySavePackingList(
          this.orderNo,
          dataFile,
          this.PLNo,
          PL_dataFile,
          carrierAgencyAddress,
        )
        .send({ from: this.accountNumber })
        .once('receipt', (receipt) => {
          console.log(receipt)
          this.snackBar.open('PL created', 'Check data', { duration: 3000 })
          this.redirectBack();
          res(receipt)
        })
    })
  }

  returnAgencyAssignedOrders() {
    return new Promise((resp, rej) => {
      this.web3.loadBlockChainData().then((accountData: any) => {
        // console.log(accountData[0])
        this.accountNumber = accountData[0]
        this.web3.getAllContract().then((contractRes: any) => {
          this.orders = contractRes[2]
          this.orders.methods
            .returnAgencyAssignedOrders(this.accountNumber)
            .call()
            .then((value: any) => {
              // console.log(value)
              resp(value)
            })
        })
      })
    })
  }

  saveAgent(agentName, files) {
    return new Promise((resp, rej) => {
      this.web3.loadBlockChainData().then((accountData: any) => {
        // console.log(accountData[0])
        this.accountNumber = accountData[0]

        this.ipfs.saveToIpfs(files).then((ipfsHash: any) => {
          this.lcNum = bytes32({ input: agentName })
          this.web3.getAllContract().then((contractRes: any) => {
            this.registration = contractRes[1]
            this.registration.methods
              .updateAgent(this.lcNum, this.accountNumber, ipfsHash)
              .send({ from: this.accountNumber })
              .once('receipt', (receipt) => {
                console.log(receipt)
                // this.cookieDeletion();
                resp(receipt)
              })
          })
        })
      })
    })
  }

  retforwardingAgentList() {
    return new Promise((resp, rej) => {
      this.web3.getAllContract().then((contractRes: any) => {
        this.registration = contractRes[1]
        this.registration.methods
          .retforwardingAgentList()
          .call()
          .then((value: any) => {
            // console.log(value)
            resp(value)
          })
      })
    })
  }
  retCarriers() {
    return new Promise((resp, rej) => {
      this.web3.getAllContract().then((contractRes: any) => {
        this.registration = contractRes[1]
        this.registration.methods
          .retCarriers()
          .call()
          .then((value: any) => {
            // console.log(value)
            resp(value)
          })
      })
    })
  }

  retBanks() {
    return new Promise((resp, rej) => {
      this.web3.getAllContract().then((contractRes: any) => {
        this.registration = contractRes[0]
        this.registration.methods
          .retbanks()
          .call()
          .then((value: any) => {
            console.log(value)
            resp(value)
          })
      })
    })
  }

  getPackingListHash(PLNO) {
    return new Promise((resp, rej) => {
      this.web3.getAllContract().then((contractRes: any) => {
        this.documents = contractRes[4]
        this.plNum = bytes32({ input: PLNO })
        // console.log(PLNO)
        // console.log(this.plNum)
        this.documents.methods
          .returnPlIPFSHash(this.plNum)
          .call()
          .then((value: any) => {
            // console.log(value)
            this.ipfs.getHashFromIPFS(value).then((data: any) => {
              this.ipfsConverted = JSON.parse(
                Buffer.from(data.value.buffer).toString(),
              )
              resp(this.ipfsConverted)
            })
          })
      })
    })
  }
//Sending LCNO. Some issue,Check Code Here
  returnPLNO(ord) {
    return new Promise((resp, rej) => {
      this.web3.getAllContract().then((contractRes: any) => {
        this.registration = contractRes[4]
        this.lcNum = bytes32({ input: ord })
        this.registration.methods
          .returnPLNO(this.lcNum)
          .call()
          .then((value: any) => {
            // console.log(value)
            this.registration.methods
              .returnPlIPFSHash(value)
              .call()
              .then((value2: any) => {
                this.ipfs.getHashFromIPFS(value2).then((data: any) => {
                  this.ipfsConverted = JSON.parse(
                    Buffer.from(data.value.buffer).toString(),
                  )
                  resp(this.ipfsConverted)
                })
              })
          })
      })
    })
  }

  returnCarrierAssignedOrders() {
    return new Promise((resp, rej) => {
      this.web3.loadBlockChainData().then((accountData: any) => {
        // console.log(accountData[0])
        this.accountNumber = accountData[0]
        this.web3.getAllContract().then((contractRes: any) => {
          this.orders = contractRes[2]
          this.orders.methods
            .returnCarrierAssignedOrders(this.accountNumber)
            .call()
            .then((value: any) => {
              // console.log(value)
              resp(value)
            })
        })
      })
    })
  }

  saveBOL(orderno,dataFile,BOLNO,BOL_dataFile,consigneeWalletAddress,tokenID){
    return new Promise((resp, rej)=>{
      this.web3.loadBlockChainData()
      .then((accountData: any) => {
        // console.log(accountData[0])
        this.accountNumber = accountData[0];
      // this.ipfs.saveToIpfs(files).then((ipfsHash:any)=>{
        this.lcNum = bytes32({input:orderno});
        this.bol = bytes32({input:BOLNO});
        this.web3.getAllContract()
        .then((contractRes:any) =>{
          this.orders = contractRes[2];
          this.registration = contractRes[1];
          this.getUserHashType().then((result:any) => {
          // console.log(result);
          this.carrierName = bytes32({input:result.companyName});
          this.orders.methods.saveBOL(this.lcNum,dataFile,this.accountNumber,this.bol,BOL_dataFile,this.carrierName,consigneeWalletAddress,tokenID).send({from: this.accountNumber})
          .once('receipt', (receipt) => {

            
            console.log(receipt);
            var dateRef = new Date();
            var type = "Bill of Lading Generated";
            this.saveLog(this.accountNumber,BOLNO,result.companyName,dateRef,type,result.userRole,this.bol).then((data)=>{
              this.snackBar.open('BoL Generated', 'Check data', { duration: 3000 })
              this.redirectBack();
              resp(data);
            });
          });
        });
      })
    });
    });
    }



    saveLog(shipperAddress, bol, shipName, dateRef, type, UserType,bol2) {
      return new Promise((resp, rej)=>{
      var log_json = {
        Log:
          shipperAddress +
          "," +
          bol +
          "," +
          shipName +
          "," +
          dateRef +
          "," +
          type +
          "," +
          UserType,
      };
      this.ipfs.saveToIpfs(log_json).then((dataFile: any) => {
        var log1_json = {
          row: "1",
          hash: dataFile,
        };
        this.ipfs.saveToIpfs(log1_json).then((dataFile2: any) => {
          this.web3.getAllContract()
          .then((contractRes:any) =>{
          this.logs = contractRes[6];
            this.logs.methods.saveLog(dataFile2,bol2).send({from: this.accountNumber})
            .once('receipt', (receipt) => {
              console.log(receipt);
                resp(receipt);
            });
            });
        });
      });
    });
    }


   
    saveLogView(bol, userName, UserType) {
      return new Promise((resp, rej)=>{
        this.web3.getAllContract()
        .then((contractRes:any) =>{
        this.logs = contractRes[6];
        this.bol = bytes32({input:bol});

      var type = "BoL Accessed";
      var dateRef = new Date();
      console.log(bol, userName, UserType)
      var log_json = {
        Log:
          this.accountNumber +
          "," +
          bol +
          "," +
          userName +
          "," +
          dateRef +
          "," +
          type +
          "," +
          UserType,
      };
      console.log(log_json);

      this.logs.methods.getLog(this.bol).call()
      .then((value:any) => {
        this.ipfs.getHashFromIPFS(value).then((data:any)=>{
          this.ipfsConverted = JSON.parse(Buffer.from(data.value.buffer).toString());
          // console.log(this.ipfsConverted);
          this.globalHash = this.ipfsConverted.hash;
          this.globalRow = this.ipfsConverted.row;
          this.globalRow = this.globalRow + 1;
          this.ipfs.saveToIpfs(log_json).then((dataFile2: any) => {
            var log1_json = {
              row: this.globalRow++,
              hash: this.globalHash + "," + dataFile2,
            };
            this.ipfs.saveToIpfs(log1_json).then((dataFile3: any) => {
              this.logs.methods.saveLog(dataFile3,this.bol).send({from: this.accountNumber})
              .once('receipt', (receipt) => {
                console.log(receipt);
                  resp(receipt);
              });
            });
          });
        })
      });
    });
    });
    }

  saveCommercialInvoice(order, ci_updated, dataFile, CINO, pr_updated) {
    return new Promise((resp, rej) => {
      this.web3.loadBlockChainData().then((accountData: any) => {
        // console.log(accountData[0])
        this.accountNumber = accountData[0]
        // this.ipfs.saveToIpfs(files).then((ipfsHash:any)=>{
        this.lcNum = bytes32({ input: order })
        this.bol = bytes32({ input: CINO })
        this.web3.getAllContract().then((contractRes: any) => {
          this.orders = contractRes[2]
          this.registration = contractRes[1]
          this.getUserHashType().then((result: any) => {
            this.orders.methods
              .saveCommercialInvoice(
                this.lcNum,
                ci_updated,
                dataFile,
                this.bol,
                pr_updated,
              )
              .send({ from: this.accountNumber })
              .once('receipt', (receipt) => {
                console.log(receipt)
                this.snackBar.open('CI Generated', 'Check data', { duration: 3000 })
                this.redirectBack();
                resp(receipt)
              })
          })
        })
      })
    })
  }

  erc721() {
    return new Promise((resp, rej) => {
      this.web3.loadBlockChainData().then((accountData: any) => {
        // console.log(accountData[0])
        this.accountNumber = accountData[0]
        this.web3.getAllContract().then((contractRes: any) => {
          this.orders = contractRes[2]
          var tokenArr = 291289123232

          // console.log(tokenArr)
          var g = 53578

          // this.getUserHashType().then((result:any) => {
          this.orders.methods
            .generateToken(this.accountNumber, tokenArr)
            .send({ from: this.accountNumber })
            .once('receipt', (receipt) => {
              console.log(receipt)
              // this.cookieDeletion();
              resp(receipt);

            })
          // });
        })
      })
    })
  }

  generateQR(qrcode) {
    return new Promise((resp, rej) => {
      var zip = new JSZip()
      var dataQR = qrcode + '/' + this.accountNumber
      // console.log(dataQR)
      var img = zip.folder('QRCODE')
      img.file(
        'QRCode.png',
        qr.image(dataQR, {
          type: 'png',
        }),
        {
          base64: true,
        },
      )
      zip
        .generateAsync({
          type: 'blob',
        })
        .then(function (content) {
          FileSaver.saveAs(content, 'QRCODE.zip')
          resp('success')
        })
    })
  }


  showBOLData(bol) {
    return new Promise((resp, rej) => {
      this.bolData = new Array();
      this.web3.getAllContract().then((contractRes: any) => {
        this.documents = contractRes[4]
        this.orders = contractRes[2]
        this.bol = bytes32({ input: bol })
        this.documents.methods
          .returnBolIPFSHash(this.bol)
          .call()
          .then((value: any) => {
            console.log('value in showbol');
            console.log(value)
            this.ipfs.getHashFromIPFS(value).then((data: any) => {
              this.ipfsConverted = JSON.parse(
                Buffer.from(data.value.buffer).toString(),
              )
              this.bolData.push(this.ipfsConverted)
              this.documents.methods
                .returnOrderNofromBOLNo(this.bol)
                .call()
                .then((order: any) => {
                  this.web3.getUtf8(order).then((or) => {
                    this.getOrderDetails(or).then((OrderDetails: any) => {
                      this.bolData.push(OrderDetails)
                      this.getPackingListHash(OrderDetails.PLNo).then(
                        (PackingListDetails: any) => {
                          this.bolData.push(PackingListDetails)
                          this.getProductsinOrder(or).then((products: any) => {
                            this.bolData.push(products)
                            // var ord = bytes32({input:BOLNO});
                            this.orders.methods
                              .returnExportstatus(order)
                              .call()
                              .then((status: any) => {
                                if (status == true) {
                                  this.orders.methods
                                    .returnDeliveryStatus(order)
                                    .call()
                                    .then((status2: any) => {
                                      if (status2 == true) {
                                        this.bolData.push({
                                          delivered: true,
                                          exported: true,
                                        })
                                      } else {
                                        this.bolData.push({
                                          delivered: false,
                                          exported: true,
                                        })
                                      }
                                    })
                                } else {
                                  this.bolData.push({
                                    delivery: false,
                                    exported: false,
                                  })
                                }
                                resp(this.bolData)
                              })
                          })
                        },
                      )
                    })
                  })
                })
            })
          })
      })
    })
  }
//CI View
getCommercialHash(CINO) {
  return new Promise((resp, rej) => {
    this.web3.getAllContract().then((contractRes: any) => {
      this.documents = contractRes[4]
      this.CINum = bytes32({ input: CINO })
      // console.log(PLNO)
      // console.log(this.plNum)
      this.documents.methods
        .returnCIIPFSHash(this.CINum)
        .call()
        .then((value: any) => {
          // console.log(value)
          this.ipfs.getHashFromIPFS(value).then((data: any) => {
            this.ipfsConverted = JSON.parse(
              Buffer.from(data.value.buffer).toString(),
            )
            resp(this.ipfsConverted)
          })
        })
    })
  })
}
  // Port Authority-Code added by Jisa

  getOrderfromToken(tokenNumber) {
    return new Promise((res, rej) => {
      // console.log('getSellerAddress')
      // console.log(tokenNumber)
      // this.bank = bytes32({input:seller});
      this.web3.getAllContract().then((contractRes: any) => {
        this.orders = contractRes[2]
        this.orders.methods
          .tokToOrdNo(tokenNumber)
          .call()
          .then((v) => {
            // console.log(v)
            this.web3.getUtf8(v).then((or) => {
              res(or)
            })
          })
      })
    })
  }

  getBOLfromToken(tokenNumber) {
    return new Promise((res, rej) => {
      // console.log('getSellerAddress')
      // console.log(tokenNumber)
      // this.bank = bytes32({input:seller});
      this.web3.getAllContract().then((contractRes: any) => {
        this.orders = contractRes[2]
        this.orders.methods
          .tokToBOLNo(tokenNumber)
          .call()
          .then((v) => {
            // console.log(v)
            this.web3.getUtf8(v).then((or) => {
              res(or)
            })
          })
      })
    })
  }
  updateExportStatus(OrderNo) {
    return new Promise((res, rej) => {
      // console.log('in updateexportstatus');
      this.web3.loadBlockChainData().then((accountData: any) => {
        // console.log(accountData[0])
        this.accountNumber = accountData[0]
      this.web3.getAllContract().then((contractRes: any) => {
        this.orders = contractRes[2];
        // console.log(OrderNo);
      this.orderNo = bytes32({ input: OrderNo })
        // console.log(this.accountNumber);
        this.orders.methods.Exportstatus(this.orderNo).send({ from: this.accountNumber }).once('receipt', (receipt) => {
            console.log(receipt);
            // res(receipt)
            var dateRef = new Date()
            var type = 'Export Customs Clearance'
            this.getOrderDetails(OrderNo).then((OrderDetails: any) => {
              this.getUserHashType().then((result: any) => {
                // console.log('get orderdetails');
                // console.log(OrderDetails);
                // console.log('getting user');
                // console.log(result);
                this.saveLogDispatched(
                  this.accountNumber,
                  OrderDetails.BOLNO,
                  result.companyName,
                  type,
                  result.userRole
                ).then((data) => {
                  this.snackBar.open(
                    'Customs Verified at Origin','Export Customs',{ duration: 3000 });
                  res(receipt)
                })
              })
            })
          })
      })
    })
  });
  }
  returnLogView(bol){
    return new Promise((resp, rej)=>{
      var four = [];
      var count = 0;
      var count2 = 0;
      
      var logArray ='';
      // var bol = d[0];
      var newArray = [];
      var g;
      var dataL;
      this.web3.getAllContract()
      .then((contractRes:any) =>{
      this.logs = contractRes[6];
    this.bol = bytes32({input:bol});

    this.logs.methods.getLog(this.bol).call()
    .then((value:any) => {
      this.ipfs.getHashFromIPFS(value).then((ipfsdata:any)=>{
        this.ipfsConverted = JSON.parse(Buffer.from(ipfsdata.value.buffer).toString());
        console.log('hash in backend')
        console.log(this.ipfsConverted.hash);
        var logHashList = this.ipfsConverted.hash;
        var logHash = logHashList.split(',');
        console.log('getting hash one by one');
        console.log(logHash);
        for (var i = 0; i < logHash.length; i++) {
          var j = i;
              count = count + 1;
              g = logHash[j];
      this.ipfs.getHashFromIPFS(g).then((ipfsdata2:any)=>{
        this.ipfsConverted2 = JSON.parse(Buffer.from(ipfsdata2.value.buffer).toString());
        console.log(this.ipfsConverted2)
                 logArray = logArray + "|" + this.ipfsConverted2.Log;
                  console.log("LogArray: " + logArray);
                 dataL = logArray.split("|");
                  console.log("dataL");
                  console.log(dataL);
              
      });
        }
        setTimeout(()=>{
        
        for (var k = 1; k < dataL.length; k++) {
          four = dataL[k].split(",");
          console.log('four');
                  console.log(four) ;
                  newArray.push(four);
                  count2=count2+1;
               if(count2 == dataL.length-1)   {
                console.log('newArray')
                console.log(newArray);
          resp(newArray)
                
               }
        }
      },3000);
       
      });
    })
  
  })
})
  }
  updateImportStatus(OrderNo,consigneeWalletAddress,sellerWallet, tokenID){
    return new Promise((res, rej) => {
      this.web3.loadBlockChainData().then((accountData: any) => {
        // console.log(accountData[0])
        this.accountNumber = accountData[0]


      this.web3.getAllContract().then((contractRes: any) => {
        this.orders = contractRes[2];
        // console.log(OrderNo);
      this.orderNo = bytes32({ input: OrderNo });
      this.tokenValue = bytes32({ input: tokenID });
        // console.log(this.accountNumber);
        this.getOrderDetails(OrderNo).then((OrderDetails: any) => {
          var dateRef = new Date();

          var files = {
            'BOL': 'YES',
            'BOLNO': OrderDetails.BOLNO,
            'BOLToConsignee': OrderDetails.BOLToConsignee,
            'BOLIssuedOn': OrderDetails.BOLIssuedOn,
            'CIAdded': "YES",
            'CINO': OrderDetails.CINO,
            'CIIssuedOn': OrderDetails.CIIssuedOn,
            'LCNo': OrderDetails.LCNo,
            'OrderNo': OrderDetails.OrderNo,
            'PLNo': OrderDetails.PLNo,
            'PLIssuedOn': OrderDetails.PLIssuedOn,

            'SellerAddedPL': "YES",
            'ShippingAgencyPL': "YES",
            'TotalAmount': OrderDetails.TotalAmount,
            'actualAmount': OrderDetails.actualAmount,

            'agencyWalletAddress': OrderDetails.shippingAgencyAddress,
            'carrier': "YES",
            'carrierName': OrderDetails.carrierName,
            'consigneeBank': OrderDetails.bankAddress,
            'consigneeName': OrderDetails.consigneeName,
            'consigneeMob': OrderDetails.consigneeMob,
            'consigneeEmail': OrderDetails.consigneeEmail,
            'consigneeWalletAddress': OrderDetails.consigneeWalletAddress,
            'consigneebankName': OrderDetails.consigneebankName,
            'consignmentNO': OrderDetails.consignmentNO,
            'orderDate': OrderDetails.orderDate,

            // 'orderDelivered': OrderDetails.orderDelivered,
            'orderDelivered': "YES",

            'prodLoc': OrderDetails.prodLoc,
            'prodDelLoc': OrderDetails.prodDelLoc,
            'prodConsigneeAddress': OrderDetails.prodConsigneeAddress,
            'prodConsigneeCountry': OrderDetails.prodConsigneeCountry,

            'seller': OrderDetails.seller,
            'sellerWallet': OrderDetails.sellerWallet,
            'sellerAddress': OrderDetails.sellerAddress,
            'sellerCountry': OrderDetails.sellerCountry,
            'sellerMob': OrderDetails.sellerMob,
            'sellerBank': OrderDetails.sellerBank,
            'shippingAgencyName': OrderDetails.shippingAgencyName,
            'tokenID': OrderDetails.tokenID,

            'PortWallet': this.accountNumber,
            'DateDelivered': dateRef,
          }
        this.ipfs.saveToIpfs(files).then((ipfsHash: any) => {

        this.orders.methods.updateRelease(this.orderNo,ipfsHash,consigneeWalletAddress,sellerWallet,this.tokenValue).send({ from: this.accountNumber }).once('receipt', (receipt) => {
          console.log(receipt);
          var type = "Import Customs Clearance";
            this.getUserHashType().then((result: any) => {
              // console.log('get orderdetails');
              // console.log(OrderDetails);
              // console.log('getting user');
              // console.log(result);
              this.saveLogDispatched(
                this.accountNumber,
                OrderDetails.BOLNO,
                result.companyName,
                type,
                result.userRole
              ).then((data) => {
                this.snackBar.open(
                  'Customs Verified at Destination','Import Customs',{ duration: 3000 });
                  res(receipt);

              })
            })

        })

      })
    });

      });
    });

    });
  }
  // bol,un,ut
  saveLogDispatched(accountNumber,bol, userName,type, UserType) {
    return new Promise((resp, rej) => {
      this.web3.getAllContract().then((contractRes: any) => {
        this.logs = contractRes[6]
        this.bol = bytes32({ input: bol })

        var dateRef = new Date()
        var log_json = {
          Log:
            accountNumber +
            ',' +
            bol +
            ',' +
            userName +
            ',' +
            dateRef +
            ',' +
            type +
            ',' +
            UserType,
        }
        // console.log(log_json)

        this.logs.methods.getLog(this.bol).call().then((value: any) => {
            this.ipfs.getHashFromIPFS(value).then((data: any) => {
              this.ipfsConverted = JSON.parse(
                Buffer.from(data.value.buffer).toString(),
              )
              // console.log(this.ipfsConverted)
              this.globalHash = this.ipfsConverted.hash
              this.globalRow = this.ipfsConverted.row
              this.globalRow = this.globalRow + 1
              this.ipfs.saveToIpfs(log_json).then((dataFile2: any) => {
                var log1_json = {
                  row: this.globalRow++,
                  hash: this.globalHash + ',' + dataFile2,
                }
                this.ipfs.saveToIpfs(log1_json).then((dataFile3: any) => {
                  this.logs.methods
                    .saveLog(dataFile3, this.bol)
                    .send({ from: accountNumber })
                    .once('receipt', (receipt) => {
                      console.log(receipt)
                      resp(receipt)
                    })
                })
              })
            })
          })
      })
    })
  }
  
  redirectBack(): void {
    this.location.back()
  }
  //Code added by Jisa ends Here
//CASH LC - Code added by mithun
cashLC(OrderNo){
  return new Promise((resp, rej) => { 
      console.log('Checking');
      console.log(OrderNo);
      // console.log(user.bankAddress)
      this.web3.getAllContract().then((contractRes: any) => {
        this.web3.loadBlockChainData().then((accountData: any) => {
          console.log(accountData[0])
          console.log(contractRes[3])
          this.accountNumber = accountData[0]
        this.escrow = contractRes[3];
        // this..meth
        this.orderNo = bytes32({ input: OrderNo });
        console.log('order after change');
        console.log(this.orderNo);
        this.getOrderDetails(OrderNo).then((OrderDetails:any)=>{
          this.getLCDetails(OrderNo).then((LCDetails:any)=>{
          console.log(LCDetails);
              // this.getOrderDetails(OrderNo).then((Order: any) => {
                console.log('order data got in cash lc');
                // console.log(resultLC);
                console.log(OrderDetails);
                console.log(this.accountNumber);
                console.log('2nd check');
                console.log(this.orderNo,LCDetails.LC,OrderDetails.consigneeWalletAddress,this.accountNumber,OrderDetails.sellerBank , OrderDetails.TotalAmount);
              this.lcNum = bytes32({ input: LCDetails.LC })
              console.log(this.lcNum);
              var uintTot = this.web3.convertPriceToEther(OrderDetails.TotalAmount);
              // this.web3.getUint256(OrderDetails.TotalAmount).then((uintTot:any)=>{
                console.log(uintTot);

              this.escrow.methods
          .submitTransactionT(this.orderNo,this.lcNum,OrderDetails.consigneeWalletAddress,this.accountNumber,OrderDetails.sellerBank, OrderDetails.TotalAmount)
          .send({ from: this.accountNumber })
          .once('receipt', (receipt) => {
            console.log(receipt)
            // this.cookieDeletion();
            resp(receipt)
          })


            // });

            })
            })
            })
      })
    })

}


returnAdvOrders(){
  return new Promise((resp, rej) => { 
    console.log('Checking');
    var count = 0;
    var resultArray = [];
    // console.log(user.bankAddress)
    this.web3.getAllContract().then((contractRes: any) => {
      this.web3.loadBlockChainData().then((accountData: any) => {
        console.log(accountData[0])
        console.log(contractRes[3])
        this.accountNumber = accountData[0]
      this.escrow = contractRes[3];
      // this..meth
this.escrow.methods.returnAdvOrders(this.accountNumber).call()
.then((result:any) => {
  for (var i = 0; i < result.length; i++) {
    try {
      throw i
    } catch (ii) {
    console.log(result)
    this.web3.getUtf8(result[ii]).then((oor:any)=>{
      console.warn(oor);
    this.escrow.methods.returnLC2(result[ii]).call().then((lcdetails:any)=> {
      this.web3.getUtf8(lcdetails).then((lc:any)=>{
console.warn(lc);
      this.escrow.methods.returnLCStat(lcdetails)
        .call()
        .then((lcStat:any)=> {
console.warn(result[ii]);
          count++;
          resultArray.push({
            0: oor,
            1: lc,
            2: lcStat,
          }); 
          if (count == result.length) { 
            resp(resultArray);
          } else {
            // console.log('ghasfdhgasfdh');
          }
        });
      })
    })
    });
  }
  }
}).catch((err) => {
});
          })
    })
  })
}

  advisoryConfirmation(order) {
    return new Promise((resp, rej) => {
      // console.log('Checking');
      this.orderNo = bytes32({ input: order })
      this.web3.getAllContract().then((contractRes: any) => {
        this.web3.loadBlockChainData().then((accountData: any) => {
          // console.log(accountData[0])
          // console.log(contractRes[3])
          this.accountNumber = accountData[0]
          this.escrow = contractRes[3];
          this.getLCDetails(order).then((d:any) => {
            this.lcNum = bytes32({input: d.LC});
            this.escrow.methods.returnTxnID(this.orderNo).call()
              .then((txID: any) => {
                // console.log(txID);
                console.log(d.sellerBank,d.sellerWallet,this.orderNo,this.lcNum,txID);

              this.escrow.methods
            .confirmTransaction(
              d.sellerBank,d.sellerWallet,this.orderNo,this.lcNum,txID
            )
            .send({ from: this.accountNumber })
            .once('receipt', (receipt) => {
              console.log(receipt)
              this.snackBar.open('Confirmed Fund Transfer', 'Advisory Bank', { duration: 3000 })
              // this.cookieDeletion();
              resp(receipt)
            });
          });
        })
      })
    })
  })
  }

  issuingConfirmation(order) {
    return new Promise((resp, rej) => {
      // console.log('Checking');
      this.orderNo = bytes32({ input: order })
      this.web3.getAllContract().then((contractRes: any) => {
        this.web3.loadBlockChainData().then((accountData: any) => {
          this.accountNumber = accountData[0]
          this.escrow = contractRes[3];
          this.getLCDetails(order).then((d:any) => {
            this.lcNum = bytes32({input: d.LC});
            this.escrow.methods.returnTxnID(this.orderNo).call()
              .then((txID: any) => {
                console.log(d.sellerBank,d.sellerWallet,this.orderNo,this.lcNum,txID);
              this.escrow.methods
            .confirmTransaction(
              this.accountNumber,d.sellerWallet,this.orderNo,this.lcNum,txID
            )
            .send({ from: this.accountNumber })
            .once('receipt', (receipt) => {
              console.log(receipt)
              this.snackBar.open('Fund Transfered', 'Issuing Bank', { duration: 3000 })
              // this.cookieDeletion();
              resp(receipt)
            });
          });
        })
      })
    })
  })
  }

  publishToMarket(order,data){
    return new Promise((resp, rej) => {
      // console.log('Checking');
      this.orderNo = bytes32({ input: order });
      var getTimeNow  = new Date();
      this.publishDate = getTimeNow.getTime();
      var myFutureDate=new Date(getTimeNow);
      var bidClose = myFutureDate.setDate(myFutureDate.getDate()+ 14);
      console.log(this.publishDate);
      console.log(bidClose);


      // this.publishDate = 1641180470;
      // var bidClose = 1642390070;

      this.web3.getAllContract().then((contractRes: any) => {
        this.web3.loadBlockChainData().then((accountData: any) => {
          this.accountNumber = accountData[0]
          this.marketPlace = contractRes[0];

          this.getDate().then((date:any)=>{
            console.log(date.currentDateTime);

              this.marketPlace.methods
            .shiftToMarketPlace(
              this.orderNo,this.accountNumber,this.publishDate,bidClose,
            )
            .send({ from: this.accountNumber })
            .once('receipt', (receipt) => {
              console.log(receipt)
              this.snackBar.open('Published to Marketplace', 'Issuing Bank', { duration: 3000 })
              resp(receipt)
            });
          })

      })
    })
  })
  }

  getBankBids() {
    return new Promise((resp, rej) => {
      var myCurrentDate=new Date();
      var count = 0
    var resultArray = [];
      this.web3.loadBlockChainData().then((accountData: any) => {
        this.web3.getAllContract().then((contractRes: any) => {
          this.marketPlace = contractRes[0];
          this.orders = contractRes[2];
          this.bid = contractRes[7];
          this.accountNumber = accountData[0];
          this.bid.methods
            .returnOL()
            .call()
            .then((value: any) => {
              // resp(value)
              if(value.length>0){
              for (var i = 0; i < value.length; i++) {
                try {
                  throw i
                } catch (ii) {
                // console.log(value);
                this.bid.methods.returnBidsDet(this.accountNumber,value[ii]).call().then((lcdetails:any)=> {

                this.bid.methods.returnlc(this.accountNumber,value[ii]).call().then((bidlcdetails:any)=> {
                  console.log("bidlcdetails")
                  this.orders.methods.getOrderData(value[ii])
                  .call()
                  .then(products => {
                    this.marketPlace.methods
                    .returnIsShifted(value[ii])
                    .call()
                            .then(bids => {
                    //getpublishedDate..value[ii];
                    // this.marketPlace.methods.returnlc(value[ii]).call().then((bidlcdetails:any)=> {
                    this.marketPlace.methods.returnPublishedDate(value[ii]).call().then((publishdate:any)=> {
                      // 
                      // console.log('PUBLISHED DATE : ',publishdate);
                      this.pubDate = publishdate[0];
                      this.ipfs.getHashFromIPFS(products).then((ip) =>{
                        this.ipfsConverted = JSON.parse(Buffer.from(ip.value.buffer).toString()); 
                        console.log(this.ipfsConverted);
                        count++;

                        // var e = "1641302350924";
                        // var c = "1641302350924"; 
                        // this.compareDate(e,c).then((dC:any)=>{
                          this.compareDate(publishdate[1],myCurrentDate).then((dC:any)=>{
                          
                        // })
                        resultArray.push({
                          // 0: this.ipfsConverted,
                          0:lcdetails,
                          1:this.ipfsConverted.OrderNo,
                          2:this.ipfsConverted.consigneeName,
                          3:this.ipfsConverted.seller,
                          4:this.ipfsConverted.SellerAddedPL,
                          5:this.ipfsConverted.ShippingAgencyPL,
                          6:this.ipfsConverted.BOL,
                          7:this.ipfsConverted.CIAdded,
                          8:this.ipfsConverted.PLNo,
                          9:this.ipfsConverted.BOLNO,
                          10:this.ipfsConverted.CINO,
                          11:bids,
                          12:this.accountNumber,
                          13:this.ipfsConverted.sellerWallet,
                          14:new Date(parseInt(this.pubDate)),
                          15:new Date(parseInt(publishdate[1])),
                          16:myCurrentDate,
                          17:dC,
                          18:this.ipfsConverted.orderDelivered,
                          19:bidlcdetails[0],
                          20:bidlcdetails[1]
                        }); 
                        if (count == value.length) { 
                          resp(resultArray);
                        } else {
                          // console.log('ghasfdhgasfdh');
                        
                        }
                      })

                      })
                    })
                    // })   ///here 2

                    });
                  });
                });   /// here  1
                })
              }
              }
            }else{
              rej("no data");
            }
            })
        })
      })
    })
  }

  checkBidLC(order,bank) {
    return new Promise((res, rej) => {
      console.log("check if order number is correct");
      console.log(order);
      this.web3.loadBlockChainData().then((accountData: any) => {
        // console.log(accountData[0])
        this.orderNo = bytes32({ input: order })
        this.accountNumber = accountData[0]
        this.web3.getAllContract().then((contractRes: any) => {
          this.bid = contractRes[7]
          this.bid.methods
            .returnlc(bank,this.orderNo)
            .call()
            .then((data) => {
              
                res(data);
              
            })
        })
      })
    })
  }


  formatDate(date){
    return new Promise((resp,rej)=>{
      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();
      resp(day + '/' + parseInt(monthIndex + 1) + '/' + year)
      // return day + '/' + parseInt(monthIndex + 1) + '/' + year;
    })

}

  sendbid(order, data){
    return new Promise((resp, rej) => {
      this.web3.loadBlockChainData().then((accountData: any) => {
        this.web3.getAllContract().then((contractRes: any) => {
          this.orders = contractRes[0];
          this.bid = contractRes[7];
          this.accountNumber = accountData[0]
          this.orderNo = bytes32({ input: order });
          this.orders.methods
          .placeBid(this.accountNumber,this.orderNo,data)
          .send({ from: this.accountNumber })
          .once('receipt', (receipt) => {
            console.log(receipt)
            // this.cookieDeletion();
            resp(receipt)
          })
         
        })
      })
    });
  }

  returnBids(order){
    return new Promise((resp, rej) => {
      this.web3.loadBlockChainData().then((accountData: any) => {
        this.web3.getAllContract().then((contractRes: any) => {
          this.orders = contractRes[0];
          this.accountNumber = accountData[0]
          this.orderNo = bytes32({ input: order });
          this.orders.methods
          .returnIsShifted(this.orderNo)
          .call()
                  .then(bids => {

            resp(bids)

                  });
        })
      })
    });
  }

  returnBids2(order){
    return new Promise((resp, rej) => {
      this.web3.loadBlockChainData().then((accountData: any) => {
        this.web3.getAllContract().then((contractRes: any) => {
          this.orders = contractRes[0];
          this.accountNumber = accountData[0]
          // this.orderNo = bytes32({ input: order });
          this.orders.methods
          .returnIsShifted(order)
          .call()
                  .then(bids => {

            resp(bids)

                  });
        })
      })
    });
  }

  approveBid(data){
    return new Promise((res,rej)=>{
      var order = data.order;
      var bank = data.bankAdd;
      var price = 2300;
      // var price = data.amount;
      var weeks = data.weeks;
      var bidInterest = data.interest;
      var bankName = data.bank;
      var bb = [weeks,bidInterest];
      console.log(bb);

      console.log(order,bank,price,weeks,bidInterest);
      this.web3.loadBlockChainData().then((accountData: any) => {
        this.web3.getAllContract().then((contractRes: any) => {
          this.orders = contractRes[0];
          this.accountNumber = accountData[0]
          this.orderNo = bytes32({ input: order });
          console.log(this.orderNo);
          this.week = bytes32({ input: weeks });
          this.bankName = bytes32({ input: bankName });
          this.orders.methods
          // .approveBid(bank, this.orderNo,bank,weeks,bidInterest,price,this.bankName)
          .approveBid(this.orderNo,bank,weeks,bidInterest,price,this.bankName,bb)
          .send({ from: this.accountNumber})
          .once('receipt', (receipt) => {
            console.log(receipt);
            res(receipt)
          })
         
        })
      })

    });
  }

  // transferFund(data){
  //   return new Promise((res,rej)=>{
  //     var order = data.order;
  //     var seller = data.seller;
  //     var price = 1;
  //     var days = '48 hrs';
  //     console.log(data);
  //       this.returnBids(data.order).then((bid) => {
  //         console.log(bid);
  //         // this.shiftedToMarket = result[0];
  //         // this.bidApproved = result[1];
  //         // this.noofbids = result[3].length;
  //         // this.bidApprovedBank = result[4];
  //       this.bidbankA = bid[4];
  //       this.bidamount = parseInt(bid[5])/336526;
  //       console.log(this.bidamount);
  //       this.web3.getUtf8(bid[2]).then((bN:any)=>{
  //         this.bidbankN = bN;
  //       this.price = this.web3.convertPriceToEther(this.bidamount);
  //       console.log(this.price);
  //       this.web3.loadBlockChainData().then((accountData: any) => {
  //         this.web3.getAllContract().then((contractRes: any) => {
  //           this.orders = contractRes[7];
  //           this.accountNumber = accountData[0]
  //           this.orderNo = bytes32({ input: order });
  //           this.day = bytes32({ input: days });
  //           this.getDate().then((date:any)=>{
  //             console.log(date.currentDateTime);
  //             this.orders.methods
  //             .fundTransfer(this.accountNumber, seller, this.orderNo,date.currentDateTime,bid[5])
  //             .send({ from: this.accountNumber, value:this.price})
  //             .once('receipt', (receipt) => {
  //               console.log(receipt)
  //               // this.cookieDeletion();
  //               res(receipt)
  //             })
  //           });
           
  //         })
  //       })
  //       });
  //         // this.amountrem = parseFloat(data2.prodPrice)-parseFloat(bid[5]);
  //       });
  //   });
  // }
  transferFund(data){
    return new Promise((res,rej)=>{
      var order = data.order;
      var seller = data.seller;
      var price = 1;
      var days = '48 hrs';
      console.log(data);
        this.returnBids(data.order).then((bid) => {
        console.log(bid);
        this.bidbankA = bid[4];
        this.bidamount = parseInt(bid[5])/336526;
        console.log(this.bidamount);
        this.web3.getUtf8(bid[2]).then((bN:any)=>{
        this.bidbankN = bN;
        // this.price = this.web3.convertPriceToEther(this.bidamount);
        // console.log(this.price);
        this.web3.loadBlockChainData().then((accountData: any) => {
          this.web3.getAllContract().then((contractRes: any) => {
            this.orders = contractRes[7];
            this.accountNumber = accountData[0]
            this.orderNo = bytes32({ input: order });
            this.day = bytes32({ input: days });
            this.getDate().then((date:any)=>{
              console.log(date.currentDateTime);
              // this.getINR().subscribe((inr:any)=>{
              //   var INR = inr.INR;
              //   console.log(INR);
              this.getUSD().subscribe((usd:any)=>{
                var USD = usd.USD;
                console.log(USD);

                this.bidamount = parseInt(bid[5])/USD;
                console.log(this.bidamount)
                this.price = this.web3.convertPriceToEther(this.bidamount);

                this.orders.methods
                .fundTransfer(this.accountNumber, seller, this.orderNo,date.currentDateTime,bid[5])
                .send({ from: this.accountNumber, value:this.price})
                .once('receipt', (receipt) => {
                  console.log(receipt)
                  res(receipt)
                })
              })
              
            });
          })
        })
        });
          // this.amountrem = parseFloat(data2.prodPrice)-parseFloat(bid[5]);
        });
    });
  }
  getINR(){
    return this.httpClient.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=INR')
  }
    getUSD(){
      return this.httpClient.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD')
    }


  checkifFundTransferedCon(user,order){
    return new Promise((res,rej)=>{
      this.web3.getAllContract().then((contractRes: any) => {
      this.bid = contractRes[7];
      this.orderNo = bytes32({ input: order });
      this.bid.methods.returnBidsDet(user,this.orderNo).call().then((lcdetails:any)=> {
        res(lcdetails);
      });
    });
    })
  }

  checkifFundTransferedSeller(user,order){
    return new Promise((res,rej)=>{
      this.web3.getAllContract().then((contractRes: any) => {
      this.bid = contractRes[7];
      this.orderNo = bytes32({ input: order });
      this.bid.methods.sellerBidRet(user,this.orderNo).call().then((lcdetails:any)=> {
        res(lcdetails);
      });
    });
    })
  }

  getBankreport() {
    return new Promise((resp, rej) => {
    var count = 0
    var resultArray = [];
      this.web3.loadBlockChainData().then((accountData: any) => {
        this.web3.getAllContract().then((contractRes: any) => {
          this.marketPlace = contractRes[0];
          this.orders = contractRes[2];
          this.bid = contractRes[7];
          this.accountNumber = accountData[0];
          this.bid.methods
            .bidreport(this.accountNumber)
            .call()
            .then((value: any) => {
              // resp(value)
            //   console.log(value);
            //   if(value.length>0){
            resp(value);
            // }else{
            //   rej("no data");
            // }
            })
        })
      })
    })
  }

  getDate(){
    return new Promise((res,rej)=>{
        axios.request(options).then(function (response) {
          console.log(response.data);
                res(response.data)
           
          })
  })
  }


  // sd(){

  sd(){
    return new Promise((res,rej)=>{
      var order = "ORD96";
    this.web3.loadBlockChainData().then((accountData: any) => {
      this.web3.getAllContract().then((contractRes: any) => {
        this.orders = contractRes[7];
        this.accountNumber = accountData[0]
        this.orderNo = bytes32({ input: order });
        console.log(this.orderNo);
        var pR = 1;
        this.price = this.web3.convertPriceToEther(pR);
this.getDate().then((d:any)=>{
this.day = d.currentDateTime;
        // this.day = bytes32({ input: days });
        this.bankName = bytes32({ input: order });
        this.orders.methods
        .fu(this.orderNo,this.day)
        .send({ from: this.accountNumber})
        .once('receipt', (receipt) => {
          console.log(receipt)
          // this.cookieDeletion();
          res(receipt)
        })
      })
       
      })
    })
  })
  }

  dd(){
    return new Promise((res,rej)=>{
      var order = "ORD96";
      this.orderNo = bytes32({ input: order });
      this.web3.loadBlockChainData().then((accountData: any) => {
        this.accountNumber = accountData[0];


        var getTimeNow  = new Date();
        this.publishDate = getTimeNow.getTime();
        var myFutureDate=new Date(getTimeNow);
        var bidClose = myFutureDate.setDate(myFutureDate.getDate()+ 14);
        console.log(this.publishDate);
        console.log(bidClose);




        this.web3.getAllContract().then((contractRes: any) => {
          this.orders = contractRes[7];
          // this.getDate().then((date:any)=>{
            this.orders.methods
            .sel(this.orderNo)
            .call()
            .then((value: any) => {
              // resp(value)
            //   console.log(value);
            //   if(value.length>0){
            res(value);
            // }else{
            //   rej("no data");
            // }
            })
          // });
         
        })
        // res(response);
     
    })
  })
  }



  saveB(){
    return new Promise((resp, rej) => {
      // console.log('Checking');
      var order = "ORD96";
      this.orderNo = bytes32({ input: order });
      var getTimeNow  = new Date();
      this.publishDate = getTimeNow.getTime();
      var myFutureDate=new Date(getTimeNow);
      var bidClose = myFutureDate.setDate(myFutureDate.getDate()+ 14);
      console.log(this.publishDate);
      console.log(bidClose);


      this.web3.getAllContract().then((contractRes: any) => {
        this.web3.loadBlockChainData().then((accountData: any) => {
          this.accountNumber = accountData[0]
          this.marketPlace = contractRes[0];

          this.getDate().then((date:any)=>{
            console.log(date.currentDateTime);

              this.marketPlace.methods
            .shiftToMarketPlace(
              this.orderNo,this.accountNumber,this.publishDate,bidClose,
            )
            .send({ from: this.accountNumber })
            .once('receipt', (receipt) => {
              console.log(receipt)
              this.snackBar.open('Published to Marketplace', 'Issuing Bank', { duration: 3000 })
              resp(receipt)
            });
          })

      })
    })
  })
  }

  getB() {
    return new Promise((resp, rej) => {
      var myCurrentDate=new Date();
      this.web3.loadBlockChainData().then((accountData: any) => {
        this.web3.getAllContract().then((contractRes: any) => {
          this.marketPlace = contractRes[0];;
          this.accountNumber = accountData[0];
          var order = "ORD96";
          this.orderNo = bytes32({ input: order });
          this.marketPlace.methods.returnPublishedDate(this.orderNo).call().then((publishdate:any)=> {
            // console.log('PUBLISHED DATE : ',publishdate);
            var getTimeNow  = new Date();
            this.publishDate = getTimeNow.getTime();
            console.log(publishdate);
            console.log(this.publishDate);
            this.pubDate = publishdate[0];
            this.endDate = new Date(parseInt(publishdate[1]));
            // this.endDate = parseInt(publishdate[1]);
            console.log(this.endDate);
            // console.log(cur);
            var cur = new Date(this.publishDate);
console.log(cur)
console.log(this.endDate)
            // d1.getTime() === d2.getTime();
            if(this.endDate == getTimeNow){
              console.log("same");
            }else{
              console.log("not");
              
                // alert(diffDays);

            }
            // if(this.endDate.getTime() == getTimeNow.getTime()){
            //   console.log("same");
            // }else{
            //   console.log("not");
            //   var oneDay = 24 * 60 * 60 * 1000; 
            //   var diffDays = (this.endDate.getTime() - getTimeNow.getTime()) / (oneDay);
            //   // var diffDays = (this.endDate.getTime() - getTimeNow.getTime()) / (oneDay);
            //     console.log(diffDays);
            //     // alert(diffDays);

            // }
            resp(publishdate);
          })
        })
      })
    })
  }

  compareDate(end,current){
    return new Promise((res,rej)=>{
// console.log(new Date(parseInt(end)));
// console.log(current);
      // if(current >= end){
        if(new Date(parseInt(current)) >= end){
      res(true);
    }else{
      res(false);
    }
  })
  }


  getPendingBids() {
    return new Promise((resp, rej) => {
      var myCurrentDate=new Date();
      var count = 0
      var resultArray = [];
      this.web3.loadBlockChainData().then((accountData: any) => {
        this.web3.getAllContract().then((contractRes: any) => {
          this.marketPlace = contractRes[0];
          this.orders = contractRes[2];
          this.bid = contractRes[7];
          this.accountNumber = accountData[0];
          this.bid.methods
            .returnSentBids(this.accountNumber)
            .call()
            .then((value: any) => {
              if(value.length>0){
              for (var i = 0; i < value.length; i++) {
                try {
                  throw i
                } catch (ii) {
                this.bid.methods.returnBidsDet(this.accountNumber,value[ii]).call().then((lcdetails:any)=> {
                let lcD = lcdetails[1];
                let ip5:any;
                  this.ipfs.getHashFromIPFS(lcD).then((ip2) =>{
                    this.ipfsConverted2 = JSON.parse(Buffer.from(ip2.value.buffer).toString()); 
                    ip5 = JSON.parse(Buffer.from(ip2.value.buffer).toString()); 
                    console.log(this.ipfsConverted2);

                  this.orders.methods.getOrderData(value[ii])
                  .call().then(products => {
                    this.marketPlace.methods.returnIsShifted(value[ii])
                    .call().then(bids => {
                    this.marketPlace.methods.returnPublishedDate(value[ii]).call().then((publishdate:any)=> {
                        this.pubDate = publishdate[0];
                      this.ipfs.getHashFromIPFS(products).then((ip) =>{
                        this.ipfsConverted = JSON.parse(Buffer.from(ip.value.buffer).toString()); 
                         count++;
                         this.compareDate(publishdate[1],myCurrentDate).then((dC:any)=>{
                          if(lcdetails[0] && !bids[1]){

                           
                            resultArray.push({
                              0:lcdetails,
                              1:this.ipfsConverted.OrderNo,
                              2:this.ipfsConverted.consigneeName,
                              3:this.ipfsConverted.seller,
                              4:this.ipfsConverted.SellerAddedPL,
                              5:this.ipfsConverted.ShippingAgencyPL,
                              6:this.ipfsConverted.BOL,
                              7:this.ipfsConverted.CIAdded,
                              8:this.ipfsConverted.PLNo,
                              9:this.ipfsConverted.BOLNO,
                              10:this.ipfsConverted.CINO,
                              11:bids,
                              12:this.accountNumber,
                              13:this.ipfsConverted.sellerWallet,
                              14:new Date(parseInt(this.pubDate)),
                              15:new Date(parseInt(publishdate[1])),
                              16:myCurrentDate,
                              17:dC,
                              18:ip5.bidAmount,
                              19:ip5.prodPrice,
                              20:this.ipfsConverted2

                            }); 
                            if (count == value.length) { 
                              resp(resultArray);
                            } else {
                            
                            }

                          }else{
                            if (count == value.length) { 
                              resp(resultArray);
                            } else {
                  
                            }
                          }
                      
                      })

                      })

                    })

                    });
                  });


                   })   // ipfsconveted2

                })
              }
              }
            }else{
              rej("no data");
            }
            })
        })
      })
    })
  }

  getRejectedBids() {
    return new Promise((resp, rej) => {
      var myCurrentDate=new Date();
      var count = 0;
      var mixArray = [];
      var resultArray = [];
      this.web3.loadBlockChainData().then((accountData: any) => {
        this.web3.getAllContract().then((contractRes: any) => {
          this.marketPlace = contractRes[0];
          this.orders = contractRes[2];
          this.bid = contractRes[7];
          this.accountNumber = accountData[0];
          this.bid.methods
            .returnSentBids(this.accountNumber)
            .call()
            .then((value: any) => {
              if(value.length>0){
              for (var i = 0; i < value.length; i++) {
                try {
                  throw i
                } catch (ii) {
                this.bid.methods.returnBidsDet(this.accountNumber,value[ii]).call().then((lcdetails:any)=> {
                  let lcD1 = lcdetails[1];
                  let ip6:any;
                    this.ipfs.getHashFromIPFS(lcD1).then((ip2) =>{
                          this.ipfsConverted3 = JSON.parse(Buffer.from(ip2.value.buffer).toString()); 
                          ip6 = JSON.parse(Buffer.from(ip2.value.buffer).toString()); 
                 
                          console.log(this.ipfsConverted3);

                  this.orders.methods.getOrderData(value[ii])
                  .call().then(products => {
                    this.marketPlace.methods
                    .returnIsShifted(value[ii])
                    .call().then(bids => {
                    this.marketPlace.methods.returnPublishedDate(value[ii]).call().then((publishdate:any)=> {
                       this.pubDate = publishdate[0];
                        this.ipfs.getHashFromIPFS(products).then((ip) =>{
                        this.ipfsConverted4 = JSON.parse(Buffer.from(ip.value.buffer).toString()); 
                          count++;
                         this.compareDate(publishdate[1],myCurrentDate).then((dC:any)=>{
                          if(lcdetails[0] && bids[1] && bids[4] != this.accountNumber){
                               resultArray.push({
                              0:lcdetails,
                              1:this.ipfsConverted4.OrderNo,
                              2:this.ipfsConverted4.consigneeName,
                              3:this.ipfsConverted4.seller,
                              4:this.ipfsConverted4.SellerAddedPL,
                              5:this.ipfsConverted4.ShippingAgencyPL,
                              6:this.ipfsConverted4.BOL,
                              7:this.ipfsConverted4.CIAdded,
                              8:this.ipfsConverted4.PLNo,
                              9:this.ipfsConverted4.BOLNO,
                              10:this.ipfsConverted4.CINO,
                              11:bids,
                              12:this.accountNumber,
                              13:this.ipfsConverted4.sellerWallet,
                              14:new Date(parseInt(this.pubDate)),
                              15:new Date(parseInt(publishdate[1])),
                              16:myCurrentDate,
                              17:dC,
                              18:ip6.bidAmount,
                              19:ip6.prodPrice

                            }); 
                            if (count == value.length) { 
                              resp(resultArray);
                            } else {
                            
                            }
                          }else{
                            if (count == value.length) { 
                              resp(resultArray);
                            } else {
                  
                            }
                          }
                      
                      })//compare dates end 
                    // });
                      })

                    })

                    });
                  });
                });

                });

                // })
              }
              }
            }else{
              rej("no data");
            }
            })
        })
      })
    })
  }

  getDateBids(start,end){
    return new Promise((resp, rej) => {
      var myCurrentDate=new Date();
      var count = 0;
    var mixArray = [];
    var resultArray = [];
      this.web3.loadBlockChainData().then((accountData: any) => {
        this.web3.getAllContract().then((contractRes: any) => {
          this.marketPlace = contractRes[0];
          this.orders = contractRes[2];
          this.bid = contractRes[7];
          this.accountNumber = accountData[0];
          this.bid.methods
            .returnSentBids(this.accountNumber)
            .call()
            .then((value: any) => {
              if(value.length>0){
              for (var i = 0; i < value.length; i++) {
                try {
                  throw i
                } catch (ii) {
                this.bid.methods.returnBidsDet(this.accountNumber,value[ii]).call().then((lcdetails:any)=> {
// console.log(lcdetails)

//ipfscon2
let lcD = lcdetails[1];
let ip5:any;

                    this.ipfs.getHashFromIPFS(lcD).then((ip2) =>{

                          this.ipfsConverted2 = JSON.parse(Buffer.from(ip2.value.buffer).toString()); 
                         ip5 = JSON.parse(Buffer.from(ip2.value.buffer).toString()); 
                          console.log(this.ipfsConverted2);
                          console.log(ip5);
                         
console.log(ip5.bid_placeddt_new);
var dateString = moment(ip5.bid_placeddt_new).format('DD/MM/YYYY');
console.log(dateString)
                            // this.ipfsConverted2.bid_placeddt
                          // this.ipfsConverted2.bid_placeddt_new

                  this.orders.methods.getOrderData(value[ii])
                  .call()
                  .then(products => {
                    this.marketPlace.methods
                    .returnIsShifted(value[ii])
                    .call()
                            .then(bids => {
                              // console.log(bids);
                    //getpublishedDate..value[ii];
                    this.marketPlace.methods.returnPublishedDate(value[ii]).call().then((publishdate:any)=> {
                      // console.log('PUBLISHED DATE : ',publishdate);
                      this.pubDate = publishdate[0];
                      // console.log(products);
                      this.ipfs.getHashFromIPFS(products).then((ip) =>{
                        this.ipfsConverted = JSON.parse(Buffer.from(ip.value.buffer).toString()); 
                        // console.log(this.ipfsConverted);

                        // this.ipfs.getHashFromIPFS(lcdetails[1]).then((ip2) =>{
                        //   this.ipfsConverted2 = JSON.parse(Buffer.from(ip2.value.buffer).toString()); 
                        //   console.log(this.ipfsConverted2);
                        count++;
                         this.compareDate(publishdate[1],myCurrentDate).then((dC:any)=>{
                          //  if()
                          //  commmented
                          // if(lcdetails[0] && bids[1] && bids[4] != this.accountNumber){

//                           this.ipfs.getHashFromIPFS(lcdetails[1]).then((ip2) =>{

//   this.ipfsConverted2 = JSON.parse(Buffer.from(ip2.value.buffer).toString()); 
//  ip5 = JSON.parse(Buffer.from(ip2.value.buffer).toString()); 
//   console.log(this.ipfsConverted2);
//   console.log(ip5);

if(moment(this.ipfsConverted2.bid_placeddt_new).format('DD/MM/YYYY') >= start.toString() && moment(this.ipfsConverted2.bid_placeddt_new).format('DD/MM/YYYY') <= end.toString()){
  // if(this.ipfsConverted2.bid_placeddt >= start.toString() && this.ipfsConverted2.bid_placeddt <= end.toString()){

// }else{

// }
                          
// this.ipfs.getHashFromIPFS(lcdetails[1]).then((ip2) =>{

//   this.ipfsConverted2 = JSON.parse(Buffer.from(ip2.value.buffer).toString()); 
//  ip5 = JSON.parse(Buffer.from(ip2.value.buffer).toString()); 
//   console.log(this.ipfsConverted2);
//   console.log(ip5);

                            console.log(lcdetails);
                            console.log(bids);
                            // this.ipfs.getHashFromIPFS(lcdetails[1]).then((ip2) =>{
                            //   this.ipfsConverted2 = JSON.parse(Buffer.from(ip2.value.buffer).toString()); 
                            //   // console.log(this.ipfsConverted2);
                            resultArray.push({
                              // 0: this.ipfsConverted,
                              0:lcdetails,
                              1:this.ipfsConverted.OrderNo,
                              2:this.ipfsConverted.consigneeName,
                              3:this.ipfsConverted.seller,
                              4:this.ipfsConverted.SellerAddedPL,
                              5:this.ipfsConverted.ShippingAgencyPL,
                              6:this.ipfsConverted.BOL,
                              7:this.ipfsConverted.CIAdded,
                              8:this.ipfsConverted.PLNo,
                              9:this.ipfsConverted.BOLNO,
                              10:this.ipfsConverted.CINO,
                              11:bids,
                              12:this.accountNumber,
                              13:this.ipfsConverted.sellerWallet,
                              14:new Date(parseInt(this.pubDate)),
                              15:new Date(parseInt(publishdate[1])),
                              16:myCurrentDate,
                              17:dC,
                              18:ip5.bidAmount,
                              19:ip5.prodPrice,
                              20:this.ipfsConverted2
                              // 18:this.ipfsConverted2.bidAmount,
                              // 19:this.ipfsConverted2.prodPrice

                            }); 
                            if (count == value.length) { 
                              resp(resultArray);
                            } else {
                            
                            }
                          
                          // })   //ipfscon2 if 
                          
                            // });

                          // commmented
                          }else{
                            if (count == value.length) { 
                              resp(resultArray);
                            } else {
                  
                            }
                          }
                          // commented
                        // });
                      })//compare dates end 
                    // });
                      })

                    })

                    });
                  });
                });    //ipfsc2

                });

                // })
              }
              }
            }else{
              rej("no data");
            }
            })
        })
      })
    })
  }

  getDataAPI(data){
    // var apik = ''
    return this.httpClient.get('http://localhost:5000/getFromBC',{
      params: new HttpParams().set('appid','gNjT4t4RUhzIyOuPBEl3hPKZqlDvK8XF')
    })
    // .pipe(/)
  }

  createPost(data) {
    return this.httpClient.post(
      'http://localhost:5000/saveToUser',
      data
      // {
      //   headers: new HttpHeaders({
      //     'custom-header': 'post Leela',
      //   }),
      //   observe: 'body',
      // }
    );
  }

  getDBAPI(){
    return this.httpClient.get('https://data-analytics-api-e2qi.onrender.com/api/kyc')
  }
  getTransaction(){
    return this.httpClient.get('https://data-analytics-api-e2qi.onrender.com/api/getTransactions')
  }
  getConversionAPI(){
    return this.httpClient.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,SGD,EUR,INR,USD')

  }
  getLeiCompanyInfo(LEINO){
    return this.httpClient.get( 'https://api.gleif.org/api/v1/lei-records?filter[entity.names]=' + LEINO)
   
  }
  getleiHistory(LEINO){
    // return this.httpClient.get( 'https://ttp-scan.herokuapp.com/getTransactions?lei='+LEINO)
    return this.httpClient.get( 'https://data-analytics-api-e2qi.onrender.com/api/getHistory/'+LEINO)
  }
  saveRoles(hash){
    return new Promise((resp, rej) => {
      this.web3.getAllContract().then((contractRes: any) => {
        this.web3.loadBlockChainData().then((accountData: any) => {
          this.accountNumber = accountData[0]
          this.marketPlace = contractRes[1];
              this.marketPlace.methods
            .saveRole(
              this.accountNumber,hash
            )
            .send({ from: this.accountNumber })
            .once('receipt', (receipt) => {
              console.log(receipt)
              this.snackBar.open('Roles updated', 'Bank', { duration: 3000 })
              resp(receipt)
            });
      })
    })
  })
  }
}



