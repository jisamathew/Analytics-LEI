(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+Ptt":
/*!*****************************************!*\
  !*** ./src/app/service/web3.service.ts ***!
  \*****************************************/
/*! exports provided: Web3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Web3Service", function() { return Web3Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



// const marketPlaceArtifacts = require('../../../build/contracts/MarketPlace.json');
var registrationArtifacts = __webpack_require__(/*! ../../../build/contracts/Registration.json */ "wIt8");
var myLogsArtifcats = __webpack_require__(/*! ../../../build/contracts/Logs.json */ "dOuS");
var createClient = __webpack_require__(/*! ipfs-http-client */ "lOTI");
var Web3 = __webpack_require__(/*! web3 */ "meUc");
var Web3Service = /** @class */ (function () {
    function Web3Service() {
    }
    Web3Service.prototype.checkAndInstantiateWeb3 = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (window.ethereum) {
                _this.messageResult = 'connected';
                window.web3 = new Web3(window.ethereum);
                window.ethereum.enable();
                resolve(_this.messageResult);
            }
            else if (window.web3) {
                _this.messageResult = 'connected';
                window.web3 = new Web3(window.web3.currentProvider);
                resolve(_this.messageResult);
            }
            else {
                _this.messageResult = 'No Erthereum browser detected. you should consider trying MetaMask';
                reject(_this.messageResult);
            }
        });
    };
    Web3Service.prototype.loadBlockChainData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var web3 = window.web3;
            var account = web3.eth.getAccounts();
            if (account !== undefined) {
                resolve(account);
            }
            else {
                _this.messageResult = 'There is no account';
                reject(_this.messageResult);
            }
        });
        0;
    };
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
    Web3Service.prototype.getUtf8 = function (data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var web3 = window.web3;
                        // console.log(web3.utils.toUtf8(data))
                        resolve(web3.utils.toUtf8(data));
                    })];
            });
        });
    };
    Web3Service.prototype.getAllContract = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var web3 = window.web3;
                        var networkId;
                        var contracts = [];
                        // web3.utils.toHex()
                        web3.eth.net.getId()
                            .then(function (netId) {
                            networkId = netId;
                            var abi2 = registrationArtifacts.abi;
                            var networkAddress2 = registrationArtifacts.networks[networkId].address;
                            var registration = new web3.eth.Contract(abi2, networkAddress2);
                            contracts.push(registration);
                            var abi7 = myLogsArtifcats.abi;
                            var networkAddress7 = myLogsArtifcats.networks[networkId].address;
                            var myLogs = new web3.eth.Contract(abi7, networkAddress7);
                            contracts.push(myLogs);
                            resolve(contracts);
                        });
                    })];
            });
        });
    };
    // public get1
    Web3Service.prototype.convertToHex = function (data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var web3;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        web3 = window.web3;
                        return [4 /*yield*/, web3.utils.toHex(data)];
                    case 1: 
                    // this.ipfsHex =
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
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
    Web3Service.prototype.convertPriceToEther = function (price) {
        var web3 = window.web3;
        return web3.utils.toWei(price.toString(), 'Ether');
    };
    Web3Service.prototype.convertEtherToPrice = function (price) {
        var web3 = window.web3;
        return web3.utils.fromWei(price.toString(), 'Ether');
    };
    Web3Service.prototype.getEtherBalance = function (account) {
        return new Promise(function (resolve) {
            var web3 = window.web3;
            var balance = web3.eth.getBalance(account)
                .then(function (ba) {
                resolve(web3.utils.fromWei(ba, 'Ether'));
            });
        });
    };
    Web3Service.ɵfac = function Web3Service_Factory(t) { return new (t || Web3Service)(); };
    Web3Service.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Web3Service, factory: Web3Service.ɵfac, providedIn: 'root' });
    return Web3Service;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Web3Service, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "/VBx":
/*!********************************************!*\
  !*** ./src/app/service/backend.service.ts ***!
  \********************************************/
/*! exports provided: BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _web3_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web3.service */ "+Ptt");
/* harmony import */ var _ipfs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ipfs.service */ "4/d+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









var bytes32 = __webpack_require__(/*! bytes32 */ "Z+Z/");
var convertString = __webpack_require__(/*! convert-string */ "Qi+P");
var utf8 = __webpack_require__(/*! utf8 */ "8d11");
var JSZip = __webpack_require__(/*! jszip */ "xOOu"); //used for qrcode
var FileSaver = __webpack_require__(/*! file-saver */ "Iab2"); //used for qrcode
var qr = __webpack_require__(/*! qr-image */ "S5mm"); //used for qrcode
var QRCode = __webpack_require__(/*! qrcode */ "0FX9");
var axios = __webpack_require__(/*! axios */ "vDqi").default;
var options = {
    method: 'GET',
    url: 'https://world-clock.p.rapidapi.com/json/utc/now',
    headers: {
        'x-rapidapi-host': 'world-clock.p.rapidapi.com',
        'x-rapidapi-key': '3daf889109msh105101485f48d01p12e662jsnaa5e6cda106c'
    }
};
var BackendService = /** @class */ (function () {
    function BackendService(web3, ipfs, snackBar, location, httpClient) {
        this.web3 = web3;
        this.ipfs = ipfs;
        this.snackBar = snackBar;
        this.location = location;
        this.httpClient = httpClient;
        this.show = true;
        this.totalProduct = [];
        this.Order = [];
        this.docs = [];
        this.resultArray = [];
        this.count = 0;
        this.showalert = true;
        this.durationInSeconds = 5;
        this.message = 'User Not Registered!';
        this.action = 'Please Signup.';
        this.nameFromTS = 'Trade TRip User COnsinee';
        //  SignedIn=false;//landing page
        // SignedIn=true;//for other pages
        this.consigneeLoggedIn = false;
        this.sellerSignedIn = false;
        this.cBank = '0x461994192BACd8734d4bCC5f2f70D69d3428B958';
        this.sBank = '0x58d256712F73407A1551a2C75B6048E305df3BF9';
        this.bolData = [];
    }
    BackendService.prototype.getProductsfromCookie = function () {
        return new Promise(function (res, rej) {
            var ca = document.cookie.split(';');
            var oArray = new Array();
            console.log('value getting from cookie');
            console.log(c);
            var total_price = 0;
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i].split('=');
                var products = c[0];
                var quan = c[1];
                var price = c[2];
                var actualprice = c[3];
                var vend = c[4];
                var prodCode = c[5];
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
                    actualAmount: actualprice,
                    manufacturer: vend,
                    productCode: prodCode
                });
            }
            res(oArray);
        });
    };
    BackendService.prototype.getSellerAddress = function (seller) {
        var _this = this;
        return new Promise(function (res, rej) {
            console.log('getSellerAddress');
            console.log(seller);
            _this.bank = bytes32({ input: seller });
            _this.web3.getAllContract().then(function (contractRes) {
                _this.registration = contractRes[1];
                _this.registration.methods
                    .retselleradd(_this.bank)
                    .call()
                    .then(function (v) {
                    console.log(v);
                    res(v);
                });
            });
        });
    };
    BackendService.prototype.returnBankAddress = function (bankName) {
        var _this = this;
        return new Promise(function (resp, rej) {
            _this.bank = bytes32({ input: bankName });
            _this.web3.getAllContract().then(function (contractRes) {
                _this.registration = contractRes[1];
                _this.registration.methods
                    .retbankadd(_this.bank)
                    .call()
                    .then(function (v) {
                    console.log(v);
                    resp(v);
                });
            });
        });
        // throw new Error('Method not implemented.');
    };
    BackendService.prototype.getUserHashType = function () {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.web3.loadBlockChainData().then(function (accountData) {
                // console.log(accountData[0])
                _this.accountNumber = accountData[0];
                _this.web3.getAllContract().then(function (contractRes) {
                    _this.registration = contractRes[1];
                    _this.registration.methods
                        .getUserHashType(_this.accountNumber)
                        .call()
                        .then(function (user) {
                        _this.ipfs.getHashFromIPFS(user[0]).then(function (data) {
                            _this.ipfsConverted = JSON.parse(Buffer.from(data.value.buffer).toString());
                            res(_this.ipfsConverted);
                        });
                    });
                });
            });
        });
    };
    BackendService.prototype.getUserData = function (address) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.web3.getAllContract().then(function (contractRes) {
                _this.registration = contractRes[1];
                _this.registration.methods
                    .getUserHashType(address)
                    .call()
                    .then(function (user) {
                    _this.ipfs.getHashFromIPFS(user[0]).then(function (data) {
                        _this.ipfsConverted = JSON.parse(Buffer.from(data.value.buffer).toString());
                        // console.log(this.ipfsConverted)
                        // this.message = "Hello "+ this.ipfsConverted.firstName+" "+this.ipfsConverted.lastName;
                        // var sellername = data[0].manufacturer;
                        res(_this.ipfsConverted);
                    });
                });
            });
        });
    };
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
    BackendService.prototype.applyLC = function (orderNo) {
        var _this = this;
        return new Promise(function (resp, rej) {
            var price;
            _this.getUserHashType().then(function (user) {
                _this.web3.getAllContract().then(function (contractRes) {
                    _this.escrow = contractRes[3];
                    _this.orderNo = bytes32({ input: orderNo });
                    _this.returnBids(orderNo).then(function (result) {
                        console.warn("prinitng the checking conditions");
                        console.log(result);
                        if (result[0] && result[1]) {
                            _this.getProductsinOrder(orderNo).then(function (product) {
                                _this.getUSD().subscribe(function (usd) {
                                    var USD = usd.USD;
                                    console.log(USD);
                                    price = (parseFloat(product.actualAmount) - result[5]) / USD;
                                    console.log('actualamt');
                                    console.log(product.actualAmount);
                                    console.log('result[5]');
                                    console.log(result[5]);
                                    console.log('price reduced');
                                    console.log(price);
                                    // this.bidamount = parseInt(bid[5])/USD;
                                    // console.log(this.bidamount)
                                    _this.price = _this.web3.convertPriceToEther(price);
                                    // this.price = this.web3.convertPriceToEther(price);
                                    _this.bankBidAd = result[4];
                                    _this.bankBidDAmo = result[5];
                                    console.log(_this.price);
                                    _this.escrow.methods
                                        .ApplyForLCBid(user.bankAddress, _this.orderNo, _this.bankBidAd, _this.bankBidDAmo)
                                        .send({ from: _this.accountNumber, value: _this.price })
                                        .once('receipt', function (receipt) {
                                        console.log(receipt);
                                        _this.snackBar.open('LC Requested', 'Check order table', {
                                            duration: 3000,
                                        });
                                        // this.cookieDeletion();
                                        _this.redirectBack();
                                        resp(receipt);
                                    });
                                });
                            });
                        }
                        else {
                            _this.getProductsinOrder(orderNo).then(function (product) {
                                console.log(product);
                                // price = parseFloat(product.actualAmount) - result[5];
                                price = parseFloat(product.prodPrice);
                                _this.price = _this.web3.convertPriceToEther(price);
                                console.log(_this.price);
                                _this.escrow.methods
                                    .ApplyForLC(user.bankAddress, _this.orderNo)
                                    .send({ from: _this.accountNumber, value: _this.price })
                                    .once('receipt', function (receipt) {
                                    console.log(receipt);
                                    _this.snackBar.open('LC Requested', 'Check order table', {
                                        duration: 3000,
                                    });
                                    _this.redirectBack();
                                    resp(receipt);
                                });
                            });
                        }
                    });
                });
            });
        });
    };
    BackendService.prototype.saveOrderToBC = function (OrderNo, dataFile, dataFile2, consigneeAddress, sellerAddress, total_price, getTimeNow) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.orderNo = bytes32({ input: OrderNo });
            _this.web3.getAllContract().then(function (contractRes) {
                _this.orders = contractRes[2];
                _this.orders.methods
                    .saveOrderData(_this.orderNo, dataFile, dataFile2, _this.accountNumber, sellerAddress, total_price, getTimeNow)
                    .send({ from: _this.accountNumber })
                    .once('receipt', function (receipt) {
                    console.log(receipt);
                    _this.snackBar.open('Order Placed', 'Check order table', {
                        duration: 3000,
                    });
                    // this.cookieDeletion();
                    res(receipt);
                });
            });
        });
    };
    BackendService.prototype.cookieDeletion = function () {
        return new Promise(function (resp, rej) {
            if (navigator.cookieEnabled) {
                var res = document.cookie;
                var multiple = res.split(';');
                for (var j = 0; j < multiple.length; j++) {
                    var key1 = multiple[j].split('=');
                    var keyvalue = key1[0].trim();
                    var set_cookie = keyvalue + '=1=ven; expires = Thu, 01 Jan 1970 00:00:00 UTC';
                    document.cookie = document.cookie + ' ' + set_cookie;
                    if (document.cookie.length == 0) {
                        console.log('cookies completely deleted');
                        break;
                    }
                }
                resp('ok');
            }
        });
    };
    BackendService.prototype.getOrderDetails = function (OrderNO) {
        var _this = this;
        return new Promise(function (respo, rej) {
            _this.web3.getAllContract().then(function (response) {
                console.log('getOrderData');
                // console.log(response);
                // console.log(OrderNO);
                _this.orders = response[2];
                _this.escrow = response[3];
                _this.orderNo = bytes32({ input: OrderNO });
                _this.orders.methods.getOrderData(_this.orderNo).call().then(function (value) {
                    // console.log(value);
                    _this.ipfs.getHashFromIPFS(value).then(function (data) {
                        _this.ipfsConverted = JSON.parse(Buffer.from(data.value.buffer).toString());
                        // console.log(this.ipfsConverted );
                        //  this.getDocuments(this.orderNo).then((ds:any)=>{
                        //   console.log(ds);
                        //  });
                        respo(_this.ipfsConverted);
                    });
                });
            });
        });
    };
    BackendService.prototype.getDocuments = function (orderNO) {
        var _this = this;
        this.docs = [];
        return new Promise(function (resp, rej) {
            _this.web3.getAllContract().then(function (response) {
                _this.escrow = response[3];
                // console.log(this.escrow)
                _this.orderNo = bytes32({ input: orderNO });
                _this.escrow.methods
                    .returnLC2(_this.orderNo)
                    .call()
                    .then(function (LC2) {
                    _this.escrow.methods
                        .returnLC5(_this.orderNo)
                        .call()
                        .then(function (LC5) {
                        console.warn(LC2);
                        console.warn("printing the status of lcrequested");
                        console.warn(LC5);
                        _this.docs.push(LC2);
                        _this.docs.push(LC5);
                        resp(_this.docs);
                    });
                });
            });
        });
    };
    BackendService.prototype.getLCDetails = function (orderNO) {
        var _this = this;
        this.docs = [];
        return new Promise(function (resp, rej) {
            _this.web3.getAllContract().then(function (response) {
                _this.escrow = response[3];
                // console.log(this.escrow)
                _this.orderNo = bytes32({ input: orderNO });
                _this.escrow.methods
                    .returnLC2(_this.orderNo)
                    .call()
                    .then(function (LC2) {
                    _this.escrow.methods
                        .returnLC3(LC2)
                        .call()
                        .then(function (LC5) {
                        _this.ipfs.getHashFromIPFS(LC5).then(function (data) {
                            _this.ipfsConverted = JSON.parse(Buffer.from(data.value.buffer).toString());
                            resp(_this.ipfsConverted);
                        });
                    });
                });
            });
        });
    };
    BackendService.prototype.getProductsinOrder = function (orderNO) {
        var _this = this;
        return new Promise(function (resp, rej) {
            _this.web3.getAllContract().then(function (response) {
                _this.orders = response[2];
                _this.orderNo = bytes32({ input: orderNO });
                _this.orders.methods
                    .getOArray(_this.orderNo)
                    .call()
                    .then(function (value) {
                    _this.ipfs.getHashFromIPFS(value).then(function (data) {
                        _this.ipfsConverted = JSON.parse(Buffer.from(data.value.buffer).toString());
                        // console.log(this.ipfsConverted );
                        resp(_this.ipfsConverted);
                    });
                });
            });
        });
    };
    BackendService.prototype.getUserOrders = function () {
        var _this = this;
        return new Promise(function (resp, rej) {
            _this.web3.loadBlockChainData().then(function (accountData) {
                // console.log(accountData[0])
                _this.accountNumber = accountData[0];
                _this.web3.getAllContract().then(function (contractRes) {
                    _this.orders = contractRes[2];
                    _this.orders.methods
                        .getConsigneeOrders(_this.accountNumber)
                        .call()
                        .then(function (value) {
                        console.log("check for consignee's list of order");
                        console.log(value);
                        resp(value);
                    });
                });
            });
        });
    };
    BackendService.prototype.getSellerOrders = function () {
        var _this = this;
        return new Promise(function (resp, rej) {
            _this.web3.loadBlockChainData().then(function (accountData) {
                // console.log(accountData[0])
                _this.accountNumber = accountData[0];
                _this.web3.getAllContract().then(function (contractRes) {
                    _this.orders = contractRes[2];
                    _this.orders.methods
                        .getSellerOrders(_this.accountNumber)
                        .call()
                        .then(function (value) {
                        console.log(value);
                        resp(value);
                    });
                });
            });
        });
    };
    BackendService.prototype.getBankIssueLC = function () {
        var _this = this;
        return new Promise(function (resp, rej) {
            var count = 0;
            var resultArray = [];
            _this.web3.loadBlockChainData().then(function (accountData) {
                // console.log(accountData[0])
                _this.accountNumber = accountData[0];
                _this.web3.getAllContract().then(function (contractRes) {
                    _this.escrow = contractRes[3];
                    _this.escrow.methods
                        .returnOrders(_this.accountNumber)
                        .call()
                        .then(function (result) {
                        // console.log(result)
                        // resp(value)
                        if (result.length == 0) {
                            resp(resultArray);
                        }
                        else {
                            for (var i = 0; i < result.length; i++) {
                                try {
                                    throw i;
                                }
                                catch (ii) {
                                    _this.web3.getUtf8(result[ii]).then(function (utf) {
                                        // console.log("ii data: " + ii + ";" + utf);
                                        _this.sendII(_this.accountNumber, utf).then(function (data) {
                                            // this.count += 1
                                            count++;
                                            resultArray.push(data);
                                            //  setTimeout(()=>{
                                            if (count == result.length) {
                                                resp(resultArray);
                                            }
                                            //  },1000);
                                        });
                                    });
                                    // var b = utf8(result[ii]);
                                }
                            }
                        }
                    });
                });
            });
        });
    };
    BackendService.prototype.sendII = function (addr, b) {
        var _this = this;
        console.log(addr, b);
        var count = 0;
        var CH;
        var resultArray = [];
        return new Promise(function (res, rej) {
            _this.web3.getAllContract().then(function (contractRes) {
                _this.escrow = contractRes[3];
                _this.web3.convertToHex(b).then(function (ord) {
                    // console.log(ord)
                    _this.escrow.methods
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
                                console.log('nope');
                                resultArray.push({
                                    0: b,
                                    1: result2,
                                    2: resultSum,
                                    3: ord,
                                });
                                console.log(resultArray);
                                res(resultArray);
                            }
                            else if (result2 == true) {
                                console.log('yup');
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
                                        });
                                        console.log(resultArray);
                                        res(resultArray);
                                    });
                                });
                            }
                            else {
                                console.log('Error');
                            }
                            count++;
                        });
                    }); //1
                });
            });
        });
    };
    BackendService.prototype.saveLC = function (lcNum, accountNumber, consigneeWalletAddress, sellerWallet, files, order, wallets, a) {
        var _this = this;
        return new Promise(function (res, rej) {
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
            _this.ipfs.saveToIpfs(files).then(function (ipfsHash) {
                _this.lcNum = bytes32({ input: lcNum });
                _this.orderNo = bytes32({ input: order });
                _this.web3.getAllContract().then(function (contractRes) {
                    _this.escrow = contractRes[3];
                    _this.escrow.methods
                        .issueLC(_this.lcNum, accountNumber, consigneeWalletAddress, sellerWallet, ipfsHash, _this.orderNo, wallets, a)
                        .send({ from: _this.accountNumber })
                        .once('receipt', function (receipt) {
                        console.log(receipt);
                        _this.snackBar.open('LC issued', 'Check data', { duration: 3000 });
                        _this.redirectBack();
                        res(receipt);
                    });
                });
            });
            // App.Escrow.issueLC(LC,App.account,odata.consigneeWalletAddress,odata.sellerWallet,dataFile,order,wallets,odata.TotalAmount,{ from: App.account })
            // .then(function (v) {
            //   console.log(v);
            // });
            res('done');
        });
    };
    // saving lc by bid bank
    BackendService.prototype.saveBidLC = function (lcNum, accountNumber, files, order) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.ipfs.saveToIpfs(files).then(function (ipfsHash) {
                _this.lcNum = bytes32({ input: lcNum });
                _this.orderNo = bytes32({ input: order });
                _this.web3.getAllContract().then(function (contractRes) {
                    _this.escrow = contractRes[3];
                    _this.escrow.methods
                        .issueLCBidBank(_this.lcNum, _this.accountNumber, ipfsHash, _this.orderNo)
                        .send({ from: _this.accountNumber })
                        .once('receipt', function (receipt) {
                        console.log(receipt);
                        _this.snackBar.open('LC issued', 'Check data', { duration: 3000 });
                        _this.redirectBack();
                        res(receipt);
                    });
                });
            });
            res('done');
        });
    };
    // 
    BackendService.prototype.getAgency = function () {
        var _this = this;
        return new Promise(function (resp, rej) {
            _this.web3.getAllContract().then(function (contractRes) {
                _this.registration = contractRes[1];
                _this.registration.methods
                    .retAgencies()
                    .call()
                    .then(function (value) {
                    // console.log(value)
                    resp(value);
                });
            });
        });
    };
    BackendService.prototype.getAgencyAdd = function (agency) {
        var _this = this;
        return new Promise(function (resp, rej) {
            _this.web3.getAllContract().then(function (contractRes) {
                _this.registration = contractRes[1];
                _this.agency = bytes32({ input: agency });
                _this.registration.methods
                    .retagencyadd(_this.agency)
                    .call()
                    .then(function (value) {
                    // console.log(value)
                    resp(value);
                });
            });
        });
    };
    BackendService.prototype.retcarrieradd = function (carrier) {
        var _this = this;
        return new Promise(function (resp, rej) {
            _this.web3.getAllContract().then(function (contractRes) {
                _this.registration = contractRes[1];
                _this.agency = bytes32({ input: carrier });
                _this.registration.methods
                    .retcarrieradd(_this.agency)
                    .call()
                    .then(function (value) {
                    // console.log(value)
                    resp(value);
                });
            });
        });
    };
    BackendService.prototype.sellerSavePackingList = function (orderno, dataFile, PLNo, PL_dataFile, shippingAgencyAddress, products_updated) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.PLNo = bytes32({ input: PLNo });
            _this.orderNo = bytes32({ input: orderno });
            _this.web3.getAllContract().then(function (contractRes) {
                _this.orders = contractRes[2];
                _this.documents = contractRes[4];
                _this.orders.methods
                    .sellerSavePackingList(_this.orderNo, dataFile, _this.PLNo, PL_dataFile, shippingAgencyAddress, products_updated)
                    .send({ from: _this.accountNumber })
                    .once('receipt', function (receipt) {
                    console.log(receipt);
                    _this.snackBar.open('PL generated', 'Check data', { duration: 3000 });
                    _this.redirectBack();
                    res(receipt);
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
                });
            });
        });
    };
    BackendService.prototype.agencySavePackingList = function (orderno, dataFile, PLNo, PL_dataFile, carrierAgencyAddress) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.PLNo = bytes32({ input: PLNo });
            _this.orderNo = bytes32({ input: orderno });
            _this.orders.methods
                .agencySavePackingList(_this.orderNo, dataFile, _this.PLNo, PL_dataFile, carrierAgencyAddress)
                .send({ from: _this.accountNumber })
                .once('receipt', function (receipt) {
                console.log(receipt);
                _this.snackBar.open('PL created', 'Check data', { duration: 3000 });
                _this.redirectBack();
                res(receipt);
            });
        });
    };
    BackendService.prototype.returnAgencyAssignedOrders = function () {
        var _this = this;
        return new Promise(function (resp, rej) {
            _this.web3.loadBlockChainData().then(function (accountData) {
                // console.log(accountData[0])
                _this.accountNumber = accountData[0];
                _this.web3.getAllContract().then(function (contractRes) {
                    _this.orders = contractRes[2];
                    _this.orders.methods
                        .returnAgencyAssignedOrders(_this.accountNumber)
                        .call()
                        .then(function (value) {
                        // console.log(value)
                        resp(value);
                    });
                });
            });
        });
    };
    BackendService.prototype.saveAgent = function (agentName, files) {
        var _this = this;
        return new Promise(function (resp, rej) {
            _this.web3.loadBlockChainData().then(function (accountData) {
                // console.log(accountData[0])
                _this.accountNumber = accountData[0];
                _this.ipfs.saveToIpfs(files).then(function (ipfsHash) {
                    _this.lcNum = bytes32({ input: agentName });
                    _this.web3.getAllContract().then(function (contractRes) {
                        _this.registration = contractRes[1];
                        _this.registration.methods
                            .updateAgent(_this.lcNum, _this.accountNumber, ipfsHash)
                            .send({ from: _this.accountNumber })
                            .once('receipt', function (receipt) {
                            console.log(receipt);
                            // this.cookieDeletion();
                            resp(receipt);
                        });
                    });
                });
            });
        });
    };
    BackendService.prototype.retforwardingAgentList = function () {
        var _this = this;
        return new Promise(function (resp, rej) {
            _this.web3.getAllContract().then(function (contractRes) {
                _this.registration = contractRes[1];
                _this.registration.methods
                    .retforwardingAgentList()
                    .call()
                    .then(function (value) {
                    // console.log(value)
                    resp(value);
                });
            });
        });
    };
    BackendService.prototype.retCarriers = function () {
        var _this = this;
        return new Promise(function (resp, rej) {
            _this.web3.getAllContract().then(function (contractRes) {
                _this.registration = contractRes[1];
                _this.registration.methods
                    .retCarriers()
                    .call()
                    .then(function (value) {
                    // console.log(value)
                    resp(value);
                });
            });
        });
    };
    BackendService.prototype.retBanks = function () {
        var _this = this;
        return new Promise(function (resp, rej) {
            _this.web3.getAllContract().then(function (contractRes) {
                _this.registration = contractRes[0];
                _this.registration.methods
                    .retbanks()
                    .call()
                    .then(function (value) {
                    console.log(value);
                    resp(value);
                });
            });
        });
    };
    BackendService.prototype.getPackingListHash = function (PLNO) {
        var _this = this;
        return new Promise(function (resp, rej) {
            _this.web3.getAllContract().then(function (contractRes) {
                _this.documents = contractRes[4];
                _this.plNum = bytes32({ input: PLNO });
                // console.log(PLNO)
                // console.log(this.plNum)
                _this.documents.methods
                    .returnPlIPFSHash(_this.plNum)
                    .call()
                    .then(function (value) {
                    // console.log(value)
                    _this.ipfs.getHashFromIPFS(value).then(function (data) {
                        _this.ipfsConverted = JSON.parse(Buffer.from(data.value.buffer).toString());
                        resp(_this.ipfsConverted);
                    });
                });
            });
        });
    };
    //Sending LCNO. Some issue,Check Code Here
    BackendService.prototype.returnPLNO = function (ord) {
        var _this = this;
        return new Promise(function (resp, rej) {
            _this.web3.getAllContract().then(function (contractRes) {
                _this.registration = contractRes[4];
                _this.lcNum = bytes32({ input: ord });
                _this.registration.methods
                    .returnPLNO(_this.lcNum)
                    .call()
                    .then(function (value) {
                    // console.log(value)
                    _this.registration.methods
                        .returnPlIPFSHash(value)
                        .call()
                        .then(function (value2) {
                        _this.ipfs.getHashFromIPFS(value2).then(function (data) {
                            _this.ipfsConverted = JSON.parse(Buffer.from(data.value.buffer).toString());
                            resp(_this.ipfsConverted);
                        });
                    });
                });
            });
        });
    };
    BackendService.prototype.returnCarrierAssignedOrders = function () {
        var _this = this;
        return new Promise(function (resp, rej) {
            _this.web3.loadBlockChainData().then(function (accountData) {
                // console.log(accountData[0])
                _this.accountNumber = accountData[0];
                _this.web3.getAllContract().then(function (contractRes) {
                    _this.orders = contractRes[2];
                    _this.orders.methods
                        .returnCarrierAssignedOrders(_this.accountNumber)
                        .call()
                        .then(function (value) {
                        // console.log(value)
                        resp(value);
                    });
                });
            });
        });
    };
    BackendService.prototype.saveBOL = function (orderno, dataFile, BOLNO, BOL_dataFile, consigneeWalletAddress, tokenID) {
        var _this = this;
        return new Promise(function (resp, rej) {
            _this.web3.loadBlockChainData()
                .then(function (accountData) {
                // console.log(accountData[0])
                _this.accountNumber = accountData[0];
                // this.ipfs.saveToIpfs(files).then((ipfsHash:any)=>{
                _this.lcNum = bytes32({ input: orderno });
                _this.bol = bytes32({ input: BOLNO });
                _this.web3.getAllContract()
                    .then(function (contractRes) {
                    _this.orders = contractRes[2];
                    _this.registration = contractRes[1];
                    _this.getUserHashType().then(function (result) {
                        // console.log(result);
                        _this.carrierName = bytes32({ input: result.companyName });
                        _this.orders.methods.saveBOL(_this.lcNum, dataFile, _this.accountNumber, _this.bol, BOL_dataFile, _this.carrierName, consigneeWalletAddress, tokenID).send({ from: _this.accountNumber })
                            .once('receipt', function (receipt) {
                            console.log(receipt);
                            var dateRef = new Date();
                            var type = "Bill of Lading Generated";
                            _this.saveLog(_this.accountNumber, BOLNO, result.companyName, dateRef, type, result.userRole, _this.bol).then(function (data) {
                                _this.snackBar.open('BoL Generated', 'Check data', { duration: 3000 });
                                _this.redirectBack();
                                resp(data);
                            });
                        });
                    });
                });
            });
        });
    };
    BackendService.prototype.saveLog = function (shipperAddress, bol, shipName, dateRef, type, UserType, bol2) {
        var _this = this;
        return new Promise(function (resp, rej) {
            var log_json = {
                Log: shipperAddress +
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
            _this.ipfs.saveToIpfs(log_json).then(function (dataFile) {
                var log1_json = {
                    row: "1",
                    hash: dataFile,
                };
                _this.ipfs.saveToIpfs(log1_json).then(function (dataFile2) {
                    _this.web3.getAllContract()
                        .then(function (contractRes) {
                        _this.logs = contractRes[6];
                        _this.logs.methods.saveLog(dataFile2, bol2).send({ from: _this.accountNumber })
                            .once('receipt', function (receipt) {
                            console.log(receipt);
                            resp(receipt);
                        });
                    });
                });
            });
        });
    };
    BackendService.prototype.saveLogView = function (bol, userName, UserType) {
        var _this = this;
        return new Promise(function (resp, rej) {
            _this.web3.getAllContract()
                .then(function (contractRes) {
                _this.logs = contractRes[6];
                _this.bol = bytes32({ input: bol });
                var type = "BoL Accessed";
                var dateRef = new Date();
                console.log(bol, userName, UserType);
                var log_json = {
                    Log: _this.accountNumber +
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
                _this.logs.methods.getLog(_this.bol).call()
                    .then(function (value) {
                    _this.ipfs.getHashFromIPFS(value).then(function (data) {
                        _this.ipfsConverted = JSON.parse(Buffer.from(data.value.buffer).toString());
                        // console.log(this.ipfsConverted);
                        _this.globalHash = _this.ipfsConverted.hash;
                        _this.globalRow = _this.ipfsConverted.row;
                        _this.globalRow = _this.globalRow + 1;
                        _this.ipfs.saveToIpfs(log_json).then(function (dataFile2) {
                            var log1_json = {
                                row: _this.globalRow++,
                                hash: _this.globalHash + "," + dataFile2,
                            };
                            _this.ipfs.saveToIpfs(log1_json).then(function (dataFile3) {
                                _this.logs.methods.saveLog(dataFile3, _this.bol).send({ from: _this.accountNumber })
                                    .once('receipt', function (receipt) {
                                    console.log(receipt);
                                    resp(receipt);
                                });
                            });
                        });
                    });
                });
            });
        });
    };
    BackendService.prototype.saveCommercialInvoice = function (order, ci_updated, dataFile, CINO, pr_updated) {
        var _this = this;
        return new Promise(function (resp, rej) {
            _this.web3.loadBlockChainData().then(function (accountData) {
                // console.log(accountData[0])
                _this.accountNumber = accountData[0];
                // this.ipfs.saveToIpfs(files).then((ipfsHash:any)=>{
                _this.lcNum = bytes32({ input: order });
                _this.bol = bytes32({ input: CINO });
                _this.web3.getAllContract().then(function (contractRes) {
                    _this.orders = contractRes[2];
                    _this.registration = contractRes[1];
                    _this.getUserHashType().then(function (result) {
                        _this.orders.methods
                            .saveCommercialInvoice(_this.lcNum, ci_updated, dataFile, _this.bol, pr_updated)
                            .send({ from: _this.accountNumber })
                            .once('receipt', function (receipt) {
                            console.log(receipt);
                            _this.snackBar.open('CI Generated', 'Check data', { duration: 3000 });
                            _this.redirectBack();
                            resp(receipt);
                        });
                    });
                });
            });
        });
    };
    BackendService.prototype.erc721 = function () {
        var _this = this;
        return new Promise(function (resp, rej) {
            _this.web3.loadBlockChainData().then(function (accountData) {
                // console.log(accountData[0])
                _this.accountNumber = accountData[0];
                _this.web3.getAllContract().then(function (contractRes) {
                    _this.orders = contractRes[2];
                    var tokenArr = 291289123232;
                    // console.log(tokenArr)
                    var g = 53578;
                    // this.getUserHashType().then((result:any) => {
                    _this.orders.methods
                        .generateToken(_this.accountNumber, tokenArr)
                        .send({ from: _this.accountNumber })
                        .once('receipt', function (receipt) {
                        console.log(receipt);
                        // this.cookieDeletion();
                        resp(receipt);
                    });
                    // });
                });
            });
        });
    };
    BackendService.prototype.generateQR = function (qrcode) {
        var _this = this;
        return new Promise(function (resp, rej) {
            var zip = new JSZip();
            var dataQR = qrcode + '/' + _this.accountNumber;
            // console.log(dataQR)
            var img = zip.folder('QRCODE');
            img.file('QRCode.png', qr.image(dataQR, {
                type: 'png',
            }), {
                base64: true,
            });
            zip
                .generateAsync({
                type: 'blob',
            })
                .then(function (content) {
                FileSaver.saveAs(content, 'QRCODE.zip');
                resp('success');
            });
        });
    };
    BackendService.prototype.showBOLData = function (bol) {
        var _this = this;
        return new Promise(function (resp, rej) {
            _this.bolData = new Array();
            _this.web3.getAllContract().then(function (contractRes) {
                _this.documents = contractRes[4];
                _this.orders = contractRes[2];
                _this.bol = bytes32({ input: bol });
                _this.documents.methods
                    .returnBolIPFSHash(_this.bol)
                    .call()
                    .then(function (value) {
                    console.log('value in showbol');
                    console.log(value);
                    _this.ipfs.getHashFromIPFS(value).then(function (data) {
                        _this.ipfsConverted = JSON.parse(Buffer.from(data.value.buffer).toString());
                        _this.bolData.push(_this.ipfsConverted);
                        _this.documents.methods
                            .returnOrderNofromBOLNo(_this.bol)
                            .call()
                            .then(function (order) {
                            _this.web3.getUtf8(order).then(function (or) {
                                _this.getOrderDetails(or).then(function (OrderDetails) {
                                    _this.bolData.push(OrderDetails);
                                    _this.getPackingListHash(OrderDetails.PLNo).then(function (PackingListDetails) {
                                        _this.bolData.push(PackingListDetails);
                                        _this.getProductsinOrder(or).then(function (products) {
                                            _this.bolData.push(products);
                                            // var ord = bytes32({input:BOLNO});
                                            _this.orders.methods
                                                .returnExportstatus(order)
                                                .call()
                                                .then(function (status) {
                                                if (status == true) {
                                                    _this.orders.methods
                                                        .returnDeliveryStatus(order)
                                                        .call()
                                                        .then(function (status2) {
                                                        if (status2 == true) {
                                                            _this.bolData.push({
                                                                delivered: true,
                                                                exported: true,
                                                            });
                                                        }
                                                        else {
                                                            _this.bolData.push({
                                                                delivered: false,
                                                                exported: true,
                                                            });
                                                        }
                                                    });
                                                }
                                                else {
                                                    _this.bolData.push({
                                                        delivery: false,
                                                        exported: false,
                                                    });
                                                }
                                                resp(_this.bolData);
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    };
    //CI View
    BackendService.prototype.getCommercialHash = function (CINO) {
        var _this = this;
        return new Promise(function (resp, rej) {
            _this.web3.getAllContract().then(function (contractRes) {
                _this.documents = contractRes[4];
                _this.CINum = bytes32({ input: CINO });
                // console.log(PLNO)
                // console.log(this.plNum)
                _this.documents.methods
                    .returnCIIPFSHash(_this.CINum)
                    .call()
                    .then(function (value) {
                    // console.log(value)
                    _this.ipfs.getHashFromIPFS(value).then(function (data) {
                        _this.ipfsConverted = JSON.parse(Buffer.from(data.value.buffer).toString());
                        resp(_this.ipfsConverted);
                    });
                });
            });
        });
    };
    // Port Authority-Code added by Jisa
    BackendService.prototype.getOrderfromToken = function (tokenNumber) {
        var _this = this;
        return new Promise(function (res, rej) {
            // console.log('getSellerAddress')
            // console.log(tokenNumber)
            // this.bank = bytes32({input:seller});
            _this.web3.getAllContract().then(function (contractRes) {
                _this.orders = contractRes[2];
                _this.orders.methods
                    .tokToOrdNo(tokenNumber)
                    .call()
                    .then(function (v) {
                    // console.log(v)
                    _this.web3.getUtf8(v).then(function (or) {
                        res(or);
                    });
                });
            });
        });
    };
    BackendService.prototype.getBOLfromToken = function (tokenNumber) {
        var _this = this;
        return new Promise(function (res, rej) {
            // console.log('getSellerAddress')
            // console.log(tokenNumber)
            // this.bank = bytes32({input:seller});
            _this.web3.getAllContract().then(function (contractRes) {
                _this.orders = contractRes[2];
                _this.orders.methods
                    .tokToBOLNo(tokenNumber)
                    .call()
                    .then(function (v) {
                    // console.log(v)
                    _this.web3.getUtf8(v).then(function (or) {
                        res(or);
                    });
                });
            });
        });
    };
    BackendService.prototype.updateExportStatus = function (OrderNo) {
        var _this = this;
        return new Promise(function (res, rej) {
            // console.log('in updateexportstatus');
            _this.web3.loadBlockChainData().then(function (accountData) {
                // console.log(accountData[0])
                _this.accountNumber = accountData[0];
                _this.web3.getAllContract().then(function (contractRes) {
                    _this.orders = contractRes[2];
                    // console.log(OrderNo);
                    _this.orderNo = bytes32({ input: OrderNo });
                    // console.log(this.accountNumber);
                    _this.orders.methods.Exportstatus(_this.orderNo).send({ from: _this.accountNumber }).once('receipt', function (receipt) {
                        console.log(receipt);
                        // res(receipt)
                        var dateRef = new Date();
                        var type = 'Export Customs Clearance';
                        _this.getOrderDetails(OrderNo).then(function (OrderDetails) {
                            _this.getUserHashType().then(function (result) {
                                // console.log('get orderdetails');
                                // console.log(OrderDetails);
                                // console.log('getting user');
                                // console.log(result);
                                _this.saveLogDispatched(_this.accountNumber, OrderDetails.BOLNO, result.companyName, type, result.userRole).then(function (data) {
                                    _this.snackBar.open('Customs Verified at Origin', 'Export Customs', { duration: 3000 });
                                    res(receipt);
                                });
                            });
                        });
                    });
                });
            });
        });
    };
    BackendService.prototype.returnLogView = function (bol) {
        var _this = this;
        return new Promise(function (resp, rej) {
            var four = [];
            var count = 0;
            var count2 = 0;
            var logArray = '';
            // var bol = d[0];
            var newArray = [];
            var g;
            var dataL;
            _this.web3.getAllContract()
                .then(function (contractRes) {
                _this.logs = contractRes[6];
                _this.bol = bytes32({ input: bol });
                _this.logs.methods.getLog(_this.bol).call()
                    .then(function (value) {
                    _this.ipfs.getHashFromIPFS(value).then(function (ipfsdata) {
                        _this.ipfsConverted = JSON.parse(Buffer.from(ipfsdata.value.buffer).toString());
                        console.log('hash in backend');
                        console.log(_this.ipfsConverted.hash);
                        var logHashList = _this.ipfsConverted.hash;
                        var logHash = logHashList.split(',');
                        console.log('getting hash one by one');
                        console.log(logHash);
                        for (var i = 0; i < logHash.length; i++) {
                            var j = i;
                            count = count + 1;
                            g = logHash[j];
                            _this.ipfs.getHashFromIPFS(g).then(function (ipfsdata2) {
                                _this.ipfsConverted2 = JSON.parse(Buffer.from(ipfsdata2.value.buffer).toString());
                                console.log(_this.ipfsConverted2);
                                logArray = logArray + "|" + _this.ipfsConverted2.Log;
                                console.log("LogArray: " + logArray);
                                dataL = logArray.split("|");
                                console.log("dataL");
                                console.log(dataL);
                            });
                        }
                        setTimeout(function () {
                            for (var k = 1; k < dataL.length; k++) {
                                four = dataL[k].split(",");
                                console.log('four');
                                console.log(four);
                                newArray.push(four);
                                count2 = count2 + 1;
                                if (count2 == dataL.length - 1) {
                                    console.log('newArray');
                                    console.log(newArray);
                                    resp(newArray);
                                }
                            }
                        }, 3000);
                    });
                });
            });
        });
    };
    BackendService.prototype.updateImportStatus = function (OrderNo, consigneeWalletAddress, sellerWallet, tokenID) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.web3.loadBlockChainData().then(function (accountData) {
                // console.log(accountData[0])
                _this.accountNumber = accountData[0];
                _this.web3.getAllContract().then(function (contractRes) {
                    _this.orders = contractRes[2];
                    // console.log(OrderNo);
                    _this.orderNo = bytes32({ input: OrderNo });
                    _this.tokenValue = bytes32({ input: tokenID });
                    // console.log(this.accountNumber);
                    _this.getOrderDetails(OrderNo).then(function (OrderDetails) {
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
                            'PortWallet': _this.accountNumber,
                            'DateDelivered': dateRef,
                        };
                        _this.ipfs.saveToIpfs(files).then(function (ipfsHash) {
                            _this.orders.methods.updateRelease(_this.orderNo, ipfsHash, consigneeWalletAddress, sellerWallet, _this.tokenValue).send({ from: _this.accountNumber }).once('receipt', function (receipt) {
                                console.log(receipt);
                                var type = "Import Customs Clearance";
                                _this.getUserHashType().then(function (result) {
                                    // console.log('get orderdetails');
                                    // console.log(OrderDetails);
                                    // console.log('getting user');
                                    // console.log(result);
                                    _this.saveLogDispatched(_this.accountNumber, OrderDetails.BOLNO, result.companyName, type, result.userRole).then(function (data) {
                                        _this.snackBar.open('Customs Verified at Destination', 'Import Customs', { duration: 3000 });
                                        res(receipt);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    };
    // bol,un,ut
    BackendService.prototype.saveLogDispatched = function (accountNumber, bol, userName, type, UserType) {
        var _this = this;
        return new Promise(function (resp, rej) {
            _this.web3.getAllContract().then(function (contractRes) {
                _this.logs = contractRes[6];
                _this.bol = bytes32({ input: bol });
                var dateRef = new Date();
                var log_json = {
                    Log: accountNumber +
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
                };
                // console.log(log_json)
                _this.logs.methods.getLog(_this.bol).call().then(function (value) {
                    _this.ipfs.getHashFromIPFS(value).then(function (data) {
                        _this.ipfsConverted = JSON.parse(Buffer.from(data.value.buffer).toString());
                        // console.log(this.ipfsConverted)
                        _this.globalHash = _this.ipfsConverted.hash;
                        _this.globalRow = _this.ipfsConverted.row;
                        _this.globalRow = _this.globalRow + 1;
                        _this.ipfs.saveToIpfs(log_json).then(function (dataFile2) {
                            var log1_json = {
                                row: _this.globalRow++,
                                hash: _this.globalHash + ',' + dataFile2,
                            };
                            _this.ipfs.saveToIpfs(log1_json).then(function (dataFile3) {
                                _this.logs.methods
                                    .saveLog(dataFile3, _this.bol)
                                    .send({ from: accountNumber })
                                    .once('receipt', function (receipt) {
                                    console.log(receipt);
                                    resp(receipt);
                                });
                            });
                        });
                    });
                });
            });
        });
    };
    BackendService.prototype.redirectBack = function () {
        this.location.back();
    };
    //Code added by Jisa ends Here
    //CASH LC - Code added by mithun
    BackendService.prototype.cashLC = function (OrderNo) {
        var _this = this;
        return new Promise(function (resp, rej) {
            console.log('Checking');
            console.log(OrderNo);
            // console.log(user.bankAddress)
            _this.web3.getAllContract().then(function (contractRes) {
                _this.web3.loadBlockChainData().then(function (accountData) {
                    console.log(accountData[0]);
                    console.log(contractRes[3]);
                    _this.accountNumber = accountData[0];
                    _this.escrow = contractRes[3];
                    // this..meth
                    _this.orderNo = bytes32({ input: OrderNo });
                    console.log('order after change');
                    console.log(_this.orderNo);
                    _this.getOrderDetails(OrderNo).then(function (OrderDetails) {
                        _this.getLCDetails(OrderNo).then(function (LCDetails) {
                            console.log(LCDetails);
                            // this.getOrderDetails(OrderNo).then((Order: any) => {
                            console.log('order data got in cash lc');
                            // console.log(resultLC);
                            console.log(OrderDetails);
                            console.log(_this.accountNumber);
                            console.log('2nd check');
                            console.log(_this.orderNo, LCDetails.LC, OrderDetails.consigneeWalletAddress, _this.accountNumber, OrderDetails.sellerBank, OrderDetails.TotalAmount);
                            _this.lcNum = bytes32({ input: LCDetails.LC });
                            console.log(_this.lcNum);
                            var uintTot = _this.web3.convertPriceToEther(OrderDetails.TotalAmount);
                            // this.web3.getUint256(OrderDetails.TotalAmount).then((uintTot:any)=>{
                            console.log(uintTot);
                            _this.escrow.methods
                                .submitTransactionT(_this.orderNo, _this.lcNum, OrderDetails.consigneeWalletAddress, _this.accountNumber, OrderDetails.sellerBank, OrderDetails.TotalAmount)
                                .send({ from: _this.accountNumber })
                                .once('receipt', function (receipt) {
                                console.log(receipt);
                                // this.cookieDeletion();
                                resp(receipt);
                            });
                            // });
                        });
                    });
                });
            });
        });
    };
    BackendService.prototype.returnAdvOrders = function () {
        var _this = this;
        return new Promise(function (resp, rej) {
            console.log('Checking');
            var count = 0;
            var resultArray = [];
            // console.log(user.bankAddress)
            _this.web3.getAllContract().then(function (contractRes) {
                _this.web3.loadBlockChainData().then(function (accountData) {
                    console.log(accountData[0]);
                    console.log(contractRes[3]);
                    _this.accountNumber = accountData[0];
                    _this.escrow = contractRes[3];
                    // this..meth
                    _this.escrow.methods.returnAdvOrders(_this.accountNumber).call()
                        .then(function (result) {
                        for (var i = 0; i < result.length; i++) {
                            try {
                                throw i;
                            }
                            catch (ii) {
                                console.log(result);
                                _this.web3.getUtf8(result[ii]).then(function (oor) {
                                    console.warn(oor);
                                    _this.escrow.methods.returnLC2(result[ii]).call().then(function (lcdetails) {
                                        _this.web3.getUtf8(lcdetails).then(function (lc) {
                                            console.warn(lc);
                                            _this.escrow.methods.returnLCStat(lcdetails)
                                                .call()
                                                .then(function (lcStat) {
                                                console.warn(result[ii]);
                                                count++;
                                                resultArray.push({
                                                    0: oor,
                                                    1: lc,
                                                    2: lcStat,
                                                });
                                                if (count == result.length) {
                                                    resp(resultArray);
                                                }
                                                else {
                                                    // console.log('ghasfdhgasfdh');
                                                }
                                            });
                                        });
                                    });
                                });
                            }
                        }
                    }).catch(function (err) {
                    });
                });
            });
        });
    };
    BackendService.prototype.advisoryConfirmation = function (order) {
        var _this = this;
        return new Promise(function (resp, rej) {
            // console.log('Checking');
            _this.orderNo = bytes32({ input: order });
            _this.web3.getAllContract().then(function (contractRes) {
                _this.web3.loadBlockChainData().then(function (accountData) {
                    // console.log(accountData[0])
                    // console.log(contractRes[3])
                    _this.accountNumber = accountData[0];
                    _this.escrow = contractRes[3];
                    _this.getLCDetails(order).then(function (d) {
                        _this.lcNum = bytes32({ input: d.LC });
                        _this.escrow.methods.returnTxnID(_this.orderNo).call()
                            .then(function (txID) {
                            // console.log(txID);
                            console.log(d.sellerBank, d.sellerWallet, _this.orderNo, _this.lcNum, txID);
                            _this.escrow.methods
                                .confirmTransaction(d.sellerBank, d.sellerWallet, _this.orderNo, _this.lcNum, txID)
                                .send({ from: _this.accountNumber })
                                .once('receipt', function (receipt) {
                                console.log(receipt);
                                _this.snackBar.open('Confirmed Fund Transfer', 'Advisory Bank', { duration: 3000 });
                                // this.cookieDeletion();
                                resp(receipt);
                            });
                        });
                    });
                });
            });
        });
    };
    BackendService.prototype.issuingConfirmation = function (order) {
        var _this = this;
        return new Promise(function (resp, rej) {
            // console.log('Checking');
            _this.orderNo = bytes32({ input: order });
            _this.web3.getAllContract().then(function (contractRes) {
                _this.web3.loadBlockChainData().then(function (accountData) {
                    _this.accountNumber = accountData[0];
                    _this.escrow = contractRes[3];
                    _this.getLCDetails(order).then(function (d) {
                        _this.lcNum = bytes32({ input: d.LC });
                        _this.escrow.methods.returnTxnID(_this.orderNo).call()
                            .then(function (txID) {
                            console.log(d.sellerBank, d.sellerWallet, _this.orderNo, _this.lcNum, txID);
                            _this.escrow.methods
                                .confirmTransaction(_this.accountNumber, d.sellerWallet, _this.orderNo, _this.lcNum, txID)
                                .send({ from: _this.accountNumber })
                                .once('receipt', function (receipt) {
                                console.log(receipt);
                                _this.snackBar.open('Fund Transfered', 'Issuing Bank', { duration: 3000 });
                                // this.cookieDeletion();
                                resp(receipt);
                            });
                        });
                    });
                });
            });
        });
    };
    BackendService.prototype.publishToMarket = function (order, data) {
        var _this = this;
        return new Promise(function (resp, rej) {
            // console.log('Checking');
            _this.orderNo = bytes32({ input: order });
            var getTimeNow = new Date();
            _this.publishDate = getTimeNow.getTime();
            var myFutureDate = new Date(getTimeNow);
            var bidClose = myFutureDate.setDate(myFutureDate.getDate() + 14);
            console.log(_this.publishDate);
            console.log(bidClose);
            // this.publishDate = 1641180470;
            // var bidClose = 1642390070;
            _this.web3.getAllContract().then(function (contractRes) {
                _this.web3.loadBlockChainData().then(function (accountData) {
                    _this.accountNumber = accountData[0];
                    _this.marketPlace = contractRes[0];
                    _this.getDate().then(function (date) {
                        console.log(date.currentDateTime);
                        _this.marketPlace.methods
                            .shiftToMarketPlace(_this.orderNo, _this.accountNumber, _this.publishDate, bidClose)
                            .send({ from: _this.accountNumber })
                            .once('receipt', function (receipt) {
                            console.log(receipt);
                            _this.snackBar.open('Published to Marketplace', 'Issuing Bank', { duration: 3000 });
                            resp(receipt);
                        });
                    });
                });
            });
        });
    };
    BackendService.prototype.getBankBids = function () {
        var _this = this;
        return new Promise(function (resp, rej) {
            var myCurrentDate = new Date();
            var count = 0;
            var resultArray = [];
            _this.web3.loadBlockChainData().then(function (accountData) {
                _this.web3.getAllContract().then(function (contractRes) {
                    _this.marketPlace = contractRes[0];
                    _this.orders = contractRes[2];
                    _this.bid = contractRes[7];
                    _this.accountNumber = accountData[0];
                    _this.bid.methods
                        .returnOL()
                        .call()
                        .then(function (value) {
                        // resp(value)
                        if (value.length > 0) {
                            for (var i = 0; i < value.length; i++) {
                                try {
                                    throw i;
                                }
                                catch (ii) {
                                    // console.log(value);
                                    _this.bid.methods.returnBidsDet(_this.accountNumber, value[ii]).call().then(function (lcdetails) {
                                        _this.bid.methods.returnlc(_this.accountNumber, value[ii]).call().then(function (bidlcdetails) {
                                            console.log("bidlcdetails");
                                            _this.orders.methods.getOrderData(value[ii])
                                                .call()
                                                .then(function (products) {
                                                _this.marketPlace.methods
                                                    .returnIsShifted(value[ii])
                                                    .call()
                                                    .then(function (bids) {
                                                    //getpublishedDate..value[ii];
                                                    // this.marketPlace.methods.returnlc(value[ii]).call().then((bidlcdetails:any)=> {
                                                    _this.marketPlace.methods.returnPublishedDate(value[ii]).call().then(function (publishdate) {
                                                        // 
                                                        // console.log('PUBLISHED DATE : ',publishdate);
                                                        _this.pubDate = publishdate[0];
                                                        _this.ipfs.getHashFromIPFS(products).then(function (ip) {
                                                            _this.ipfsConverted = JSON.parse(Buffer.from(ip.value.buffer).toString());
                                                            console.log(_this.ipfsConverted);
                                                            count++;
                                                            // var e = "1641302350924";
                                                            // var c = "1641302350924"; 
                                                            // this.compareDate(e,c).then((dC:any)=>{
                                                            _this.compareDate(publishdate[1], myCurrentDate).then(function (dC) {
                                                                // })
                                                                resultArray.push({
                                                                    // 0: this.ipfsConverted,
                                                                    0: lcdetails,
                                                                    1: _this.ipfsConverted.OrderNo,
                                                                    2: _this.ipfsConverted.consigneeName,
                                                                    3: _this.ipfsConverted.seller,
                                                                    4: _this.ipfsConverted.SellerAddedPL,
                                                                    5: _this.ipfsConverted.ShippingAgencyPL,
                                                                    6: _this.ipfsConverted.BOL,
                                                                    7: _this.ipfsConverted.CIAdded,
                                                                    8: _this.ipfsConverted.PLNo,
                                                                    9: _this.ipfsConverted.BOLNO,
                                                                    10: _this.ipfsConverted.CINO,
                                                                    11: bids,
                                                                    12: _this.accountNumber,
                                                                    13: _this.ipfsConverted.sellerWallet,
                                                                    14: new Date(parseInt(_this.pubDate)),
                                                                    15: new Date(parseInt(publishdate[1])),
                                                                    16: myCurrentDate,
                                                                    17: dC,
                                                                    18: _this.ipfsConverted.orderDelivered,
                                                                    19: bidlcdetails[0],
                                                                    20: bidlcdetails[1]
                                                                });
                                                                if (count == value.length) {
                                                                    resp(resultArray);
                                                                }
                                                                else {
                                                                    // console.log('ghasfdhgasfdh');
                                                                }
                                                            });
                                                        });
                                                    });
                                                    // })   ///here 2
                                                });
                                            });
                                        }); /// here  1
                                    });
                                }
                            }
                        }
                        else {
                            rej("no data");
                        }
                    });
                });
            });
        });
    };
    BackendService.prototype.checkBidLC = function (order, bank) {
        var _this = this;
        return new Promise(function (res, rej) {
            console.log("check if order number is correct");
            console.log(order);
            _this.web3.loadBlockChainData().then(function (accountData) {
                // console.log(accountData[0])
                _this.orderNo = bytes32({ input: order });
                _this.accountNumber = accountData[0];
                _this.web3.getAllContract().then(function (contractRes) {
                    _this.bid = contractRes[7];
                    _this.bid.methods
                        .returnlc(bank, _this.orderNo)
                        .call()
                        .then(function (data) {
                        res(data);
                    });
                });
            });
        });
    };
    BackendService.prototype.formatDate = function (date) {
        return new Promise(function (resp, rej) {
            var day = date.getDate();
            var monthIndex = date.getMonth();
            var year = date.getFullYear();
            resp(day + '/' + parseInt(monthIndex + 1) + '/' + year);
            // return day + '/' + parseInt(monthIndex + 1) + '/' + year;
        });
    };
    BackendService.prototype.sendbid = function (order, data) {
        var _this = this;
        return new Promise(function (resp, rej) {
            _this.web3.loadBlockChainData().then(function (accountData) {
                _this.web3.getAllContract().then(function (contractRes) {
                    _this.orders = contractRes[0];
                    _this.bid = contractRes[7];
                    _this.accountNumber = accountData[0];
                    _this.orderNo = bytes32({ input: order });
                    _this.orders.methods
                        .placeBid(_this.accountNumber, _this.orderNo, data)
                        .send({ from: _this.accountNumber })
                        .once('receipt', function (receipt) {
                        console.log(receipt);
                        // this.cookieDeletion();
                        resp(receipt);
                    });
                });
            });
        });
    };
    BackendService.prototype.returnBids = function (order) {
        var _this = this;
        return new Promise(function (resp, rej) {
            _this.web3.loadBlockChainData().then(function (accountData) {
                _this.web3.getAllContract().then(function (contractRes) {
                    _this.orders = contractRes[0];
                    _this.accountNumber = accountData[0];
                    _this.orderNo = bytes32({ input: order });
                    _this.orders.methods
                        .returnIsShifted(_this.orderNo)
                        .call()
                        .then(function (bids) {
                        resp(bids);
                    });
                });
            });
        });
    };
    BackendService.prototype.returnBids2 = function (order) {
        var _this = this;
        return new Promise(function (resp, rej) {
            _this.web3.loadBlockChainData().then(function (accountData) {
                _this.web3.getAllContract().then(function (contractRes) {
                    _this.orders = contractRes[0];
                    _this.accountNumber = accountData[0];
                    // this.orderNo = bytes32({ input: order });
                    _this.orders.methods
                        .returnIsShifted(order)
                        .call()
                        .then(function (bids) {
                        resp(bids);
                    });
                });
            });
        });
    };
    BackendService.prototype.approveBid = function (data) {
        var _this = this;
        return new Promise(function (res, rej) {
            var order = data.order;
            var bank = data.bankAdd;
            var price = 2300;
            // var price = data.amount;
            var weeks = data.weeks;
            var bidInterest = data.interest;
            var bankName = data.bank;
            var bb = [weeks, bidInterest];
            console.log(bb);
            console.log(order, bank, price, weeks, bidInterest);
            _this.web3.loadBlockChainData().then(function (accountData) {
                _this.web3.getAllContract().then(function (contractRes) {
                    _this.orders = contractRes[0];
                    _this.accountNumber = accountData[0];
                    _this.orderNo = bytes32({ input: order });
                    console.log(_this.orderNo);
                    _this.week = bytes32({ input: weeks });
                    _this.bankName = bytes32({ input: bankName });
                    _this.orders.methods
                        // .approveBid(bank, this.orderNo,bank,weeks,bidInterest,price,this.bankName)
                        .approveBid(_this.orderNo, bank, weeks, bidInterest, price, _this.bankName, bb)
                        .send({ from: _this.accountNumber })
                        .once('receipt', function (receipt) {
                        console.log(receipt);
                        res(receipt);
                    });
                });
            });
        });
    };
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
    BackendService.prototype.transferFund = function (data) {
        var _this = this;
        return new Promise(function (res, rej) {
            var order = data.order;
            var seller = data.seller;
            var price = 1;
            var days = '48 hrs';
            console.log(data);
            _this.returnBids(data.order).then(function (bid) {
                console.log(bid);
                _this.bidbankA = bid[4];
                _this.bidamount = parseInt(bid[5]) / 336526;
                console.log(_this.bidamount);
                _this.web3.getUtf8(bid[2]).then(function (bN) {
                    _this.bidbankN = bN;
                    // this.price = this.web3.convertPriceToEther(this.bidamount);
                    // console.log(this.price);
                    _this.web3.loadBlockChainData().then(function (accountData) {
                        _this.web3.getAllContract().then(function (contractRes) {
                            _this.orders = contractRes[7];
                            _this.accountNumber = accountData[0];
                            _this.orderNo = bytes32({ input: order });
                            _this.day = bytes32({ input: days });
                            _this.getDate().then(function (date) {
                                console.log(date.currentDateTime);
                                // this.getINR().subscribe((inr:any)=>{
                                //   var INR = inr.INR;
                                //   console.log(INR);
                                _this.getUSD().subscribe(function (usd) {
                                    var USD = usd.USD;
                                    console.log(USD);
                                    _this.bidamount = parseInt(bid[5]) / USD;
                                    console.log(_this.bidamount);
                                    _this.price = _this.web3.convertPriceToEther(_this.bidamount);
                                    _this.orders.methods
                                        .fundTransfer(_this.accountNumber, seller, _this.orderNo, date.currentDateTime, bid[5])
                                        .send({ from: _this.accountNumber, value: _this.price })
                                        .once('receipt', function (receipt) {
                                        console.log(receipt);
                                        res(receipt);
                                    });
                                });
                            });
                        });
                    });
                });
                // this.amountrem = parseFloat(data2.prodPrice)-parseFloat(bid[5]);
            });
        });
    };
    BackendService.prototype.getINR = function () {
        return this.httpClient.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=INR');
    };
    BackendService.prototype.getUSD = function () {
        return this.httpClient.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD');
    };
    BackendService.prototype.checkifFundTransferedCon = function (user, order) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.web3.getAllContract().then(function (contractRes) {
                _this.bid = contractRes[7];
                _this.orderNo = bytes32({ input: order });
                _this.bid.methods.returnBidsDet(user, _this.orderNo).call().then(function (lcdetails) {
                    res(lcdetails);
                });
            });
        });
    };
    BackendService.prototype.checkifFundTransferedSeller = function (user, order) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.web3.getAllContract().then(function (contractRes) {
                _this.bid = contractRes[7];
                _this.orderNo = bytes32({ input: order });
                _this.bid.methods.sellerBidRet(user, _this.orderNo).call().then(function (lcdetails) {
                    res(lcdetails);
                });
            });
        });
    };
    BackendService.prototype.getBankreport = function () {
        var _this = this;
        return new Promise(function (resp, rej) {
            var count = 0;
            var resultArray = [];
            _this.web3.loadBlockChainData().then(function (accountData) {
                _this.web3.getAllContract().then(function (contractRes) {
                    _this.marketPlace = contractRes[0];
                    _this.orders = contractRes[2];
                    _this.bid = contractRes[7];
                    _this.accountNumber = accountData[0];
                    _this.bid.methods
                        .bidreport(_this.accountNumber)
                        .call()
                        .then(function (value) {
                        // resp(value)
                        //   console.log(value);
                        //   if(value.length>0){
                        resp(value);
                        // }else{
                        //   rej("no data");
                        // }
                    });
                });
            });
        });
    };
    BackendService.prototype.getDate = function () {
        return new Promise(function (res, rej) {
            axios.request(options).then(function (response) {
                console.log(response.data);
                res(response.data);
            });
        });
    };
    // sd(){
    BackendService.prototype.sd = function () {
        var _this = this;
        return new Promise(function (res, rej) {
            var order = "ORD96";
            _this.web3.loadBlockChainData().then(function (accountData) {
                _this.web3.getAllContract().then(function (contractRes) {
                    _this.orders = contractRes[7];
                    _this.accountNumber = accountData[0];
                    _this.orderNo = bytes32({ input: order });
                    console.log(_this.orderNo);
                    var pR = 1;
                    _this.price = _this.web3.convertPriceToEther(pR);
                    _this.getDate().then(function (d) {
                        _this.day = d.currentDateTime;
                        // this.day = bytes32({ input: days });
                        _this.bankName = bytes32({ input: order });
                        _this.orders.methods
                            .fu(_this.orderNo, _this.day)
                            .send({ from: _this.accountNumber })
                            .once('receipt', function (receipt) {
                            console.log(receipt);
                            // this.cookieDeletion();
                            res(receipt);
                        });
                    });
                });
            });
        });
    };
    BackendService.prototype.dd = function () {
        var _this = this;
        return new Promise(function (res, rej) {
            var order = "ORD96";
            _this.orderNo = bytes32({ input: order });
            _this.web3.loadBlockChainData().then(function (accountData) {
                _this.accountNumber = accountData[0];
                var getTimeNow = new Date();
                _this.publishDate = getTimeNow.getTime();
                var myFutureDate = new Date(getTimeNow);
                var bidClose = myFutureDate.setDate(myFutureDate.getDate() + 14);
                console.log(_this.publishDate);
                console.log(bidClose);
                _this.web3.getAllContract().then(function (contractRes) {
                    _this.orders = contractRes[7];
                    // this.getDate().then((date:any)=>{
                    _this.orders.methods
                        .sel(_this.orderNo)
                        .call()
                        .then(function (value) {
                        // resp(value)
                        //   console.log(value);
                        //   if(value.length>0){
                        res(value);
                        // }else{
                        //   rej("no data");
                        // }
                    });
                    // });
                });
                // res(response);
            });
        });
    };
    BackendService.prototype.saveB = function () {
        var _this = this;
        return new Promise(function (resp, rej) {
            // console.log('Checking');
            var order = "ORD96";
            _this.orderNo = bytes32({ input: order });
            var getTimeNow = new Date();
            _this.publishDate = getTimeNow.getTime();
            var myFutureDate = new Date(getTimeNow);
            var bidClose = myFutureDate.setDate(myFutureDate.getDate() + 14);
            console.log(_this.publishDate);
            console.log(bidClose);
            _this.web3.getAllContract().then(function (contractRes) {
                _this.web3.loadBlockChainData().then(function (accountData) {
                    _this.accountNumber = accountData[0];
                    _this.marketPlace = contractRes[0];
                    _this.getDate().then(function (date) {
                        console.log(date.currentDateTime);
                        _this.marketPlace.methods
                            .shiftToMarketPlace(_this.orderNo, _this.accountNumber, _this.publishDate, bidClose)
                            .send({ from: _this.accountNumber })
                            .once('receipt', function (receipt) {
                            console.log(receipt);
                            _this.snackBar.open('Published to Marketplace', 'Issuing Bank', { duration: 3000 });
                            resp(receipt);
                        });
                    });
                });
            });
        });
    };
    BackendService.prototype.getB = function () {
        var _this = this;
        return new Promise(function (resp, rej) {
            var myCurrentDate = new Date();
            _this.web3.loadBlockChainData().then(function (accountData) {
                _this.web3.getAllContract().then(function (contractRes) {
                    _this.marketPlace = contractRes[0];
                    ;
                    _this.accountNumber = accountData[0];
                    var order = "ORD96";
                    _this.orderNo = bytes32({ input: order });
                    _this.marketPlace.methods.returnPublishedDate(_this.orderNo).call().then(function (publishdate) {
                        // console.log('PUBLISHED DATE : ',publishdate);
                        var getTimeNow = new Date();
                        _this.publishDate = getTimeNow.getTime();
                        console.log(publishdate);
                        console.log(_this.publishDate);
                        _this.pubDate = publishdate[0];
                        _this.endDate = new Date(parseInt(publishdate[1]));
                        // this.endDate = parseInt(publishdate[1]);
                        console.log(_this.endDate);
                        // console.log(cur);
                        var cur = new Date(_this.publishDate);
                        console.log(cur);
                        console.log(_this.endDate);
                        // d1.getTime() === d2.getTime();
                        if (_this.endDate == getTimeNow) {
                            console.log("same");
                        }
                        else {
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
                    });
                });
            });
        });
    };
    BackendService.prototype.compareDate = function (end, current) {
        return new Promise(function (res, rej) {
            // console.log(new Date(parseInt(end)));
            // console.log(current);
            // if(current >= end){
            if (new Date(parseInt(current)) >= end) {
                res(true);
            }
            else {
                res(false);
            }
        });
    };
    BackendService.prototype.getPendingBids = function () {
        var _this = this;
        return new Promise(function (resp, rej) {
            var myCurrentDate = new Date();
            var count = 0;
            var resultArray = [];
            _this.web3.loadBlockChainData().then(function (accountData) {
                _this.web3.getAllContract().then(function (contractRes) {
                    _this.marketPlace = contractRes[0];
                    _this.orders = contractRes[2];
                    _this.bid = contractRes[7];
                    _this.accountNumber = accountData[0];
                    _this.bid.methods
                        .returnSentBids(_this.accountNumber)
                        .call()
                        .then(function (value) {
                        if (value.length > 0) {
                            for (var i = 0; i < value.length; i++) {
                                try {
                                    throw i;
                                }
                                catch (ii) {
                                    _this.bid.methods.returnBidsDet(_this.accountNumber, value[ii]).call().then(function (lcdetails) {
                                        var lcD = lcdetails[1];
                                        var ip5;
                                        _this.ipfs.getHashFromIPFS(lcD).then(function (ip2) {
                                            _this.ipfsConverted2 = JSON.parse(Buffer.from(ip2.value.buffer).toString());
                                            ip5 = JSON.parse(Buffer.from(ip2.value.buffer).toString());
                                            console.log(_this.ipfsConverted2);
                                            _this.orders.methods.getOrderData(value[ii])
                                                .call().then(function (products) {
                                                _this.marketPlace.methods.returnIsShifted(value[ii])
                                                    .call().then(function (bids) {
                                                    _this.marketPlace.methods.returnPublishedDate(value[ii]).call().then(function (publishdate) {
                                                        _this.pubDate = publishdate[0];
                                                        _this.ipfs.getHashFromIPFS(products).then(function (ip) {
                                                            _this.ipfsConverted = JSON.parse(Buffer.from(ip.value.buffer).toString());
                                                            count++;
                                                            _this.compareDate(publishdate[1], myCurrentDate).then(function (dC) {
                                                                if (lcdetails[0] && !bids[1]) {
                                                                    resultArray.push({
                                                                        0: lcdetails,
                                                                        1: _this.ipfsConverted.OrderNo,
                                                                        2: _this.ipfsConverted.consigneeName,
                                                                        3: _this.ipfsConverted.seller,
                                                                        4: _this.ipfsConverted.SellerAddedPL,
                                                                        5: _this.ipfsConverted.ShippingAgencyPL,
                                                                        6: _this.ipfsConverted.BOL,
                                                                        7: _this.ipfsConverted.CIAdded,
                                                                        8: _this.ipfsConverted.PLNo,
                                                                        9: _this.ipfsConverted.BOLNO,
                                                                        10: _this.ipfsConverted.CINO,
                                                                        11: bids,
                                                                        12: _this.accountNumber,
                                                                        13: _this.ipfsConverted.sellerWallet,
                                                                        14: new Date(parseInt(_this.pubDate)),
                                                                        15: new Date(parseInt(publishdate[1])),
                                                                        16: myCurrentDate,
                                                                        17: dC,
                                                                        18: ip5.bidAmount,
                                                                        19: ip5.prodPrice,
                                                                        20: _this.ipfsConverted2
                                                                    });
                                                                    if (count == value.length) {
                                                                        resp(resultArray);
                                                                    }
                                                                    else {
                                                                    }
                                                                }
                                                                else {
                                                                    if (count == value.length) {
                                                                        resp(resultArray);
                                                                    }
                                                                    else {
                                                                    }
                                                                }
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        }); // ipfsconveted2
                                    });
                                }
                            }
                        }
                        else {
                            rej("no data");
                        }
                    });
                });
            });
        });
    };
    BackendService.prototype.getRejectedBids = function () {
        var _this = this;
        return new Promise(function (resp, rej) {
            var myCurrentDate = new Date();
            var count = 0;
            var mixArray = [];
            var resultArray = [];
            _this.web3.loadBlockChainData().then(function (accountData) {
                _this.web3.getAllContract().then(function (contractRes) {
                    _this.marketPlace = contractRes[0];
                    _this.orders = contractRes[2];
                    _this.bid = contractRes[7];
                    _this.accountNumber = accountData[0];
                    _this.bid.methods
                        .returnSentBids(_this.accountNumber)
                        .call()
                        .then(function (value) {
                        if (value.length > 0) {
                            for (var i = 0; i < value.length; i++) {
                                try {
                                    throw i;
                                }
                                catch (ii) {
                                    _this.bid.methods.returnBidsDet(_this.accountNumber, value[ii]).call().then(function (lcdetails) {
                                        var lcD1 = lcdetails[1];
                                        var ip6;
                                        _this.ipfs.getHashFromIPFS(lcD1).then(function (ip2) {
                                            _this.ipfsConverted3 = JSON.parse(Buffer.from(ip2.value.buffer).toString());
                                            ip6 = JSON.parse(Buffer.from(ip2.value.buffer).toString());
                                            console.log(_this.ipfsConverted3);
                                            _this.orders.methods.getOrderData(value[ii])
                                                .call().then(function (products) {
                                                _this.marketPlace.methods
                                                    .returnIsShifted(value[ii])
                                                    .call().then(function (bids) {
                                                    _this.marketPlace.methods.returnPublishedDate(value[ii]).call().then(function (publishdate) {
                                                        _this.pubDate = publishdate[0];
                                                        _this.ipfs.getHashFromIPFS(products).then(function (ip) {
                                                            _this.ipfsConverted4 = JSON.parse(Buffer.from(ip.value.buffer).toString());
                                                            count++;
                                                            _this.compareDate(publishdate[1], myCurrentDate).then(function (dC) {
                                                                if (lcdetails[0] && bids[1] && bids[4] != _this.accountNumber) {
                                                                    resultArray.push({
                                                                        0: lcdetails,
                                                                        1: _this.ipfsConverted4.OrderNo,
                                                                        2: _this.ipfsConverted4.consigneeName,
                                                                        3: _this.ipfsConverted4.seller,
                                                                        4: _this.ipfsConverted4.SellerAddedPL,
                                                                        5: _this.ipfsConverted4.ShippingAgencyPL,
                                                                        6: _this.ipfsConverted4.BOL,
                                                                        7: _this.ipfsConverted4.CIAdded,
                                                                        8: _this.ipfsConverted4.PLNo,
                                                                        9: _this.ipfsConverted4.BOLNO,
                                                                        10: _this.ipfsConverted4.CINO,
                                                                        11: bids,
                                                                        12: _this.accountNumber,
                                                                        13: _this.ipfsConverted4.sellerWallet,
                                                                        14: new Date(parseInt(_this.pubDate)),
                                                                        15: new Date(parseInt(publishdate[1])),
                                                                        16: myCurrentDate,
                                                                        17: dC,
                                                                        18: ip6.bidAmount,
                                                                        19: ip6.prodPrice
                                                                    });
                                                                    if (count == value.length) {
                                                                        resp(resultArray);
                                                                    }
                                                                    else {
                                                                    }
                                                                }
                                                                else {
                                                                    if (count == value.length) {
                                                                        resp(resultArray);
                                                                    }
                                                                    else {
                                                                    }
                                                                }
                                                            }); //compare dates end 
                                                            // });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                    // })
                                }
                            }
                        }
                        else {
                            rej("no data");
                        }
                    });
                });
            });
        });
    };
    BackendService.prototype.getDateBids = function (start, end) {
        var _this = this;
        return new Promise(function (resp, rej) {
            var myCurrentDate = new Date();
            var count = 0;
            var mixArray = [];
            var resultArray = [];
            _this.web3.loadBlockChainData().then(function (accountData) {
                _this.web3.getAllContract().then(function (contractRes) {
                    _this.marketPlace = contractRes[0];
                    _this.orders = contractRes[2];
                    _this.bid = contractRes[7];
                    _this.accountNumber = accountData[0];
                    _this.bid.methods
                        .returnSentBids(_this.accountNumber)
                        .call()
                        .then(function (value) {
                        if (value.length > 0) {
                            for (var i = 0; i < value.length; i++) {
                                try {
                                    throw i;
                                }
                                catch (ii) {
                                    _this.bid.methods.returnBidsDet(_this.accountNumber, value[ii]).call().then(function (lcdetails) {
                                        // console.log(lcdetails)
                                        //ipfscon2
                                        var lcD = lcdetails[1];
                                        var ip5;
                                        _this.ipfs.getHashFromIPFS(lcD).then(function (ip2) {
                                            _this.ipfsConverted2 = JSON.parse(Buffer.from(ip2.value.buffer).toString());
                                            ip5 = JSON.parse(Buffer.from(ip2.value.buffer).toString());
                                            console.log(_this.ipfsConverted2);
                                            console.log(ip5);
                                            console.log(ip5.bid_placeddt_new);
                                            var dateString = moment__WEBPACK_IMPORTED_MODULE_2__(ip5.bid_placeddt_new).format('DD/MM/YYYY');
                                            console.log(dateString);
                                            // this.ipfsConverted2.bid_placeddt
                                            // this.ipfsConverted2.bid_placeddt_new
                                            _this.orders.methods.getOrderData(value[ii])
                                                .call()
                                                .then(function (products) {
                                                _this.marketPlace.methods
                                                    .returnIsShifted(value[ii])
                                                    .call()
                                                    .then(function (bids) {
                                                    // console.log(bids);
                                                    //getpublishedDate..value[ii];
                                                    _this.marketPlace.methods.returnPublishedDate(value[ii]).call().then(function (publishdate) {
                                                        // console.log('PUBLISHED DATE : ',publishdate);
                                                        _this.pubDate = publishdate[0];
                                                        // console.log(products);
                                                        _this.ipfs.getHashFromIPFS(products).then(function (ip) {
                                                            _this.ipfsConverted = JSON.parse(Buffer.from(ip.value.buffer).toString());
                                                            // console.log(this.ipfsConverted);
                                                            // this.ipfs.getHashFromIPFS(lcdetails[1]).then((ip2) =>{
                                                            //   this.ipfsConverted2 = JSON.parse(Buffer.from(ip2.value.buffer).toString()); 
                                                            //   console.log(this.ipfsConverted2);
                                                            count++;
                                                            _this.compareDate(publishdate[1], myCurrentDate).then(function (dC) {
                                                                //  if()
                                                                //  commmented
                                                                // if(lcdetails[0] && bids[1] && bids[4] != this.accountNumber){
                                                                //                           this.ipfs.getHashFromIPFS(lcdetails[1]).then((ip2) =>{
                                                                //   this.ipfsConverted2 = JSON.parse(Buffer.from(ip2.value.buffer).toString()); 
                                                                //  ip5 = JSON.parse(Buffer.from(ip2.value.buffer).toString()); 
                                                                //   console.log(this.ipfsConverted2);
                                                                //   console.log(ip5);
                                                                if (moment__WEBPACK_IMPORTED_MODULE_2__(_this.ipfsConverted2.bid_placeddt_new).format('DD/MM/YYYY') >= start.toString() && moment__WEBPACK_IMPORTED_MODULE_2__(_this.ipfsConverted2.bid_placeddt_new).format('DD/MM/YYYY') <= end.toString()) {
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
                                                                        0: lcdetails,
                                                                        1: _this.ipfsConverted.OrderNo,
                                                                        2: _this.ipfsConverted.consigneeName,
                                                                        3: _this.ipfsConverted.seller,
                                                                        4: _this.ipfsConverted.SellerAddedPL,
                                                                        5: _this.ipfsConverted.ShippingAgencyPL,
                                                                        6: _this.ipfsConverted.BOL,
                                                                        7: _this.ipfsConverted.CIAdded,
                                                                        8: _this.ipfsConverted.PLNo,
                                                                        9: _this.ipfsConverted.BOLNO,
                                                                        10: _this.ipfsConverted.CINO,
                                                                        11: bids,
                                                                        12: _this.accountNumber,
                                                                        13: _this.ipfsConverted.sellerWallet,
                                                                        14: new Date(parseInt(_this.pubDate)),
                                                                        15: new Date(parseInt(publishdate[1])),
                                                                        16: myCurrentDate,
                                                                        17: dC,
                                                                        18: ip5.bidAmount,
                                                                        19: ip5.prodPrice,
                                                                        20: _this.ipfsConverted2
                                                                        // 18:this.ipfsConverted2.bidAmount,
                                                                        // 19:this.ipfsConverted2.prodPrice
                                                                    });
                                                                    if (count == value.length) {
                                                                        resp(resultArray);
                                                                    }
                                                                    else {
                                                                    }
                                                                    // })   //ipfscon2 if 
                                                                    // });
                                                                    // commmented
                                                                }
                                                                else {
                                                                    if (count == value.length) {
                                                                        resp(resultArray);
                                                                    }
                                                                    else {
                                                                    }
                                                                }
                                                                // commented
                                                                // });
                                                            }); //compare dates end 
                                                            // });
                                                        });
                                                    });
                                                });
                                            });
                                        }); //ipfsc2
                                    });
                                    // })
                                }
                            }
                        }
                        else {
                            rej("no data");
                        }
                    });
                });
            });
        });
    };
    BackendService.prototype.getDataAPI = function (data) {
        // var apik = ''
        return this.httpClient.get('http://localhost:5000/getFromBC', {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('appid', 'gNjT4t4RUhzIyOuPBEl3hPKZqlDvK8XF')
        });
        // .pipe(/)
    };
    BackendService.prototype.createPost = function (data) {
        return this.httpClient.post('http://localhost:5000/saveToUser', data
        // {
        //   headers: new HttpHeaders({
        //     'custom-header': 'post Leela',
        //   }),
        //   observe: 'body',
        // }
        );
    };
    BackendService.prototype.getDBAPI = function () {
        return this.httpClient.get('https://data-analytics-api-e2qi.onrender.com/api/kyc');
    };
    BackendService.prototype.getTransaction = function () {
        return this.httpClient.get('https://data-analytics-api-e2qi.onrender.com/api/getTransactions');
    };
    BackendService.prototype.getConversionAPI = function () {
        return this.httpClient.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,SGD,EUR,INR,USD');
    };
    BackendService.prototype.getLeiCompanyInfo = function (LEINO) {
        return this.httpClient.get('https://api.gleif.org/api/v1/lei-records?filter[entity.names]=' + LEINO);
    };
    BackendService.prototype.getleiHistory = function (LEINO) {
        // return this.httpClient.get( 'https://ttp-scan.herokuapp.com/getTransactions?lei='+LEINO)
        return this.httpClient.get('https://data-analytics-api-e2qi.onrender.com/api/getHistory/' + LEINO);
    };
    BackendService.prototype.saveRoles = function (hash) {
        var _this = this;
        return new Promise(function (resp, rej) {
            _this.web3.getAllContract().then(function (contractRes) {
                _this.web3.loadBlockChainData().then(function (accountData) {
                    _this.accountNumber = accountData[0];
                    _this.marketPlace = contractRes[1];
                    _this.marketPlace.methods
                        .saveRole(_this.accountNumber, hash)
                        .send({ from: _this.accountNumber })
                        .once('receipt', function (receipt) {
                        console.log(receipt);
                        _this.snackBar.open('Roles updated', 'Bank', { duration: 3000 });
                        resp(receipt);
                    });
                });
            });
        });
    };
    BackendService.ɵfac = function BackendService_Factory(t) { return new (t || BackendService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_web3_service__WEBPACK_IMPORTED_MODULE_3__["Web3Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ipfs_service__WEBPACK_IMPORTED_MODULE_4__["IpfsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    BackendService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BackendService, factory: BackendService.ɵfac, providedIn: 'root' });
    return BackendService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackendService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _web3_service__WEBPACK_IMPORTED_MODULE_3__["Web3Service"] }, { type: _ipfs_service__WEBPACK_IMPORTED_MODULE_4__["IpfsService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/buffer/index.js */ "tjlA").Buffer))

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kottackal/Desktop/Data Analytics Jisa/Analytics App-LEI/src/main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!**************************************************!*\
  !*** ipfs-utils/src/files/glob-source (ignored) ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 10:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 11:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************************!*\
  !*** electron-fetch (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "4/d+":
/*!*****************************************!*\
  !*** ./src/app/service/ipfs.service.ts ***!
  \*****************************************/
/*! exports provided: IpfsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpfsService", function() { return IpfsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



var createClient = __webpack_require__(/*! ipfs-http-client */ "lOTI");
var IpfsService = /** @class */ (function () {
    function IpfsService() {
        // private ipfs = createClient({ host: "ipfs.infura.io", port: 5001, protocol: "https" });
        this.ipfs = createClient({ host: 'localhost', port: '5001', protocol: 'http' });
    }
    IpfsService.prototype.saveToIpfs = function (file) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.files_json = JSON.stringify(file);
                        console.log(this.files_json);
                        _a = this;
                        return [4 /*yield*/, this.ipfs.add(this.files_json)];
                    case 1:
                        _a.ipfsHash = _b.sent();
                        return [2 /*return*/, this.ipfsHash.path];
                }
            });
        });
    };
    IpfsService.prototype.getHashFromIPFS = function (id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.ipfs.cat(id)];
                    case 1:
                        _a.ipfsHash = _b.sent();
                        return [2 /*return*/, this.ipfsHash.next()];
                }
            });
        });
    };
    IpfsService.ɵfac = function IpfsService_Factory(t) { return new (t || IpfsService)(); };
    IpfsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: IpfsService, factory: IpfsService.ɵfac, providedIn: 'root' });
    return IpfsService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IpfsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "4556":
/*!**********************************************************!*\
  !*** ./src/app/shlist-dialog/shlist-dialog.component.ts ***!
  \**********************************************************/
/*! exports provided: ShlistDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShlistDialogComponent", function() { return ShlistDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





var ShlistDialogComponent = /** @class */ (function () {
    function ShlistDialogComponent() {
    }
    ShlistDialogComponent.prototype.ngOnInit = function () {
    };
    ShlistDialogComponent.ɵfac = function ShlistDialogComponent_Factory(t) { return new (t || ShlistDialogComponent)(); };
    ShlistDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShlistDialogComponent, selectors: [["app-shlist-dialog"]], decls: 18, vars: 1, consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["mat-button", "", "routerLink", "signup"], ["mat-button", "", "href", "https://www.google.com/", "target", "_blank"], ["align", "end"], ["mat-button", "", "mat-dialog-close", "false"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function ShlistDialogComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Register");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Signup for Stakeholders");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Registration option for different stakeholders namely: Seller, Consignee, Shipping Agency, Carrier, Port Authorities");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Link1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Link2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-dialog-actions", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Signup");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["mat-grid-tile[_ngcontent-%COMP%] {\n    background: lightblue;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hsaXN0LWRpYWxvZy9zaGxpc3QtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7RUFDdkIiLCJmaWxlIjoic3JjL2FwcC9zaGxpc3QtZGlhbG9nL3NobGlzdC1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1ncmlkLXRpbGUge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgfSJdfQ== */"] });
    return ShlistDialogComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShlistDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shlist-dialog',
                templateUrl: './shlist-dialog.component.html',
                styleUrls: ['./shlist-dialog.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "4jFk":
/*!*******************************************************!*\
  !*** ./src/app/bank/analytics/analytics.component.ts ***!
  \*******************************************************/
/*! exports provided: AnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsComponent", function() { return AnalyticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_web3_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/web3.service */ "+Ptt");
/* harmony import */ var src_app_service_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/backend.service */ "/VBx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/loader/loader.service */ "t0Il");
/* harmony import */ var src_app_service_ipfs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/ipfs.service */ "4/d+");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../loader/loader.component */ "kQyY");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
















function AnalyticsComponent_h4_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h4", 31);
} }
function AnalyticsComponent_h4_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AnalyticsComponent_h4_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Transaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AnalyticsComponent_h4_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Analytics");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AnalyticsComponent_h4_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var AnalyticsComponent = /** @class */ (function () {
    function AnalyticsComponent(web3, backend, router, loaderService, ipfs, cd) {
        var _this = this;
        this.web3 = web3;
        this.backend = backend;
        this.router = router;
        this.loaderService = loaderService;
        this.ipfs = ipfs;
        this.cd = cd;
        this.showFiller = false;
        this.isExpanded = false;
        console.warn("calling order constra");
        this.web3.checkAndInstantiateWeb3()
            .then(function (checkConn) {
            console.log(checkConn);
            if (checkConn === 'connected') {
                _this.web3.loadBlockChainData()
                    .then(function (accountData) {
                    console.log(accountData[0]);
                    _this.accountNumber = accountData[0];
                    _this.web3.getAllContract()
                        .then(function (contractRes) {
                        if (contractRes) {
                            console.log(contractRes);
                            _this.registration = contractRes[0];
                            _this.registration.methods.getUserHashType(_this.accountNumber)
                                .call()
                                .then(function (user) {
                                console.log('user');
                                console.log(user);
                                if (!user[0]) {
                                }
                                else {
                                    console.log('user');
                                    console.log(user);
                                    _this.ipfs.getHashFromIPFS(user[0]).then(function (data) {
                                        _this.ipfsConverted2 = JSON.parse(Buffer.from(data.value.buffer).toString());
                                        console.log(_this.ipfsConverted2);
                                        _this.userinfo = user[0];
                                    });
                                }
                            });
                        }
                    });
                }, function (err) {
                    console.log('account error', err);
                });
            }
        }, function (err) {
            alert(err);
        });
    }
    AnalyticsComponent.prototype.ngOnInit = function () {
    };
    AnalyticsComponent.prototype.viewFraud = function () {
        this.router.navigate(['tranasaction_issue']);
    };
    AnalyticsComponent.prototype.viewLEIIssue = function () {
        this.router.navigate(['lei_issue']);
    };
    AnalyticsComponent.prototype.redirectDashboard = function () {
        // this.route.navigateByUrl('seller_dashboard/'+this.userinfo);
        this.router.navigate(['bank_dashboard', { id: this.userinfo }]);
    };
    AnalyticsComponent.ɵfac = function AnalyticsComponent_Factory(t) { return new (t || AnalyticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_web3_service__WEBPACK_IMPORTED_MODULE_1__["Web3Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_ipfs_service__WEBPACK_IMPORTED_MODULE_5__["IpfsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
    AnalyticsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnalyticsComponent, selectors: [["app-analytics"]], decls: 75, vars: 6, consts: [[1, "loaders"], [1, "bankLoader"], [3, "id"], [1, "example-container"], ["disableClose", "true", "opened", "true", "mode", "side", 1, "example-sidenav"], ["sidenav", ""], ["mat-list-icon", "", "matTooltip", "Expand", 1, "navicon", 3, "click"], ["mat-line", "", 4, "ngIf"], ["mat-list-icon", "", "matTooltip", "Dashboard", 1, "navicon", 3, "click"], ["matTooltip", "Transaction", "mat-list-icon", "", 1, "navicon", 3, "click"], ["mat-list-icon", "", "matTooltip", "Analytics", 1, "navicon", "active"], ["mat-list-icon", "", "matTooltip", "Report", "routerLink", "/bank/report", 1, "navicon"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [2, "color", "#007bff", "background-color", "transparent", "cursor", "pointer", 3, "click"], ["aria-current", "page", 1, "breadcrumb-item"], [1, "example-sidenav-content"], [1, "main-content"], [1, "container-fluid"], [1, "row", "headContent"], [1, "col-lg-8", "col-md-8", "col-sm-8"], [1, "col", "col-md-auto"], [1, "col", "col-lg-2"], [1, "row"], [1, "col-lg-6", "col-md-6", "col-sm-12"], [1, "col-lg-6"], ["color", "primary", 1, "cardicon1", "img-fluid"], [1, "material-icons-outlined"], ["mat-raised-button", "", "fill", "outline", "slot", "end", 1, "viewbtn", 3, "click"], [1, "cardicon1"], ["mat-line", ""]], template: function AnalyticsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-loader", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav", 4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-nav-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnalyticsComponent_Template_mat_icon_click_8_listener() { return ctx.isExpanded = !ctx.isExpanded; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " menu ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AnalyticsComponent_h4_10_Template, 1, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnalyticsComponent_Template_mat_icon_click_12_listener() { return ctx.redirectDashboard(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " dashboard ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AnalyticsComponent_h4_14_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnalyticsComponent_Template_mat_icon_click_16_listener() { return ctx.redirectDashboard(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " swap_horiz ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AnalyticsComponent_h4_18_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "analytics");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AnalyticsComponent_h4_22_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "summarize");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AnalyticsComponent_h4_26_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nav", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ol", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnalyticsComponent_Template_a_click_30_listener() { return ctx.redirectDashboard(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Home");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Analytics");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Analytics");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "KYC - Issue");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-icon", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " insights ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnalyticsComponent_Template_button_click_56_listener() { return ctx.viewLEIIssue(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " View ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-card-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Click to view KYC data for missing and fraudulant LEI's ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Malicious Transactions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-icon", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " swap_horiz ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnalyticsComponent_Template_button_click_71_listener() { return ctx.viewFraud(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " View ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-card-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Click to view transactions with malicious data ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "bankLoader");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
        } }, directives: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListIconCssMatStyler"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardFooter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatLine"]], styles: ["mat-sidenav[_ngcontent-%COMP%]{\n    \n  background:goldenrod;\n  \n  }\nmat-card[_ngcontent-%COMP%]{\n      margin-bottom: 30px;\n  }\n.navicon[_ngcontent-%COMP%]{\n  color: white;\n  }\n.headContent[_ngcontent-%COMP%]{\n    padding-top:20px;\n  }\nmat-card-footer[_ngcontent-%COMP%]{\n    padding: 20px;\n  \n  }\n.viewbtn[_ngcontent-%COMP%]{\n    background-color:goldenrod;\n    color: whitesmoke;\n    margin: 50px;\n  \n      display: flex;\n      align-items: center;\n      justify-content: center;\n  }\n.example-container[_ngcontent-%COMP%] {\n    display: block;\n    overflow: auto;\n    min-height: 100vh;\n    height: auto;\n    margin: 0;\n    }\n.example-sidenav-content[_ngcontent-%COMP%] {\n    \n    overflow: auto;\n    width: 100%;\n    height: 100%;\n      }\n.example-sidenav[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n\n.vl[_ngcontent-%COMP%] {\n    border-left: 1px solid gray;\n    height: 500px;\n  }\ntable[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n.mat-form-field[_ngcontent-%COMP%] {\n    font-size: 14px;\n    width: 100%;\n  }\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n    width: 25%;\n  }\nth[_ngcontent-%COMP%]{\n    \n    background:goldenrod;\n  font-weight: bold;\n  font-size: large;\n  color: white;\n  }\n.profileimg[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  }\n.chartdiv[_ngcontent-%COMP%]{\n    width:100%;\n    height:250px;\n  }\n.card[_ngcontent-%COMP%]{\n    background-color: whitesmoke;\n  }\n.subnote[_ngcontent-%COMP%]{\n    font-size: 10px;\n    color: gray;\n  }\n.sideicon[_ngcontent-%COMP%]{\n    padding: 10px;\n    margin: 10px;\n    border:\"1px solid\";\n    border-radius: 10%;\n    background-color: grey;\n  }\n.active[_ngcontent-%COMP%]{\n    background-color: cornflowerblue;\n    border-radius: 50%;\n  }\n.center[_ngcontent-%COMP%]{\n      justify-content: center;\n  }\n.cardicon1[_ngcontent-%COMP%]{\n     font-size: 200px;\n     color:rgb(135, 160, 92);\n  }\n.cardicon2[_ngcontent-%COMP%]{\n    font-size: 200px;\n    color:yellowgreen;\n  }\n.clearfix[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFuay9hbmFseXRpY3MvYW5hbHl0aWNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0dBV0c7QUFDSDtJQUNJLGdDQUFnQztFQUNsQyxvQkFBb0I7O0VBRXBCO0FBRUE7TUFDSSxtQkFBbUI7RUFDdkI7QUFFQTtFQUNBLFlBQVk7RUFDWjtBQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBRUE7SUFDRSxhQUFhOztFQUVmO0FBQ0E7SUFDRSwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLFlBQVk7O01BRVYsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUI7RUFDM0I7QUFFQTtJQUNFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixTQUFTO0lBQ1Q7QUFFRjtJQUNFLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7TUFDVjtBQUVKO0lBQ0UsYUFBYTtFQUNmO0FBRUE7Ozs7S0FJRztBQUNIO0lBQ0UsMkJBQTJCO0lBQzNCLGFBQWE7RUFDZjtBQUNBO0lBQ0UsV0FBVztFQUNiO0FBRUE7SUFDRSxlQUFlO0lBQ2YsV0FBVztFQUNiO0FBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDQTtJQUNFLGlDQUFpQztJQUNqQyxvQkFBb0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1o7QUFDQTtFQUNBLGtCQUFrQjtFQUNsQjtBQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7RUFDZDtBQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsV0FBVztFQUNiO0FBRUE7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsc0JBQXNCO0VBQ3hCO0FBQ0E7SUFDRSxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0VBQ3BCO0FBQ0E7TUFDSSx1QkFBdUI7RUFDM0I7QUFDQTtLQUNHLGdCQUFnQjtLQUNoQix1QkFBdUI7RUFDMUI7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7QUFDQTtFQUNBLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztFQUNYIiwiZmlsZSI6InNyYy9hcHAvYmFuay9hbmFseXRpY3MvYW5hbHl0aWNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiA1cHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxMDBweCk7XG59XG4uY29udGFpbmVyID4gZGl2ID4gaW1nIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufSAqL1xubWF0LXNpZGVuYXZ7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjpkb2RnZXJibHVlICovXG4gIGJhY2tncm91bmQ6Z29sZGVucm9kO1xuICBcbiAgfVxuICBcbiAgbWF0LWNhcmR7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG4gIFxuICAubmF2aWNvbntcbiAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC5oZWFkQ29udGVudHtcbiAgICBwYWRkaW5nLXRvcDoyMHB4O1xuICB9XG4gIFxuICBtYXQtY2FyZC1mb290ZXJ7XG4gICAgcGFkZGluZzogMjBweDtcbiAgXG4gIH1cbiAgLnZpZXdidG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjpnb2xkZW5yb2Q7XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgbWFyZ2luOiA1MHB4O1xuICBcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIFxuICAuZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQge1xuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICBcbiAgLmV4YW1wbGUtc2lkZW5hdiB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICBcbiAgLyogLmRlbW8tcGFuZWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTAlO1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG4gIH0gKi9cbiAgLnZsIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyYXk7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgfVxuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICB0ZCwgdGgge1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbiAgdGh7XG4gICAgLyogYmFja2dyb3VuZDogbWVkaXVtc2xhdGVibHVlOyAqL1xuICAgIGJhY2tncm91bmQ6Z29sZGVucm9kO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC5wcm9maWxlaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4gIFxuICAuY2hhcnRkaXZ7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MjUwcHg7XG4gIH1cbiAgLmNhcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgfVxuICAuc3Vibm90ZXtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6IGdyYXk7XG4gIH1cbiAgXG4gIC5zaWRlaWNvbntcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBib3JkZXI6XCIxcHggc29saWRcIjtcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgfVxuICAuYWN0aXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuICAuY2VudGVye1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmNhcmRpY29uMXtcbiAgICAgZm9udC1zaXplOiAyMDBweDtcbiAgICAgY29sb3I6cmdiKDEzNSwgMTYwLCA5Mik7XG4gIH1cbiAgLmNhcmRpY29uMntcbiAgICBmb250LXNpemU6IDIwMHB4O1xuICAgIGNvbG9yOnllbGxvd2dyZWVuO1xuICB9XG4gIC5jbGVhcmZpeDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbiAgfVxuICAiXX0= */"] });
    return AnalyticsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalyticsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-analytics',
                templateUrl: './analytics.component.html',
                styleUrls: ['./analytics.component.css']
            }]
    }], function () { return [{ type: src_app_service_web3_service__WEBPACK_IMPORTED_MODULE_1__["Web3Service"] }, { type: src_app_service_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }, { type: src_app_service_ipfs_service__WEBPACK_IMPORTED_MODULE_5__["IpfsService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/buffer/index.js */ "tjlA").Buffer))

/***/ }),

/***/ "4zdL":
/*!**********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.ts ***!
  \**********************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(); };
    ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["app-toolbar"]], decls: 0, vars: 0, template: function ToolbarComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuY3NzIn0= */"] });
    return ToolbarComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-toolbar',
                templateUrl: './toolbar.component.html',
                styleUrls: ['./toolbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 5:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 8:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 9:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "HxFD":
/*!************************************************!*\
  !*** ./src/app/service/web3storage.service.ts ***!
  \************************************************/
/*! exports provided: Web3StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Web3StorageService", function() { return Web3StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var web3_storage_dist_bundle_esm_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3.storage/dist/bundle.esm.min.js */ "TP0+");


// import { Web3Storage, getFilesFromPath } from 'web3.storage'


var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGM4NGM0NkVlRGRFOGU0NUVEQkY2NkRmMTM5RWI1Y2UyQkI3YjAyMzciLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTAyMTUwMTg5MjAsIm5hbWUiOiJkYXRhX2FuYWx5dGljcyJ9.RewP_qDD4SRl1wCDb8gK4QAtiRCjLdivu26g5qFZOec";
var Web3StorageService = /** @class */ (function () {
    function Web3StorageService() {
        this.client = new web3_storage_dist_bundle_esm_min_js__WEBPACK_IMPORTED_MODULE_2__["Web3Storage"]({ token: token });
    }
    Web3StorageService.prototype.storeFile = function (file) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var blob, files, rootCid;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(file);
                        blob = new Blob([JSON.stringify(file)], { type: 'application/json' });
                        files = [
                            new File(['user-registering-content'], 'plain-utf8.txt'),
                            new File([blob], 'data_analytics_register_data.json')
                        ];
                        return [4 /*yield*/, this.client.put(files)];
                    case 1:
                        rootCid = _a.sent();
                        console.log(rootCid);
                        return [2 /*return*/, rootCid];
                }
            });
        });
    };
    Web3StorageService.prototype.retrieveFile = function (rootCid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var res, files, files_1, files_1_1, file;
            var e_1, _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.client.get(rootCid)];
                    case 1:
                        res = _b.sent();
                        return [4 /*yield*/, res.files()];
                    case 2:
                        files = _b.sent();
                        try {
                            for (files_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(files), files_1_1 = files_1.next(); !files_1_1.done; files_1_1 = files_1.next()) {
                                file = files_1_1.value;
                                console.log(file.cid + " " + file.name + " " + file.size);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (files_1_1 && !files_1_1.done && (_a = files_1.return)) _a.call(files_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [2 /*return*/, files];
                }
            });
        });
    };
    Web3StorageService.ɵfac = function Web3StorageService_Factory(t) { return new (t || Web3StorageService)(); };
    Web3StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Web3StorageService, factory: Web3StorageService.ɵfac, providedIn: 'root' });
    return Web3StorageService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Web3StorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "IipO":
/*!*********************************************************!*\
  !*** ./src/app/user/user-login/user-login.component.ts ***!
  \*********************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent() {
    }
    UserLoginComponent.prototype.ngOnInit = function () {
    };
    UserLoginComponent.ɵfac = function UserLoginComponent_Factory(t) { return new (t || UserLoginComponent)(); };
    UserLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserLoginComponent, selectors: [["app-user-login"]], decls: 2, vars: 0, template: function UserLoginComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "user-login works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1sb2dpbi91c2VyLWxvZ2luLmNvbXBvbmVudC5jc3MifQ== */"] });
    return UserLoginComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-login',
                templateUrl: './user-login.component.html',
                styleUrls: ['./user-login.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "JR9W":
/*!***********************************************!*\
  !*** ./src/app/bank/roles/roles.component.ts ***!
  \***********************************************/
/*! exports provided: RolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return RolesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_service_web3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/web3.service */ "+Ptt");
/* harmony import */ var src_app_service_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/backend.service */ "/VBx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/loader/loader.service */ "t0Il");
/* harmony import */ var src_app_service_ipfs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/ipfs.service */ "4/d+");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/app.component */ "Sy1n");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../loader/loader.component */ "kQyY");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



















function RolesComponent_h4_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h4", 29);
} }
function RolesComponent_h4_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RolesComponent_h4_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Transaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RolesComponent_h4_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RolesComponent_h4_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Analytics");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RolesComponent_h4_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RolesComponent_h4_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RolesComponent_button_65_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesComponent_button_65_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.saveForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RolesComponent_button_66_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesComponent_button_66_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.saveForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var RolesComponent = /** @class */ (function () {
    function RolesComponent(fb, web3, backend, router, loaderService, ipfs, cd, AppComponent, route) {
        var _this = this;
        this.fb = fb;
        this.web3 = web3;
        this.backend = backend;
        this.router = router;
        this.loaderService = loaderService;
        this.ipfs = ipfs;
        this.cd = cd;
        this.AppComponent = AppComponent;
        this.route = route;
        // roles: FormGroup;
        this.showFiller = false;
        this.isExpanded = false;
        this.rolesExists = false;
        this.roles = this.fb.group({
            Marketplace: false,
            KYC: false,
            Analytics: false
        });
        this.web3.checkAndInstantiateWeb3()
            .then(function (checkConn) {
            console.log(checkConn);
            if (checkConn === 'connected') {
                _this.web3.loadBlockChainData()
                    .then(function (accountData) {
                    console.log(accountData[0]);
                    _this.accountNumber = accountData[0];
                    _this.web3.getAllContract()
                        .then(function (contractRes) {
                        if (contractRes) {
                            console.log(contractRes);
                            _this.registration = contractRes[1];
                            _this.registration.methods.getUserHashType(_this.accountNumber)
                                .call()
                                .then(function (user) {
                                console.log('user');
                                console.log(user);
                                _this.ipfs.getHashFromIPFS(user[0]).then(function (data) {
                                    _this.ipfsConverted2 = JSON.parse(Buffer.from(data.value.buffer).toString());
                                    console.log(_this.ipfsConverted2);
                                    _this.userinfo = user[0];
                                    _this.registration.methods.returnRole(_this.accountNumber)
                                        .call()
                                        .then(function (role) {
                                        console.log(role);
                                        if (role.length == 0) {
                                            _this.roles = fb.group({
                                                Marketplace: false,
                                                KYC: false,
                                                Analytics: false
                                            });
                                            _this.rolesExists = false;
                                        }
                                        else {
                                            _this.ipfs.getHashFromIPFS(role).then(function (data2) {
                                                _this.ipfsConverted3 = JSON.parse(Buffer.from(data2.value.buffer).toString());
                                                console.log(_this.ipfsConverted3);
                                                _this.roles = fb.group({
                                                    Marketplace: _this.ipfsConverted3.Marketplace,
                                                    KYC: _this.ipfsConverted3.KYC,
                                                    Analytics: _this.ipfsConverted3.Analytics
                                                });
                                                _this.rolesExists = true;
                                            });
                                        }
                                    });
                                });
                            });
                        }
                    });
                }, function (err) {
                    console.log('account error', err);
                });
            }
        }, function (err) {
            alert(err);
        });
    }
    RolesComponent.prototype.ngOnInit = function () {
    };
    RolesComponent.prototype.saveForm = function () {
        var _this = this;
        console.log(this.roles.value.KYC);
        console.log(this.roles.value);
        this.files = {
            Marketplace: this.roles.value.Marketplace,
            KYC: this.roles.value.KYC,
            Analytics: this.roles.value.Analytics
        };
        console.log(this.files);
        this.ipfs.saveToIpfs(this.files).then(function (data) {
            _this.backend.saveRoles(data).then(function (res) {
                console.log(res);
                _this.router.navigate(['bank_dashboard', { id: _this.userinfo }]);
            });
        });
        // this.showClassGrp.patchValue({amateur: false});
        // console.log(this.showClassGrp.value.amateur);
    };
    RolesComponent.ɵfac = function RolesComponent_Factory(t) { return new (t || RolesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_web3_service__WEBPACK_IMPORTED_MODULE_2__["Web3Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_ipfs_service__WEBPACK_IMPORTED_MODULE_6__["IpfsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
    RolesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RolesComponent, selectors: [["app-roles"]], decls: 68, vars: 11, consts: [[1, "loaders"], [1, "bankLoader"], [3, "id"], [1, "example-container"], ["disableClose", "true", "opened", "true", "mode", "side", 1, "example-sidenav"], ["sidenav", ""], ["mat-list-icon", "", "matTooltip", "Expand", 1, "navicon", 3, "click"], ["mat-line", "", 4, "ngIf"], ["mat-list-icon", "", "matTooltip", "Balance", 1, "navicon"], ["mat-list-icon", "", "matTooltip", "Analytics", 1, "navicon"], ["mat-list-icon", "", "matTooltip", "Report", "routerLink", "/bank/report", 1, "navicon"], ["mat-list-icon", "", "matTooltip", "Roles", "routerLink", "/roles", 1, "navicon"], [1, "example-sidenav-content"], [1, "main-content"], [1, "container-fluid"], [1, "row", "headContent"], [1, "col-lg-8", "col-md-8", "col-sm-8"], [1, "col", "col-md-auto"], ["src", "../../../assets/images/bank.png", "alt", "Avatar", "mat-mini-fab", "", 1, "img-fluid", "profileimg", 2, "width", "60px", "height", "60px", "padding-bottom", "5px"], [1, "col", "col-lg-2"], [1, "row"], [1, "col-lg-6", "col-md-6", "col-sm-12"], [1, "col-lg-6", "col-md-12", "col-sm-12"], ["color", "primary", 1, "cardicon1", 2, "margin-left", "20px"], [1, "example-section", 3, "formGroup"], ["formControlName", "Marketplace"], ["formControlName", "KYC"], ["formControlName", "Analytics"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-line", ""], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function RolesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-loader", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav", 4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-nav-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesComponent_Template_mat_icon_click_8_listener() { return ctx.isExpanded = !ctx.isExpanded; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " menu ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RolesComponent_h4_10_Template, 1, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RolesComponent_h4_12_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RolesComponent_h4_14_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " paid ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RolesComponent_h4_18_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "analytics");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RolesComponent_h4_22_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "summarize");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RolesComponent_h4_26_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "summarize");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RolesComponent_h4_30_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Bank Dashboard");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Roles");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-icon", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " account_balance ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "section", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Select Functionalities:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-checkbox", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Marketplace");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-checkbox", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "KYC");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-checkbox", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Analytics");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, RolesComponent_button_65_Template, 2, 0, "button", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, RolesComponent_button_66_Template, 2, 0, "button", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "mat-card-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "bankLoader");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.roles);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.rolesExists);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rolesExists);
        } }, directives: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__["LoaderComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListIconCssMatStyler"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardFooter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatLine"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"]], styles: ["mat-sidenav[_ngcontent-%COMP%]{\n    \n  background:goldenrod;\n  \n  }\nmat-card[_ngcontent-%COMP%]{\n      margin: 30px;\n  }\n.navicon[_ngcontent-%COMP%]{\n  color: white;\n  }\n.headContent[_ngcontent-%COMP%]{\n    padding-top:20px;\n  }\nmat-card-footer[_ngcontent-%COMP%]{\n    padding: 10px;\n  \n  }\n.viewbtn[_ngcontent-%COMP%]{\n    background-color:goldenrod;\n    color: whitesmoke;\n    margin: 50px;\n  \n      display: flex;\n      align-items: center;\n      justify-content: center;\n  }\n.example-container[_ngcontent-%COMP%] {\n    display: block;\n    overflow: auto;\n    min-height: 100vh;\n    height: auto;\n    margin: 0;\n    }\n.example-sidenav-content[_ngcontent-%COMP%] {\n    \n    overflow: auto;\n    width: 100%;\n    height: 100%;\n      }\n.example-sidenav[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n\n.vl[_ngcontent-%COMP%] {\n    border-left: 1px solid gray;\n    height: 500px;\n  }\ntable[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n.mat-form-field[_ngcontent-%COMP%] {\n    font-size: 14px;\n    width: 100%;\n  }\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n    width: 25%;\n  }\nth[_ngcontent-%COMP%]{\n    \n    background:goldenrod;\n  font-weight: bold;\n  font-size: large;\n  color: white;\n  }\n.profileimg[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  }\n.chartdiv[_ngcontent-%COMP%]{\n    width:100%;\n    height:250px;\n  }\n.card[_ngcontent-%COMP%]{\n    background-color: whitesmoke;\n  }\n.subnote[_ngcontent-%COMP%]{\n    font-size: 10px;\n    color: gray;\n  }\n.sideicon[_ngcontent-%COMP%]{\n    padding: 10px;\n    margin: 10px;\n    border:\"1px solid\";\n    border-radius: 10%;\n    background-color: grey;\n  }\n.active[_ngcontent-%COMP%]{\n    background-color: cornflowerblue;\n    border-radius: 50%;\n  }\n.center[_ngcontent-%COMP%]{\n      justify-content: center;\n  }\n.cardicon1[_ngcontent-%COMP%]{\n     font-size: 100px;\n     color:darkolivegreen;\n  }\n.cardicon2[_ngcontent-%COMP%]{\n    font-size: 200px;\n    color:yellowgreen;\n  }\n.clearfix[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFuay9yb2xlcy9yb2xlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztHQVdHO0FBQ0g7SUFDSSxnQ0FBZ0M7RUFDbEMsb0JBQW9COztFQUVwQjtBQUVBO01BQ0ksWUFBWTtFQUNoQjtBQUVBO0VBQ0EsWUFBWTtFQUNaO0FBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLGFBQWE7O0VBRWY7QUFDQTtJQUNFLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsWUFBWTs7TUFFVixhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHVCQUF1QjtFQUMzQjtBQUVBO0lBQ0UsY0FBYztJQUNkLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFNBQVM7SUFDVDtBQUVGO0lBQ0UsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtNQUNWO0FBRUo7SUFDRSxhQUFhO0VBQ2Y7QUFFQTs7OztLQUlHO0FBQ0g7SUFDRSwyQkFBMkI7SUFDM0IsYUFBYTtFQUNmO0FBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0VBQ2I7QUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNBO0lBQ0UsaUNBQWlDO0lBQ2pDLG9CQUFvQjtFQUN0QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWjtBQUNBO0VBQ0Esa0JBQWtCO0VBQ2xCO0FBRUE7SUFDRSxVQUFVO0lBQ1YsWUFBWTtFQUNkO0FBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7QUFDQTtJQUNFLGVBQWU7SUFDZixXQUFXO0VBQ2I7QUFFQTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixzQkFBc0I7RUFDeEI7QUFDQTtJQUNFLGdDQUFnQztJQUNoQyxrQkFBa0I7RUFDcEI7QUFDQTtNQUNJLHVCQUF1QjtFQUMzQjtBQUNBO0tBQ0csZ0JBQWdCO0tBQ2hCLG9CQUFvQjtFQUN2QjtBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjtBQUNBO0VBQ0EsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1giLCJmaWxlIjoic3JjL2FwcC9iYW5rL3JvbGVzL3JvbGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiA1cHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxMDBweCk7XG59XG4uY29udGFpbmVyID4gZGl2ID4gaW1nIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufSAqL1xubWF0LXNpZGVuYXZ7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjpkb2RnZXJibHVlICovXG4gIGJhY2tncm91bmQ6Z29sZGVucm9kO1xuICBcbiAgfVxuICBcbiAgbWF0LWNhcmR7XG4gICAgICBtYXJnaW46IDMwcHg7XG4gIH1cbiAgXG4gIC5uYXZpY29ue1xuICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLmhlYWRDb250ZW50e1xuICAgIHBhZGRpbmctdG9wOjIwcHg7XG4gIH1cbiAgXG4gIG1hdC1jYXJkLWZvb3RlcntcbiAgICBwYWRkaW5nOiAxMHB4O1xuICBcbiAgfVxuICAudmlld2J0bntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmdvbGRlbnJvZDtcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICBtYXJnaW46IDUwcHg7XG4gIFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBcbiAgLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgXG4gIC5leGFtcGxlLXNpZGVuYXYtY29udGVudCB7XG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gIFxuICAuZXhhbXBsZS1zaWRlbmF2IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIFxuICAvKiAuZGVtby1wYW5lbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgfSAqL1xuICAudmwge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICB9XG4gIHRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIHRkLCB0aCB7XG4gICAgd2lkdGg6IDI1JTtcbiAgfVxuICB0aHtcbiAgICAvKiBiYWNrZ3JvdW5kOiBtZWRpdW1zbGF0ZWJsdWU7ICovXG4gICAgYmFja2dyb3VuZDpnb2xkZW5yb2Q7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IGxhcmdlO1xuICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLnByb2ZpbGVpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgXG4gIC5jaGFydGRpdntcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoyNTBweDtcbiAgfVxuICAuY2FyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICB9XG4gIC5zdWJub3Rle1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogZ3JheTtcbiAgfVxuICBcbiAgLnNpZGVpY29ue1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGJvcmRlcjpcIjFweCBzb2xpZFwiO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICB9XG4gIC5hY3RpdmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4gIC5jZW50ZXJ7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuY2FyZGljb24xe1xuICAgICBmb250LXNpemU6IDEwMHB4O1xuICAgICBjb2xvcjpkYXJrb2xpdmVncmVlbjtcbiAgfVxuICAuY2FyZGljb24ye1xuICAgIGZvbnQtc2l6ZTogMjAwcHg7XG4gICAgY29sb3I6eWVsbG93Z3JlZW47XG4gIH1cbiAgLmNsZWFyZml4OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xuICB9Il19 */"] });
    return RolesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RolesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-roles',
                templateUrl: './roles.component.html',
                styleUrls: ['./roles.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_service_web3_service__WEBPACK_IMPORTED_MODULE_2__["Web3Service"] }, { type: src_app_service_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }, { type: src_app_service_ipfs_service__WEBPACK_IMPORTED_MODULE_6__["IpfsService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: src_app_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/buffer/index.js */ "tjlA").Buffer))

/***/ }),

/***/ "PLN7":
/*!****************************************!*\
  !*** ./src/app/service/api.service.ts ***!
  \****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



// const headers= new HttpHeaders()
// .set('content-type', 'application/json')
// .set('Access-Control-Allow-Origin', '*');
var ApiService = /** @class */ (function () {
    function ApiService(httpClient) {
        this.httpClient = httpClient;
        this.BASEURL = "https://data-analytics-api-e2qi.onrender.com/api/";
    }
    ApiService.prototype.saveDataToAPI = function (data) {
        // const options ={'headers':headers}
        // const url = 'http://localhost:3000/api/postInfo';
        var url = this.BASEURL + 'postInfo';
        return this.httpClient.post(url, data);
    };
    ApiService.prototype.postDataInfoToMongo = function (data) {
        console.log('postDataInfoToMongo');
        var cname = 'trialcountry';
        // const url =   'http://localhost:3000/api/post';
        // return this.httpClient.post('http://localhost:3000/api/postInfo',cname,{responseType: 'text'});
        var databody = data;
        return this.httpClient.post('http://localhost:3000/api/postInfo', databody);
    };
    ApiService.prototype.getLogs = function (lei) {
        return this.httpClient.get('https://data-analytics-api-e2qi.onrender.com/api/getLogs/' + lei);
    };
    ApiService.prototype.getDBAPI = function (wallet) {
        return this.httpClient.get('https://data-analytics-api-e2qi.onrender.com/api/kyc/' + wallet);
    };
    ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
    return ApiService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Pmdg":
/*!***********************************************************************!*\
  !*** ./src/app/bank/transaction-issue/transaction-issue.component.ts ***!
  \***********************************************************************/
/*! exports provided: TransactionIssueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionIssueComponent", function() { return TransactionIssueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_app_service_web3_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/web3.service */ "+Ptt");
/* harmony import */ var src_app_service_backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/backend.service */ "/VBx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/loader/loader.service */ "t0Il");
/* harmony import */ var src_app_service_ipfs_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/ipfs.service */ "4/d+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../loader/loader.component */ "kQyY");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "FKr1");























function TransactionIssueComponent_h4_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h4", 43);
} }
function TransactionIssueComponent_h4_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TransactionIssueComponent_h4_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Transaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TransactionIssueComponent_h4_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Analytics");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TransactionIssueComponent_h4_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TransactionIssueComponent_th_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " LEI ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TransactionIssueComponent_td_50_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TransactionIssueComponent_td_50_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r24.lei, "");
} }
function TransactionIssueComponent_td_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TransactionIssueComponent_td_50_label_1_Template, 2, 0, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TransactionIssueComponent_td_50_ng_template_2_Template, 2, 1, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r24 = ctx.$implicit;
    var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r24.lei === "NA")("ngIfElse", _r26);
} }
function TransactionIssueComponent_th_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TransactionIssueComponent_td_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r29.status, " ");
} }
function TransactionIssueComponent_th_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TransactionIssueComponent_td_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r30.cname, " ");
} }
function TransactionIssueComponent_th_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remarks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TransactionIssueComponent_td_59_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Export Controlled Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TransactionIssueComponent_td_59_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r31.country, "");
} }
function TransactionIssueComponent_td_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TransactionIssueComponent_td_59_label_1_Template, 2, 0, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TransactionIssueComponent_td_59_ng_template_2_Template, 2, 1, "ng-template", null, 48, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r31 = ctx.$implicit;
    var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r31.country === "Un-Authorized")("ngIfElse", _r33);
} }
function TransactionIssueComponent_th_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TransactionIssueComponent_td_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r36.name, " ");
} }
function TransactionIssueComponent_th_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TransactionIssueComponent_td_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r37.contact, " ");
} }
function TransactionIssueComponent_th_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TransactionIssueComponent_td_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r38.email, " ");
} }
function TransactionIssueComponent_th_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " History ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TransactionIssueComponent_ng_container_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "launch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var row_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/history/", row_r39.lei, "");
} }
function TransactionIssueComponent_tr_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 51);
} }
function TransactionIssueComponent_tr_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 52);
} }
var _c0 = function () { return [5, 10, 25, 100]; };
var TransactionIssueComponent = /** @class */ (function () {
    function TransactionIssueComponent(web3, backend, router, loaderService, ipfs, cd, location, route, httpClient) {
        var _this = this;
        this.web3 = web3;
        this.backend = backend;
        this.router = router;
        this.loaderService = loaderService;
        this.ipfs = ipfs;
        this.cd = cd;
        this.location = location;
        this.route = route;
        this.httpClient = httpClient;
        this.showFiller = false;
        this.isExpanded = false;
        this.totalProduct = [];
        this.bols = false;
        this.displayedColumns = ['lei', 'status', 'country', 'c-flag', 'name', 'em', 'act'];
        console.warn("calling order constra");
        this.web3.checkAndInstantiateWeb3()
            .then(function (checkConn) {
            console.log(checkConn);
            if (checkConn === 'connected') {
                _this.web3.loadBlockChainData()
                    .then(function (accountData) {
                    console.log(accountData[0]);
                    _this.accountNumber = accountData[0];
                    _this.web3.getAllContract()
                        .then(function (contractRes) {
                        if (contractRes) {
                            console.log(contractRes);
                            _this.registration = contractRes[0];
                            _this.registration.methods.getUserHashType(_this.accountNumber)
                                .call()
                                .then(function (user) {
                                console.log('user');
                                console.log(user);
                                if (!user[0]) {
                                }
                                else {
                                    console.log('user');
                                    console.log(user);
                                    var URL_1 = "https://" + user[0] + ".ipfs.w3s.link/data_analytics_register_data.json";
                                    // https://bafybeibt3ws4fzuf7p4kawlogy2auvgy34ee6255sszj5npwnszws4f6ze.ipfs.w3s.link/data_analytics_register_data.json
                                    _this.httpClient.get((URL_1)).subscribe(function (result) {
                                        // this.ipfs.getHashFromIPFS(params['id']).then((data:any)=>{
                                        // this.ipfsConverted = JSON.parse(Buffer.from(data.value.buffer).toString());
                                        _this.ipfsConverted2 = result;
                                        //  this.ipfs.getHashFromIPFS(user[0]).then((data:any)=>{
                                        // this.ipfsConverted2 = JSON.parse(Buffer.from(data.value.buffer).toString());
                                        console.log(_this.ipfsConverted2);
                                        _this.userinfo = user[0];
                                        _this.bankName = _this.ipfsConverted2.bankName;
                                        _this.bankMail = _this.ipfsConverted2.email;
                                        _this.userName = _this.ipfsConverted2.firstName + " " + _this.ipfsConverted2.lastName;
                                    });
                                }
                            });
                        }
                    });
                }, function (err) {
                    console.log('account error', err);
                });
            }
        }, function (err) {
            alert(err);
        });
    }
    TransactionIssueComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderService.showLoader('bankLoader');
        this.backend.getTransaction().subscribe(function (result) {
            console.log(result);
            // console.log(result.docs.com);
            // lei: "25490052BT01TLS5TR66"
            // country: "china"
            // name: "Maersk Supply Service West Africa A\/S"
            // wallet: "0x78e973959D88b0F57022E38163c66e5e0B3b2ae8"
            // ipfs: "Qmfyrthfghghghhhfhgfhgfhr"
            // date: "2021-12-15"
            // contact: 7895462313
            // email: "Mar@gmail.com"
            // _id: "61bb64550e22aa6590690fe9"
            // ipfs: "Qmjghjydffdg4576dfhtytr5756fghgfhgf"
            // consignee: "John"
            // orderId: "8021"
            // quantity: "1"
            // orderDetails: "Turbinewarts"
            // seller: "wartsila"
            // date: "2021-12-18"
            // contact: "658512"
            // consignee_Wallet: "0x8548e973959D88b0F57022E65463c66e5e0B3b2uy8"
            // seller_wallet: "0x8548e973959D88b0F57022E654u765tye5e0B3b2uy8"
            // tx: 1
            // lei: "25490052BT01TLS5TR66"
            console.log(result);
            // this.totalProduct.push(result.leiIssue);
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](result);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
            _this.cd.detectChanges();
            _this.loaderService.hideLoader('bankLoader');
        });
        //     status: "LEI NOT FOUND"
        // lei: "987845645231184dfef"
        // email: "maer@gmail.com"
        // wallet: "0xasdre56tghythg"
        // kycreg: "2021-12-14"
        // checkDate: "2022-01-07"
        // mongoID: "61ae3c475ff71e6cdaf6ec75"
        // this.loaderService.hideLoader('bankLoader');
        // this.route.params.subscribe(params => {
        //   console.log(params);
        //   console.log(params['id']);
        //   if (params['id']) {
        //      // getHashFromIPFS
        //       this.ipfs.getHashFromIPFS(params['id']).then((data:any)=>{
        //         this.ipfsConverted = JSON.parse(Buffer.from(data.value.buffer).toString());
        //       console.log(this.ipfsConverted );
        //       this.bankName =this.ipfsConverted.bankName;
        //       this.bankMail = this.ipfsConverted.email;
        //       this.userName =this.ipfsConverted.firstName+" "+this.ipfsConverted.lastName;
        //       this.loaderService.hideLoader('bankLoader');
        //       this.loaderService.showLoader('bankLoader');
        //       this.backend.getBankBids().then((result: any) => {
        //         // console.log(result[0]);
        //         this.web3.loadBlockChainData().then((accountData: any) => {
        //             this.accountNumber = accountData[0];
        //             if(result.length>0){
        //               this.web3.getAllContract()
        //               .then((contractRes: any) => {
        //                 this.orders = contractRes[2];
        //                 // this.totalProduct.push(this.ipfsConverted2);
        //                 console.log(result);
        //                 this.dataSource = new MatTableDataSource(result);
        //                                       this.dataSource.sort = this.sort;
        //                                       this.dataSource.paginator = this.paginator;
        //                                       this.cd.detectChanges();
        //                                       this.loaderService.hideLoader('bankLoader');
        //               });
        //             }else{
        //               this.loaderService.hideLoader('bankLoader');
        //   alert("No orders in marketplace")
        //             }
        //       }).catch((err) => {
        //       });
        //       }).catch((err)=>{
        //         alert("No orders yet in market place");
        //       // this.location.back()
        //       });
        //       })
        //   }
        // });
    };
    TransactionIssueComponent.prototype.viewIssuing = function () {
        console.log('in view url');
        this.router.navigate(['issuing_transaction']);
    };
    TransactionIssueComponent.prototype.viewAdvisory = function () {
        this.router.navigate(['advisory_transaction']);
    };
    TransactionIssueComponent.prototype.viewBidsTable = function () {
        this.router.navigate(['bids_table']);
    };
    TransactionIssueComponent.prototype.viewCertificate = function () {
    };
    TransactionIssueComponent.prototype.getDBAPI = function () {
        this.router.navigate(['analytics']);
        // this.backend.getDBAPI().subscribe((result) => {
        //   console.log(result);
        // });
    };
    TransactionIssueComponent.prototype.redirectDashboard = function () {
        // this.route.navigateByUrl('seller_dashboard/'+this.userinfo);
        this.router.navigate(['bank_dashboard', { id: this.userinfo }]);
    };
    TransactionIssueComponent.ɵfac = function TransactionIssueComponent_Factory(t) { return new (t || TransactionIssueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_web3_service__WEBPACK_IMPORTED_MODULE_4__["Web3Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_ipfs_service__WEBPACK_IMPORTED_MODULE_8__["IpfsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"])); };
    TransactionIssueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransactionIssueComponent, selectors: [["app-transaction-issue"]], viewQuery: function TransactionIssueComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        } }, decls: 77, vars: 11, consts: [[1, "loaders"], [1, "bankLoader"], [3, "id"], [1, "example-container"], ["disableClose", "true", "opened", "true", "mode", "side", 1, "example-sidenav"], ["sidenav", ""], ["mat-list-icon", "", "matTooltip", "Expand", 1, "navicon", 3, "click"], ["mat-line", "", 4, "ngIf"], ["mat-list-icon", "", "matTooltip", "Dashboard", 1, "navicon", 3, "click"], ["matTooltip", "Transaction", "mat-list-icon", "", 1, "navicon", 3, "click"], ["mat-list-icon", "", "matTooltip", "Analytics", 1, "navicon", "active", 3, "click"], ["mat-list-icon", "", "matTooltip", "Report", "routerLink", "/bank/report", 1, "navicon"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [2, "color", "#007bff", "background-color", "transparent", "cursor", "pointer", 3, "click"], ["aria-current", "page", 1, "breadcrumb-item"], [1, "example-sidenav-content"], [1, "example-card"], [1, "main-content"], [1, "container-fluid"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12"], [2, "padding", "10px 10px 10px 10px"], [1, "mat-elevation-z8"], [2, "overflow-x", "auto"], ["mat-table", "", "matSort", "", 1, "table", "table-responsive-sm", "table-responsive-md", 3, "dataSource"], ["matColumnDef", "lei"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "status"], ["matColumnDef", "country"], ["matColumnDef", "c-flag"], ["matColumnDef", "name"], ["matColumnDef", "contact"], ["matColumnDef", "em"], ["matColumnDef", "act"], ["mat-header-cell", "", "style", "padding-right: 20px", 4, "matHeaderCellDef"], [4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "style", "padding: 15px;", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page of users", 3, "pageSizeOptions"], ["mat-raised-button", "", "fill", "outline", "slot", "end", 1, "viewbtn", 3, "click"], ["mat-line", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["elseBlock1", ""], ["mat-header-cell", "", 2, "padding-right", "20px"], ["mat-icon-button", "", 3, "routerLink"], ["mat-header-row", ""], ["mat-row", "", 2, "padding", "15px"]], template: function TransactionIssueComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-loader", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav", 4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-nav-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionIssueComponent_Template_mat_icon_click_8_listener() { return ctx.isExpanded = !ctx.isExpanded; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "menu");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TransactionIssueComponent_h4_10_Template, 1, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionIssueComponent_Template_mat_icon_click_12_listener() { return ctx.redirectDashboard(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "dashboard");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TransactionIssueComponent_h4_14_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionIssueComponent_Template_mat_icon_click_16_listener() { return ctx.redirectDashboard(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "swap_horiz");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TransactionIssueComponent_h4_18_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionIssueComponent_Template_mat_icon_click_20_listener() { return ctx.getDBAPI(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "analytics");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TransactionIssueComponent_h4_22_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "summarize");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, TransactionIssueComponent_h4_26_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nav", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ol", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionIssueComponent_Template_a_click_30_listener() { return ctx.redirectDashboard(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Home");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionIssueComponent_Template_a_click_33_listener() { return ctx.getDBAPI(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Analytics");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Malicious Transactions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "TradeTrip Scan : Malicious Transactions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "table", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](48, 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, TransactionIssueComponent_th_49_Template, 2, 0, "th", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, TransactionIssueComponent_td_50_Template, 4, 2, "td", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](51, 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, TransactionIssueComponent_th_52_Template, 2, 0, "th", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, TransactionIssueComponent_td_53_Template, 2, 1, "td", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](54, 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, TransactionIssueComponent_th_55_Template, 2, 0, "th", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, TransactionIssueComponent_td_56_Template, 2, 1, "td", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](57, 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, TransactionIssueComponent_th_58_Template, 2, 0, "th", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, TransactionIssueComponent_td_59_Template, 4, 2, "td", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](60, 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, TransactionIssueComponent_th_61_Template, 2, 0, "th", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, TransactionIssueComponent_td_62_Template, 2, 1, "td", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](63, 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, TransactionIssueComponent_th_64_Template, 2, 0, "th", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, TransactionIssueComponent_td_65_Template, 2, 1, "td", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](66, 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, TransactionIssueComponent_th_67_Template, 2, 0, "th", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, TransactionIssueComponent_td_68_Template, 2, 1, "td", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](69, 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, TransactionIssueComponent_th_70_Template, 2, 0, "th", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, TransactionIssueComponent_ng_container_71_Template, 6, 1, "ng-container", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, TransactionIssueComponent_tr_72_Template, 1, 0, "tr", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, TransactionIssueComponent_tr_73_Template, 1, 0, "tr", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "mat-paginator", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionIssueComponent_Template_button_click_75_listener() { return ctx.viewCertificate(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " View Certificate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "bankLoader");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
        } }, directives: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__["LoaderComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListIconCssMatStyler"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatLine"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], styles: ["mat-sidenav[_ngcontent-%COMP%]{\n    \n  background:goldenrod;\n  \n  }\n  mat-card[_ngcontent-%COMP%]{\n      margin-bottom: 30px;\n  }\n  .navicon[_ngcontent-%COMP%]{\n  color: white;\n  }\n  .example-container[_ngcontent-%COMP%] {\n    display: block;\n    overflow: auto;\n    min-height: 100vh;\n    height: auto;\n    margin: 0;\n  \n  \n  \n  }\n  .example-card[_ngcontent-%COMP%]{\n    display: block;\n    overflow: auto;\n    min-height: 100vh;\n    height: auto;\n    margin: 0;\n    \n  }\n  .example-sidenav-content[_ngcontent-%COMP%] {\n    overflow: auto;\n    width: 100%;\n    height: 100%;\n  \n  }\n  .example-sidenav[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .demo-panel[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 90%;\n    margin: 10px 0px;\n  }\n  .vl[_ngcontent-%COMP%] {\n    border-left: 1px solid gray;\n    height: 500px;\n  }\n  table[_ngcontent-%COMP%] {\n    width: 100%;\n    table-layout:fixed\n  }\n  .mat-form-field[_ngcontent-%COMP%] {\n    font-size: 14px;\n    width: 100%;\n  }\n  button[_ngcontent-%COMP%]{\n    \n    font: 15px;\n\n  }\n  td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n    \n    \n    \n    \n     \n     \n     \n\n     \n     \n     \n  }\n  th[_ngcontent-%COMP%]{\n    \n    background:goldenrod;\n  font-weight: bold;\n  font-size: large;\n  color: white;\n  }\n  .profileimg[_ngcontent-%COMP%] {\n    border-radius: 50%;\n  }\n  .chartdiv[_ngcontent-%COMP%]{\n    width:100%;\n    height:250px;\n  }\n  .card[_ngcontent-%COMP%]{\n    background-color: whitesmoke;\n  }\n  .subnote[_ngcontent-%COMP%]{\n    font-size: 10px;\n    color: gray;\n  }\n  .sideicon[_ngcontent-%COMP%]{\n    padding: 10px;\n    margin: 10px;\n    border:\"1px solid\";\n    border-radius: 10%;\n    background-color: grey;\n  }\n  .active[_ngcontent-%COMP%]{\n    background-color: cornflowerblue;\n    border-radius: 50%;\n  }\n  .center[_ngcontent-%COMP%]{\n      justify-content: center;\n  }\n  .cardicon1[_ngcontent-%COMP%]{\n     font-size: 100px;\n     color:green;\n  }\n  .cardicon2[_ngcontent-%COMP%]{\n    font-size: 100px;\n    color:yellowgreen;\n  }\n  \n  .wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: calc(100vh - 20px);\n    \n  }\n  .inner[_ngcontent-%COMP%] {\n    \n    color: black;\n    padding: 12px;\n  }\n  td[_ngcontent-%COMP%]{\n    text-align: start;\n    vertical-align: middle;\n    padding: 5px;\n    }\n  .table-responsive[_ngcontent-%COMP%] {\n  display: table;\n}\n  @media only screen and (min-width: 992px){\n  .mat-column-lei[_ngcontent-%COMP%] {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 56% !important;\n    width: 14% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  .mat-column-status[_ngcontent-%COMP%] {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 56% !important;\n    width: 14% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  .mat-column-c-flag[_ngcontent-%COMP%] {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 56% !important;\n    width: 10% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n   .mat-column-country[_ngcontent-%COMP%] {\n     word-wrap: break-word !important;\n     white-space: unset !important;\n     flex: 0 0 56% !important;\n     width: 12% !important;\n     overflow-wrap: break-word;\n     word-wrap: break-word;\n   \n     word-break: break-word;\n   \n     -ms-hyphens: auto;\n     -webkit-hyphens: auto;\n     hyphens: auto;\n   }\n\n \n\n  .mat-column-name[_ngcontent-%COMP%] {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 56% !important;\n    width: 10% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  .mat-column-em[_ngcontent-%COMP%] {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 56% !important;\n    width: 12% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  .mat-column-act[_ngcontent-%COMP%] {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 56% !important;\n    width:6% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n\n }\n  \n  @media only screen and (min-width: 768px) {\n  .mat-column[_ngcontent-%COMP%]{\n    width:auto  !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFuay90cmFuc2FjdGlvbi1pc3N1ZS90cmFuc2FjdGlvbi1pc3N1ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGdDQUFnQztFQUNsQyxvQkFBb0I7O0VBRXBCO0VBQ0E7TUFDSSxtQkFBbUI7RUFDdkI7RUFDQTtFQUNBLFlBQVk7RUFDWjtFQUNBO0lBQ0UsY0FBYztJQUNkLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFNBQVM7Ozs7RUFJWDtFQUNBO0lBQ0UsY0FBYztJQUNkLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFNBQVM7SUFDVCxpQ0FBaUM7RUFDbkM7RUFDQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTs7RUFFZDtFQUVBO0lBQ0UsYUFBYTtFQUNmO0VBRUE7SUFDRSxXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLGFBQWE7RUFDZjtFQUNBO0lBQ0UsV0FBVztJQUNYO0VBQ0Y7RUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0VBQ2I7RUFDQTtJQUNFLGtDQUFrQztJQUNsQyxVQUFVOztFQUVaO0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsS0FBSztJQUNMLHdCQUF3Qjs7S0FFdkI7OzsyQkFHc0I7S0FDdEIsMEJBQTBCO0tBQzFCOzs7OytCQUkwQjs7S0FFMUIsa0NBQWtDO0tBQ2xDLHNCQUFzQjtLQUN0Qiw2QkFBNkI7RUFDaEM7RUFDQTtJQUNFLGlDQUFpQztJQUNqQyxvQkFBb0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1o7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7RUFDZDtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsV0FBVztFQUNiO0VBRUE7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0VBQ3BCO0VBQ0E7TUFDSSx1QkFBdUI7RUFDM0I7RUFDQTtLQUNHLGdCQUFnQjtLQUNoQixXQUFXO0VBQ2Q7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7RUFDQSxXQUFXO0VBQ1g7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7RUFDZjtFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1o7RUFDSjtFQUNFLGNBQWM7QUFDaEI7RUFDRztFQUNEO0lBQ0UsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixxQkFBcUI7O0lBRXJCLHNCQUFzQjs7SUFFdEIsaUJBQWlCO0lBRWpCLHFCQUFxQjtJQUNyQixhQUFhO0VBQ2Y7RUFDQTtJQUNFLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIscUJBQXFCOztJQUVyQixzQkFBc0I7O0lBRXRCLGlCQUFpQjtJQUVqQixxQkFBcUI7SUFDckIsYUFBYTtFQUNmO0VBQ0E7SUFDRSxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLHFCQUFxQjs7SUFFckIsc0JBQXNCOztJQUV0QixpQkFBaUI7SUFFakIscUJBQXFCO0lBQ3JCLGFBQWE7RUFDZjtHQUNDO0tBQ0UsZ0NBQWdDO0tBQ2hDLDZCQUE2QjtLQUM3Qix3QkFBd0I7S0FDeEIscUJBQXFCO0tBQ3JCLHlCQUF5QjtLQUN6QixxQkFBcUI7O0tBRXJCLHNCQUFzQjs7S0FFdEIsaUJBQWlCO0tBRWpCLHFCQUFxQjtLQUNyQixhQUFhO0dBQ2Y7Ozs7RUFJRDtJQUNFLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIscUJBQXFCOztJQUVyQixzQkFBc0I7O0lBRXRCLGlCQUFpQjtJQUVqQixxQkFBcUI7SUFDckIsYUFBYTtFQUNmO0VBQ0E7SUFDRSxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLHFCQUFxQjs7SUFFckIsc0JBQXNCOztJQUV0QixpQkFBaUI7SUFFakIscUJBQXFCO0lBQ3JCLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixxQkFBcUI7O0lBRXJCLHNCQUFzQjs7SUFFdEIsaUJBQWlCO0lBRWpCLHFCQUFxQjtJQUNyQixhQUFhO0VBQ2Y7O0NBRUQ7RUFFRCxxREFBcUQ7RUFDckQ7RUFDRTtJQUNFLHNCQUFzQjtFQUN4QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYmFuay90cmFuc2FjdGlvbi1pc3N1ZS90cmFuc2FjdGlvbi1pc3N1ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5tYXQtc2lkZW5hdntcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOmRvZGdlcmJsdWUgKi9cbiAgYmFja2dyb3VuZDpnb2xkZW5yb2Q7XG4gIFxuICB9XG4gIG1hdC1jYXJke1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuICAubmF2aWNvbntcbiAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogMDtcbiAgXG4gIFxuICBcbiAgfVxuICAuZXhhbXBsZS1jYXJke1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW46IDA7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlOyAqL1xuICB9XG4gIC5leGFtcGxlLXNpZGVuYXYtY29udGVudCB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICBcbiAgfVxuICBcbiAgLmV4YW1wbGUtc2lkZW5hdiB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICBcbiAgLmRlbW8tcGFuZWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTAlO1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG4gIH1cbiAgLnZsIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyYXk7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgfVxuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGFibGUtbGF5b3V0OmZpeGVkXG4gIH1cbiAgXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIGJ1dHRvbntcbiAgICAvKiBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4OyAqL1xuICAgIGZvbnQ6IDE1cHg7XG5cbiAgfVxuICBcbiAgdGQsIHRoIHtcbiAgICAvKiB3aWR0aDogMjUlOyAqL1xuICAgIC8qICAqL1xuICAgIC8qIHBhZGRpbmctbGVmdDogMjBweDsgKi9cbiAgICBcbiAgICAgLyogbWF4LXdpZHRoOiAwO1xuICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgKi9cbiAgICAgLyogd29yZC13cmFwOmJyZWFrLXdvcmQ7ICovXG4gICAgIC8qIHdoaXRlLXNwYWNlOiAtby1wcmUtd3JhcDsgXG4gICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwOyBcbiAgICAgd2hpdGUtc3BhY2U6IC1tb3otcHJlLXdyYXA7IFxuICAgICB3aGl0ZS1zcGFjZTogLXByZS13cmFwOyAgKi9cblxuICAgICAvKiBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4OyAqL1xuICAgICAvKiBvdmVyZmxvdy14OiBhdXRvOyAqL1xuICAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cbiAgfVxuICB0aHtcbiAgICAvKiBiYWNrZ3JvdW5kOiBtZWRpdW1zbGF0ZWJsdWU7ICovXG4gICAgYmFja2dyb3VuZDpnb2xkZW5yb2Q7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IGxhcmdlO1xuICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLnByb2ZpbGVpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuICBcbiAgLmNoYXJ0ZGl2e1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjI1MHB4O1xuICB9XG4gIC5jYXJke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIH1cbiAgLnN1Ym5vdGV7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiBncmF5O1xuICB9XG4gIFxuICAuc2lkZWljb257XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYm9yZGVyOlwiMXB4IHNvbGlkXCI7XG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIH1cbiAgLmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgLmNlbnRlcntcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5jYXJkaWNvbjF7XG4gICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gICAgIGNvbG9yOmdyZWVuO1xuICB9XG4gIC5jYXJkaWNvbjJ7XG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgICBjb2xvcjp5ZWxsb3dncmVlbjtcbiAgfVxuICAvKiBsb2FkZXIgKi9cbiAgLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMHB4KTtcbiAgICAvKiBiYWNrZ3JvdW5kOiByZWQ7ICovXG4gIH1cbiAgLmlubmVyIHtcbiAgICAvKiBiYWNrZ3JvdW5kOiBncmVlbjsgKi9cbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogMTJweDtcbiAgfVxuICBcbiAgdGR7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgfVxuLnRhYmxlLXJlc3BvbnNpdmUge1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cbiAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpe1xuICAubWF0LWNvbHVtbi1sZWkge1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIGZsZXg6IDAgMCA1NiUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTQlICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIFxuICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAgIC1tb3otaHlwaGVuczogYXV0bztcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gICAgaHlwaGVuczogYXV0bztcbiAgfVxuICAubWF0LWNvbHVtbi1zdGF0dXMge1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIGZsZXg6IDAgMCA1NiUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTQlICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIFxuICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAgIC1tb3otaHlwaGVuczogYXV0bztcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gICAgaHlwaGVuczogYXV0bztcbiAgfVxuICAubWF0LWNvbHVtbi1jLWZsYWcge1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIGZsZXg6IDAgMCA1NiUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAlICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIFxuICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAgIC1tb3otaHlwaGVuczogYXV0bztcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gICAgaHlwaGVuczogYXV0bztcbiAgfVxuICAgLm1hdC1jb2x1bW4tY291bnRyeSB7XG4gICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgZmxleDogMCAwIDU2JSAhaW1wb3J0YW50O1xuICAgICB3aWR0aDogMTIlICFpbXBvcnRhbnQ7XG4gICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgIFxuICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgXG4gICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAgICAtbW96LWh5cGhlbnM6IGF1dG87XG4gICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgICAgaHlwaGVuczogYXV0bztcbiAgIH1cblxuIFxuXG4gIC5tYXQtY29sdW1uLW5hbWUge1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIGZsZXg6IDAgMCA1NiUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAlICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIFxuICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAgIC1tb3otaHlwaGVuczogYXV0bztcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gICAgaHlwaGVuczogYXV0bztcbiAgfVxuICAubWF0LWNvbHVtbi1lbSB7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgZmxleDogMCAwIDU2JSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMiUgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XG4gICAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgICBoeXBoZW5zOiBhdXRvO1xuICB9XG4gIC5tYXQtY29sdW1uLWFjdCB7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgZmxleDogMCAwIDU2JSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOjYlICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIFxuICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAgIC1tb3otaHlwaGVuczogYXV0bztcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gICAgaHlwaGVuczogYXV0bztcbiAgfVxuXG4gfVxuXG4vKiBNZWRpdW0gZGV2aWNlcyAobGFuZHNjYXBlIHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm1hdC1jb2x1bW57XG4gICAgd2lkdGg6YXV0byAgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"] });
    return TransactionIssueComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionIssueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-transaction-issue',
                templateUrl: './transaction-issue.component.html',
                styleUrls: ['./transaction-issue.component.css']
            }]
    }], function () { return [{ type: src_app_service_web3_service__WEBPACK_IMPORTED_MODULE_4__["Web3Service"] }, { type: src_app_service_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] }, { type: src_app_service_ipfs_service__WEBPACK_IMPORTED_MODULE_8__["IpfsService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "R0aH":
/*!***************************************************************************!*\
  !*** ./src/app/bank/issuing-transaction/issuing-transaction.component.ts ***!
  \***************************************************************************/
/*! exports provided: IssuingTransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuingTransactionComponent", function() { return IssuingTransactionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _service_web3_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/web3.service */ "+Ptt");
/* harmony import */ var _service_backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/backend.service */ "/VBx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _loader_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../loader/loader.service */ "t0Il");
/* harmony import */ var _service_ipfs_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/ipfs.service */ "4/d+");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../loader/loader.component */ "kQyY");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");























function IssuingTransactionComponent_h4_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h4", 40);
} }
function IssuingTransactionComponent_h4_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IssuingTransactionComponent_h4_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Transaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IssuingTransactionComponent_h4_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Analytics");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IssuingTransactionComponent_h4_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IssuingTransactionComponent_th_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " # ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IssuingTransactionComponent_td_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r19 = ctx.index;
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r19 + 1 + ctx_r7.paginator.pageIndex * ctx_r7.paginator.pageSize, " ");
} }
function IssuingTransactionComponent_th_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Order Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IssuingTransactionComponent_td_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r20.order, " ");
} }
function IssuingTransactionComponent_th_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " LC Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IssuingTransactionComponent_td_54_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Not Available ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IssuingTransactionComponent_td_54_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r21.lcissued, " ");
} }
function IssuingTransactionComponent_td_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IssuingTransactionComponent_td_54_label_1_Template, 2, 0, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IssuingTransactionComponent_td_54_ng_template_2_Template, 2, 1, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r21 = ctx.$implicit;
    var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !row_r21.lcissued)("ngIfElse", _r23);
} }
function IssuingTransactionComponent_th_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " LC Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IssuingTransactionComponent_ng_container_57_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Issue LC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "launch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", row_r26.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/bank/issue-lc/", row_r26.order, "");
} }
function IssuingTransactionComponent_ng_container_57_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " LC issued");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IssuingTransactionComponent_ng_container_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IssuingTransactionComponent_ng_container_57_td_1_Template, 5, 2, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IssuingTransactionComponent_ng_container_57_ng_template_2_Template, 2, 0, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var row_r26 = ctx.$implicit;
    var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !row_r26.lcissued)("ngIfElse", _r28);
} }
function IssuingTransactionComponent_th_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Transfer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IssuingTransactionComponent_td_60_Template(rf, ctx) { if (rf & 1) {
    var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IssuingTransactionComponent_td_60_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); var row_r31 = ctx.$implicit; var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.issuingConfirmation(row_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Confrim Fund Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", row_r31.order);
} }
function IssuingTransactionComponent_tr_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 52);
} }
function IssuingTransactionComponent_tr_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 53);
} }
var _c0 = function () { return [5, 10, 25, 100]; };
var IssuingTransactionComponent = /** @class */ (function () {
    function IssuingTransactionComponent(web3, backend, route, loaderService, ipfs, cd) {
        var _this = this;
        this.web3 = web3;
        this.backend = backend;
        this.route = route;
        this.loaderService = loaderService;
        this.ipfs = ipfs;
        this.cd = cd;
        this.showFiller = false;
        this.isExpanded = false;
        this.totalProduct = [];
        this.displayedColumns = ['id', 'order', 'lc', 'action', 'transfer'];
        console.warn("calling order constra");
        this.web3.checkAndInstantiateWeb3()
            .then(function (checkConn) {
            console.log(checkConn);
            if (checkConn === 'connected') {
                _this.web3.loadBlockChainData()
                    .then(function (accountData) {
                    console.log(accountData[0]);
                    _this.accountNumber = accountData[0];
                    _this.web3.getAllContract()
                        .then(function (contractRes) {
                        if (contractRes) {
                            console.log(contractRes);
                            _this.registration = contractRes[1];
                            _this.registration.methods.getUserHashType(_this.accountNumber)
                                .call()
                                .then(function (user) {
                                console.log('user');
                                console.log(user);
                                if (!user[0]) {
                                }
                                else {
                                    console.log('user');
                                    console.log(user);
                                    _this.ipfs.getHashFromIPFS(user[0]).then(function (data) {
                                        _this.ipfsConverted2 = JSON.parse(Buffer.from(data.value.buffer).toString());
                                        console.log(_this.ipfsConverted2);
                                        _this.userinfo = user[0];
                                    });
                                }
                            });
                        }
                    });
                }, function (err) {
                    console.log('account error', err);
                });
            }
        }, function (err) {
            alert(err);
        });
    }
    IssuingTransactionComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.warn("in ngOnInit");
        this.loaderService.showLoader('bankLoader');
        this.web3.getAllContract()
            .then(function (contractRes) {
            _this.orders = contractRes[3];
            _this.backend.getBankIssueLC().then(function (result) {
                console.log('result');
                console.log(result);
                var _loop_1 = function (i) {
                    console.log(result[i]);
                    _this.web3.convertToHex(result[i][0][0]).then(function (c) {
                        contractRes[3].methods.returnLCStat(c)
                            .call()
                            .then(function (pro) {
                            console.log(pro);
                            if (result[i][0][4]) {
                                _this.web3.getUtf8(result[i][0][4]).then(function (d) {
                                    console.log('value of d');
                                    console.log(d);
                                    _this.totalProduct.push({
                                        "id": i + 1,
                                        "order": result[i][0][0],
                                        "lcissued": d,
                                        "price": 1,
                                        "lcstat": pro
                                    });
                                    console.log(_this.totalProduct);
                                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.totalProduct);
                                    _this.dataSource.sort = _this.sort;
                                    _this.dataSource.paginator = _this.paginator;
                                    _this.cd.detectChanges();
                                });
                            }
                            else {
                                _this.totalProduct.push({
                                    "id": i + 1,
                                    "order": result[i][0][0],
                                    "lcissued": false,
                                    "price": 1,
                                    "lcstat": pro
                                });
                                console.log(_this.totalProduct);
                                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.totalProduct);
                                _this.dataSource.sort = _this.sort;
                                _this.dataSource.paginator = _this.paginator;
                                _this.cd.detectChanges();
                            }
                            _this.loaderService.hideLoader('bankLoader');
                        });
                    });
                };
                // this.lcs = result;
                for (var i = 0; i < result.length; i++) {
                    _loop_1(i);
                }
            }).catch(function (err) {
            });
        });
    };
    IssuingTransactionComponent.prototype.issuingConfirmation = function (selecteditem) {
        var _this = this;
        console.warn("CLIKCKED");
        this.loaderService.showLoader('bankLoader');
        console.log(selecteditem);
        console.log('in cashLC');
        var order = selecteditem.order;
        console.log(order);
        this.backend.issuingConfirmation(order).then(function (res) {
            console.log(res);
            _this.loaderService.hideLoader('bankLoader');
        });
    };
    IssuingTransactionComponent.prototype.redirectDashboard = function () {
        // this.route.navigateByUrl('seller_dashboard/'+this.userinfo);
        this.route.navigate(['bank_dashboard', { id: this.userinfo }]);
    };
    IssuingTransactionComponent.prototype.getDBAPI = function () {
        this.route.navigate(['analytics']);
    };
    IssuingTransactionComponent.ɵfac = function IssuingTransactionComponent_Factory(t) { return new (t || IssuingTransactionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_web3_service__WEBPACK_IMPORTED_MODULE_4__["Web3Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_ipfs_service__WEBPACK_IMPORTED_MODULE_8__["IpfsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
    IssuingTransactionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IssuingTransactionComponent, selectors: [["app-issuing-transaction"]], viewQuery: function IssuingTransactionComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        } }, decls: 64, vars: 11, consts: [[1, "loaders"], [1, "bankLoader"], [3, "id"], [1, "example-container"], ["disableClose", "true", "opened", "true", "mode", "side", 1, "example-sidenav"], ["sidenav", ""], ["mat-list-icon", "", "matTooltip", "Expand", 1, "navicon", 3, "click"], ["mat-line", "", 4, "ngIf"], [3, "click"], ["mat-list-icon", "", "matTooltip", "Dashboard", 1, "navicon"], ["matTooltip", "Transaction", "mat-list-icon", "", 1, "navicon", "active", 3, "click"], ["mat-list-icon", "", "matTooltip", "Analytics", 1, "navicon", 3, "click"], ["mat-list-icon", "", "matTooltip", "Report", "routerLink", "/bank/report", 1, "navicon"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [2, "color", "#007bff", "background-color", "transparent", "cursor", "pointer", 3, "click"], ["aria-current", "page", 1, "breadcrumb-item"], [1, "example-sidenav-content"], [1, "example-card"], [1, "main-content"], [1, "container-fluid"], [1, "row"], [1, "col-lg-10", "col-md-12", "col-sm-12"], [2, "padding", "10px 10px 10px 10px"], [1, "mat-elevation-z8"], [2, "overflow-x", "auto"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "order"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "lc"], ["matColumnDef", "action"], [4, "matCellDef"], ["matColumnDef", "transfer"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "style", "padding: 15px;", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page of users", 3, "pageSizeOptions"], ["mat-line", ""], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", ""], [4, "ngIf", "ngIfElse"], ["lcFound", ""], ["mat-cell", "", "style", "color:steelblue;", 4, "ngIf", "ngIfElse"], ["noReplies", ""], ["mat-cell", "", 2, "color", "steelblue"], ["mat-icon-button", "", "matTooltip", "Letter of Credit", 3, "id", "routerLink"], [2, "color", "green", "font-weight", "bold"], ["mat-button", "", "color", "primary", 3, "id", "click"], ["mat-header-row", ""], ["mat-row", "", 2, "padding", "15px"]], template: function IssuingTransactionComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-loader", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav", 4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-nav-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IssuingTransactionComponent_Template_mat_icon_click_8_listener() { return ctx.isExpanded = !ctx.isExpanded; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "menu");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, IssuingTransactionComponent_h4_10_Template, 1, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-list-item", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IssuingTransactionComponent_Template_mat_list_item_click_11_listener() { return ctx.redirectDashboard(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "dashboard");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, IssuingTransactionComponent_h4_14_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IssuingTransactionComponent_Template_mat_icon_click_16_listener() { return ctx.redirectDashboard(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "swap_horiz");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, IssuingTransactionComponent_h4_18_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IssuingTransactionComponent_Template_mat_icon_click_20_listener() { return ctx.getDBAPI(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "analytics");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, IssuingTransactionComponent_h4_22_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "summarize");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, IssuingTransactionComponent_h4_26_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nav", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ol", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IssuingTransactionComponent_Template_a_click_30_listener() { return ctx.redirectDashboard(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Home");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Requested LC's");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Received Requests for Letter of Credit");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "table", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](46, 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, IssuingTransactionComponent_th_47_Template, 2, 0, "th", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, IssuingTransactionComponent_td_48_Template, 2, 1, "td", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](49, 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, IssuingTransactionComponent_th_50_Template, 2, 0, "th", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, IssuingTransactionComponent_td_51_Template, 2, 1, "td", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](52, 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, IssuingTransactionComponent_th_53_Template, 2, 0, "th", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, IssuingTransactionComponent_td_54_Template, 4, 2, "td", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](55, 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, IssuingTransactionComponent_th_56_Template, 2, 0, "th", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, IssuingTransactionComponent_ng_container_57_Template, 4, 2, "ng-container", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](58, 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, IssuingTransactionComponent_th_59_Template, 2, 0, "th", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, IssuingTransactionComponent_td_60_Template, 3, 1, "td", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, IssuingTransactionComponent_tr_61_Template, 1, 0, "tr", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, IssuingTransactionComponent_tr_62_Template, 1, 0, "tr", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "mat-paginator", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "bankLoader");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
        } }, directives: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListIconCssMatStyler"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCard"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatLine"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], styles: ["mat-sidenav[_ngcontent-%COMP%]{\n  \nbackground:goldenrod;\n\n}\nmat-card[_ngcontent-%COMP%]{\n    margin-bottom: 30px;\n}\n.navicon[_ngcontent-%COMP%]{\ncolor: white;\n}\n.example-container[_ngcontent-%COMP%] {\n  display: block;\n  overflow: auto;\n  min-height: 100vh;\n  height: auto;\n  margin: 0;\n\n\n\n}\n.example-card[_ngcontent-%COMP%]{\n  display: block;\n  overflow: auto;\n  min-height: 100vh;\n  height: auto;\n  margin: 0;\n  \n}\n.example-sidenav-content[_ngcontent-%COMP%] {\n  overflow: auto;\n  width: 100%;\n  height: 100%;\n\n}\n.example-sidenav[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.demo-panel[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 90%;\n  margin: 10px 0px;\n}\n.vl[_ngcontent-%COMP%] {\n  border-left: 1px solid gray;\n  height: 500px;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  \n  \n}\nth[_ngcontent-%COMP%]{\n  \n  background:goldenrod;\nfont-weight: bold;\nfont-size: large;\ncolor: white;\n}\n.profileimg[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n.chartdiv[_ngcontent-%COMP%]{\n  width:100%;\n  height:250px;\n}\n.card[_ngcontent-%COMP%]{\n  background-color: whitesmoke;\n}\n.subnote[_ngcontent-%COMP%]{\n  font-size: 10px;\n  color: gray;\n}\n.sideicon[_ngcontent-%COMP%]{\n  padding: 10px;\n  margin: 10px;\n  border:\"1px solid\";\n  border-radius: 10%;\n  background-color: grey;\n}\n.active[_ngcontent-%COMP%]{\n  background-color: cornflowerblue;\n  border-radius: 50%;\n}\n.center[_ngcontent-%COMP%]{\n    justify-content: center;\n}\n.cardicon1[_ngcontent-%COMP%]{\n   font-size: 100px;\n   color:green;\n}\n.cardicon2[_ngcontent-%COMP%]{\n  font-size: 100px;\n  color:yellowgreen;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: calc(100vh - 20px);\n  \n}\n.inner[_ngcontent-%COMP%] {\n  \n  color: black;\n  padding: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFuay9pc3N1aW5nLXRyYW5zYWN0aW9uL2lzc3VpbmctdHJhbnNhY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEMsb0JBQW9COztBQUVwQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixTQUFTOzs7O0FBSVg7QUFDQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixTQUFTO0VBQ1QsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7O0FBRWQ7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLEtBQUs7QUFDUDtBQUNBO0VBQ0UsaUNBQWlDO0VBQ2pDLG9CQUFvQjtBQUN0QixpQkFBaUI7QUFDakIsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkO0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0dBQ0csZ0JBQWdCO0dBQ2hCLFdBQVc7QUFDZDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBLFdBQVc7QUFDWDtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvYmFuay9pc3N1aW5nLXRyYW5zYWN0aW9uL2lzc3VpbmctdHJhbnNhY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxubWF0LXNpZGVuYXZ7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ZG9kZ2VyYmx1ZSAqL1xuYmFja2dyb3VuZDpnb2xkZW5yb2Q7XG5cbn1cbm1hdC1jYXJke1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4ubmF2aWNvbntcbmNvbG9yOiB3aGl0ZTtcbn1cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwO1xuXG5cblxufVxuLmV4YW1wbGUtY2FyZHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDA7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTsgKi9cbn1cbi5leGFtcGxlLXNpZGVuYXYtY29udGVudCB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG59XG5cbi5leGFtcGxlLXNpZGVuYXYge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZGVtby1wYW5lbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbn1cbi52bCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcbiAgaGVpZ2h0OiA1MDBweDtcbn1cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRkLCB0aCB7XG4gIC8qIHdpZHRoOiAyNSU7ICovXG4gIC8qICAqL1xufVxudGh7XG4gIC8qIGJhY2tncm91bmQ6IG1lZGl1bXNsYXRlYmx1ZTsgKi9cbiAgYmFja2dyb3VuZDpnb2xkZW5yb2Q7XG5mb250LXdlaWdodDogYm9sZDtcbmZvbnQtc2l6ZTogbGFyZ2U7XG5jb2xvcjogd2hpdGU7XG59XG4ucHJvZmlsZWltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNoYXJ0ZGl2e1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6MjUwcHg7XG59XG4uY2FyZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cbi5zdWJub3Rle1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4uc2lkZWljb257XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyOlwiMXB4IHNvbGlkXCI7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1cbi5hY3RpdmV7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uY2VudGVye1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNhcmRpY29uMXtcbiAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gICBjb2xvcjpncmVlbjtcbn1cbi5jYXJkaWNvbjJ7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG4gIGNvbG9yOnllbGxvd2dyZWVuO1xufVxuLyogbG9hZGVyICovXG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMHB4KTtcbiAgLyogYmFja2dyb3VuZDogcmVkOyAqL1xufVxuLmlubmVyIHtcbiAgLyogYmFja2dyb3VuZDogZ3JlZW47ICovXG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMTJweDtcbn1cblxuIl19 */"] });
    return IssuingTransactionComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IssuingTransactionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-issuing-transaction',
                templateUrl: './issuing-transaction.component.html',
                styleUrls: ['./issuing-transaction.component.css']
            }]
    }], function () { return [{ type: _service_web3_service__WEBPACK_IMPORTED_MODULE_4__["Web3Service"] }, { type: _service_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _loader_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] }, { type: _service_ipfs_service__WEBPACK_IMPORTED_MODULE_8__["IpfsService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }] }); })();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/buffer/index.js */ "tjlA").Buffer))

/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_web3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/web3.service */ "+Ptt");
/* harmony import */ var _service_ipfs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/ipfs.service */ "4/d+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _service_web3storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/web3storage.service */ "HxFD");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");














function AppComponent_mat_toolbar_0_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_mat_toolbar_0_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "app_registration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_mat_toolbar_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_mat_toolbar_0_h1_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.consigneeName, "");
} }
var _c0 = function () { return ["user/register"]; };
function AppComponent_mat_toolbar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_mat_toolbar_0_button_1_Template, 3, 0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AppComponent_mat_toolbar_0_span_5_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AppComponent_mat_toolbar_0_div_6_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AppComponent_mat_toolbar_0_h1_7_Template, 2, 1, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.SignedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.SignedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.consigneeLoggedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.consigneeLoggedIn);
} }
function AppComponent_mat_toolbar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Seller Dashboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.sellerName, "");
} }
// const createClient = require('ipfs-http-client')
var AppComponent = /** @class */ (function () {
    function AppComponent(cfr, vcr, web3, ipfs, cd, router, _snackBar, dialog, web3storage, httpClient) {
        var _this = this;
        this.cfr = cfr;
        this.vcr = vcr;
        this.web3 = web3;
        this.ipfs = ipfs;
        this.cd = cd;
        this.router = router;
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this.web3storage = web3storage;
        this.httpClient = httpClient;
        this.show = true;
        this.totalProduct = [];
        this.showalert = true;
        this.durationInSeconds = 5;
        this.message = "User Not Registered!";
        this.action = "Please Signup.";
        this.nameFromTS = "Trade TRip User COnsinee";
        this.web3.checkAndInstantiateWeb3()
            .then(function (checkConn) {
            console.log(checkConn);
            if (checkConn === 'connected') {
                _this.web3.loadBlockChainData()
                    .then(function (accountData) {
                    console.log(accountData[0]);
                    _this.accountNumber = accountData[0];
                    _this.web3.getEtherBalance(_this.accountNumber)
                        .then(function (data) {
                        _this.balance = Number(data).toFixed(2);
                        console.log(_this.balance);
                        console.log(data);
                    });
                    _this.web3.getAllContract()
                        .then(function (contractRes) {
                        if (contractRes) {
                            console.log(contractRes);
                            _this.registration = contractRes[0];
                            _this.registration.methods.getUserHashType(_this.accountNumber)
                                .call()
                                .then(function (user) {
                                // this.VG = value;
                                // console.log('data',this.VG);
                                // console.log(value.length);
                                console.log('user');
                                console.log(user);
                                if (!user[0]) {
                                    _this.SignedIn = false; //landing page
                                    _this._snackBar.open(_this.message, _this.action, { duration: 3000 });
                                }
                                else {
                                    _this.SignedIn = true; //for other pages
                                    console.log('user');
                                    console.log(user);
                                    _this.web3storage.retrieveFile(user[0]).then(function (filedata) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                        var URL;
                                        var _this = this;
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    // no need of calling retreivefile instead directly calling url is done
                                                    console.log('filedata');
                                                    console.log(filedata);
                                                    URL = "https://" + user[0] + ".ipfs.w3s.link/data_analytics_register_data.json";
                                                    // https://bafybeibt3ws4fzuf7p4kawlogy2auvgy34ee6255sszj5npwnszws4f6ze.ipfs.w3s.link/data_analytics_register_data.json
                                                    return [4 /*yield*/, this.httpClient.get((URL)).subscribe(function (result) {
                                                            console.log('lei');
                                                            console.log(result);
                                                            console.log(result.alias);
                                                            _this.ipfsConverted = result;
                                                            //  this.ipfs.getHashFromIPFS(user[0]).then((data:any)=>{
                                                            // this.ipfsConverted = JSON.parse(Buffer.from(data.value.buffer).toString());
                                                            console.log(_this.ipfsConverted);
                                                            _this.message = "Hello " + _this.ipfsConverted.firstName + " " + _this.ipfsConverted.lastName;
                                                            _this.action = "Redirect to Dashboard";
                                                            _this._snackBar.open(_this.message, _this.action, { duration: 3000 });
                                                            if (_this.ipfsConverted.userRole == 'Consignee') {
                                                                _this.router.navigate(['consignee_dashboard', { id: user[0] }]);
                                                            }
                                                            else if (_this.ipfsConverted.userRole == 'Seller') {
                                                                _this.sellerName = _this.ipfsConverted.companyName;
                                                                _this.router.navigate(['seller_dashboard', { id: user[0] }]);
                                                            }
                                                            else if (_this.ipfsConverted.userRole == 'Bank') {
                                                                _this.router.navigate(['bank_dashboard', { id: user[0] }]);
                                                            }
                                                            else if (_this.ipfsConverted.userRole == 'ShippingAgency') {
                                                                _this.router.navigate(['shipping_agency', { id: user[0] }]);
                                                            }
                                                            else if (_this.ipfsConverted.userRole == 'Carrier') {
                                                                _this.router.navigate(['carrier_dashboard', { id: user[0] }]);
                                                            }
                                                            else if (_this.ipfsConverted.userRole == 'PortAuthority') {
                                                                _this.router.navigate(['port_authority_dashboard', { id: user[0] }]);
                                                            }
                                                            else {
                                                            }
                                                            // {id:user}
                                                        })];
                                                case 1:
                                                    // https://bafybeibt3ws4fzuf7p4kawlogy2auvgy34ee6255sszj5npwnszws4f6ze.ipfs.w3s.link/data_analytics_register_data.json
                                                    _a.sent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                }
                            });
                            // this.marketPlace = contractRes[0];
                            // this.marketPlace.methods.productCount()
                            //   .call()
                            //   .then(value => {
                            //     for (let i = 1; i <= value; i++) {
                            //       const product = this.marketPlace.methods.products(i)
                            //         .call()
                            //         .then(products => {
                            //           this.show = false;
                            //           this.totalProduct.push(products);
                            //           this.cd.detectChanges();
                            //         });
                            //     }
                            //     console.log('totalProduct ', this.totalProduct);
                            //   });
                            //                       this.marketPlace.methods.ipfs().call().then(value=>{
                            //                         console.log("ipfs  from bc")
                            //                         console.log(value);
                            //                           this.web3.getIPFSD(value).then((dat:any)=>{
                            //     console.log("fetching from ipfs")
                            //   //  console.log(dat);
                            //   // console.log(Buffer.from(dat.value.buffer).toString());
                            //   console.log(JSON.parse(Buffer.from(dat.value.buffer).toString()));
                            //  })
                            //                       })
                        }
                    });
                }, function (err) {
                    console.log('account error', err);
                });
            }
        }, function (err) {
            alert(err);
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.consigneeLoggedIn = false;
        this.sellerSignedIn = false;
    };
    AppComponent.prototype.signup = function () {
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_web3_service__WEBPACK_IMPORTED_MODULE_2__["Web3Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_ipfs_service__WEBPACK_IMPORTED_MODULE_3__["IpfsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_web3storage_service__WEBPACK_IMPORTED_MODULE_7__["Web3StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 2, consts: [["color", "primary", "style", "min-height: 55px !important; height: 55px !important;", "class", "mat-elevation-z6", 4, "ngIf"], ["class", "sellertoolbar", 4, "ngIf"], ["color", "primary", 1, "mat-elevation-z6", 2, "min-height", "55px !important", "height", "55px !important"], ["mat-icon-button", "", "class", "example-icon", "aria-label", "Example icon-button with menu icon", 4, "ngIf"], ["src", "../assets/images/logo.png", 2, "width", "150px", "height", "50px"], [1, "example-spacer"], ["routerLinkActive", "active", 3, "routerLink"], ["class", "material-icons", 4, "ngIf"], ["class", "example-button-container", 4, "ngIf"], [4, "ngIf"], ["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon"], [1, "material-icons"], [1, "example-button-container"], ["src", "../assets/images/avatar.png", "alt", "Avatar", "mat-mini-fab", "", 1, "img-fluid", "profileimg", 2, "width", "30px", "height", "30px", "border-radius", "50%"], [1, "sellertoolbar"], ["src", "../assets/images/wartsila.png", "alt", "Avatar", "mat-mini-fab", "", 1, "img-fluid", "profileimg", 2, "width", "30px", "height", "30px", "border-radius", "50%"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AppComponent_mat_toolbar_0_Template, 8, 6, "mat-toolbar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_mat_toolbar_1_Template, 9, 1, "mat-toolbar", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.SignedIn || ctx.consigneeLoggedIn);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.SignedIn && ctx.sellerSignedIn);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"]], styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.fixed-header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2;\n}\n\ncode[_ngcontent-%COMP%] {\n  background: hsl(220, 80%, 90%);\n}\n\n.sellertoolbar[_ngcontent-%COMP%]{\n    background:midnightblue;\n    color: #fff\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsVUFBVTtBQUNaOztBQUdBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCOztBQUVKOztBQUNBOztHQUVHOztBQUdIOztHQUVHIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5maXhlZC1oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDI7XG59XG5cblxuY29kZSB7XG4gIGJhY2tncm91bmQ6IGhzbCgyMjAsIDgwJSwgOTAlKTtcbn1cbi5zZWxsZXJ0b29sYmFye1xuICAgIGJhY2tncm91bmQ6bWlkbmlnaHRibHVlO1xuICAgIGNvbG9yOiAjZmZmXG5cbn1cbi8qIC5tYWluYm9keXtcbiAgYmFja2dyb3VuZC1jb2xvcjpsaWdodGJsdWU7XG59ICovXG5cblxuLyogLmV4YW1wbGUtY2FyZCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG59ICovXG5cbiJdfQ== */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }, { type: _service_web3_service__WEBPACK_IMPORTED_MODULE_2__["Web3Service"] }, { type: _service_ipfs_service__WEBPACK_IMPORTED_MODULE_3__["IpfsService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }, { type: _service_web3storage_service__WEBPACK_IMPORTED_MODULE_7__["Web3StorageService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "XmV7":
/*!***************************************************!*\
  !*** ./src/app/bank/history/history.component.ts ***!
  \***************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_app_service_web3_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/web3.service */ "+Ptt");
/* harmony import */ var src_app_service_backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/backend.service */ "/VBx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/loader/loader.service */ "t0Il");
/* harmony import */ var src_app_service_ipfs_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/ipfs.service */ "4/d+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../loader/loader.component */ "kQyY");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "FKr1");























function HistoryComponent_h4_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h4", 37);
} }
function HistoryComponent_h4_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HistoryComponent_h4_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Transaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HistoryComponent_h4_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Analytics");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HistoryComponent_h4_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HistoryComponent_th_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Order ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HistoryComponent_td_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r18.orderId, " ");
} }
function HistoryComponent_th_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Order Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HistoryComponent_td_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r19.orderDetails, " ");
} }
function HistoryComponent_th_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HistoryComponent_td_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r20.quantity, " ");
} }
function HistoryComponent_th_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Order Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HistoryComponent_td_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, row_r21.orderdate, "dd/MM/yyyy"), " ");
} }
function HistoryComponent_th_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Consignee ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HistoryComponent_td_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r22.consignee, " ");
} }
function HistoryComponent_tr_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 40);
} }
function HistoryComponent_tr_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 41);
} }
var _c0 = function () { return [5, 10, 25, 100]; };
var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(web3, backend, router, loaderService, ipfs, cd, location, route, httpClient) {
        var _this = this;
        this.web3 = web3;
        this.backend = backend;
        this.router = router;
        this.loaderService = loaderService;
        this.ipfs = ipfs;
        this.cd = cd;
        this.location = location;
        this.route = route;
        this.httpClient = httpClient;
        this.showFiller = false;
        this.isExpanded = false;
        this.totalProduct = [];
        this.bols = false;
        this.displayedColumns = ['status', 'lei', 'kdt', 'dt', 'db'];
        console.warn("calling order constra");
        this.route.params.subscribe(function (params) {
            console.log(params);
            _this.lei = params.id;
        });
        this.web3.checkAndInstantiateWeb3()
            .then(function (checkConn) {
            console.log(checkConn);
            if (checkConn === 'connected') {
                _this.web3.loadBlockChainData()
                    .then(function (accountData) {
                    console.log(accountData[0]);
                    _this.accountNumber = accountData[0];
                    _this.web3.getAllContract()
                        .then(function (contractRes) {
                        if (contractRes) {
                            console.log(contractRes);
                            _this.registration = contractRes[0];
                            _this.registration.methods.getUserHashType(_this.accountNumber)
                                .call()
                                .then(function (user) {
                                console.log('user');
                                console.log(user);
                                if (!user[0]) {
                                }
                                else {
                                    console.log('user');
                                    console.log(user);
                                    var URL_1 = "https://" + user[0] + ".ipfs.w3s.link/data_analytics_register_data.json";
                                    _this.httpClient.get((URL_1)).subscribe(function (result) {
                                        _this.ipfsConverted2 = result;
                                        //  this.ipfs.getHashFromIPFS(user[0]).then((data:any)=>{
                                        // this.ipfsConverted2 = JSON.parse(Buffer.from(data.value.buffer).toString());
                                        console.log(_this.ipfsConverted2);
                                        _this.userinfo = user[0];
                                    });
                                }
                            });
                        }
                    });
                }, function (err) {
                    console.log('account error', err);
                });
            }
        }, function (err) {
            alert(err);
        });
    }
    HistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderService.showLoader('bankLoader');
        //  alert(this.lei);
        this.backend.getleiHistory(this.lei).subscribe(function (result) {
            console.log(result);
            console.log(result.leiIssue);
            // this.totalProduct.push(result.leiIssue);
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](result);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
            _this.cd.detectChanges();
            _this.loaderService.hideLoader('bankLoader');
        });
    };
    HistoryComponent.prototype.viewIssuing = function () {
        console.log('in view url');
        this.router.navigate(['issuing_transaction']);
    };
    HistoryComponent.prototype.viewAdvisory = function () {
        this.router.navigate(['advisory_transaction']);
    };
    HistoryComponent.prototype.viewBidsTable = function () {
        this.router.navigate(['bids_table']);
    };
    HistoryComponent.prototype.getDBAPI = function () {
        this.router.navigate(['analytics']);
        // this.backend.getDBAPI().subscribe((result) => {
        //   console.log(result);
        // });
    };
    HistoryComponent.prototype.viewFraud = function () {
        this.router.navigate(['tranasaction_issue']);
    };
    HistoryComponent.prototype.redirectDashboard = function () {
        // this.route.navigateByUrl('seller_dashboard/'+this.userinfo);
        this.router.navigate(['bank_dashboard', { id: this.userinfo }]);
    };
    HistoryComponent.ɵfac = function HistoryComponent_Factory(t) { return new (t || HistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_web3_service__WEBPACK_IMPORTED_MODULE_4__["Web3Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_ipfs_service__WEBPACK_IMPORTED_MODULE_8__["IpfsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"])); };
    HistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HistoryComponent, selectors: [["app-history"]], viewQuery: function HistoryComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        } }, decls: 70, vars: 12, consts: [[1, "loaders"], [1, "bankLoader"], [3, "id"], [1, "example-container"], ["disableClose", "true", "opened", "true", "mode", "side", 1, "example-sidenav"], ["sidenav", ""], ["mat-list-icon", "", "matTooltip", "Expand", 1, "navicon", 3, "click"], ["mat-line", "", 4, "ngIf"], ["mat-list-icon", "", "matTooltip", "Dashboard", 1, "navicon", 3, "click"], ["matTooltip", "Transaction ", "mat-list-icon", "", 1, "navicon", 3, "click"], ["mat-list-icon", "", "matTooltip", "Analytics", 1, "navicon", "active", 3, "click"], ["mat-list-icon", "", "matTooltip", "Report", "routerLink", "/bank/report", 1, "navicon"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [2, "color", "#007bff", "background-color", "transparent", "cursor", "pointer", 3, "click"], ["aria-current", "page", 1, "breadcrumb-item"], [1, "example-sidenav-content"], [1, "example-card"], [1, "main-content"], [1, "container-fluid"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12"], [2, "padding", "10px 10px 10px 10px"], [1, "mat-elevation-z8"], [2, "overflow-x", "auto"], ["mat-table", "", "matSort", "", 1, "table", "table-responsive-sm", "table-responsive-md", 3, "dataSource"], ["matColumnDef", "status"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "lei"], ["matColumnDef", "kdt"], ["matColumnDef", "dt"], ["matColumnDef", "db"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "style", "padding: 15px;", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page of users", 3, "pageSizeOptions"], ["mat-line", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 2, "padding", "15px"]], template: function HistoryComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-loader", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav", 4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-nav-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoryComponent_Template_mat_icon_click_8_listener() { return ctx.isExpanded = !ctx.isExpanded; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "menu");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HistoryComponent_h4_10_Template, 1, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoryComponent_Template_mat_icon_click_12_listener() { return ctx.redirectDashboard(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "dashboard");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HistoryComponent_h4_14_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoryComponent_Template_mat_icon_click_16_listener() { return ctx.redirectDashboard(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "swap_horiz");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HistoryComponent_h4_18_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoryComponent_Template_mat_icon_click_20_listener() { return ctx.getDBAPI(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "analytics");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HistoryComponent_h4_22_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "summarize");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, HistoryComponent_h4_26_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nav", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ol", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoryComponent_Template_a_click_30_listener() { return ctx.redirectDashboard(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Home");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoryComponent_Template_a_click_33_listener() { return ctx.getDBAPI(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Analytics");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoryComponent_Template_a_click_36_listener() { return ctx.viewFraud(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Malicious Transactions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Transaction History");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "table", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](52, 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, HistoryComponent_th_53_Template, 2, 0, "th", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, HistoryComponent_td_54_Template, 2, 1, "td", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](55, 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, HistoryComponent_th_56_Template, 2, 0, "th", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, HistoryComponent_td_57_Template, 2, 1, "td", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](58, 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, HistoryComponent_th_59_Template, 2, 0, "th", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, HistoryComponent_td_60_Template, 2, 1, "td", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](61, 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, HistoryComponent_th_62_Template, 2, 0, "th", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, HistoryComponent_td_63_Template, 3, 4, "td", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](64, 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, HistoryComponent_th_65_Template, 2, 0, "th", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, HistoryComponent_td_66_Template, 2, 1, "td", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, HistoryComponent_tr_67_Template, 1, 0, "tr", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, HistoryComponent_tr_68_Template, 1, 0, "tr", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "mat-paginator", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "bankLoader");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("TradeTrip Scan : Transaction History (", ctx.lei, ")");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
        } }, directives: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__["LoaderComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListIconCssMatStyler"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCard"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatLine"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: ["mat-sidenav[_ngcontent-%COMP%]{\n    \n  background:goldenrod;\n  \n  }\n  mat-card[_ngcontent-%COMP%]{\n      margin-bottom: 30px;\n  }\n  .navicon[_ngcontent-%COMP%]{\n  color: white;\n  }\n  .example-container[_ngcontent-%COMP%] {\n    display: block;\n    overflow: auto;\n    min-height: 100vh;\n    height: auto;\n    margin: 0;\n  \n  \n  \n  }\n  .example-card[_ngcontent-%COMP%]{\n    display: block;\n    overflow: auto;\n    min-height: 100vh;\n    height: auto;\n    margin: 0;\n    \n  }\n  .example-sidenav-content[_ngcontent-%COMP%] {\n    overflow: auto;\n    width: 100%;\n    height: 100%;\n  \n  }\n  .example-sidenav[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .demo-panel[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 90%;\n    margin: 10px 0px;\n  }\n  .vl[_ngcontent-%COMP%] {\n    border-left: 1px solid gray;\n    height: 500px;\n  }\n  table[_ngcontent-%COMP%] {\n    width: 100%;\n    table-layout:fixed\n  }\n  .mat-form-field[_ngcontent-%COMP%] {\n    font-size: 14px;\n    width: 100%;\n  }\n  button[_ngcontent-%COMP%]{\n    \n    font: 15px;\n\n  }\n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  th[_ngcontent-%COMP%]{\n    \n    background:goldenrod;\n  font-weight: bold;\n  font-size: large;\n  color: white;\n  vertical-align: middle;\n  }\n  .profileimg[_ngcontent-%COMP%] {\n    border-radius: 50%;\n  }\n  .chartdiv[_ngcontent-%COMP%]{\n    width:100%;\n    height:250px;\n  }\n  .card[_ngcontent-%COMP%]{\n    background-color: whitesmoke;\n  }\n  .subnote[_ngcontent-%COMP%]{\n    font-size: 10px;\n    color: gray;\n  }\n  .sideicon[_ngcontent-%COMP%]{\n    padding: 10px;\n    margin: 10px;\n    border:\"1px solid\";\n    border-radius: 10%;\n    background-color: grey;\n  }\n  .active[_ngcontent-%COMP%]{\n    background-color: cornflowerblue;\n    border-radius: 50%;\n  }\n  .center[_ngcontent-%COMP%]{\n      justify-content: center;\n  }\n  .cardicon1[_ngcontent-%COMP%]{\n     font-size: 100px;\n     color:green;\n  }\n  .cardicon2[_ngcontent-%COMP%]{\n    font-size: 100px;\n    color:yellowgreen;\n  }\n  \n  .wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: calc(100vh - 20px);\n    \n  }\n  .inner[_ngcontent-%COMP%] {\n    \n    color: black;\n    padding: 12px;\n  }\n  td[_ngcontent-%COMP%]{\n    text-align: start;\n    vertical-align: middle;\n    padding: 5px;\n    }\n  table[_ngcontent-%COMP%]{\n      width: 100%;\n     \n     \n     }\n  .table-responsive[_ngcontent-%COMP%] {\n  display: table;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFuay9oaXN0b3J5L2hpc3RvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxnQ0FBZ0M7RUFDbEMsb0JBQW9COztFQUVwQjtFQUNBO01BQ0ksbUJBQW1CO0VBQ3ZCO0VBQ0E7RUFDQSxZQUFZO0VBQ1o7RUFDQTtJQUNFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixTQUFTOzs7O0VBSVg7RUFDQTtJQUNFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixTQUFTO0lBQ1QsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7O0VBRWQ7RUFFQTtJQUNFLGFBQWE7RUFDZjtFQUVBO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLDJCQUEyQjtJQUMzQixhQUFhO0VBQ2Y7RUFDQTtJQUNFLFdBQVc7SUFDWDtFQUNGO0VBRUE7SUFDRSxlQUFlO0lBQ2YsV0FBVztFQUNiO0VBQ0E7SUFDRSxrQ0FBa0M7SUFDbEMsVUFBVTs7RUFFWjtFQUVBLGFBQWE7RUFDWCxnQkFBZ0I7RUFDaEIsS0FBSztFQUNMLHdCQUF3QjtFQUV2Qjs7OzJCQUdzQjtFQUN0QiwwQkFBMEI7RUFDMUI7Ozs7K0JBSTBCO0VBRTFCLGtDQUFrQztFQUNsQyxzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQ2hDLE1BQU07RUFDTjtJQUNFLGlDQUFpQztJQUNqQyxvQkFBb0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0VBQ2Q7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7RUFDYjtFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtFQUNwQjtFQUNBO01BQ0ksdUJBQXVCO0VBQzNCO0VBQ0E7S0FDRyxnQkFBZ0I7S0FDaEIsV0FBVztFQUNkO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CO0VBQ0EsV0FBVztFQUNYO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixhQUFhO0VBQ2Y7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaO0VBQ0Y7TUFDSSxXQUFXOzs7S0FHWjtFQUdMO0VBQ0UsY0FBYztBQUNoQjtFQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUE0R0c7RUFDTCxvRUFBb0U7RUFDckU7Ozs7R0FJRztFQUVILHFEQUFxRDtFQUNyRDs7OztHQUlHIiwiZmlsZSI6InNyYy9hcHAvYmFuay9oaXN0b3J5L2hpc3RvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxubWF0LXNpZGVuYXZ7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjpkb2RnZXJibHVlICovXG4gIGJhY2tncm91bmQ6Z29sZGVucm9kO1xuICBcbiAgfVxuICBtYXQtY2FyZHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbiAgLm5hdmljb257XG4gIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuZXhhbXBsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW46IDA7XG4gIFxuICBcbiAgXG4gIH1cbiAgLmV4YW1wbGUtY2FyZHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiAwO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTsgKi9cbiAgfVxuICAuZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgXG4gIH1cbiAgXG4gIC5leGFtcGxlLXNpZGVuYXYge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbiAgXG4gIC5kZW1vLXBhbmVsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICBtYXJnaW46IDEwcHggMHB4O1xuICB9XG4gIC52bCB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmF5O1xuICAgIGhlaWdodDogNTAwcHg7XG4gIH1cbiAgdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRhYmxlLWxheW91dDpmaXhlZFxuICB9XG4gIFxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBidXR0b257XG4gICAgLyogcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDsgKi9cbiAgICBmb250OiAxNXB4O1xuXG4gIH1cbiAgXG4gIC8qIHRkLCB0aCB7ICovXG4gICAgLyogd2lkdGg6IDI1JTsgKi9cbiAgICAvKiAgKi9cbiAgICAvKiBwYWRkaW5nLWxlZnQ6IDIwcHg7ICovXG4gICAgXG4gICAgIC8qIG1heC13aWR0aDogMDtcbiAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7ICovXG4gICAgIC8qIHdvcmQtd3JhcDpicmVhay13b3JkOyAqL1xuICAgICAvKiB3aGl0ZS1zcGFjZTogLW8tcHJlLXdyYXA7IFxuICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDsgXG4gICAgIHdoaXRlLXNwYWNlOiAtbW96LXByZS13cmFwOyBcbiAgICAgd2hpdGUtc3BhY2U6IC1wcmUtd3JhcDsgICovXG5cbiAgICAgLyogcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDsgKi9cbiAgICAgLyogb3ZlcmZsb3cteDogYXV0bzsgKi9cbiAgICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXG4gIC8qIH0gKi9cbiAgdGh7XG4gICAgLyogYmFja2dyb3VuZDogbWVkaXVtc2xhdGVibHVlOyAqL1xuICAgIGJhY2tncm91bmQ6Z29sZGVucm9kO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgY29sb3I6IHdoaXRlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gIC5wcm9maWxlaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgXG4gIC5jaGFydGRpdntcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoyNTBweDtcbiAgfVxuICAuY2FyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICB9XG4gIC5zdWJub3Rle1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogZ3JheTtcbiAgfVxuICBcbiAgLnNpZGVpY29ue1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGJvcmRlcjpcIjFweCBzb2xpZFwiO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICB9XG4gIC5hY3RpdmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4gIC5jZW50ZXJ7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuY2FyZGljb24xe1xuICAgICBmb250LXNpemU6IDEwMHB4O1xuICAgICBjb2xvcjpncmVlbjtcbiAgfVxuICAuY2FyZGljb24ye1xuICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gICAgY29sb3I6eWVsbG93Z3JlZW47XG4gIH1cbiAgLyogbG9hZGVyICovXG4gIC53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjBweCk7XG4gICAgLyogYmFja2dyb3VuZDogcmVkOyAqL1xuICB9XG4gIC5pbm5lciB7XG4gICAgLyogYmFja2dyb3VuZDogZ3JlZW47ICovXG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gIH1cbiAgdGR7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgfVxuICB0YWJsZXtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICBcbiAgICAgXG4gICAgIH1cbiAgIFxuXG4udGFibGUtcmVzcG9uc2l2ZSB7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuICAgLyogQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCl7XG4gICAgLm1hdC1jb2x1bW4tc3RhdHVzIHtcbiAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICAgICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICBmbGV4OiAwIDAgNTYlICFpbXBvcnRhbnQ7XG4gICAgICB3aWR0aDogMTQlICFpbXBvcnRhbnQ7XG4gICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIFxuICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICBcbiAgICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAgICAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAgICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICAgICAgaHlwaGVuczogYXV0bztcbiAgICB9XG4gICAgLm1hdC1jb2x1bW4tbGVpIHtcbiAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICAgICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICBmbGV4OiAwIDAgNTYlICFpbXBvcnRhbnQ7XG4gICAgICB3aWR0aDogMTUlICFpbXBvcnRhbnQ7XG4gICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIFxuICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICBcbiAgICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAgICAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAgICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICAgICAgaHlwaGVuczogYXV0bztcbiAgICB9XG4gICAgIC5tYXQtY29sdW1uLW1haWwge1xuICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICAgICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgIGZsZXg6IDAgMCA1NiUgIWltcG9ydGFudDtcbiAgICAgICB3aWR0aDogMTIlICFpbXBvcnRhbnQ7XG4gICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgIFxuICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgIFxuICAgICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAgICAgIC1tb3otaHlwaGVuczogYXV0bztcbiAgICAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gICAgICAgaHlwaGVuczogYXV0bztcbiAgICAgfVxuICAgICAubWF0LWNvbHVtbi13YWxsZXQge1xuICAgICAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gICAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgIGZsZXg6IDAgMCA1NiUgIWltcG9ydGFudDtcbiAgICAgIHdpZHRoOiAxNCUgIWltcG9ydGFudDtcbiAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgXG4gICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgIFxuICAgICAgLW1zLWh5cGhlbnM6IGF1dG87XG4gICAgICAtbW96LWh5cGhlbnM6IGF1dG87XG4gICAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gICAgICBoeXBoZW5zOiBhdXRvO1xuICAgIH1cbiAgICAgLm1hdC1jb2x1bW4ta2R0IHtcbiAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICAgICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICBmbGV4OiAwIDAgNTYlICFpbXBvcnRhbnQ7XG4gICAgICB3aWR0aDogNyUgIWltcG9ydGFudDtcbiAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgXG4gICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgIFxuICAgICAgLW1zLWh5cGhlbnM6IGF1dG87XG4gICAgICAtbW96LWh5cGhlbnM6IGF1dG87XG4gICAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gICAgICBoeXBoZW5zOiBhdXRvO1xuICAgIH1cbiAgXG4gICAgLm1hdC1jb2x1bW4tZHQge1xuICAgICAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gICAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgIGZsZXg6IDAgMCA1NiUgIWltcG9ydGFudDtcbiAgICAgIHdpZHRoOiA4JSAhaW1wb3J0YW50O1xuICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICBcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgXG4gICAgICAtbXMtaHlwaGVuczogYXV0bztcbiAgICAgIC1tb3otaHlwaGVuczogYXV0bztcbiAgICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgICAgIGh5cGhlbnM6IGF1dG87XG4gICAgfVxuICAgIC5tYXQtY29sdW1uLWRiIHtcbiAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICAgICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICBmbGV4OiAwIDAgNTYlICFpbXBvcnRhbnQ7XG4gICAgICB3aWR0aDogMTYlICFpbXBvcnRhbnQ7XG4gICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIFxuICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICBcbiAgICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAgICAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAgICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICAgICAgaHlwaGVuczogYXV0bztcbiAgICB9XG4gIFxuICAgfSAqL1xuIC8qIFNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHRhYmxldHMgYW5kIGxhcmdlIHBob25lcywgNjAwcHggYW5kIHVwKSAqL1xuLyogQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAubWF0LWNvbHVtbntcbiAgICB3aWR0aDphdXRvO1xuICB9XG59ICovXG5cbi8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xuLyogQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAubWF0LWNvbHVtbntcbiAgICB3aWR0aDphdXRvO1xuICB9XG59ICovIl19 */"] });
    return HistoryComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-history',
                templateUrl: './history.component.html',
                styleUrls: ['./history.component.css']
            }]
    }], function () { return [{ type: src_app_service_web3_service__WEBPACK_IMPORTED_MODULE_4__["Web3Service"] }, { type: src_app_service_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] }, { type: src_app_service_ipfs_service__WEBPACK_IMPORTED_MODULE_8__["IpfsService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "XxbU":
/*!***************************************************************!*\
  !*** ./src/app/user/user-register/user-register.component.ts ***!
  \***************************************************************/
/*! exports provided: UserRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegisterComponent", function() { return UserRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _service_web3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/web3.service */ "+Ptt");
/* harmony import */ var _service_ipfs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/ipfs.service */ "4/d+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var src_app_service_backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/backend.service */ "/VBx");
/* harmony import */ var src_app_service_web3storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/web3storage.service */ "HxFD");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
















function UserRegisterComponent_mat_hint_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Role is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegisterComponent_mat_hint_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegisterComponent_mat_hint_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegisterComponent_mat_hint_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Wallet is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegisterComponent_mat_hint_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegisterComponent_mat_hint_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Alias is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegisterComponent_mat_option_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var bank_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", bank_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bank_r8, " ");
} }
function UserRegisterComponent_mat_hint_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contact is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var bytes32 = __webpack_require__(/*! bytes32 */ "Z+Z/");
var UserRegisterComponent = /** @class */ (function () {
    function UserRegisterComponent(formBuilder, web3, ipfs, snackBar, backend, web3storage) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.web3 = web3;
        this.ipfs = ipfs;
        this.snackBar = snackBar;
        this.backend = backend;
        this.web3storage = web3storage;
        this.showLEIsearch = false;
        this.cBank = "0x461994192BACd8734d4bCC5f2f70D69d3428B958";
        this.sBank = "0x58d256712F73407A1551a2C75B6048E305df3BF9";
        this.bankList = [];
        this.carrierList = [];
        this.registerForm = this.formBuilder.group({
            // lei: ['', Validators.required],
            lei: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            leiName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            alias: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            userRole: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            wallet: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            // wallet:[{value:'', disabled:true},Validators.required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            companyName: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            legalName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            city: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            state: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            telephone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            profile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            banks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            userBank: ['']
        });
        this.Register = true;
        this.web3.checkAndInstantiateWeb3()
            .then(function (checkConn) {
            if (checkConn === 'connected') {
                _this.web3.loadBlockChainData()
                    .then(function (accountData) {
                    _this.accountNumber = accountData[0];
                    console.log(_this.accountNumber);
                    _this.web3.getAllContract()
                        .then(function (contractRes) {
                        if (contractRes) {
                            console.log(contractRes);
                            _this.register = contractRes[0];
                            _this.backend.retBanks().then(function (result) {
                                for (var i = 0; i < result.length; i++) {
                                    console.log(result[i]);
                                    _this.web3.getUtf8(result[i])
                                        .then(function (ag) {
                                        console.log(ag);
                                        _this.bankList.push(ag);
                                    });
                                }
                            });
                        }
                    });
                }, function (err) {
                    console.log('account error', err);
                });
            }
        }, function (err) {
            alert(err);
        });
    }
    UserRegisterComponent.prototype.ngOnInit = function () {
    };
    UserRegisterComponent.prototype.onSelection = function (event) {
        this.userChange = event.value;
        //not working
        // console.log(event.value)
        // if(event.value === "ShippingAgency" || event.value ==="Carrier" || event.value ==="PortAuthority" || event.value ==="Bank"){
        //   this.registerForm.controls['userBank'].disable();
        // }else{
        // }
        // this.selectedRole = event.target.value;
        // console.log('this.selectedRole');
        // console.log(this.selectedRole);
        // if(this.selectedRole =='Seller'){
        //   this.showLEIsearch =true;
        // }
        // if()
        //     this.form.controls['name'].disable();
    };
    UserRegisterComponent.prototype.onChangeBank = function (event) {
        var _this = this;
        console.log(event.target.value);
        this.bankName = event.target.value;
        console.log(this.bankname);
        this.backend.returnBankAddress(this.bankname).then(function (bankWallets) {
            _this.bankWallet = bankWallets;
            console.log(bankWallets);
        });
    };
    UserRegisterComponent.prototype.saveForm = function () {
        var _this = this;
        if (this.registerForm.value.userBank != "") {
            this.backend.returnBankAddress(this.registerForm.value.userBank).then(function (bankWallet) {
                console.log(bankWallet);
                _this.bankWallet = bankWallet;
                // alert(this.bankWallet)
            });
        }
        else {
            console.log("nothinjb");
        }
        console.log(this.registerForm.value.userBank);
        setTimeout(function () {
            if (_this.registerForm.value.userRole == "Consignee") {
                _this.files = {
                    address: _this.orgaddress,
                    city: _this.orgcity,
                    companyName: _this.registerForm.value.companyName,
                    lei: _this.registerForm.value.lei,
                    leiNo: _this.lei,
                    leiName: _this.registerForm.value.leiName,
                    alias: _this.registerForm.value.alias,
                    legalName: _this.legalName,
                    email: _this.registerForm.value.email,
                    firstName: _this.registerForm.value.firstName,
                    lastName: _this.registerForm.value.lastName,
                    profile: "",
                    state: _this.registerForm.value.state,
                    telephone: _this.registerForm.value.telephone,
                    userRole: "Consignee",
                    wallet: _this.accountNumber,
                    bankName: _this.registerForm.value.userBank,
                    bankAddress: _this.bankWallet
                };
            }
            else if (_this.registerForm.value.userRole == "Seller") {
                _this.files = {
                    address: _this.orgaddress,
                    city: _this.orgcity,
                    leiName: _this.registerForm.value.leiName,
                    alias: _this.registerForm.value.alias,
                    leiNo: _this.lei,
                    companyName: "Wartsila",
                    legalName: _this.legalName,
                    email: _this.registerForm.value.email,
                    firstName: _this.registerForm.value.firstName,
                    lastName: _this.registerForm.value.lastName,
                    profile: "",
                    state: _this.orgcountry,
                    telephone: _this.registerForm.value.telephone,
                    userRole: "Seller",
                    wallet: _this.accountNumber,
                    bankName: _this.registerForm.value.userBank,
                    bankAddress: _this.bankWallet
                };
            }
            else if (_this.registerForm.value.userRole == "Bank") {
                console.log("bankkk");
                _this.files = {
                    address: _this.orgaddress,
                    city: _this.orgcity,
                    leiName: _this.registerForm.value.leiName,
                    alias: _this.registerForm.value.alias,
                    leiNo: _this.lei,
                    companyName: _this.registerForm.value.alias,
                    legalName: _this.legalName,
                    email: _this.registerForm.value.email,
                    firstName: _this.registerForm.value.firstName,
                    lastName: _this.registerForm.value.lastName,
                    profile: "",
                    state: _this.orgcountry,
                    telephone: _this.registerForm.value.telephone,
                    userRole: "Bank",
                    wallet: _this.accountNumber,
                    bankName: _this.registerForm.value.alias,
                    bankAddress: _this.accountNumber,
                };
            }
            else if (_this.registerForm.value.userRole == "ShippingAgency") {
                _this.files = {
                    address: _this.orgaddress,
                    city: _this.orgcity,
                    leiName: _this.registerForm.value.leiName,
                    alias: _this.registerForm.value.alias,
                    leiNo: _this.lei,
                    companyName: _this.registerForm.value.alias,
                    email: _this.registerForm.value.email,
                    legalName: _this.legalName,
                    firstName: _this.registerForm.value.firstName,
                    lastName: _this.registerForm.value.lastName,
                    profile: "",
                    state: _this.orgcountry,
                    telephone: _this.registerForm.value.telephone,
                    userRole: "ShippingAgency",
                    wallet: _this.accountNumber,
                    bankName: _this.registerForm.value.alias,
                    bankAddress: _this.accountNumber,
                };
            }
            else if (_this.registerForm.value.userRole == "Carrier") {
                _this.files = {
                    address: _this.orgaddress,
                    city: _this.orgcity,
                    leiName: _this.registerForm.value.leiName,
                    alias: _this.registerForm.value.alias,
                    leiNo: _this.lei,
                    companyName: _this.registerForm.value.alias,
                    email: _this.registerForm.value.email,
                    legalName: _this.legalName,
                    firstName: _this.registerForm.value.firstName,
                    lastName: _this.registerForm.value.lastName,
                    profile: "",
                    state: _this.orgcountry,
                    telephone: _this.registerForm.value.telephone,
                    userRole: "Carrier",
                    wallet: _this.accountNumber,
                    bankName: _this.registerForm.value.alias,
                    bankAddress: _this.accountNumber,
                };
            }
            else if (_this.registerForm.value.userRole == "PortAuthority") {
                _this.files = {
                    address: _this.orgaddress,
                    city: _this.orgcity,
                    leiName: _this.registerForm.value.leiName,
                    alias: _this.registerForm.value.alias,
                    leiNo: _this.lei,
                    companyName: _this.registerForm.value.alias,
                    legalName: _this.legalName,
                    email: _this.registerForm.value.email,
                    firstName: _this.registerForm.value.firstName,
                    lastName: _this.registerForm.value.lastName,
                    profile: "",
                    state: _this.orgcountry,
                    telephone: _this.registerForm.value.telephone,
                    userRole: "PortAuthority",
                    wallet: _this.accountNumber,
                    bankName: _this.registerForm.value.alias,
                    bankAddress: _this.accountNumber,
                };
            }
            else {
            }
            console.log(_this.files);
            // this.uN = bytes32({ input: this.registerForm.value.companyName });
            _this.uN = bytes32({ input: _this.registerForm.value.alias });
            console.log(_this.uN);
            _this.web3storage.storeFile(_this.files).then(function (data) {
                // this.ipfs.saveToIpfs(this.files).then((data) => {
                console.log('Hashvalue');
                console.log(data);
                if (_this.registerForm.value.userRole == "Consignee") {
                    _this.register.methods.saveUserDetailsToBCConsignee(_this.accountNumber, data, _this.registerForm.value.userRole, _this.uN, _this.cBank).send({ from: _this.accountNumber })
                        .once('receipt', function (receipt) {
                        console.log(receipt);
                        _this.snackBar.open("User Registration Successful", "Proceed to login", { duration: 3000 });
                    });
                }
                else {
                    // this.uN = bytes32({input:this.registerForm.value.firstName});
                    console.log("BANK registering");
                    _this.register.methods.saveUserDetailsToBC(_this.accountNumber, data, _this.registerForm.value.userRole, _this.uN).send({ from: _this.accountNumber })
                        .once('receipt', function (receipt) {
                        console.log(receipt);
                        _this.snackBar.open("User Registration Successful", "Proceed to login", { duration: 3000 });
                    });
                }
            });
        }, 5000);
    };
    UserRegisterComponent.prototype.sd = function () {
        var _this = this;
        this.backend.saveB().then(function (bankWallets) {
            _this.bankWallet = bankWallets;
            console.log(bankWallets);
        });
    };
    UserRegisterComponent.prototype.rd = function () {
        var _this = this;
        this.backend.getB().then(function (bankWallets) {
            _this.bankWallet = bankWallets;
            console.log(bankWallets);
        });
    };
    UserRegisterComponent.prototype.dateC = function () {
        console.log(new Date().getTime());
        this.backend.formatDate(new Date()).then(function (bankWallets) {
            // this.bankWallet = bankWallets;
            console.log(bankWallets);
        });
    };
    UserRegisterComponent.prototype.dataAPI = function () {
        // this.backend.getDataAPI().subscribe(data=>{
        //   this.postD = data; 
        // });
        var data = {
            id: 5,
            firstname: 'Mit',
        };
        this.backend.getDataAPI(data).subscribe(function (data) {
            console.log(data);
        });
    };
    UserRegisterComponent.prototype.createPost = function () {
        var data = {
            email: "jhbhbjknbj",
            name: 'Mit',
            key: 'hjyug76yuygjhbjkkh97987'
            // dateCreated:new Date()
        };
        this.backend.createPost(data).subscribe(function (data) {
            console.log(data);
        });
    };
    //LEI Check
    UserRegisterComponent.prototype.getCompanyInfo = function (e) {
        var _this = this;
        console.log('element searched');
        console.log(e);
        var lei = e;
        this.backend.getLeiCompanyInfo(lei).subscribe(function (result) {
            console.log('Getting company info');
            console.log(result);
            // var data = JSON.parse(result);
            // console.log(data);
            result.data.forEach(function (items) {
                console.log(items);
                console.log(items.attributes.entity.legalName.name);
                _this.lei = items.attributes.lei;
                // App.createTable(items);
                _this.legalName = items.attributes.entity.legalName.name;
                _this.orgcity = items.attributes.entity.legalAddress.city;
                _this.orgcountry = items.attributes.entity.legalAddress.country;
                _this.orgaddress = items.attributes.entity.legalAddress.addressLines[0] + ',' + items.attributes.entity.legalAddress.addressLines[1];
                // document.getElementById('LEIBasedView').style.display = "block";
                // document.getElementById('LEINO').innerHTML = LEINO;
                // document.getElementById('companyName').value = items.attributes.entity.legalName.name;
            });
        });
    };
    UserRegisterComponent.ɵfac = function UserRegisterComponent_Factory(t) { return new (t || UserRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_web3_service__WEBPACK_IMPORTED_MODULE_2__["Web3Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_ipfs_service__WEBPACK_IMPORTED_MODULE_3__["IpfsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_web3storage_service__WEBPACK_IMPORTED_MODULE_6__["Web3StorageService"])); };
    UserRegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserRegisterComponent, selectors: [["app-user-register"]], inputs: { Register: "Register", data: "data" }, decls: 82, vars: 16, consts: [[1, "form-container", 3, "formGroup"], [1, "row"], [1, "col-md-6"], [1, "full-width"], ["formControlName", "userRole", 3, "selectionChange"], ["value", "Consignee"], ["value", "Seller"], ["value", "ShippingAgency"], ["value", "Carrier"], ["value", "PortAuthority"], ["value", "Bank"], ["style", "color: red;", 4, "ngIf"], ["formControlName", "leiName", "matInput", "", "placeholder", "Search Company", 3, "keyup"], ["formControlName", "lei", "matInput", "", "placeholder", "LEI", "disabled", "", 3, "value"], ["formControlName", "companyName", "matInput", "", "placeholder", "Legal Name", 3, "value"], ["formControlName", "firstName", "matInput", "", "placeholder", "First name"], ["formControlName", "lastName", "matInput", "", "placeholder", "Last name"], ["formControlName", "wallet", "matInput", "", "placeholder", "Wallet", "disabled", "", 3, "value"], ["formControlName", "email", "matInput", "", "placeholder", "Email"], ["formControlName", "alias", "matInput", "", "placeholder", "Company Alias"], ["formControlName", "userBank", 3, "disabled"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "city", "matInput", "", "placeholder", "City", 3, "value"], ["formControlName", "state", "matInput", "", "placeholder", "Country", 3, "value"], ["formControlName", "telephone", "matInput", "", "placeholder", "Telephone"], [1, "col-sm-6"], ["formControlName", "address", "matInput", "", "placeholder", "Address", 3, "value"], ["mat-raised-button", "", "color", "primary", 3, "click"], [2, "color", "red"], [3, "value"]], template: function UserRegisterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Stake Holder Registration");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Select User Role");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-select", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function UserRegisterComponent_Template_mat_select_selectionChange_11_listener($event) { return ctx.onSelection($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-option", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Consignee");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-option", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Seller");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-option", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Shipper");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-option", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Carrier");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-option", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Port Authority");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-option", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Bank");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, UserRegisterComponent_mat_hint_24_Template, 2, 0, "mat-hint", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function UserRegisterComponent_Template_input_keyup_27_listener($event) { return ctx.getCompanyInfo($event.target.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, UserRegisterComponent_mat_hint_39_Template, 2, 0, "mat-hint", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, UserRegisterComponent_mat_hint_43_Template, 2, 0, "mat-hint", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, UserRegisterComponent_mat_hint_48_Template, 2, 0, "mat-hint", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, UserRegisterComponent_mat_hint_52_Template, 2, 0, "mat-hint", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, UserRegisterComponent_mat_hint_57_Template, 2, 0, "mat-hint", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Select Bank");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-select", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, UserRegisterComponent_mat_option_63_Template, 2, 2, "mat-option", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, UserRegisterComponent_mat_hint_75_Template, 2, 0, "mat-hint", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "textarea", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-card-actions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserRegisterComponent_Template_button_click_80_listener() { return ctx.saveForm(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Save");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("userRole").touched && (ctx.registerForm.get("userRole").errors == null ? null : ctx.registerForm.get("userRole").errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.lei);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.legalName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("firstName").touched && (ctx.registerForm.get("firstName").errors == null ? null : ctx.registerForm.get("firstName").errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("lastName").touched && (ctx.registerForm.get("lastName").errors == null ? null : ctx.registerForm.get("lastName").errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.accountNumber);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("wallet").touched && (ctx.registerForm.get("wallet").errors == null ? null : ctx.registerForm.get("wallet").errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("email").touched && (ctx.registerForm.get("email").errors == null ? null : ctx.registerForm.get("email").errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("alias").touched && (ctx.registerForm.get("alias").errors == null ? null : ctx.registerForm.get("alias").errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.userChange === "ShippingAgency" || ctx.userChange === "Carrier" || ctx.userChange === "PortAuthority" || ctx.userChange === "Bank");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bankList);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.orgcity);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.orgcountry);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("telephone").touched && (ctx.registerForm.get("telephone").errors == null ? null : ctx.registerForm.get("telephone").errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.orgaddress);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatHint"]], styles: [".example-card[_ngcontent-%COMP%] {\n    max-width: 500px;\n  }\n  \n  \n  \n  .center-content[_ngcontent-%COMP%]{\n    text-align: -webkit-center;\n  }\n  \n  .example-form[_ngcontent-%COMP%] {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n  \n  .example-full-width[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  \n  td[_ngcontent-%COMP%] {\n    padding-right: 8px;\n  }\n  \n  .mat-button[_ngcontent-%COMP%]{\n      color: white;\n      background-color: #3F51B5;\n  }\n  \n  .full-width[_ngcontent-%COMP%]{\n    width: 100%;\n}\n  \n  .top-padding[_ngcontent-%COMP%]{\n    padding-top: 3px;\n}\n  \n  .margin-left[_ngcontent-%COMP%]   mat-radio-button[_ngcontent-%COMP%]:not(:first-child){\n    margin-left:10px;\n}\n  \n  .form-container[_ngcontent-%COMP%]{\n    margin: 100px;\n}\n  \n  .invalid[_ngcontent-%COMP%]{\n    color:#f44336;\n}\n  \n  .small-font[_ngcontent-%COMP%]{\n    font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLXJlZ2lzdGVyL3VzZXItcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtFQUNsQjs7RUFFQTs7OztLQUlHOztFQUdIO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUdBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBR0E7TUFDSSxZQUFZO01BQ1oseUJBQXlCO0VBQzdCOztFQU9BO0lBQ0UsV0FBVztBQUNmOztFQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztFQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztFQUVBO0lBQ0ksYUFBYTtBQUNqQjs7RUFFQTtJQUNJLGFBQWE7QUFDakI7O0VBQ0E7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLXJlZ2lzdGVyL3VzZXItcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gIH1cbiAgXG4gIC8qIC5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ290LnBuZycpO1xuXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfSAqL1xuICBcblxuICAuY2VudGVyLWNvbnRlbnR7XG4gICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gIH1cblxuXG4gIC5leGFtcGxlLWZvcm0ge1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIHRkIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIH1cbiAgXG5cbiAgLm1hdC1idXR0b257XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y1MUI1O1xuICB9XG5cblxuXG5cblxuXG4gIC5mdWxsLXdpZHRoe1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4udG9wLXBhZGRpbmd7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbn1cblxuLm1hcmdpbi1sZWZ0IG1hdC1yYWRpby1idXR0b246bm90KDpmaXJzdC1jaGlsZCl7XG4gICAgbWFyZ2luLWxlZnQ6MTBweDtcbn1cblxuLmZvcm0tY29udGFpbmVye1xuICAgIG1hcmdpbjogMTAwcHg7XG59XG5cbi5pbnZhbGlke1xuICAgIGNvbG9yOiNmNDQzMzY7XG59XG4uc21hbGwtZm9udHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4iXX0= */"] });
    return UserRegisterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-register',
                templateUrl: './user-register.component.html',
                styleUrls: ['./user-register.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _service_web3_service__WEBPACK_IMPORTED_MODULE_2__["Web3Service"] }, { type: _service_ipfs_service__WEBPACK_IMPORTED_MODULE_3__["IpfsService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }, { type: src_app_service_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"] }, { type: src_app_service_web3storage_service__WEBPACK_IMPORTED_MODULE_6__["Web3StorageService"] }]; }, { Register: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material/material.module */ "hctd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "mSt+");
/* harmony import */ var _shlist_dialog_shlist_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shlist-dialog/shlist-dialog.component */ "4556");
/* harmony import */ var _user_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/user-login/user-login.component */ "IipO");
/* harmony import */ var _user_user_register_user_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/user-register/user-register.component */ "XxbU");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "4zdL");
/* harmony import */ var _bank_bank_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bank/bank.module */ "ym0D");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var angular_weblineindia_qrcode_scanner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-weblineindia-qrcode-scanner */ "A5Sx");
/* harmony import */ var _loader_loader_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./loader/loader.module */ "eNvI");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_horizontal_timeline__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-horizontal-timeline */ "MbBv");





// import {MaterialModule} from "./material/material.module";

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _bank_bank_module__WEBPACK_IMPORTED_MODULE_14__["BankModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
                angular_weblineindia_qrcode_scanner__WEBPACK_IMPORTED_MODULE_17__["ZXingScannerModule"],
                _loader_loader_module__WEBPACK_IMPORTED_MODULE_18__["LoaderModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
                ngx_horizontal_timeline__WEBPACK_IMPORTED_MODULE_20__["NgxHorizontalTimelineModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
        _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_9__["LandingPageComponent"],
        _shlist_dialog_shlist_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ShlistDialogComponent"],
        _user_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_11__["UserLoginComponent"],
        _user_user_register_user_register_component__WEBPACK_IMPORTED_MODULE_12__["UserRegisterComponent"],
        _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_13__["ToolbarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _bank_bank_module__WEBPACK_IMPORTED_MODULE_14__["BankModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
        angular_weblineindia_qrcode_scanner__WEBPACK_IMPORTED_MODULE_17__["ZXingScannerModule"],
        _loader_loader_module__WEBPACK_IMPORTED_MODULE_18__["LoaderModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
        ngx_horizontal_timeline__WEBPACK_IMPORTED_MODULE_20__["NgxHorizontalTimelineModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                    _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_9__["LandingPageComponent"],
                    _shlist_dialog_shlist_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ShlistDialogComponent"],
                    _user_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_11__["UserLoginComponent"],
                    _user_user_register_user_register_component__WEBPACK_IMPORTED_MODULE_12__["UserRegisterComponent"],
                    _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_13__["ToolbarComponent"],
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
                entryComponents: [_shlist_dialog_shlist_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ShlistDialogComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _bank_bank_module__WEBPACK_IMPORTED_MODULE_14__["BankModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
                    angular_weblineindia_qrcode_scanner__WEBPACK_IMPORTED_MODULE_17__["ZXingScannerModule"],
                    _loader_loader_module__WEBPACK_IMPORTED_MODULE_18__["LoaderModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
                    ngx_horizontal_timeline__WEBPACK_IMPORTED_MODULE_20__["NgxHorizontalTimelineModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "c+4X":
/*!*****************************************************************!*\
  !*** ./src/app/bank/bank-dashboard/bank-dashboard.component.ts ***!
  \*****************************************************************/
/*! exports provided: BankDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankDashboardComponent", function() { return BankDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var src_app_service_web3_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/web3.service */ "+Ptt");
/* harmony import */ var src_app_service_backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/backend.service */ "/VBx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/loader/loader.service */ "t0Il");
/* harmony import */ var src_app_service_ipfs_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/ipfs.service */ "4/d+");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/app.component */ "Sy1n");
/* harmony import */ var src_app_service_web3storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/service/web3storage.service */ "HxFD");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../loader/loader.component */ "kQyY");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
























function BankDashboardComponent_h4_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "h4", 29);
} }
function BankDashboardComponent_h4_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BankDashboardComponent_h4_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Transaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BankDashboardComponent_h4_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Analytics");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BankDashboardComponent_h4_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BankDashboardComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Marketplace");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " swap_horiz ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BankDashboardComponent_div_72_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.viewBidsTable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Click to go to MarketPlace ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var BankDashboardComponent = /** @class */ (function () {
    function BankDashboardComponent(web3, backend, router, loaderService, ipfs, cd, AppComponent, route, web3storage, dialog, httpClient) {
        var _this = this;
        this.web3 = web3;
        this.backend = backend;
        this.router = router;
        this.loaderService = loaderService;
        this.ipfs = ipfs;
        this.cd = cd;
        this.AppComponent = AppComponent;
        this.route = route;
        this.web3storage = web3storage;
        this.dialog = dialog;
        this.httpClient = httpClient;
        this.showFiller = false;
        this.isExpanded = false;
        this.showAnalytics = false;
        this.showMarketplace = false;
        this.showKYC = false;
        console.warn("calling order constra");
        this.web3.checkAndInstantiateWeb3()
            .then(function (checkConn) {
            console.log(checkConn);
            if (checkConn === 'connected') {
                _this.web3.loadBlockChainData()
                    .then(function (accountData) {
                    console.log(accountData[0]);
                    _this.accountNumber = accountData[0];
                    _this.web3.getAllContract()
                        .then(function (contractRes) {
                        if (contractRes) {
                            console.log(contractRes);
                            _this.registration = contractRes[0];
                            _this.registration.methods.getUserHashType(_this.accountNumber)
                                .call()
                                .then(function (user) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                var URL_1;
                                var _this = this;
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log('user');
                                            console.log(user);
                                            if (!!user[0]) return [3 /*break*/, 1];
                                            return [3 /*break*/, 3];
                                        case 1:
                                            console.log('user');
                                            console.log(user);
                                            URL_1 = "https://" + user[0] + ".ipfs.w3s.link/data_analytics_register_data.json";
                                            // https://bafybeibt3ws4fzuf7p4kawlogy2auvgy34ee6255sszj5npwnszws4f6ze.ipfs.w3s.link/data_analytics_register_data.json
                                            return [4 /*yield*/, this.httpClient.get((URL_1)).subscribe(function (result) {
                                                    console.log('lei');
                                                    console.log(result);
                                                    console.log(result.alias);
                                                    _this.ipfsConverted2 = result;
                                                    //  this.ipfs.getHashFromIPFS(user[0]).then((data:any)=>{
                                                    // this.ipfsConverted2 = JSON.parse(Buffer.from(data.value.buffer).toString());
                                                    console.log('this.ipfsConverted2');
                                                    console.log(_this.ipfsConverted2);
                                                    _this.userinfo = user[0];
                                                    //                          this.registration.methods.returnRole(this.accountNumber)
                                                    //                          .call()
                                                    //                          .then(role =>{
                                                    //                            console.log(role);
                                                    //                            if(role.length == 0){
                                                    //                             //   this.roles = fb.group({
                                                    //                             //     Marketplace: false,
                                                    //                             //     KYC: false,
                                                    //                             //     Analytics: false
                                                    //                             //   });
                                                    //                             // this.rolesExists = false;
                                                    //                            }else{
                                                    //                           this.ipfs.getHashFromIPFS(role).then((data2:any)=>{
                                                    //                             this.ipfsConverted3 = JSON.parse(Buffer.from(data2.value.buffer).toString());
                                                    //                             console.log(this.ipfsConverted3 );
                                                    // this.showAnalytics =this.ipfsConverted3.Analytics;
                                                    // this.showMarketplace =this.ipfsConverted3.Marketplace;
                                                    // this.showKYC =this.ipfsConverted3.KYC;
                                                    //                             // this.rolesExists = true;
                                                    //                           })    
                                                    //                            }
                                                    //                          });
                                                })];
                                        case 2:
                                            // https://bafybeibt3ws4fzuf7p4kawlogy2auvgy34ee6255sszj5npwnszws4f6ze.ipfs.w3s.link/data_analytics_register_data.json
                                            _a.sent();
                                            _a.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); });
                        }
                    });
                }, function (err) {
                    console.log('account error', err);
                });
            }
        }, function (err) {
            alert(err);
        });
    }
    // public chartType: string = 'line';
    // this.bankName =;
    BankDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderService.showLoader('bankLoader');
        this.route.params.subscribe(function (params) {
            console.log(params);
            console.log(params['id']);
            if (params['id']) {
                // getHashFromIPFS
                var URL_2 = "https://" + params['id'] + ".ipfs.w3s.link/data_analytics_register_data.json";
                // https://bafybeibt3ws4fzuf7p4kawlogy2auvgy34ee6255sszj5npwnszws4f6ze.ipfs.w3s.link/data_analytics_register_data.json
                _this.httpClient.get((URL_2)).subscribe(function (result) {
                    // this.ipfs.getHashFromIPFS(params['id']).then((data:any)=>{
                    // this.ipfsConverted = JSON.parse(Buffer.from(data.value.buffer).toString());
                    _this.ipfsConverted = result;
                    console.log(_this.ipfsConverted);
                    _this.bankName = _this.ipfsConverted.bankName;
                    _this.bankMail = _this.ipfsConverted.email;
                    _this.userName = _this.ipfsConverted.firstName + " " + _this.ipfsConverted.lastName;
                    _this.loaderService.hideLoader('bankLoader');
                });
            }
        });
    };
    BankDashboardComponent.prototype.viewIssuing = function () {
        console.log('in view url');
        this.router.navigate(['issuing_transaction']);
    };
    BankDashboardComponent.prototype.viewAdvisory = function () {
        this.router.navigate(['advisory_transaction']);
    };
    BankDashboardComponent.prototype.viewBidsTable = function () {
        this.router.navigate(['bids_table']);
    };
    BankDashboardComponent.prototype.getDBAPI = function () {
        // this.router.navigate(['analytics']);
        // this.router.navigate(['tranasaction_issue']);
        this.router.navigate(['lei_issue']);
        // this.backend.getDBAPI().subscribe((result) => {
        //   console.log(result);
        // });
    };
    BankDashboardComponent.prototype.redirectDashboard = function () {
        this.router.navigate(['bank_dashboard', { id: this.userinfo }]);
    };
    BankDashboardComponent.ɵfac = function BankDashboardComponent_Factory(t) { return new (t || BankDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_web3_service__WEBPACK_IMPORTED_MODULE_4__["Web3Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_ipfs_service__WEBPACK_IMPORTED_MODULE_8__["IpfsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_web3storage_service__WEBPACK_IMPORTED_MODULE_10__["Web3StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"])); };
    BankDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BankDashboardComponent, selectors: [["app-bank-dashboard"]], viewQuery: function BankDashboardComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        } }, decls: 89, vars: 9, consts: [[1, "loaders"], [1, "bankLoader"], [3, "id"], [1, "example-container"], ["disableClose", "true", "opened", "true", "mode", "side", 1, "example-sidenav"], ["sidenav", ""], ["mat-list-icon", "", "matTooltip", "Expand", 1, "navicon", 3, "click"], ["mat-line", "", 4, "ngIf"], ["mat-list-icon", "", "matTooltip", "Dashboard", 1, "navicon", "active", 3, "click"], ["matTooltip", "Transaction", "mat-list-icon", "", 1, "navicon", 3, "click"], ["mat-list-icon", "", "matTooltip", "Analytics", 1, "navicon", 3, "click"], ["mat-list-icon", "", "matTooltip", "Report", "routerLink", "/bank/report", 1, "navicon"], [1, "example-sidenav-content"], [1, "main-content"], [1, "container-fluid"], [1, "row", "headContent"], [1, "col-lg-8", "col-md-8", "col-sm-8"], [1, "col", "col-md-auto"], ["src", "../../../assets/images/bank.png", "alt", "Avatar", "mat-mini-fab", "", 1, "img-fluid", "profileimg", 2, "width", "60px", "height", "60px", "padding-bottom", "5px"], [1, "col", "col-lg-2"], [1, "row"], [1, "col-lg-6", "col-md-6", "col-sm-12"], [1, "col-lg-6", "col-md-12", "col-sm-12"], ["color", "primary", 1, "cardicon1", 2, "margin-left", "20px"], ["mat-raised-button", "", "fill", "outline", "slot", "end", 1, "viewbtn", 3, "click"], [1, "col-lg-6"], [1, "cardicon1", 2, "margin-left", "20px"], ["class", "col-lg-6 col-md-6 col-sm-12", 4, "ngIf"], [1, "material-icons-outlined"], ["mat-line", ""]], template: function BankDashboardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-loader", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-sidenav-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-sidenav", 4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-nav-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BankDashboardComponent_Template_mat_icon_click_8_listener() { return ctx.isExpanded = !ctx.isExpanded; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " menu ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, BankDashboardComponent_h4_10_Template, 1, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BankDashboardComponent_Template_mat_icon_click_12_listener() { return ctx.redirectDashboard(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " dashboard ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, BankDashboardComponent_h4_14_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-icon", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BankDashboardComponent_Template_mat_icon_click_16_listener() { return ctx.redirectDashboard(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " swap_horiz ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, BankDashboardComponent_h4_18_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-icon", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BankDashboardComponent_Template_mat_icon_click_20_listener() { return ctx.getDBAPI(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "analytics");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, BankDashboardComponent_h4_22_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-icon", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "summarize");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, BankDashboardComponent_h4_26_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Bank Dashboard");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "img", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Advisory");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mat-icon", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " account_balance ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BankDashboardComponent_Template_button_click_53_listener() { return ctx.viewAdvisory(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " View ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "mat-card-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " Click to view Advisory Bank Transactions ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mat-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Issuing");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "mat-icon", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "domain");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "button", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BankDashboardComponent_Template_button_click_68_listener() { return ctx.viewIssuing(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " View ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "mat-card-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " Click to view Issuing Bank Transactions ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, BankDashboardComponent_div_72_Template, 15, 0, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "mat-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Analytics");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "mat-icon", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "span", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, " analytics ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "button", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BankDashboardComponent_Template_button_click_85_listener() { return ctx.getDBAPI(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, " View ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "mat-card-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, " Click to go to Analytics Application ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "bankLoader");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.bankName);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.bankMail);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showMarketplace);
        } }, directives: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_13__["LoaderComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListIconCssMatStyler"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardFooter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatLine"]], styles: ["mat-sidenav[_ngcontent-%COMP%]{\n  \nbackground:goldenrod;\n\n}\nmat-card[_ngcontent-%COMP%]{\n    margin-bottom: 30px;\n}\n.navicon[_ngcontent-%COMP%]{\ncolor: white;\n}\n.headContent[_ngcontent-%COMP%]{\n  padding-top:20px;\n}\nmat-card-footer[_ngcontent-%COMP%]{\n  padding: 10px;\n\n}\n.viewbtn[_ngcontent-%COMP%]{\n  background-color:goldenrod;\n  color: whitesmoke;\n  margin: 50px;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.example-container[_ngcontent-%COMP%] {\n  display: block;\n  overflow: auto;\n  min-height: 100vh;\n  height: auto;\n  margin: 0;\n  }\n.example-sidenav-content[_ngcontent-%COMP%] {\n  \n  overflow: auto;\n  width: 100%;\n  height: 100%;\n    }\n.example-sidenav[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.vl[_ngcontent-%COMP%] {\n  border-left: 1px solid gray;\n  height: 500px;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  width: 25%;\n}\nth[_ngcontent-%COMP%]{\n  \n  background:goldenrod;\nfont-weight: bold;\nfont-size: large;\ncolor: white;\n}\n.profileimg[_ngcontent-%COMP%] {\nborder-radius: 50%;\n}\n.chartdiv[_ngcontent-%COMP%]{\n  width:100%;\n  height:250px;\n}\n.card[_ngcontent-%COMP%]{\n  background-color: whitesmoke;\n}\n.subnote[_ngcontent-%COMP%]{\n  font-size: 10px;\n  color: gray;\n}\n.sideicon[_ngcontent-%COMP%]{\n  padding: 10px;\n  margin: 10px;\n  border:\"1px solid\";\n  border-radius: 10%;\n  background-color: grey;\n}\n.active[_ngcontent-%COMP%]{\n  background-color: cornflowerblue;\n  border-radius: 50%;\n}\n.center[_ngcontent-%COMP%]{\n    justify-content: center;\n}\n.cardicon1[_ngcontent-%COMP%]{\n   font-size: 100px;\n   color:darkolivegreen;\n}\n.cardicon2[_ngcontent-%COMP%]{\n  font-size: 200px;\n  color:yellowgreen;\n}\n.clearfix[_ngcontent-%COMP%]:after {\ncontent: \"\";\ndisplay: table;\nclear: both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFuay9iYW5rLWRhc2hib2FyZC9iYW5rLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztHQVdHO0FBQ0g7RUFDRSxnQ0FBZ0M7QUFDbEMsb0JBQW9COztBQUVwQjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsYUFBYTs7QUFFZjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixZQUFZOztJQUVWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osU0FBUztFQUNUO0FBRUY7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0lBQ1Y7QUFFSjtFQUNFLGFBQWE7QUFDZjtBQUVBOzs7O0dBSUc7QUFDSDtFQUNFLDJCQUEyQjtFQUMzQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxpQ0FBaUM7RUFDakMsb0JBQW9CO0FBQ3RCLGlCQUFpQjtBQUNqQixnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7QUFDQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQUNwQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7R0FDRyxnQkFBZ0I7R0FDaEIsb0JBQW9CO0FBQ3ZCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsY0FBYztBQUNkLFdBQVc7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2JhbmsvYmFuay1kYXNoYm9hcmQvYmFuay1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDVweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMWZyKSk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDEwMHB4KTtcbn1cbi5jb250YWluZXIgPiBkaXYgPiBpbWcge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59ICovXG5tYXQtc2lkZW5hdntcbiAgLyogYmFja2dyb3VuZC1jb2xvcjpkb2RnZXJibHVlICovXG5iYWNrZ3JvdW5kOmdvbGRlbnJvZDtcblxufVxuXG5tYXQtY2FyZHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ubmF2aWNvbntcbmNvbG9yOiB3aGl0ZTtcbn1cbi5oZWFkQ29udGVudHtcbiAgcGFkZGluZy10b3A6MjBweDtcbn1cblxubWF0LWNhcmQtZm9vdGVye1xuICBwYWRkaW5nOiAxMHB4O1xuXG59XG4udmlld2J0bntcbiAgYmFja2dyb3VuZC1jb2xvcjpnb2xkZW5yb2Q7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBtYXJnaW46IDUwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwO1xuICB9XG5cbi5leGFtcGxlLXNpZGVuYXYtY29udGVudCB7XG4gIC8qIGRpc3BsYXk6IGZsZXg7ICovXG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuLmV4YW1wbGUtc2lkZW5hdiB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi8qIC5kZW1vLXBhbmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTAlO1xuICBtYXJnaW46IDEwcHggMHB4O1xufSAqL1xuLnZsIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmF5O1xuICBoZWlnaHQ6IDUwMHB4O1xufVxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxudGQsIHRoIHtcbiAgd2lkdGg6IDI1JTtcbn1cbnRoe1xuICAvKiBiYWNrZ3JvdW5kOiBtZWRpdW1zbGF0ZWJsdWU7ICovXG4gIGJhY2tncm91bmQ6Z29sZGVucm9kO1xuZm9udC13ZWlnaHQ6IGJvbGQ7XG5mb250LXNpemU6IGxhcmdlO1xuY29sb3I6IHdoaXRlO1xufVxuLnByb2ZpbGVpbWcge1xuYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2hhcnRkaXZ7XG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDoyNTBweDtcbn1cbi5jYXJke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuLnN1Ym5vdGV7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5zaWRlaWNvbntcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXI6XCIxcHggc29saWRcIjtcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufVxuLmFjdGl2ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5jZW50ZXJ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY2FyZGljb24xe1xuICAgZm9udC1zaXplOiAxMDBweDtcbiAgIGNvbG9yOmRhcmtvbGl2ZWdyZWVuO1xufVxuLmNhcmRpY29uMntcbiAgZm9udC1zaXplOiAyMDBweDtcbiAgY29sb3I6eWVsbG93Z3JlZW47XG59XG4uY2xlYXJmaXg6YWZ0ZXIge1xuY29udGVudDogXCJcIjtcbmRpc3BsYXk6IHRhYmxlO1xuY2xlYXI6IGJvdGg7XG59XG4iXX0= */"] });
    return BankDashboardComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BankDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-bank-dashboard',
                templateUrl: './bank-dashboard.component.html',
                styleUrls: ['./bank-dashboard.component.css']
            }]
    }], function () { return [{ type: src_app_service_web3_service__WEBPACK_IMPORTED_MODULE_4__["Web3Service"] }, { type: src_app_service_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] }, { type: src_app_service_ipfs_service__WEBPACK_IMPORTED_MODULE_8__["IpfsService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: src_app_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: src_app_service_web3storage_service__WEBPACK_IMPORTED_MODULE_10__["Web3StorageService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "dOuS":
/*!***********************************!*\
  !*** ./build/contracts/Logs.json ***!
  \***********************************/
/*! exports provided: contractName, abi, metadata, bytecode, deployedBytecode, immutableReferences, generatedSources, deployedGeneratedSources, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, networkType, devdoc, userdoc, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"contractName\":\"Logs\",\"abi\":[{\"inputs\":[{\"internalType\":\"string\",\"name\":\"a\",\"type\":\"string\"},{\"internalType\":\"bytes32\",\"name\":\"b\",\"type\":\"bytes32\"}],\"name\":\"saveLog\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"stoneid\",\"type\":\"bytes32\"}],\"name\":\"getLog\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\",\"constant\":true}],\"metadata\":\"{\\\"compiler\\\":{\\\"version\\\":\\\"0.8.6+commit.11564f7e\\\"},\\\"language\\\":\\\"Solidity\\\",\\\"output\\\":{\\\"abi\\\":[{\\\"inputs\\\":[{\\\"internalType\\\":\\\"bytes32\\\",\\\"name\\\":\\\"stoneid\\\",\\\"type\\\":\\\"bytes32\\\"}],\\\"name\\\":\\\"getLog\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"string\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"string\\\",\\\"name\\\":\\\"a\\\",\\\"type\\\":\\\"string\\\"},{\\\"internalType\\\":\\\"bytes32\\\",\\\"name\\\":\\\"b\\\",\\\"type\\\":\\\"bytes32\\\"}],\\\"name\\\":\\\"saveLog\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"}],\\\"devdoc\\\":{\\\"author\\\":\\\"Mithun\\\",\\\"details\\\":\\\"Contract under development\\\",\\\"kind\\\":\\\"dev\\\",\\\"methods\\\":{},\\\"title\\\":\\\"Logs contract of BOL creation, access, dispatch, fund transfer\\\",\\\"version\\\":1},\\\"userdoc\\\":{\\\"kind\\\":\\\"user\\\",\\\"methods\\\":{},\\\"version\\\":1}},\\\"settings\\\":{\\\"compilationTarget\\\":{\\\"project:/contracts/Logs.sol\\\":\\\"Logs\\\"},\\\"evmVersion\\\":\\\"berlin\\\",\\\"libraries\\\":{},\\\"metadata\\\":{\\\"bytecodeHash\\\":\\\"ipfs\\\"},\\\"optimizer\\\":{\\\"enabled\\\":false,\\\"runs\\\":200},\\\"remappings\\\":[]},\\\"sources\\\":{\\\"project:/contracts/Logs.sol\\\":{\\\"keccak256\\\":\\\"0x20abf57e9f13d9283545ffff25df5366bb84edb4b2e5ec40dd751d363e948532\\\",\\\"license\\\":\\\"GPL-3.0\\\",\\\"urls\\\":[\\\"bzz-raw://663d77d80751e0eab2f738824524c82d63ff0029c6ae7cd0d29ed05acf6f2a44\\\",\\\"dweb:/ipfs/Qmd7oBjg5GTqR6aSUpGTjPAXji2yXDa2iXn2D9w7g1zMxj\\\"]}},\\\"version\\\":1}\",\"bytecode\":\"0x608060405234801561001057600080fd5b506105ab806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80635cac75b41461003b5780637010416e1461006b575b600080fd5b610055600480360381019061005091906102cd565b61009b565b6040516100629190610371565b60405180910390f35b610085600480360381019061008091906102a0565b6100d1565b604051610092919061038c565b60405180910390f35b60008260008084815260200190815260200160002060000190805190602001906100c6929190610178565b506001905092915050565b606060008083815260200190815260200160002060000180546100f390610478565b80601f016020809104026020016040519081016040528092919081815260200182805461011f90610478565b801561016c5780601f106101415761010080835404028352916020019161016c565b820191906000526020600020905b81548152906001019060200180831161014f57829003601f168201915b50505050509050919050565b82805461018490610478565b90600052602060002090601f0160209004810192826101a657600085556101ed565b82601f106101bf57805160ff19168380011785556101ed565b828001600101855582156101ed579182015b828111156101ec5782518255916020019190600101906101d1565b5b5090506101fa91906101fe565b5090565b5b808211156102175760008160009055506001016101ff565b5090565b600061022e610229846103d3565b6103ae565b90508281526020810184848401111561024a5761024961053e565b5b610255848285610436565b509392505050565b60008135905061026c8161055e565b92915050565b600082601f83011261028757610286610539565b5b813561029784826020860161021b565b91505092915050565b6000602082840312156102b6576102b5610548565b5b60006102c48482850161025d565b91505092915050565b600080604083850312156102e4576102e3610548565b5b600083013567ffffffffffffffff81111561030257610301610543565b5b61030e85828601610272565b925050602061031f8582860161025d565b9150509250929050565b61033281610420565b82525050565b600061034382610404565b61034d818561040f565b935061035d818560208601610445565b6103668161054d565b840191505092915050565b60006020820190506103866000830184610329565b92915050565b600060208201905081810360008301526103a68184610338565b905092915050565b60006103b86103c9565b90506103c482826104aa565b919050565b6000604051905090565b600067ffffffffffffffff8211156103ee576103ed61050a565b5b6103f78261054d565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b60008115159050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610463578082015181840152602081019050610448565b83811115610472576000848401525b50505050565b6000600282049050600182168061049057607f821691505b602082108114156104a4576104a36104db565b5b50919050565b6104b38261054d565b810181811067ffffffffffffffff821117156104d2576104d161050a565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b6105678161042c565b811461057257600080fd5b5056fea26469706673582212208dd39d0365c376f4ed9e3412aedc5c624efc37821c0948a0340dbc8c580f48ac64736f6c63430008060033\",\"deployedBytecode\":\"0x608060405234801561001057600080fd5b50600436106100365760003560e01c80635cac75b41461003b5780637010416e1461006b575b600080fd5b610055600480360381019061005091906102cd565b61009b565b6040516100629190610371565b60405180910390f35b610085600480360381019061008091906102a0565b6100d1565b604051610092919061038c565b60405180910390f35b60008260008084815260200190815260200160002060000190805190602001906100c6929190610178565b506001905092915050565b606060008083815260200190815260200160002060000180546100f390610478565b80601f016020809104026020016040519081016040528092919081815260200182805461011f90610478565b801561016c5780601f106101415761010080835404028352916020019161016c565b820191906000526020600020905b81548152906001019060200180831161014f57829003601f168201915b50505050509050919050565b82805461018490610478565b90600052602060002090601f0160209004810192826101a657600085556101ed565b82601f106101bf57805160ff19168380011785556101ed565b828001600101855582156101ed579182015b828111156101ec5782518255916020019190600101906101d1565b5b5090506101fa91906101fe565b5090565b5b808211156102175760008160009055506001016101ff565b5090565b600061022e610229846103d3565b6103ae565b90508281526020810184848401111561024a5761024961053e565b5b610255848285610436565b509392505050565b60008135905061026c8161055e565b92915050565b600082601f83011261028757610286610539565b5b813561029784826020860161021b565b91505092915050565b6000602082840312156102b6576102b5610548565b5b60006102c48482850161025d565b91505092915050565b600080604083850312156102e4576102e3610548565b5b600083013567ffffffffffffffff81111561030257610301610543565b5b61030e85828601610272565b925050602061031f8582860161025d565b9150509250929050565b61033281610420565b82525050565b600061034382610404565b61034d818561040f565b935061035d818560208601610445565b6103668161054d565b840191505092915050565b60006020820190506103866000830184610329565b92915050565b600060208201905081810360008301526103a68184610338565b905092915050565b60006103b86103c9565b90506103c482826104aa565b919050565b6000604051905090565b600067ffffffffffffffff8211156103ee576103ed61050a565b5b6103f78261054d565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b60008115159050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610463578082015181840152602081019050610448565b83811115610472576000848401525b50505050565b6000600282049050600182168061049057607f821691505b602082108114156104a4576104a36104db565b5b50919050565b6104b38261054d565b810181811067ffffffffffffffff821117156104d2576104d161050a565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b6105678161042c565b811461057257600080fd5b5056fea26469706673582212208dd39d0365c376f4ed9e3412aedc5c624efc37821c0948a0340dbc8c580f48ac64736f6c63430008060033\",\"immutableReferences\":{},\"generatedSources\":[],\"deployedGeneratedSources\":[{\"ast\":{\"nodeType\":\"YulBlock\",\"src\":\"0:6117:3\",\"statements\":[{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"91:328:3\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"101:75:3\",\"value\":{\"arguments\":[{\"arguments\":[{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"168:6:3\"}],\"functionName\":{\"name\":\"array_allocation_size_t_string_memory_ptr\",\"nodeType\":\"YulIdentifier\",\"src\":\"126:41:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"126:49:3\"}],\"functionName\":{\"name\":\"allocate_memory\",\"nodeType\":\"YulIdentifier\",\"src\":\"110:15:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"110:66:3\"},\"variableNames\":[{\"name\":\"array\",\"nodeType\":\"YulIdentifier\",\"src\":\"101:5:3\"}]},{\"expression\":{\"arguments\":[{\"name\":\"array\",\"nodeType\":\"YulIdentifier\",\"src\":\"192:5:3\"},{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"199:6:3\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"185:6:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"185:21:3\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"185:21:3\"},{\"nodeType\":\"YulVariableDeclaration\",\"src\":\"215:27:3\",\"value\":{\"arguments\":[{\"name\":\"array\",\"nodeType\":\"YulIdentifier\",\"src\":\"230:5:3\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"237:4:3\",\"type\":\"\",\"value\":\"0x20\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"226:3:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"226:16:3\"},\"variables\":[{\"name\":\"dst\",\"nodeType\":\"YulTypedName\",\"src\":\"219:3:3\",\"type\":\"\"}]},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"280:83:3\",\"statements\":[{\"expression\":{\"arguments\":[],\"functionName\":{\"name\":\"revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae\",\"nodeType\":\"YulIdentifier\",\"src\":\"282:77:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"282:79:3\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"282:79:3\"}]},\"condition\":{\"arguments\":[{\"arguments\":[{\"name\":\"src\",\"nodeType\":\"YulIdentifier\",\"src\":\"261:3:3\"},{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"266:6:3\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"257:3:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"257:16:3\"},{\"name\":\"end\",\"nodeType\":\"YulIdentifier\",\"src\":\"275:3:3\"}],\"functionName\":{\"name\":\"gt\",\"nodeType\":\"YulIdentifier\",\"src\":\"254:2:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"254:25:3\"},\"nodeType\":\"YulIf\",\"src\":\"251:2:3\"},{\"expression\":{\"arguments\":[{\"name\":\"src\",\"nodeType\":\"YulIdentifier\",\"src\":\"396:3:3\"},{\"name\":\"dst\",\"nodeType\":\"YulIdentifier\",\"src\":\"401:3:3\"},{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"406:6:3\"}],\"functionName\":{\"name\":\"copy_calldata_to_memory\",\"nodeType\":\"YulIdentifier\",\"src\":\"372:23:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"372:41:3\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"372:41:3\"}]},\"name\":\"abi_decode_available_length_t_string_memory_ptr\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"src\",\"nodeType\":\"YulTypedName\",\"src\":\"64:3:3\",\"type\":\"\"},{\"name\":\"length\",\"nodeType\":\"YulTypedName\",\"src\":\"69:6:3\",\"type\":\"\"},{\"name\":\"end\",\"nodeType\":\"YulTypedName\",\"src\":\"77:3:3\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"array\",\"nodeType\":\"YulTypedName\",\"src\":\"85:5:3\",\"type\":\"\"}],\"src\":\"7:412:3\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"477:87:3\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"487:29:3\",\"value\":{\"arguments\":[{\"name\":\"offset\",\"nodeType\":\"YulIdentifier\",\"src\":\"509:6:3\"}],\"functionName\":{\"name\":\"calldataload\",\"nodeType\":\"YulIdentifier\",\"src\":\"496:12:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"496:20:3\"},\"variableNames\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"487:5:3\"}]},{\"expression\":{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"552:5:3\"}],\"functionName\":{\"name\":\"validator_revert_t_bytes32\",\"nodeType\":\"YulIdentifier\",\"src\":\"525:26:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"525:33:3\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"525:33:3\"}]},\"name\":\"abi_decode_t_bytes32\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"offset\",\"nodeType\":\"YulTypedName\",\"src\":\"455:6:3\",\"type\":\"\"},{\"name\":\"end\",\"nodeType\":\"YulTypedName\",\"src\":\"463:3:3\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"471:5:3\",\"type\":\"\"}],\"src\":\"425:139:3\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"646:278:3\",\"statements\":[{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"695:83:3\",\"statements\":[{\"expression\":{\"arguments\":[],\"functionName\":{\"name\":\"revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d\",\"nodeType\":\"YulIdentifier\",\"src\":\"697:77:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"697:79:3\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"697:79:3\"}]},\"condition\":{\"arguments\":[{\"arguments\":[{\"arguments\":[{\"name\":\"offset\",\"nodeType\":\"YulIdentifier\",\"src\":\"674:6:3\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"682:4:3\",\"type\":\"\",\"value\":\"0x1f\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"670:3:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"670:17:3\"},{\"name\":\"end\",\"nodeType\":\"YulIdentifier\",\"src\":\"689:3:3\"}],\"functionName\":{\"name\":\"slt\",\"nodeType\":\"YulIdentifier\",\"src\":\"666:3:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"666:27:3\"}],\"functionName\":{\"name\":\"iszero\",\"nodeType\":\"YulIdentifier\",\"src\":\"659:6:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"659:35:3\"},\"nodeType\":\"YulIf\",\"src\":\"656:2:3\"},{\"nodeType\":\"YulVariableDeclaration\",\"src\":\"787:34:3\",\"value\":{\"arguments\":[{\"name\":\"offset\",\"nodeType\":\"YulIdentifier\",\"src\":\"814:6:3\"}],\"functionName\":{\"name\":\"calldataload\",\"nodeType\":\"YulIdentifier\",\"src\":\"801:12:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"801:20:3\"},\"variables\":[{\"name\":\"length\",\"nodeType\":\"YulTypedName\",\"src\":\"791:6:3\",\"type\":\"\"}]},{\"nodeType\":\"YulAssignment\",\"src\":\"830:88:3\",\"value\":{\"arguments\":[{\"arguments\":[{\"name\":\"offset\",\"nodeType\":\"YulIdentifier\",\"src\":\"891:6:3\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"899:4:3\",\"type\":\"\",\"value\":\"0x20\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"887:3:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"887:17:3\"},{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"906:6:3\"},{\"name\":\"end\",\"nodeType\":\"YulIdentifier\",\"src\":\"914:3:3\"}],\"functionName\":{\"name\":\"abi_decode_available_length_t_string_memory_ptr\",\"nodeType\":\"YulIdentifier\",\"src\":\"839:47:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"839:79:3\"},\"variableNames\":[{\"name\":\"array\",\"nodeType\":\"YulIdentifier\",\"src\":\"830:5:3\"}]}]},\"name\":\"abi_decode_t_string_memory_ptr\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"offset\",\"nodeType\":\"YulTypedName\",\"src\":\"624:6:3\",\"type\":\"\"},{\"name\":\"end\",\"nodeType\":\"YulTypedName\",\"src\":\"632:3:3\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"array\",\"nodeType\":\"YulTypedName\",\"src\":\"640:5:3\",\"type\":\"\"}],\"src\":\"584:340:3\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"996:263:3\",\"statements\":[{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"1042:83:3\",\"statements\":[{\"expression\":{\"arguments\":[],\"functionName\":{\"name\":\"revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b\",\"nodeType\":\"YulIdentifier\",\"src\":\"1044:77:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1044:79:3\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"1044:79:3\"}]},\"condition\":{\"arguments\":[{\"arguments\":[{\"name\":\"dataEnd\",\"nodeType\":\"YulIdentifier\",\"src\":\"1017:7:3\"},{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"1026:9:3\"}],\"functionName\":{\"name\":\"sub\",\"nodeType\":\"YulIdentifier\",\"src\":\"1013:3:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1013:23:3\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"1038:2:3\",\"type\":\"\",\"value\":\"32\"}],\"functionName\":{\"name\":\"slt\",\"nodeType\":\"YulIdentifier\",\"src\":\"1009:3:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1009:32:3\"},\"nodeType\":\"YulIf\",\"src\":\"1006:2:3\"},{\"nodeType\":\"YulBlock\",\"src\":\"1135:117:3\",\"statements\":[{\"nodeType\":\"YulVariableDeclaration\",\"src\":\"1150:15:3\",\"value\":{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"1164:1:3\",\"type\":\"\",\"value\":\"0\"},\"variables\":[{\"name\":\"offset\",\"nodeType\":\"YulTypedName\",\"src\":\"1154:6:3\",\"type\":\"\"}]},{\"nodeType\":\"YulAssignment\",\"src\":\"1179:63:3\",\"value\":{\"arguments\":[{\"arguments\":[{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"1214:9:3\"},{\"name\":\"offset\",\"nodeType\":\"YulIdentifier\",\"src\":\"1225:6:3\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"1210:3:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1210:22:3\"},{\"name\":\"dataEnd\",\"nodeType\":\"YulIdentifier\",\"src\":\"1234:7:3\"}],\"functionName\":{\"name\":\"abi_decode_t_bytes32\",\"nodeType\":\"YulIdentifier\",\"src\":\"1189:20:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1189:53:3\"},\"variableNames\":[{\"name\":\"value0\",\"nodeType\":\"YulIdentifier\",\"src\":\"1179:6:3\"}]}]}]},\"name\":\"abi_decode_tuple_t_bytes32\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"headStart\",\"nodeType\":\"YulTypedName\",\"src\":\"966:9:3\",\"type\":\"\"},{\"name\":\"dataEnd\",\"nodeType\":\"YulTypedName\",\"src\":\"977:7:3\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"value0\",\"nodeType\":\"YulTypedName\",\"src\":\"989:6:3\",\"type\":\"\"}],\"src\":\"930:329:3\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"1358:561:3\",\"statements\":[{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"1404:83:3\",\"statements\":[{\"expression\":{\"arguments\":[],\"functionName\":{\"name\":\"revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b\",\"nodeType\":\"YulIdentifier\",\"src\":\"1406:77:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1406:79:3\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"1406:79:3\"}]},\"condition\":{\"arguments\":[{\"arguments\":[{\"name\":\"dataEnd\",\"nodeType\":\"YulIdentifier\",\"src\":\"1379:7:3\"},{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"1388:9:3\"}],\"functionName\":{\"name\":\"sub\",\"nodeType\":\"YulIdentifier\",\"src\":\"1375:3:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1375:23:3\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"1400:2:3\",\"type\":\"\",\"value\":\"64\"}],\"functionName\":{\"name\":\"slt\",\"nodeType\":\"YulIdentifier\",\"src\":\"1371:3:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1371:32:3\"},\"nodeType\":\"YulIf\",\"src\":\"1368:2:3\"},{\"nodeType\":\"YulBlock\",\"src\":\"1497:287:3\",\"statements\":[{\"nodeType\":\"YulVariableDeclaration\",\"src\":\"1512:45:3\",\"value\":{\"arguments\":[{\"arguments\":[{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"1543:9:3\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"1554:1:3\",\"type\":\"\",\"value\":\"0\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"1539:3:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1539:17:3\"}],\"functionName\":{\"name\":\"calldataload\",\"nodeType\":\"YulIdentifier\",\"src\":\"1526:12:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1526:31:3\"},\"variables\":[{\"name\":\"offset\",\"nodeType\":\"YulTypedName\",\"src\":\"1516:6:3\",\"type\":\"\"}]},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"1604:83:3\",\"statements\":[{\"expression\":{\"arguments\":[],\"functionName\":{\"name\":\"revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db\",\"nodeType\":\"YulIdentifier\",\"src\":\"1606:77:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1606:79:3\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"1606:79:3\"}]},\"condition\":{\"arguments\":[{\"name\":\"offset\",\"nodeType\":\"YulIdentifier\",\"src\":\"1576:6:3\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"1584:18:3\",\"type\":\"\",\"value\":\"0xffffffffffffffff\"}],\"functionName\":{\"name\":\"gt\",\"nodeType\":\"YulIdentifier\",\"src\":\"1573:2:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1573:30:3\"},\"nodeType\":\"YulIf\",\"src\":\"1570:2:3\"},{\"nodeType\":\"YulAssignment\",\"src\":\"1701:73:3\",\"value\":{\"arguments\":[{\"arguments\":[{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"1746:9:3\"},{\"name\":\"offset\",\"nodeType\":\"YulIdentifier\",\"src\":\"1757:6:3\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"1742:3:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1742:22:3\"},{\"name\":\"dataEnd\",\"nodeType\":\"YulIdentifier\",\"src\":\"1766:7:3\"}],\"functionName\":{\"name\":\"abi_decode_t_string_memory_ptr\",\"nodeType\":\"YulIdentifier\",\"src\":\"1711:30:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1711:63:3\"},\"variableNames\":[{\"name\":\"value0\",\"nodeType\":\"YulIdentifier\",\"src\":\"1701:6:3\"}]}]},{\"nodeType\":\"YulBlock\",\"src\":\"1794:118:3\",\"statements\":[{\"nodeType\":\"YulVariableDeclaration\",\"src\":\"1809:16:3\",\"value\":{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"1823:2:3\",\"type\":\"\",\"value\":\"32\"},\"variables\":[{\"name\":\"offset\",\"nodeType\":\"YulTypedName\",\"src\":\"1813:6:3\",\"type\":\"\"}]},{\"nodeType\":\"YulAssignment\",\"src\":\"1839:63:3\",\"value\":{\"arguments\":[{\"arguments\":[{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"1874:9:3\"},{\"name\":\"offset\",\"nodeType\":\"YulIdentifier\",\"src\":\"1885:6:3\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"1870:3:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1870:22:3\"},{\"name\":\"dataEnd\",\"nodeType\":\"YulIdentifier\",\"src\":\"1894:7:3\"}],\"functionName\":{\"name\":\"abi_decode_t_bytes32\",\"nodeType\":\"YulIdentifier\",\"src\":\"1849:20:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1849:53:3\"},\"variableNames\":[{\"name\":\"value1\",\"nodeType\":\"YulIdentifier\",\"src\":\"1839:6:3\"}]}]}]},\"name\":\"abi_decode_tuple_t_string_memory_ptrt_bytes32\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"headStart\",\"nodeType\":\"YulTypedName\",\"src\":\"1320:9:3\",\"type\":\"\"},{\"name\":\"dataEnd\",\"nodeType\":\"YulTypedName\",\"src\":\"1331:7:3\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"value0\",\"nodeType\":\"YulTypedName\",\"src\":\"1343:6:3\",\"type\":\"\"},{\"name\":\"value1\",\"nodeType\":\"YulTypedName\",\"src\":\"1351:6:3\",\"type\":\"\"}],\"src\":\"1265:654:3\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"1984:50:3\",\"statements\":[{\"expression\":{\"arguments\":[{\"name\":\"pos\",\"nodeType\":\"YulIdentifier\",\"src\":\"2001:3:3\"},{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"2021:5:3\"}],\"functionName\":{\"name\":\"cleanup_t_bool\",\"nodeType\":\"YulIdentifier\",\"src\":\"2006:14:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2006:21:3\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"1994:6:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"1994:34:3\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"1994:34:3\"}]},\"name\":\"abi_encode_t_bool_to_t_bool_fromStack\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"1972:5:3\",\"type\":\"\"},{\"name\":\"pos\",\"nodeType\":\"YulTypedName\",\"src\":\"1979:3:3\",\"type\":\"\"}],\"src\":\"1925:109:3\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"2132:272:3\",\"statements\":[{\"nodeType\":\"YulVariableDeclaration\",\"src\":\"2142:53:3\",\"value\":{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"2189:5:3\"}],\"functionName\":{\"name\":\"array_length_t_string_memory_ptr\",\"nodeType\":\"YulIdentifier\",\"src\":\"2156:32:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2156:39:3\"},\"variables\":[{\"name\":\"length\",\"nodeType\":\"YulTypedName\",\"src\":\"2146:6:3\",\"type\":\"\"}]},{\"nodeType\":\"YulAssignment\",\"src\":\"2204:78:3\",\"value\":{\"arguments\":[{\"name\":\"pos\",\"nodeType\":\"YulIdentifier\",\"src\":\"2270:3:3\"},{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"2275:6:3\"}],\"functionName\":{\"name\":\"array_storeLengthForEncoding_t_string_memory_ptr_fromStack\",\"nodeType\":\"YulIdentifier\",\"src\":\"2211:58:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2211:71:3\"},\"variableNames\":[{\"name\":\"pos\",\"nodeType\":\"YulIdentifier\",\"src\":\"2204:3:3\"}]},{\"expression\":{\"arguments\":[{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"2317:5:3\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"2324:4:3\",\"type\":\"\",\"value\":\"0x20\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"2313:3:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2313:16:3\"},{\"name\":\"pos\",\"nodeType\":\"YulIdentifier\",\"src\":\"2331:3:3\"},{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"2336:6:3\"}],\"functionName\":{\"name\":\"copy_memory_to_memory\",\"nodeType\":\"YulIdentifier\",\"src\":\"2291:21:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2291:52:3\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"2291:52:3\"},{\"nodeType\":\"YulAssignment\",\"src\":\"2352:46:3\",\"value\":{\"arguments\":[{\"name\":\"pos\",\"nodeType\":\"YulIdentifier\",\"src\":\"2363:3:3\"},{\"arguments\":[{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"2390:6:3\"}],\"functionName\":{\"name\":\"round_up_to_mul_of_32\",\"nodeType\":\"YulIdentifier\",\"src\":\"2368:21:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2368:29:3\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"2359:3:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2359:39:3\"},\"variableNames\":[{\"name\":\"end\",\"nodeType\":\"YulIdentifier\",\"src\":\"2352:3:3\"}]}]},\"name\":\"abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"2113:5:3\",\"type\":\"\"},{\"name\":\"pos\",\"nodeType\":\"YulTypedName\",\"src\":\"2120:3:3\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"end\",\"nodeType\":\"YulTypedName\",\"src\":\"2128:3:3\",\"type\":\"\"}],\"src\":\"2040:364:3\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"2502:118:3\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"2512:26:3\",\"value\":{\"arguments\":[{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"2524:9:3\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"2535:2:3\",\"type\":\"\",\"value\":\"32\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"2520:3:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2520:18:3\"},\"variableNames\":[{\"name\":\"tail\",\"nodeType\":\"YulIdentifier\",\"src\":\"2512:4:3\"}]},{\"expression\":{\"arguments\":[{\"name\":\"value0\",\"nodeType\":\"YulIdentifier\",\"src\":\"2586:6:3\"},{\"arguments\":[{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"2599:9:3\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"2610:1:3\",\"type\":\"\",\"value\":\"0\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"2595:3:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2595:17:3\"}],\"functionName\":{\"name\":\"abi_encode_t_bool_to_t_bool_fromStack\",\"nodeType\":\"YulIdentifier\",\"src\":\"2548:37:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2548:65:3\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"2548:65:3\"}]},\"name\":\"abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"headStart\",\"nodeType\":\"YulTypedName\",\"src\":\"2474:9:3\",\"type\":\"\"},{\"name\":\"value0\",\"nodeType\":\"YulTypedName\",\"src\":\"2486:6:3\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"tail\",\"nodeType\":\"YulTypedName\",\"src\":\"2497:4:3\",\"type\":\"\"}],\"src\":\"2410:210:3\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"2744:195:3\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"2754:26:3\",\"value\":{\"arguments\":[{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"2766:9:3\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"2777:2:3\",\"type\":\"\",\"value\":\"32\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"2762:3:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2762:18:3\"},\"variableNames\":[{\"name\":\"tail\",\"nodeType\":\"YulIdentifier\",\"src\":\"2754:4:3\"}]},{\"expression\":{\"arguments\":[{\"arguments\":[{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"2801:9:3\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"2812:1:3\",\"type\":\"\",\"value\":\"0\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"2797:3:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2797:17:3\"},{\"arguments\":[{\"name\":\"tail\",\"nodeType\":\"YulIdentifier\",\"src\":\"2820:4:3\"},{\"name\":\"headStart\",\"nodeType\":\"YulIdentifier\",\"src\":\"2826:9:3\"}],\"functionName\":{\"name\":\"sub\",\"nodeType\":\"YulIdentifier\",\"src\":\"2816:3:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2816:20:3\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"2790:6:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2790:47:3\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"2790:47:3\"},{\"nodeType\":\"YulAssignment\",\"src\":\"2846:86:3\",\"value\":{\"arguments\":[{\"name\":\"value0\",\"nodeType\":\"YulIdentifier\",\"src\":\"2918:6:3\"},{\"name\":\"tail\",\"nodeType\":\"YulIdentifier\",\"src\":\"2927:4:3\"}],\"functionName\":{\"name\":\"abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack\",\"nodeType\":\"YulIdentifier\",\"src\":\"2854:63:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"2854:78:3\"},\"variableNames\":[{\"name\":\"tail\",\"nodeType\":\"YulIdentifier\",\"src\":\"2846:4:3\"}]}]},\"name\":\"abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"headStart\",\"nodeType\":\"YulTypedName\",\"src\":\"2716:9:3\",\"type\":\"\"},{\"name\":\"value0\",\"nodeType\":\"YulTypedName\",\"src\":\"2728:6:3\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"tail\",\"nodeType\":\"YulTypedName\",\"src\":\"2739:4:3\",\"type\":\"\"}],\"src\":\"2626:313:3\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"2986:88:3\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"2996:30:3\",\"value\":{\"arguments\":[],\"functionName\":{\"name\":\"allocate_unbounded\",\"nodeType\":\"YulIdentifier\",\"src\":\"3006:18:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3006:20:3\"},\"variableNames\":[{\"name\":\"memPtr\",\"nodeType\":\"YulIdentifier\",\"src\":\"2996:6:3\"}]},{\"expression\":{\"arguments\":[{\"name\":\"memPtr\",\"nodeType\":\"YulIdentifier\",\"src\":\"3055:6:3\"},{\"name\":\"size\",\"nodeType\":\"YulIdentifier\",\"src\":\"3063:4:3\"}],\"functionName\":{\"name\":\"finalize_allocation\",\"nodeType\":\"YulIdentifier\",\"src\":\"3035:19:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3035:33:3\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"3035:33:3\"}]},\"name\":\"allocate_memory\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"size\",\"nodeType\":\"YulTypedName\",\"src\":\"2970:4:3\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"memPtr\",\"nodeType\":\"YulTypedName\",\"src\":\"2979:6:3\",\"type\":\"\"}],\"src\":\"2945:129:3\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"3120:35:3\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"3130:19:3\",\"value\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"3146:2:3\",\"type\":\"\",\"value\":\"64\"}],\"functionName\":{\"name\":\"mload\",\"nodeType\":\"YulIdentifier\",\"src\":\"3140:5:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3140:9:3\"},\"variableNames\":[{\"name\":\"memPtr\",\"nodeType\":\"YulIdentifier\",\"src\":\"3130:6:3\"}]}]},\"name\":\"allocate_unbounded\",\"nodeType\":\"YulFunctionDefinition\",\"returnVariables\":[{\"name\":\"memPtr\",\"nodeType\":\"YulTypedName\",\"src\":\"3113:6:3\",\"type\":\"\"}],\"src\":\"3080:75:3\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"3228:241:3\",\"statements\":[{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"3333:22:3\",\"statements\":[{\"expression\":{\"arguments\":[],\"functionName\":{\"name\":\"panic_error_0x41\",\"nodeType\":\"YulIdentifier\",\"src\":\"3335:16:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3335:18:3\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"3335:18:3\"}]},\"condition\":{\"arguments\":[{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"3305:6:3\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"3313:18:3\",\"type\":\"\",\"value\":\"0xffffffffffffffff\"}],\"functionName\":{\"name\":\"gt\",\"nodeType\":\"YulIdentifier\",\"src\":\"3302:2:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3302:30:3\"},\"nodeType\":\"YulIf\",\"src\":\"3299:2:3\"},{\"nodeType\":\"YulAssignment\",\"src\":\"3365:37:3\",\"value\":{\"arguments\":[{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"3395:6:3\"}],\"functionName\":{\"name\":\"round_up_to_mul_of_32\",\"nodeType\":\"YulIdentifier\",\"src\":\"3373:21:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3373:29:3\"},\"variableNames\":[{\"name\":\"size\",\"nodeType\":\"YulIdentifier\",\"src\":\"3365:4:3\"}]},{\"nodeType\":\"YulAssignment\",\"src\":\"3439:23:3\",\"value\":{\"arguments\":[{\"name\":\"size\",\"nodeType\":\"YulIdentifier\",\"src\":\"3451:4:3\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"3457:4:3\",\"type\":\"\",\"value\":\"0x20\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"3447:3:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3447:15:3\"},\"variableNames\":[{\"name\":\"size\",\"nodeType\":\"YulIdentifier\",\"src\":\"3439:4:3\"}]}]},\"name\":\"array_allocation_size_t_string_memory_ptr\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"length\",\"nodeType\":\"YulTypedName\",\"src\":\"3212:6:3\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"size\",\"nodeType\":\"YulTypedName\",\"src\":\"3223:4:3\",\"type\":\"\"}],\"src\":\"3161:308:3\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"3534:40:3\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"3545:22:3\",\"value\":{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"3561:5:3\"}],\"functionName\":{\"name\":\"mload\",\"nodeType\":\"YulIdentifier\",\"src\":\"3555:5:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3555:12:3\"},\"variableNames\":[{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"3545:6:3\"}]}]},\"name\":\"array_length_t_string_memory_ptr\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"3517:5:3\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"length\",\"nodeType\":\"YulTypedName\",\"src\":\"3527:6:3\",\"type\":\"\"}],\"src\":\"3475:99:3\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"3676:73:3\",\"statements\":[{\"expression\":{\"arguments\":[{\"name\":\"pos\",\"nodeType\":\"YulIdentifier\",\"src\":\"3693:3:3\"},{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"3698:6:3\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"3686:6:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3686:19:3\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"3686:19:3\"},{\"nodeType\":\"YulAssignment\",\"src\":\"3714:29:3\",\"value\":{\"arguments\":[{\"name\":\"pos\",\"nodeType\":\"YulIdentifier\",\"src\":\"3733:3:3\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"3738:4:3\",\"type\":\"\",\"value\":\"0x20\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"3729:3:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3729:14:3\"},\"variableNames\":[{\"name\":\"updated_pos\",\"nodeType\":\"YulIdentifier\",\"src\":\"3714:11:3\"}]}]},\"name\":\"array_storeLengthForEncoding_t_string_memory_ptr_fromStack\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"pos\",\"nodeType\":\"YulTypedName\",\"src\":\"3648:3:3\",\"type\":\"\"},{\"name\":\"length\",\"nodeType\":\"YulTypedName\",\"src\":\"3653:6:3\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"updated_pos\",\"nodeType\":\"YulTypedName\",\"src\":\"3664:11:3\",\"type\":\"\"}],\"src\":\"3580:169:3\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"3797:48:3\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"3807:32:3\",\"value\":{\"arguments\":[{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"3832:5:3\"}],\"functionName\":{\"name\":\"iszero\",\"nodeType\":\"YulIdentifier\",\"src\":\"3825:6:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3825:13:3\"}],\"functionName\":{\"name\":\"iszero\",\"nodeType\":\"YulIdentifier\",\"src\":\"3818:6:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3818:21:3\"},\"variableNames\":[{\"name\":\"cleaned\",\"nodeType\":\"YulIdentifier\",\"src\":\"3807:7:3\"}]}]},\"name\":\"cleanup_t_bool\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"3779:5:3\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"cleaned\",\"nodeType\":\"YulTypedName\",\"src\":\"3789:7:3\",\"type\":\"\"}],\"src\":\"3755:90:3\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"3896:32:3\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"3906:16:3\",\"value\":{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"3917:5:3\"},\"variableNames\":[{\"name\":\"cleaned\",\"nodeType\":\"YulIdentifier\",\"src\":\"3906:7:3\"}]}]},\"name\":\"cleanup_t_bytes32\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"3878:5:3\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"cleaned\",\"nodeType\":\"YulTypedName\",\"src\":\"3888:7:3\",\"type\":\"\"}],\"src\":\"3851:77:3\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"3985:103:3\",\"statements\":[{\"expression\":{\"arguments\":[{\"name\":\"dst\",\"nodeType\":\"YulIdentifier\",\"src\":\"4008:3:3\"},{\"name\":\"src\",\"nodeType\":\"YulIdentifier\",\"src\":\"4013:3:3\"},{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"4018:6:3\"}],\"functionName\":{\"name\":\"calldatacopy\",\"nodeType\":\"YulIdentifier\",\"src\":\"3995:12:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"3995:30:3\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"3995:30:3\"},{\"expression\":{\"arguments\":[{\"arguments\":[{\"name\":\"dst\",\"nodeType\":\"YulIdentifier\",\"src\":\"4066:3:3\"},{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"4071:6:3\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"4062:3:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4062:16:3\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"4080:1:3\",\"type\":\"\",\"value\":\"0\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"4055:6:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4055:27:3\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"4055:27:3\"}]},\"name\":\"copy_calldata_to_memory\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"src\",\"nodeType\":\"YulTypedName\",\"src\":\"3967:3:3\",\"type\":\"\"},{\"name\":\"dst\",\"nodeType\":\"YulTypedName\",\"src\":\"3972:3:3\",\"type\":\"\"},{\"name\":\"length\",\"nodeType\":\"YulTypedName\",\"src\":\"3977:6:3\",\"type\":\"\"}],\"src\":\"3934:154:3\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"4143:258:3\",\"statements\":[{\"nodeType\":\"YulVariableDeclaration\",\"src\":\"4153:10:3\",\"value\":{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"4162:1:3\",\"type\":\"\",\"value\":\"0\"},\"variables\":[{\"name\":\"i\",\"nodeType\":\"YulTypedName\",\"src\":\"4157:1:3\",\"type\":\"\"}]},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"4222:63:3\",\"statements\":[{\"expression\":{\"arguments\":[{\"arguments\":[{\"name\":\"dst\",\"nodeType\":\"YulIdentifier\",\"src\":\"4247:3:3\"},{\"name\":\"i\",\"nodeType\":\"YulIdentifier\",\"src\":\"4252:1:3\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"4243:3:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4243:11:3\"},{\"arguments\":[{\"arguments\":[{\"name\":\"src\",\"nodeType\":\"YulIdentifier\",\"src\":\"4266:3:3\"},{\"name\":\"i\",\"nodeType\":\"YulIdentifier\",\"src\":\"4271:1:3\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"4262:3:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4262:11:3\"}],\"functionName\":{\"name\":\"mload\",\"nodeType\":\"YulIdentifier\",\"src\":\"4256:5:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4256:18:3\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"4236:6:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4236:39:3\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"4236:39:3\"}]},\"condition\":{\"arguments\":[{\"name\":\"i\",\"nodeType\":\"YulIdentifier\",\"src\":\"4183:1:3\"},{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"4186:6:3\"}],\"functionName\":{\"name\":\"lt\",\"nodeType\":\"YulIdentifier\",\"src\":\"4180:2:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4180:13:3\"},\"nodeType\":\"YulForLoop\",\"post\":{\"nodeType\":\"YulBlock\",\"src\":\"4194:19:3\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"4196:15:3\",\"value\":{\"arguments\":[{\"name\":\"i\",\"nodeType\":\"YulIdentifier\",\"src\":\"4205:1:3\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"4208:2:3\",\"type\":\"\",\"value\":\"32\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"4201:3:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4201:10:3\"},\"variableNames\":[{\"name\":\"i\",\"nodeType\":\"YulIdentifier\",\"src\":\"4196:1:3\"}]}]},\"pre\":{\"nodeType\":\"YulBlock\",\"src\":\"4176:3:3\",\"statements\":[]},\"src\":\"4172:113:3\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"4319:76:3\",\"statements\":[{\"expression\":{\"arguments\":[{\"arguments\":[{\"name\":\"dst\",\"nodeType\":\"YulIdentifier\",\"src\":\"4369:3:3\"},{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"4374:6:3\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"4365:3:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4365:16:3\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"4383:1:3\",\"type\":\"\",\"value\":\"0\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"4358:6:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4358:27:3\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"4358:27:3\"}]},\"condition\":{\"arguments\":[{\"name\":\"i\",\"nodeType\":\"YulIdentifier\",\"src\":\"4300:1:3\"},{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"4303:6:3\"}],\"functionName\":{\"name\":\"gt\",\"nodeType\":\"YulIdentifier\",\"src\":\"4297:2:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4297:13:3\"},\"nodeType\":\"YulIf\",\"src\":\"4294:2:3\"}]},\"name\":\"copy_memory_to_memory\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"src\",\"nodeType\":\"YulTypedName\",\"src\":\"4125:3:3\",\"type\":\"\"},{\"name\":\"dst\",\"nodeType\":\"YulTypedName\",\"src\":\"4130:3:3\",\"type\":\"\"},{\"name\":\"length\",\"nodeType\":\"YulTypedName\",\"src\":\"4135:6:3\",\"type\":\"\"}],\"src\":\"4094:307:3\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"4458:269:3\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"4468:22:3\",\"value\":{\"arguments\":[{\"name\":\"data\",\"nodeType\":\"YulIdentifier\",\"src\":\"4482:4:3\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"4488:1:3\",\"type\":\"\",\"value\":\"2\"}],\"functionName\":{\"name\":\"div\",\"nodeType\":\"YulIdentifier\",\"src\":\"4478:3:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4478:12:3\"},\"variableNames\":[{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"4468:6:3\"}]},{\"nodeType\":\"YulVariableDeclaration\",\"src\":\"4499:38:3\",\"value\":{\"arguments\":[{\"name\":\"data\",\"nodeType\":\"YulIdentifier\",\"src\":\"4529:4:3\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"4535:1:3\",\"type\":\"\",\"value\":\"1\"}],\"functionName\":{\"name\":\"and\",\"nodeType\":\"YulIdentifier\",\"src\":\"4525:3:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4525:12:3\"},\"variables\":[{\"name\":\"outOfPlaceEncoding\",\"nodeType\":\"YulTypedName\",\"src\":\"4503:18:3\",\"type\":\"\"}]},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"4576:51:3\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"4590:27:3\",\"value\":{\"arguments\":[{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"4604:6:3\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"4612:4:3\",\"type\":\"\",\"value\":\"0x7f\"}],\"functionName\":{\"name\":\"and\",\"nodeType\":\"YulIdentifier\",\"src\":\"4600:3:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4600:17:3\"},\"variableNames\":[{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"4590:6:3\"}]}]},\"condition\":{\"arguments\":[{\"name\":\"outOfPlaceEncoding\",\"nodeType\":\"YulIdentifier\",\"src\":\"4556:18:3\"}],\"functionName\":{\"name\":\"iszero\",\"nodeType\":\"YulIdentifier\",\"src\":\"4549:6:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4549:26:3\"},\"nodeType\":\"YulIf\",\"src\":\"4546:2:3\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"4679:42:3\",\"statements\":[{\"expression\":{\"arguments\":[],\"functionName\":{\"name\":\"panic_error_0x22\",\"nodeType\":\"YulIdentifier\",\"src\":\"4693:16:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4693:18:3\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"4693:18:3\"}]},\"condition\":{\"arguments\":[{\"name\":\"outOfPlaceEncoding\",\"nodeType\":\"YulIdentifier\",\"src\":\"4643:18:3\"},{\"arguments\":[{\"name\":\"length\",\"nodeType\":\"YulIdentifier\",\"src\":\"4666:6:3\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"4674:2:3\",\"type\":\"\",\"value\":\"32\"}],\"functionName\":{\"name\":\"lt\",\"nodeType\":\"YulIdentifier\",\"src\":\"4663:2:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4663:14:3\"}],\"functionName\":{\"name\":\"eq\",\"nodeType\":\"YulIdentifier\",\"src\":\"4640:2:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4640:38:3\"},\"nodeType\":\"YulIf\",\"src\":\"4637:2:3\"}]},\"name\":\"extract_byte_array_length\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"data\",\"nodeType\":\"YulTypedName\",\"src\":\"4442:4:3\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"length\",\"nodeType\":\"YulTypedName\",\"src\":\"4451:6:3\",\"type\":\"\"}],\"src\":\"4407:320:3\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"4776:238:3\",\"statements\":[{\"nodeType\":\"YulVariableDeclaration\",\"src\":\"4786:58:3\",\"value\":{\"arguments\":[{\"name\":\"memPtr\",\"nodeType\":\"YulIdentifier\",\"src\":\"4808:6:3\"},{\"arguments\":[{\"name\":\"size\",\"nodeType\":\"YulIdentifier\",\"src\":\"4838:4:3\"}],\"functionName\":{\"name\":\"round_up_to_mul_of_32\",\"nodeType\":\"YulIdentifier\",\"src\":\"4816:21:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4816:27:3\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"4804:3:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4804:40:3\"},\"variables\":[{\"name\":\"newFreePtr\",\"nodeType\":\"YulTypedName\",\"src\":\"4790:10:3\",\"type\":\"\"}]},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"4955:22:3\",\"statements\":[{\"expression\":{\"arguments\":[],\"functionName\":{\"name\":\"panic_error_0x41\",\"nodeType\":\"YulIdentifier\",\"src\":\"4957:16:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4957:18:3\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"4957:18:3\"}]},\"condition\":{\"arguments\":[{\"arguments\":[{\"name\":\"newFreePtr\",\"nodeType\":\"YulIdentifier\",\"src\":\"4898:10:3\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"4910:18:3\",\"type\":\"\",\"value\":\"0xffffffffffffffff\"}],\"functionName\":{\"name\":\"gt\",\"nodeType\":\"YulIdentifier\",\"src\":\"4895:2:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4895:34:3\"},{\"arguments\":[{\"name\":\"newFreePtr\",\"nodeType\":\"YulIdentifier\",\"src\":\"4934:10:3\"},{\"name\":\"memPtr\",\"nodeType\":\"YulIdentifier\",\"src\":\"4946:6:3\"}],\"functionName\":{\"name\":\"lt\",\"nodeType\":\"YulIdentifier\",\"src\":\"4931:2:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4931:22:3\"}],\"functionName\":{\"name\":\"or\",\"nodeType\":\"YulIdentifier\",\"src\":\"4892:2:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4892:62:3\"},\"nodeType\":\"YulIf\",\"src\":\"4889:2:3\"},{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"4993:2:3\",\"type\":\"\",\"value\":\"64\"},{\"name\":\"newFreePtr\",\"nodeType\":\"YulIdentifier\",\"src\":\"4997:10:3\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"4986:6:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"4986:22:3\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"4986:22:3\"}]},\"name\":\"finalize_allocation\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"memPtr\",\"nodeType\":\"YulTypedName\",\"src\":\"4762:6:3\",\"type\":\"\"},{\"name\":\"size\",\"nodeType\":\"YulTypedName\",\"src\":\"4770:4:3\",\"type\":\"\"}],\"src\":\"4733:281:3\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"5048:152:3\",\"statements\":[{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"5065:1:3\",\"type\":\"\",\"value\":\"0\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"5068:77:3\",\"type\":\"\",\"value\":\"35408467139433450592217433187231851964531694900788300625387963629091585785856\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"5058:6:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"5058:88:3\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"5058:88:3\"},{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"5162:1:3\",\"type\":\"\",\"value\":\"4\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"5165:4:3\",\"type\":\"\",\"value\":\"0x22\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"5155:6:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"5155:15:3\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"5155:15:3\"},{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"5186:1:3\",\"type\":\"\",\"value\":\"0\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"5189:4:3\",\"type\":\"\",\"value\":\"0x24\"}],\"functionName\":{\"name\":\"revert\",\"nodeType\":\"YulIdentifier\",\"src\":\"5179:6:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"5179:15:3\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"5179:15:3\"}]},\"name\":\"panic_error_0x22\",\"nodeType\":\"YulFunctionDefinition\",\"src\":\"5020:180:3\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"5234:152:3\",\"statements\":[{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"5251:1:3\",\"type\":\"\",\"value\":\"0\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"5254:77:3\",\"type\":\"\",\"value\":\"35408467139433450592217433187231851964531694900788300625387963629091585785856\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"5244:6:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"5244:88:3\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"5244:88:3\"},{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"5348:1:3\",\"type\":\"\",\"value\":\"4\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"5351:4:3\",\"type\":\"\",\"value\":\"0x41\"}],\"functionName\":{\"name\":\"mstore\",\"nodeType\":\"YulIdentifier\",\"src\":\"5341:6:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"5341:15:3\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"5341:15:3\"},{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"5372:1:3\",\"type\":\"\",\"value\":\"0\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"5375:4:3\",\"type\":\"\",\"value\":\"0x24\"}],\"functionName\":{\"name\":\"revert\",\"nodeType\":\"YulIdentifier\",\"src\":\"5365:6:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"5365:15:3\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"5365:15:3\"}]},\"name\":\"panic_error_0x41\",\"nodeType\":\"YulFunctionDefinition\",\"src\":\"5206:180:3\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"5481:28:3\",\"statements\":[{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"5498:1:3\",\"type\":\"\",\"value\":\"0\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"5501:1:3\",\"type\":\"\",\"value\":\"0\"}],\"functionName\":{\"name\":\"revert\",\"nodeType\":\"YulIdentifier\",\"src\":\"5491:6:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"5491:12:3\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"5491:12:3\"}]},\"name\":\"revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d\",\"nodeType\":\"YulFunctionDefinition\",\"src\":\"5392:117:3\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"5604:28:3\",\"statements\":[{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"5621:1:3\",\"type\":\"\",\"value\":\"0\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"5624:1:3\",\"type\":\"\",\"value\":\"0\"}],\"functionName\":{\"name\":\"revert\",\"nodeType\":\"YulIdentifier\",\"src\":\"5614:6:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"5614:12:3\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"5614:12:3\"}]},\"name\":\"revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae\",\"nodeType\":\"YulFunctionDefinition\",\"src\":\"5515:117:3\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"5727:28:3\",\"statements\":[{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"5744:1:3\",\"type\":\"\",\"value\":\"0\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"5747:1:3\",\"type\":\"\",\"value\":\"0\"}],\"functionName\":{\"name\":\"revert\",\"nodeType\":\"YulIdentifier\",\"src\":\"5737:6:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"5737:12:3\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"5737:12:3\"}]},\"name\":\"revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db\",\"nodeType\":\"YulFunctionDefinition\",\"src\":\"5638:117:3\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"5850:28:3\",\"statements\":[{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"5867:1:3\",\"type\":\"\",\"value\":\"0\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"5870:1:3\",\"type\":\"\",\"value\":\"0\"}],\"functionName\":{\"name\":\"revert\",\"nodeType\":\"YulIdentifier\",\"src\":\"5860:6:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"5860:12:3\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"5860:12:3\"}]},\"name\":\"revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b\",\"nodeType\":\"YulFunctionDefinition\",\"src\":\"5761:117:3\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"5932:54:3\",\"statements\":[{\"nodeType\":\"YulAssignment\",\"src\":\"5942:38:3\",\"value\":{\"arguments\":[{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"5960:5:3\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"5967:2:3\",\"type\":\"\",\"value\":\"31\"}],\"functionName\":{\"name\":\"add\",\"nodeType\":\"YulIdentifier\",\"src\":\"5956:3:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"5956:14:3\"},{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"5976:2:3\",\"type\":\"\",\"value\":\"31\"}],\"functionName\":{\"name\":\"not\",\"nodeType\":\"YulIdentifier\",\"src\":\"5972:3:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"5972:7:3\"}],\"functionName\":{\"name\":\"and\",\"nodeType\":\"YulIdentifier\",\"src\":\"5952:3:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"5952:28:3\"},\"variableNames\":[{\"name\":\"result\",\"nodeType\":\"YulIdentifier\",\"src\":\"5942:6:3\"}]}]},\"name\":\"round_up_to_mul_of_32\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"5915:5:3\",\"type\":\"\"}],\"returnVariables\":[{\"name\":\"result\",\"nodeType\":\"YulTypedName\",\"src\":\"5925:6:3\",\"type\":\"\"}],\"src\":\"5884:102:3\"},{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"6035:79:3\",\"statements\":[{\"body\":{\"nodeType\":\"YulBlock\",\"src\":\"6092:16:3\",\"statements\":[{\"expression\":{\"arguments\":[{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"6101:1:3\",\"type\":\"\",\"value\":\"0\"},{\"kind\":\"number\",\"nodeType\":\"YulLiteral\",\"src\":\"6104:1:3\",\"type\":\"\",\"value\":\"0\"}],\"functionName\":{\"name\":\"revert\",\"nodeType\":\"YulIdentifier\",\"src\":\"6094:6:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"6094:12:3\"},\"nodeType\":\"YulExpressionStatement\",\"src\":\"6094:12:3\"}]},\"condition\":{\"arguments\":[{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"6058:5:3\"},{\"arguments\":[{\"name\":\"value\",\"nodeType\":\"YulIdentifier\",\"src\":\"6083:5:3\"}],\"functionName\":{\"name\":\"cleanup_t_bytes32\",\"nodeType\":\"YulIdentifier\",\"src\":\"6065:17:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"6065:24:3\"}],\"functionName\":{\"name\":\"eq\",\"nodeType\":\"YulIdentifier\",\"src\":\"6055:2:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"6055:35:3\"}],\"functionName\":{\"name\":\"iszero\",\"nodeType\":\"YulIdentifier\",\"src\":\"6048:6:3\"},\"nodeType\":\"YulFunctionCall\",\"src\":\"6048:43:3\"},\"nodeType\":\"YulIf\",\"src\":\"6045:2:3\"}]},\"name\":\"validator_revert_t_bytes32\",\"nodeType\":\"YulFunctionDefinition\",\"parameters\":[{\"name\":\"value\",\"nodeType\":\"YulTypedName\",\"src\":\"6028:5:3\",\"type\":\"\"}],\"src\":\"5992:122:3\"}]},\"contents\":\"{\\n\\n    function abi_decode_available_length_t_string_memory_ptr(src, length, end) -> array {\\n        array := allocate_memory(array_allocation_size_t_string_memory_ptr(length))\\n        mstore(array, length)\\n        let dst := add(array, 0x20)\\n        if gt(add(src, length), end) { revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() }\\n        copy_calldata_to_memory(src, dst, length)\\n    }\\n\\n    function abi_decode_t_bytes32(offset, end) -> value {\\n        value := calldataload(offset)\\n        validator_revert_t_bytes32(value)\\n    }\\n\\n    // string\\n    function abi_decode_t_string_memory_ptr(offset, end) -> array {\\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\\n        let length := calldataload(offset)\\n        array := abi_decode_available_length_t_string_memory_ptr(add(offset, 0x20), length, end)\\n    }\\n\\n    function abi_decode_tuple_t_bytes32(headStart, dataEnd) -> value0 {\\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\\n\\n        {\\n\\n            let offset := 0\\n\\n            value0 := abi_decode_t_bytes32(add(headStart, offset), dataEnd)\\n        }\\n\\n    }\\n\\n    function abi_decode_tuple_t_string_memory_ptrt_bytes32(headStart, dataEnd) -> value0, value1 {\\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\\n\\n        {\\n\\n            let offset := calldataload(add(headStart, 0))\\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\\n\\n            value0 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\\n        }\\n\\n        {\\n\\n            let offset := 32\\n\\n            value1 := abi_decode_t_bytes32(add(headStart, offset), dataEnd)\\n        }\\n\\n    }\\n\\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\\n        mstore(pos, cleanup_t_bool(value))\\n    }\\n\\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\\n        let length := array_length_t_string_memory_ptr(value)\\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\\n        copy_memory_to_memory(add(value, 0x20), pos, length)\\n        end := add(pos, round_up_to_mul_of_32(length))\\n    }\\n\\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\\n        tail := add(headStart, 32)\\n\\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\\n\\n    }\\n\\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\\n        tail := add(headStart, 32)\\n\\n        mstore(add(headStart, 0), sub(tail, headStart))\\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\\n\\n    }\\n\\n    function allocate_memory(size) -> memPtr {\\n        memPtr := allocate_unbounded()\\n        finalize_allocation(memPtr, size)\\n    }\\n\\n    function allocate_unbounded() -> memPtr {\\n        memPtr := mload(64)\\n    }\\n\\n    function array_allocation_size_t_string_memory_ptr(length) -> size {\\n        // Make sure we can allocate memory without overflow\\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\\n\\n        size := round_up_to_mul_of_32(length)\\n\\n        // add length slot\\n        size := add(size, 0x20)\\n\\n    }\\n\\n    function array_length_t_string_memory_ptr(value) -> length {\\n\\n        length := mload(value)\\n\\n    }\\n\\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\\n        mstore(pos, length)\\n        updated_pos := add(pos, 0x20)\\n    }\\n\\n    function cleanup_t_bool(value) -> cleaned {\\n        cleaned := iszero(iszero(value))\\n    }\\n\\n    function cleanup_t_bytes32(value) -> cleaned {\\n        cleaned := value\\n    }\\n\\n    function copy_calldata_to_memory(src, dst, length) {\\n        calldatacopy(dst, src, length)\\n        // clear end\\n        mstore(add(dst, length), 0)\\n    }\\n\\n    function copy_memory_to_memory(src, dst, length) {\\n        let i := 0\\n        for { } lt(i, length) { i := add(i, 32) }\\n        {\\n            mstore(add(dst, i), mload(add(src, i)))\\n        }\\n        if gt(i, length)\\n        {\\n            // clear end\\n            mstore(add(dst, length), 0)\\n        }\\n    }\\n\\n    function extract_byte_array_length(data) -> length {\\n        length := div(data, 2)\\n        let outOfPlaceEncoding := and(data, 1)\\n        if iszero(outOfPlaceEncoding) {\\n            length := and(length, 0x7f)\\n        }\\n\\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\\n            panic_error_0x22()\\n        }\\n    }\\n\\n    function finalize_allocation(memPtr, size) {\\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\\n        // protect against overflow\\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\\n        mstore(64, newFreePtr)\\n    }\\n\\n    function panic_error_0x22() {\\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\\n        mstore(4, 0x22)\\n        revert(0, 0x24)\\n    }\\n\\n    function panic_error_0x41() {\\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\\n        mstore(4, 0x41)\\n        revert(0, 0x24)\\n    }\\n\\n    function revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() {\\n        revert(0, 0)\\n    }\\n\\n    function revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() {\\n        revert(0, 0)\\n    }\\n\\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\\n        revert(0, 0)\\n    }\\n\\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\\n        revert(0, 0)\\n    }\\n\\n    function round_up_to_mul_of_32(value) -> result {\\n        result := and(add(value, 31), not(31))\\n    }\\n\\n    function validator_revert_t_bytes32(value) {\\n        if iszero(eq(value, cleanup_t_bytes32(value))) { revert(0, 0) }\\n    }\\n\\n}\\n\",\"id\":3,\"language\":\"Yul\",\"name\":\"#utility.yul\"}],\"sourceMap\":\"228:371:0:-:0;;;;;;;;;;;;;;;;;;;\",\"deployedSourceMap\":\"228:371:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;338:127;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;475:121;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;338:127;397:4;436:1;412:10;:13;423:1;412:13;;;;;;;;;;;:21;;:25;;;;;;;;;;;;:::i;:::-;;454:4;447:11;;338:127;;;;:::o;475:121::-;528:13;561:10;:19;572:7;561:19;;;;;;;;;;;:27;;553:36;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;475:121;;;:::o;-1:-1:-1:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:412:3:-;85:5;110:66;126:49;168:6;126:49;:::i;:::-;110:66;:::i;:::-;101:75;;199:6;192:5;185:21;237:4;230:5;226:16;275:3;266:6;261:3;257:16;254:25;251:2;;;282:79;;:::i;:::-;251:2;372:41;406:6;401:3;396;372:41;:::i;:::-;91:328;;;;;;:::o;425:139::-;471:5;509:6;496:20;487:29;;525:33;552:5;525:33;:::i;:::-;477:87;;;;:::o;584:340::-;640:5;689:3;682:4;674:6;670:17;666:27;656:2;;697:79;;:::i;:::-;656:2;814:6;801:20;839:79;914:3;906:6;899:4;891:6;887:17;839:79;:::i;:::-;830:88;;646:278;;;;;:::o;930:329::-;989:6;1038:2;1026:9;1017:7;1013:23;1009:32;1006:2;;;1044:79;;:::i;:::-;1006:2;1164:1;1189:53;1234:7;1225:6;1214:9;1210:22;1189:53;:::i;:::-;1179:63;;1135:117;996:263;;;;:::o;1265:654::-;1343:6;1351;1400:2;1388:9;1379:7;1375:23;1371:32;1368:2;;;1406:79;;:::i;:::-;1368:2;1554:1;1543:9;1539:17;1526:31;1584:18;1576:6;1573:30;1570:2;;;1606:79;;:::i;:::-;1570:2;1711:63;1766:7;1757:6;1746:9;1742:22;1711:63;:::i;:::-;1701:73;;1497:287;1823:2;1849:53;1894:7;1885:6;1874:9;1870:22;1849:53;:::i;:::-;1839:63;;1794:118;1358:561;;;;;:::o;1925:109::-;2006:21;2021:5;2006:21;:::i;:::-;2001:3;1994:34;1984:50;;:::o;2040:364::-;2128:3;2156:39;2189:5;2156:39;:::i;:::-;2211:71;2275:6;2270:3;2211:71;:::i;:::-;2204:78;;2291:52;2336:6;2331:3;2324:4;2317:5;2313:16;2291:52;:::i;:::-;2368:29;2390:6;2368:29;:::i;:::-;2363:3;2359:39;2352:46;;2132:272;;;;;:::o;2410:210::-;2497:4;2535:2;2524:9;2520:18;2512:26;;2548:65;2610:1;2599:9;2595:17;2586:6;2548:65;:::i;:::-;2502:118;;;;:::o;2626:313::-;2739:4;2777:2;2766:9;2762:18;2754:26;;2826:9;2820:4;2816:20;2812:1;2801:9;2797:17;2790:47;2854:78;2927:4;2918:6;2854:78;:::i;:::-;2846:86;;2744:195;;;;:::o;2945:129::-;2979:6;3006:20;;:::i;:::-;2996:30;;3035:33;3063:4;3055:6;3035:33;:::i;:::-;2986:88;;;:::o;3080:75::-;3113:6;3146:2;3140:9;3130:19;;3120:35;:::o;3161:308::-;3223:4;3313:18;3305:6;3302:30;3299:2;;;3335:18;;:::i;:::-;3299:2;3373:29;3395:6;3373:29;:::i;:::-;3365:37;;3457:4;3451;3447:15;3439:23;;3228:241;;;:::o;3475:99::-;3527:6;3561:5;3555:12;3545:22;;3534:40;;;:::o;3580:169::-;3664:11;3698:6;3693:3;3686:19;3738:4;3733:3;3729:14;3714:29;;3676:73;;;;:::o;3755:90::-;3789:7;3832:5;3825:13;3818:21;3807:32;;3797:48;;;:::o;3851:77::-;3888:7;3917:5;3906:16;;3896:32;;;:::o;3934:154::-;4018:6;4013:3;4008;3995:30;4080:1;4071:6;4066:3;4062:16;4055:27;3985:103;;;:::o;4094:307::-;4162:1;4172:113;4186:6;4183:1;4180:13;4172:113;;;4271:1;4266:3;4262:11;4256:18;4252:1;4247:3;4243:11;4236:39;4208:2;4205:1;4201:10;4196:15;;4172:113;;;4303:6;4300:1;4297:13;4294:2;;;4383:1;4374:6;4369:3;4365:16;4358:27;4294:2;4143:258;;;;:::o;4407:320::-;4451:6;4488:1;4482:4;4478:12;4468:22;;4535:1;4529:4;4525:12;4556:18;4546:2;;4612:4;4604:6;4600:17;4590:27;;4546:2;4674;4666:6;4663:14;4643:18;4640:38;4637:2;;;4693:18;;:::i;:::-;4637:2;4458:269;;;;:::o;4733:281::-;4816:27;4838:4;4816:27;:::i;:::-;4808:6;4804:40;4946:6;4934:10;4931:22;4910:18;4898:10;4895:34;4892:62;4889:2;;;4957:18;;:::i;:::-;4889:2;4997:10;4993:2;4986:22;4776:238;;;:::o;5020:180::-;5068:77;5065:1;5058:88;5165:4;5162:1;5155:15;5189:4;5186:1;5179:15;5206:180;5254:77;5251:1;5244:88;5351:4;5348:1;5341:15;5375:4;5372:1;5365:15;5392:117;5501:1;5498;5491:12;5515:117;5624:1;5621;5614:12;5638:117;5747:1;5744;5737:12;5761:117;5870:1;5867;5860:12;5884:102;5925:6;5976:2;5972:7;5967:2;5960:5;5956:14;5952:28;5942:38;;5932:54;;;:::o;5992:122::-;6065:24;6083:5;6065:24;:::i;:::-;6058:5;6055:35;6045:2;;6104:1;6101;6094:12;6045:2;6035:79;:::o\",\"source\":\"// SPDX-License-Identifier: GPL-3.0\\npragma solidity >=0.4.16 <0.9.0;\\n// pragma solidity ^0.4.20;\\n\\n/// @title Logs contract of BOL creation, access, dispatch, fund transfer\\n/// @author Mithun\\n/// @dev Contract under development\\n\\ncontract Logs {\\n\\n    struct log{\\n        string bolHash;\\n    }\\n    mapping(bytes32 => log) logHashMap;\\n\\n\\n\\n    function saveLog(string memory a,bytes32 b) public returns(bool){\\n        logHashMap[b].bolHash = a;\\n        return true;\\n    }\\n\\n        function getLog(bytes32 stoneid) public view returns(string memory) {\\n        return (logHashMap[stoneid].bolHash);\\n    }\\n\\n}\",\"sourcePath\":\"/home/kottackal/Desktop/Data Analytics Jisa/Analytics App-LEI/contracts/Logs.sol\",\"ast\":{\"absolutePath\":\"project:/contracts/Logs.sol\",\"exportedSymbols\":{\"Logs\":[44]},\"id\":45,\"license\":\"GPL-3.0\",\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":1,\"literals\":[\"solidity\",\">=\",\"0.4\",\".16\",\"<\",\"0.9\",\".0\"],\"nodeType\":\"PragmaDirective\",\"src\":\"36:32:0\"},{\"abstract\":false,\"baseContracts\":[],\"contractDependencies\":[],\"contractKind\":\"contract\",\"documentation\":{\"id\":2,\"nodeType\":\"StructuredDocumentation\",\"src\":\"98:129:0\",\"text\":\"@title Logs contract of BOL creation, access, dispatch, fund transfer\\n @author Mithun\\n @dev Contract under development\"},\"fullyImplemented\":true,\"id\":44,\"linearizedBaseContracts\":[44],\"name\":\"Logs\",\"nameLocation\":\"237:4:0\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"canonicalName\":\"Logs.log\",\"id\":5,\"members\":[{\"constant\":false,\"id\":4,\"mutability\":\"mutable\",\"name\":\"bolHash\",\"nameLocation\":\"276:7:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":5,\"src\":\"269:14:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":3,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"269:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"name\":\"log\",\"nameLocation\":\"256:3:0\",\"nodeType\":\"StructDefinition\",\"scope\":44,\"src\":\"249:41:0\",\"visibility\":\"public\"},{\"constant\":false,\"id\":10,\"mutability\":\"mutable\",\"name\":\"logHashMap\",\"nameLocation\":\"319:10:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":44,\"src\":\"295:34:0\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_bytes32_$_t_struct$_log_$5_storage_$\",\"typeString\":\"mapping(bytes32 => struct Logs.log)\"},\"typeName\":{\"id\":9,\"keyType\":{\"id\":6,\"name\":\"bytes32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"303:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bytes32\",\"typeString\":\"bytes32\"}},\"nodeType\":\"Mapping\",\"src\":\"295:23:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_bytes32_$_t_struct$_log_$5_storage_$\",\"typeString\":\"mapping(bytes32 => struct Logs.log)\"},\"valueType\":{\"id\":8,\"nodeType\":\"UserDefinedTypeName\",\"pathNode\":{\"id\":7,\"name\":\"log\",\"nodeType\":\"IdentifierPath\",\"referencedDeclaration\":5,\"src\":\"314:3:0\"},\"referencedDeclaration\":5,\"src\":\"314:3:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_log_$5_storage_ptr\",\"typeString\":\"struct Logs.log\"}}},\"visibility\":\"internal\"},{\"body\":{\"id\":28,\"nodeType\":\"Block\",\"src\":\"402:63:0\",\"statements\":[{\"expression\":{\"id\":24,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"baseExpression\":{\"id\":19,\"name\":\"logHashMap\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":10,\"src\":\"412:10:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_bytes32_$_t_struct$_log_$5_storage_$\",\"typeString\":\"mapping(bytes32 => struct Logs.log storage ref)\"}},\"id\":21,\"indexExpression\":{\"id\":20,\"name\":\"b\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":14,\"src\":\"423:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bytes32\",\"typeString\":\"bytes32\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"412:13:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_log_$5_storage\",\"typeString\":\"struct Logs.log storage ref\"}},\"id\":22,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"bolHash\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":4,\"src\":\"412:21:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":23,\"name\":\"a\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":12,\"src\":\"436:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"412:25:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":25,\"nodeType\":\"ExpressionStatement\",\"src\":\"412:25:0\"},{\"expression\":{\"hexValue\":\"74727565\",\"id\":26,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"454:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"functionReturnParameters\":18,\"id\":27,\"nodeType\":\"Return\",\"src\":\"447:11:0\"}]},\"functionSelector\":\"5cac75b4\",\"id\":29,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"saveLog\",\"nameLocation\":\"347:7:0\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":15,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":12,\"mutability\":\"mutable\",\"name\":\"a\",\"nameLocation\":\"369:1:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":29,\"src\":\"355:15:0\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":11,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"355:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":14,\"mutability\":\"mutable\",\"name\":\"b\",\"nameLocation\":\"379:1:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":29,\"src\":\"371:9:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bytes32\",\"typeString\":\"bytes32\"},\"typeName\":{\"id\":13,\"name\":\"bytes32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"371:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bytes32\",\"typeString\":\"bytes32\"}},\"visibility\":\"internal\"}],\"src\":\"354:27:0\"},\"returnParameters\":{\"id\":18,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":17,\"mutability\":\"mutable\",\"name\":\"\",\"nameLocation\":\"-1:-1:-1\",\"nodeType\":\"VariableDeclaration\",\"scope\":29,\"src\":\"397:4:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":16,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"397:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"src\":\"396:6:0\"},\"scope\":44,\"src\":\"338:127:0\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":42,\"nodeType\":\"Block\",\"src\":\"543:53:0\",\"statements\":[{\"expression\":{\"components\":[{\"expression\":{\"baseExpression\":{\"id\":36,\"name\":\"logHashMap\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":10,\"src\":\"561:10:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_bytes32_$_t_struct$_log_$5_storage_$\",\"typeString\":\"mapping(bytes32 => struct Logs.log storage ref)\"}},\"id\":38,\"indexExpression\":{\"id\":37,\"name\":\"stoneid\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":31,\"src\":\"572:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bytes32\",\"typeString\":\"bytes32\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"561:19:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_log_$5_storage\",\"typeString\":\"struct Logs.log storage ref\"}},\"id\":39,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"bolHash\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":4,\"src\":\"561:27:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}}],\"id\":40,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"560:29:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"functionReturnParameters\":35,\"id\":41,\"nodeType\":\"Return\",\"src\":\"553:36:0\"}]},\"functionSelector\":\"7010416e\",\"id\":43,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"getLog\",\"nameLocation\":\"484:6:0\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":32,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":31,\"mutability\":\"mutable\",\"name\":\"stoneid\",\"nameLocation\":\"499:7:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":43,\"src\":\"491:15:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bytes32\",\"typeString\":\"bytes32\"},\"typeName\":{\"id\":30,\"name\":\"bytes32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"491:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bytes32\",\"typeString\":\"bytes32\"}},\"visibility\":\"internal\"}],\"src\":\"490:17:0\"},\"returnParameters\":{\"id\":35,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":34,\"mutability\":\"mutable\",\"name\":\"\",\"nameLocation\":\"-1:-1:-1\",\"nodeType\":\"VariableDeclaration\",\"scope\":43,\"src\":\"528:13:0\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":33,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"528:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"src\":\"527:15:0\"},\"scope\":44,\"src\":\"475:121:0\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"}],\"scope\":45,\"src\":\"228:371:0\",\"usedErrors\":[]}],\"src\":\"36:563:0\"},\"legacyAST\":{\"absolutePath\":\"project:/contracts/Logs.sol\",\"exportedSymbols\":{\"Logs\":[44]},\"id\":45,\"license\":\"GPL-3.0\",\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":1,\"literals\":[\"solidity\",\">=\",\"0.4\",\".16\",\"<\",\"0.9\",\".0\"],\"nodeType\":\"PragmaDirective\",\"src\":\"36:32:0\"},{\"abstract\":false,\"baseContracts\":[],\"contractDependencies\":[],\"contractKind\":\"contract\",\"documentation\":{\"id\":2,\"nodeType\":\"StructuredDocumentation\",\"src\":\"98:129:0\",\"text\":\"@title Logs contract of BOL creation, access, dispatch, fund transfer\\n @author Mithun\\n @dev Contract under development\"},\"fullyImplemented\":true,\"id\":44,\"linearizedBaseContracts\":[44],\"name\":\"Logs\",\"nameLocation\":\"237:4:0\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"canonicalName\":\"Logs.log\",\"id\":5,\"members\":[{\"constant\":false,\"id\":4,\"mutability\":\"mutable\",\"name\":\"bolHash\",\"nameLocation\":\"276:7:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":5,\"src\":\"269:14:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":3,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"269:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"name\":\"log\",\"nameLocation\":\"256:3:0\",\"nodeType\":\"StructDefinition\",\"scope\":44,\"src\":\"249:41:0\",\"visibility\":\"public\"},{\"constant\":false,\"id\":10,\"mutability\":\"mutable\",\"name\":\"logHashMap\",\"nameLocation\":\"319:10:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":44,\"src\":\"295:34:0\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_bytes32_$_t_struct$_log_$5_storage_$\",\"typeString\":\"mapping(bytes32 => struct Logs.log)\"},\"typeName\":{\"id\":9,\"keyType\":{\"id\":6,\"name\":\"bytes32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"303:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bytes32\",\"typeString\":\"bytes32\"}},\"nodeType\":\"Mapping\",\"src\":\"295:23:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_bytes32_$_t_struct$_log_$5_storage_$\",\"typeString\":\"mapping(bytes32 => struct Logs.log)\"},\"valueType\":{\"id\":8,\"nodeType\":\"UserDefinedTypeName\",\"pathNode\":{\"id\":7,\"name\":\"log\",\"nodeType\":\"IdentifierPath\",\"referencedDeclaration\":5,\"src\":\"314:3:0\"},\"referencedDeclaration\":5,\"src\":\"314:3:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_log_$5_storage_ptr\",\"typeString\":\"struct Logs.log\"}}},\"visibility\":\"internal\"},{\"body\":{\"id\":28,\"nodeType\":\"Block\",\"src\":\"402:63:0\",\"statements\":[{\"expression\":{\"id\":24,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"leftHandSide\":{\"expression\":{\"baseExpression\":{\"id\":19,\"name\":\"logHashMap\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":10,\"src\":\"412:10:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_bytes32_$_t_struct$_log_$5_storage_$\",\"typeString\":\"mapping(bytes32 => struct Logs.log storage ref)\"}},\"id\":21,\"indexExpression\":{\"id\":20,\"name\":\"b\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":14,\"src\":\"423:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bytes32\",\"typeString\":\"bytes32\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"412:13:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_log_$5_storage\",\"typeString\":\"struct Logs.log storage ref\"}},\"id\":22,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":true,\"memberName\":\"bolHash\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":4,\"src\":\"412:21:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"nodeType\":\"Assignment\",\"operator\":\"=\",\"rightHandSide\":{\"id\":23,\"name\":\"a\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":12,\"src\":\"436:1:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string memory\"}},\"src\":\"412:25:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"id\":25,\"nodeType\":\"ExpressionStatement\",\"src\":\"412:25:0\"},{\"expression\":{\"hexValue\":\"74727565\",\"id\":26,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"kind\":\"bool\",\"lValueRequested\":false,\"nodeType\":\"Literal\",\"src\":\"454:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"value\":\"true\"},\"functionReturnParameters\":18,\"id\":27,\"nodeType\":\"Return\",\"src\":\"447:11:0\"}]},\"functionSelector\":\"5cac75b4\",\"id\":29,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"saveLog\",\"nameLocation\":\"347:7:0\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":15,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":12,\"mutability\":\"mutable\",\"name\":\"a\",\"nameLocation\":\"369:1:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":29,\"src\":\"355:15:0\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":11,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"355:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"},{\"constant\":false,\"id\":14,\"mutability\":\"mutable\",\"name\":\"b\",\"nameLocation\":\"379:1:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":29,\"src\":\"371:9:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bytes32\",\"typeString\":\"bytes32\"},\"typeName\":{\"id\":13,\"name\":\"bytes32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"371:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bytes32\",\"typeString\":\"bytes32\"}},\"visibility\":\"internal\"}],\"src\":\"354:27:0\"},\"returnParameters\":{\"id\":18,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":17,\"mutability\":\"mutable\",\"name\":\"\",\"nameLocation\":\"-1:-1:-1\",\"nodeType\":\"VariableDeclaration\",\"scope\":29,\"src\":\"397:4:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":16,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"397:4:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"visibility\":\"internal\"}],\"src\":\"396:6:0\"},\"scope\":44,\"src\":\"338:127:0\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"public\"},{\"body\":{\"id\":42,\"nodeType\":\"Block\",\"src\":\"543:53:0\",\"statements\":[{\"expression\":{\"components\":[{\"expression\":{\"baseExpression\":{\"id\":36,\"name\":\"logHashMap\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":10,\"src\":\"561:10:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_mapping$_t_bytes32_$_t_struct$_log_$5_storage_$\",\"typeString\":\"mapping(bytes32 => struct Logs.log storage ref)\"}},\"id\":38,\"indexExpression\":{\"id\":37,\"name\":\"stoneid\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":31,\"src\":\"572:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bytes32\",\"typeString\":\"bytes32\"}},\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"IndexAccess\",\"src\":\"561:19:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_struct$_log_$5_storage\",\"typeString\":\"struct Logs.log storage ref\"}},\"id\":39,\"isConstant\":false,\"isLValue\":true,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"bolHash\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":4,\"src\":\"561:27:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}}],\"id\":40,\"isConstant\":false,\"isInlineArray\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"TupleExpression\",\"src\":\"560:29:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage\",\"typeString\":\"string storage ref\"}},\"functionReturnParameters\":35,\"id\":41,\"nodeType\":\"Return\",\"src\":\"553:36:0\"}]},\"functionSelector\":\"7010416e\",\"id\":43,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"getLog\",\"nameLocation\":\"484:6:0\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":32,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":31,\"mutability\":\"mutable\",\"name\":\"stoneid\",\"nameLocation\":\"499:7:0\",\"nodeType\":\"VariableDeclaration\",\"scope\":43,\"src\":\"491:15:0\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bytes32\",\"typeString\":\"bytes32\"},\"typeName\":{\"id\":30,\"name\":\"bytes32\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"491:7:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bytes32\",\"typeString\":\"bytes32\"}},\"visibility\":\"internal\"}],\"src\":\"490:17:0\"},\"returnParameters\":{\"id\":35,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":34,\"mutability\":\"mutable\",\"name\":\"\",\"nameLocation\":\"-1:-1:-1\",\"nodeType\":\"VariableDeclaration\",\"scope\":43,\"src\":\"528:13:0\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_memory_ptr\",\"typeString\":\"string\"},\"typeName\":{\"id\":33,\"name\":\"string\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"528:6:0\",\"typeDescriptions\":{\"typeIdentifier\":\"t_string_storage_ptr\",\"typeString\":\"string\"}},\"visibility\":\"internal\"}],\"src\":\"527:15:0\"},\"scope\":44,\"src\":\"475:121:0\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"public\"}],\"scope\":45,\"src\":\"228:371:0\",\"usedErrors\":[]}],\"src\":\"36:563:0\"},\"compiler\":{\"name\":\"solc\",\"version\":\"0.8.6+commit.11564f7e.Emscripten.clang\"},\"networks\":{\"11155111\":{\"events\":{},\"links\":{},\"address\":\"0x135b5F9A248cFC7243712810387C298C070f8519\",\"transactionHash\":\"0x68d7a8767896c1528c9af732abc3878b9afe3241a523e600924b8739c8fa38c0\"}},\"schemaVersion\":\"3.4.3\",\"updatedAt\":\"2023-08-01T13:53:07.113Z\",\"networkType\":\"ethereum\",\"devdoc\":{\"author\":\"Mithun\",\"details\":\"Contract under development\",\"kind\":\"dev\",\"methods\":{},\"title\":\"Logs contract of BOL creation, access, dispatch, fund transfer\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}}");

/***/ }),

/***/ "dt0F":
/*!*******************************************************!*\
  !*** ./src/app/bank/lei-issue/lei-issue.component.ts ***!
  \*******************************************************/
/*! exports provided: LeiIssueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeiIssueComponent", function() { return LeiIssueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _loginfo_loginfo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loginfo/loginfo.component */ "uKQR");
/* harmony import */ var src_app_service_web3_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/web3.service */ "+Ptt");
/* harmony import */ var src_app_service_backend_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/backend.service */ "/VBx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/loader/loader.service */ "t0Il");
/* harmony import */ var src_app_service_ipfs_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/service/ipfs.service */ "4/d+");
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/service/api.service */ "PLN7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../loader/loader.component */ "kQyY");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



























function LeiIssueComponent_h4_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h4", 47);
} }
function LeiIssueComponent_h4_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LeiIssueComponent_h4_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Transaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LeiIssueComponent_h4_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Analytics");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LeiIssueComponent_h4_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LeiIssueComponent_th_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LeiIssueComponent_td_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r28.status, " ");
} }
function LeiIssueComponent_th_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " LEI ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LeiIssueComponent_td_58_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LeiIssueComponent_td_58_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r29.lei, "");
} }
function LeiIssueComponent_td_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LeiIssueComponent_td_58_label_1_Template, 2, 0, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LeiIssueComponent_td_58_ng_template_2_Template, 2, 1, "ng-template", null, 51, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r29 = ctx.$implicit;
    var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r29.lei === "NA")("ngIfElse", _r31);
} }
function LeiIssueComponent_th_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LeiIssueComponent_td_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r34.email, " ");
} }
function LeiIssueComponent_th_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LeiIssueComponent_td_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r35.name, " ");
} }
function LeiIssueComponent_th_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LeiIssueComponent_td_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r36.legalAddress, " ");
} }
function LeiIssueComponent_th_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " City ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LeiIssueComponent_td_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r37.city);
} }
function LeiIssueComponent_th_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Postal Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LeiIssueComponent_td_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r38.postalCode, " ");
} }
function LeiIssueComponent_th_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " KYC Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LeiIssueComponent_td_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, row_r39.kycreg, "dd/MM/yyyy"), " ");
} }
function LeiIssueComponent_th_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " View Logs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LeiIssueComponent_ng_container_80_Template(rf, ctx) { if (rf & 1) {
    var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeiIssueComponent_ng_container_80_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); var row_r40 = ctx.$implicit; var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.viewLogs(row_r40.lei); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "launch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function LeiIssueComponent_tr_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 54);
} }
function LeiIssueComponent_tr_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 55);
} }
var _c0 = function () { return [5, 10, 20, 50, 100]; };
var LeiIssueComponent = /** @class */ (function () {
    function LeiIssueComponent(web3, backend, router, loaderService, ipfs, apiService, cd, location, route, dialog) {
        var _this = this;
        this.web3 = web3;
        this.backend = backend;
        this.router = router;
        this.loaderService = loaderService;
        this.ipfs = ipfs;
        this.apiService = apiService;
        this.cd = cd;
        this.location = location;
        this.route = route;
        this.dialog = dialog;
        this.showFiller = false;
        this.isExpanded = false;
        this.totalProduct = [];
        this.bols = false;
        this.displayedColumns = ['lei', 'status', 'name', 'legaladdress', 'city', 'postalCode', 'mail', 'kdt', 'logs'];
        console.warn("calling order constra");
        this.web3.checkAndInstantiateWeb3()
            .then(function (checkConn) {
            console.log(checkConn);
            if (checkConn === 'connected') {
                _this.web3.loadBlockChainData()
                    .then(function (accountData) {
                    console.log(accountData[0]);
                    _this.accountNumber = accountData[0];
                    _this.web3.getAllContract()
                        .then(function (contractRes) {
                        if (contractRes) {
                            console.log(contractRes);
                            _this.registration = contractRes[0];
                            _this.registration.methods.getUserHashType(_this.accountNumber)
                                .call()
                                .then(function (user) {
                                console.log('user');
                                console.log(user);
                                if (!user[0]) {
                                }
                                else {
                                    console.log('user');
                                    console.log(user);
                                    _this.ipfs.getHashFromIPFS(user[0]).then(function (data) {
                                        _this.ipfsConverted2 = JSON.parse(Buffer.from(data.value.buffer).toString());
                                        console.log(_this.ipfsConverted2);
                                        _this.userinfo = user[0];
                                        _this.loaderService.showLoader('bankLoader');
                                        console.log('this.userinfo');
                                        console.log(_this.ipfsConverted2);
                                        var userWallet = _this.ipfsConverted2.wallet;
                                        _this.apiService.getDBAPI(userWallet).subscribe(function (result) {
                                            console.log('lei');
                                            console.log(result);
                                            // this.totalProduct.push(result.leiIssue);
                                            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](result);
                                            _this.dataSource.sort = _this.sort;
                                            _this.dataSource.paginator = _this.paginator;
                                            _this.cd.detectChanges();
                                            _this.loaderService.hideLoader('bankLoader');
                                        });
                                    });
                                }
                            });
                        }
                    });
                }, function (err) {
                    console.log('account error', err);
                });
            }
        }, function (err) {
            alert(err);
        });
    }
    LeiIssueComponent.prototype.ngOnInit = function () {
        //     status: "LEI NOT FOUND"
        // lei: "987845645231184dfef"
        // email: "maer@gmail.com"
        // wallet: "0xasdre56tghythg"
        // kycreg: "2021-12-14"
        // checkDate: "2022-01-07"
        // mongoID: "61ae3c475ff71e6cdaf6ec75"
        // this.loaderService.hideLoader('bankLoader');
        // this.route.params.subscribe(params => {
        //   console.log(params);
        //   console.log(params['id']);
        //   if (params['id']) {
        //      // getHashFromIPFS
        //       this.ipfs.getHashFromIPFS(params['id']).then((data:any)=>{
        //         this.ipfsConverted = JSON.parse(Buffer.from(data.value.buffer).toString());
        //       console.log(this.ipfsConverted );
        //       this.bankName =this.ipfsConverted.bankName;
        //       this.bankMail = this.ipfsConverted.email;
        //       this.userName =this.ipfsConverted.firstName+" "+this.ipfsConverted.lastName;
        //       this.loaderService.hideLoader('bankLoader');
        //       this.loaderService.showLoader('bankLoader');
        //       this.backend.getBankBids().then((result: any) => {
        //         // console.log(result[0]);
        //         this.web3.loadBlockChainData().then((accountData: any) => {
        //             this.accountNumber = accountData[0];
        //             if(result.length>0){
        //               this.web3.getAllContract()
        //               .then((contractRes: any) => {
        //                 this.orders = contractRes[2];
        //                 // this.totalProduct.push(this.ipfsConverted2);
        //                 console.log(result);
        //                 this.dataSource = new MatTableDataSource(result);
        //                                       this.dataSource.sort = this.sort;
        //                                       this.dataSource.paginator = this.paginator;
        //                                       this.cd.detectChanges();
        //                                       this.loaderService.hideLoader('bankLoader');
        //               });
        //             }else{
        //               this.loaderService.hideLoader('bankLoader');
        //   alert("No orders in marketplace")
        //             }
        //       }).catch((err) => {
        //       });
        //       }).catch((err)=>{
        //         alert("No orders yet in market place");
        //       // this.location.back()
        //       });
        //       })
        //   }
        // });
    };
    LeiIssueComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    LeiIssueComponent.prototype.viewIssuing = function () {
        console.log('in view url');
        this.router.navigate(['issuing_transaction']);
    };
    LeiIssueComponent.prototype.viewAdvisory = function () {
        this.router.navigate(['advisory_transaction']);
    };
    LeiIssueComponent.prototype.viewBidsTable = function () {
        this.router.navigate(['bids_table']);
    };
    LeiIssueComponent.prototype.getDBAPI = function () {
        this.router.navigate(['analytics']);
        // this.backend.getDBAPI().subscribe((result) => {
        //   console.log(result);
        // });
    };
    LeiIssueComponent.prototype.redirectDashboard = function () {
        // this.route.navigateByUrl('seller_dashboard/'+this.userinfo);
        this.router.navigate(['bank_dashboard', { id: this.userinfo }]);
    };
    LeiIssueComponent.prototype.viewLogs = function (leiNo) {
        var LEI = leiNo;
        console.log('Modal opening');
        console.log('LEI No.', LEI);
        var dialogRef = this.dialog.open(_loginfo_loginfo_component__WEBPACK_IMPORTED_MODULE_4__["LoginfoComponent"], {
            width: '60vw',
            maxWidth: '100vw',
            data: {
                dataKey: LEI
            }
        });
    };
    LeiIssueComponent.ɵfac = function LeiIssueComponent_Factory(t) { return new (t || LeiIssueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_web3_service__WEBPACK_IMPORTED_MODULE_5__["Web3Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_backend_service__WEBPACK_IMPORTED_MODULE_6__["BackendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_ipfs_service__WEBPACK_IMPORTED_MODULE_9__["IpfsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"])); };
    LeiIssueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeiIssueComponent, selectors: [["app-lei-issue"]], viewQuery: function LeiIssueComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        } }, decls: 85, vars: 12, consts: [[1, "loaders"], [1, "bankLoader"], [3, "id"], [1, "example-container"], ["disableClose", "true", "opened", "true", "mode", "side", 1, "example-sidenav"], ["sidenav", ""], ["mat-list-icon", "", "matTooltip", "Expand", 1, "navicon", 3, "click"], ["mat-line", "", 4, "ngIf"], ["mat-list-icon", "", "matTooltip", "Dashboard", 1, "navicon", 3, "click"], ["matTooltip", "Transaction", "mat-list-icon", "", 1, "navicon", 3, "click"], ["mat-list-icon", "", "matTooltip", "Analytics", 1, "navicon", "active", 3, "click"], ["mat-list-icon", "", "matTooltip", "Report", "routerLink", "/bank/report", 1, "navicon"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [2, "color", "#007bff", "background-color", "transparent", "cursor", "pointer", 3, "click"], ["aria-current", "page", 1, "breadcrumb-item"], [1, "example-sidenav-content"], [1, "example-card"], [1, "main-content"], [1, "container-fluid"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12"], [2, "padding", "10px 10px 10px 10px"], [1, "mat-elevation-z8"], ["appearance", "standard", 2, "padding", "10px"], ["matInput", "", "placeholder", "", 3, "keyup"], ["input", ""], [2, "overflow-x", "auto"], ["mat-table", "", "matSort", "", 1, "table", "table-responsive-sm", "table-responsive-md", 3, "dataSource"], ["matColumnDef", "status"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "lei"], ["matColumnDef", "mail"], ["matColumnDef", "name"], ["matColumnDef", "legaladdress"], ["matColumnDef", "city"], ["matColumnDef", "postalCode"], ["matColumnDef", "kdt"], ["matColumnDef", "logs"], ["mat-header-cell", "", "style", "padding-right: 20px", 4, "matHeaderCellDef"], [4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "style", "padding: 15px;", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page of users", 3, "pageSize", "pageSizeOptions"], ["paginator", ""], ["mat-line", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["mat-header-cell", "", 2, "padding-right", "20px"], ["mat-icon-button", "", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 2, "padding", "15px"]], template: function LeiIssueComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-loader", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav", 4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-nav-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeiIssueComponent_Template_mat_icon_click_8_listener() { return ctx.isExpanded = !ctx.isExpanded; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "menu");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LeiIssueComponent_h4_10_Template, 1, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeiIssueComponent_Template_mat_icon_click_12_listener() { return ctx.redirectDashboard(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "dashboard");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LeiIssueComponent_h4_14_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeiIssueComponent_Template_mat_icon_click_16_listener() { return ctx.redirectDashboard(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "swap_horiz");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LeiIssueComponent_h4_18_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeiIssueComponent_Template_mat_icon_click_20_listener() { return ctx.getDBAPI(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "analytics");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, LeiIssueComponent_h4_22_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "summarize");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, LeiIssueComponent_h4_26_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nav", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ol", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeiIssueComponent_Template_a_click_30_listener() { return ctx.redirectDashboard(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Home");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeiIssueComponent_Template_a_click_33_listener() { return ctx.getDBAPI(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Analytics");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "KYC");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "TradeTrip Scan: KYC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-form-field", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Search");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 26, 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function LeiIssueComponent_Template_input_keyup_49_listener($event) { return ctx.applyFilter($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "table", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](53, 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, LeiIssueComponent_th_54_Template, 2, 0, "th", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, LeiIssueComponent_td_55_Template, 2, 1, "td", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](56, 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, LeiIssueComponent_th_57_Template, 2, 0, "th", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, LeiIssueComponent_td_58_Template, 4, 2, "td", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](59, 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, LeiIssueComponent_th_60_Template, 2, 0, "th", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, ": ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, LeiIssueComponent_td_62_Template, 2, 1, "td", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](63, 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, LeiIssueComponent_th_64_Template, 2, 0, "th", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, LeiIssueComponent_td_65_Template, 2, 1, "td", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](66, 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, LeiIssueComponent_th_67_Template, 2, 0, "th", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, LeiIssueComponent_td_68_Template, 2, 1, "td", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](69, 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, LeiIssueComponent_th_70_Template, 2, 0, "th", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, LeiIssueComponent_td_71_Template, 2, 1, "td", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](72, 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, LeiIssueComponent_th_73_Template, 2, 0, "th", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, LeiIssueComponent_td_74_Template, 2, 1, "td", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](75, 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, LeiIssueComponent_th_76_Template, 2, 0, "th", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, LeiIssueComponent_td_77_Template, 3, 4, "td", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](78, 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, LeiIssueComponent_th_79_Template, 2, 0, "th", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, LeiIssueComponent_ng_container_80_Template, 6, 0, "ng-container", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, LeiIssueComponent_tr_81_Template, 1, 0, "tr", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, LeiIssueComponent_tr_82_Template, 1, 0, "tr", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "mat-paginator", 45, 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "bankLoader");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", 5)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
        } }, directives: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_13__["LoaderComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListIconCssMatStyler"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatLine"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]], styles: ["mat-sidenav[_ngcontent-%COMP%]{\n    \n  background:goldenrod;\n  \n  }\n  mat-card[_ngcontent-%COMP%]{\n      margin-bottom: 30px;\n  }\n  .navicon[_ngcontent-%COMP%]{\n  color: white;\n  }\n  .example-container[_ngcontent-%COMP%] {\n    display: block;\n    overflow: auto;\n    min-height: 100vh;\n    height: auto;\n    margin: 0;\n  \n  \n  \n  }\n  .example-card[_ngcontent-%COMP%]{\n    display: block;\n    overflow: auto;\n    min-height: 100vh;\n    height: auto;\n    margin: 0;\n    \n  }\n  .example-sidenav-content[_ngcontent-%COMP%] {\n    overflow: auto;\n    width: 100%;\n    height: 100%;\n  \n  }\n  .example-sidenav[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .demo-panel[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 90%;\n    margin: 10px 0px;\n  }\n  .vl[_ngcontent-%COMP%] {\n    border-left: 1px solid gray;\n    height: 500px;\n  }\n  table[_ngcontent-%COMP%] {\n    width: 100%;\n    table-layout:fixed\n  }\n  .mat-form-field[_ngcontent-%COMP%] {\n    font-size: 14px;\n    width: 100%;\n  }\n  button[_ngcontent-%COMP%]{\n    \n    font: 15px;\n\n  }\n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  th[_ngcontent-%COMP%]{\n    \n    background:goldenrod;\n  font-weight: bold;\n  font-size: large;\n  color: white;\n  }\n  .profileimg[_ngcontent-%COMP%] {\n    border-radius: 50%;\n  }\n  .chartdiv[_ngcontent-%COMP%]{\n    width:100%;\n    height:250px;\n  }\n  .card[_ngcontent-%COMP%]{\n    background-color: whitesmoke;\n  }\n  .subnote[_ngcontent-%COMP%]{\n    font-size: 10px;\n    color: gray;\n  }\n  .sideicon[_ngcontent-%COMP%]{\n    padding: 10px;\n    margin: 10px;\n    border:\"1px solid\";\n    border-radius: 10%;\n    background-color: grey;\n  }\n  .active[_ngcontent-%COMP%]{\n    background-color: cornflowerblue;\n    border-radius: 50%;\n  }\n  .center[_ngcontent-%COMP%]{\n      justify-content: center;\n  }\n  .cardicon1[_ngcontent-%COMP%]{\n     font-size: 100px;\n     color:green;\n  }\n  .cardicon2[_ngcontent-%COMP%]{\n    font-size: 100px;\n    color:yellowgreen;\n  }\n  \n  .wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: calc(100vh - 20px);\n    \n  }\n  .inner[_ngcontent-%COMP%] {\n    \n    color: black;\n    padding: 12px;\n  }\n  td[_ngcontent-%COMP%]{\n    text-align: start;\n    vertical-align: middle;\n    padding: 5px;\n    }\n  table[_ngcontent-%COMP%]{\n      width: 100%;\n     \n     \n     }\n  .table-responsive[_ngcontent-%COMP%] {\n  display: table;\n}\n  @media only screen and (min-width: 992px){\n  .mat-column-lei[_ngcontent-%COMP%] {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 56% !important;\n    width: 14% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  .mat-column-status[_ngcontent-%COMP%] {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 56% !important;\n    width: 14% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n\n   .mat-column-kdt[_ngcontent-%COMP%] {\n     word-wrap: break-word !important;\n     white-space: unset !important;\n     flex: 0 0 56% !important;\n     width: 12% !important;\n     overflow-wrap: break-word;\n     word-wrap: break-word;\n   \n     word-break: break-word;\n   \n     -ms-hyphens: auto;\n     -webkit-hyphens: auto;\n     hyphens: auto;\n   }\n\n \n\n  .mat-column-name[_ngcontent-%COMP%] {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 56% !important;\n    width: 10% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  .mat-column-address[_ngcontent-%COMP%] {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 56% !important;\n    width: 15% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n\n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  .mat-column-mail[_ngcontent-%COMP%] {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 56% !important;\n    width: 12% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  .mat-column-act[_ngcontent-%COMP%] {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 56% !important;\n    width:6% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n\n }\n  \n  @media only screen and (min-width: 768px) {\n  .mat-column[_ngcontent-%COMP%]{\n    width:auto  !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFuay9sZWktaXNzdWUvbGVpLWlzc3VlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZ0NBQWdDO0VBQ2xDLG9CQUFvQjs7RUFFcEI7RUFDQTtNQUNJLG1CQUFtQjtFQUN2QjtFQUNBO0VBQ0EsWUFBWTtFQUNaO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osU0FBUzs7OztFQUlYO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osU0FBUztJQUNULGlDQUFpQztFQUNuQztFQUNBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZOztFQUVkO0VBRUE7SUFDRSxhQUFhO0VBQ2Y7RUFFQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsYUFBYTtFQUNmO0VBQ0E7SUFDRSxXQUFXO0lBQ1g7RUFDRjtFQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7RUFDYjtFQUNBO0lBQ0Usa0NBQWtDO0lBQ2xDLFVBQVU7O0VBRVo7RUFFQSxhQUFhO0VBQ1gsZ0JBQWdCO0VBQ2hCLEtBQUs7RUFDTCx3QkFBd0I7RUFFdkI7OzsyQkFHc0I7RUFDdEIsMEJBQTBCO0VBQzFCOzs7OytCQUkwQjtFQUUxQixrQ0FBa0M7RUFDbEMsc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUNoQyxNQUFNO0VBQ047SUFDRSxpQ0FBaUM7SUFDakMsb0JBQW9CO0VBQ3RCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0VBQ2Q7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7RUFDYjtFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtFQUNwQjtFQUNBO01BQ0ksdUJBQXVCO0VBQzNCO0VBQ0E7S0FDRyxnQkFBZ0I7S0FDaEIsV0FBVztFQUNkO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CO0VBQ0EsV0FBVztFQUNYO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixhQUFhO0VBQ2Y7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaO0VBQ0Y7TUFDSSxXQUFXOzs7S0FHWjtFQUdMO0VBQ0UsY0FBYztBQUNoQjtFQUNBO0VBQ0U7SUFDRSxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLHFCQUFxQjs7SUFFckIsc0JBQXNCOztJQUV0QixpQkFBaUI7SUFFakIscUJBQXFCO0lBQ3JCLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixxQkFBcUI7O0lBRXJCLHNCQUFzQjs7SUFFdEIsaUJBQWlCO0lBRWpCLHFCQUFxQjtJQUNyQixhQUFhO0VBQ2Y7O0dBRUM7S0FDRSxnQ0FBZ0M7S0FDaEMsNkJBQTZCO0tBQzdCLHdCQUF3QjtLQUN4QixxQkFBcUI7S0FDckIseUJBQXlCO0tBQ3pCLHFCQUFxQjs7S0FFckIsc0JBQXNCOztLQUV0QixpQkFBaUI7S0FFakIscUJBQXFCO0tBQ3JCLGFBQWE7R0FDZjs7OztFQUlEO0lBQ0UsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixxQkFBcUI7O0lBRXJCLHNCQUFzQjs7SUFFdEIsaUJBQWlCO0lBRWpCLHFCQUFxQjtJQUNyQixhQUFhO0VBQ2Y7RUFDQTtJQUNFLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIscUJBQXFCOztJQUVyQixzQkFBc0I7O0lBRXRCLGlCQUFpQjtJQUVqQixxQkFBcUI7SUFDckIsYUFBYTtFQUNmO0VBQ0E7SUFDRSxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLHFCQUFxQjs7SUFFckIsc0JBQXNCOztJQUV0QixpQkFBaUI7SUFFakIscUJBQXFCO0lBQ3JCLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixxQkFBcUI7O0lBRXJCLHNCQUFzQjs7SUFFdEIsaUJBQWlCO0lBRWpCLHFCQUFxQjtJQUNyQixhQUFhO0VBQ2Y7O0NBRUQ7RUFFRCxxREFBcUQ7RUFDckQ7RUFDRTtJQUNFLHNCQUFzQjtFQUN4QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYmFuay9sZWktaXNzdWUvbGVpLWlzc3VlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbm1hdC1zaWRlbmF2e1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ZG9kZ2VyYmx1ZSAqL1xuICBiYWNrZ3JvdW5kOmdvbGRlbnJvZDtcbiAgXG4gIH1cbiAgbWF0LWNhcmR7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG4gIC5uYXZpY29ue1xuICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiAwO1xuICBcbiAgXG4gIFxuICB9XG4gIC5leGFtcGxlLWNhcmR7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogMDtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7ICovXG4gIH1cbiAgLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIFxuICB9XG4gIFxuICAuZXhhbXBsZS1zaWRlbmF2IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIFxuICAuZGVtby1wYW5lbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgfVxuICAudmwge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICB9XG4gIHRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0YWJsZS1sYXlvdXQ6Zml4ZWRcbiAgfVxuICBcbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgYnV0dG9ue1xuICAgIC8qIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7ICovXG4gICAgZm9udDogMTVweDtcblxuICB9XG4gIFxuICAvKiB0ZCwgdGggeyAqL1xuICAgIC8qIHdpZHRoOiAyNSU7ICovXG4gICAgLyogICovXG4gICAgLyogcGFkZGluZy1sZWZ0OiAyMHB4OyAqL1xuICAgIFxuICAgICAvKiBtYXgtd2lkdGg6IDA7XG4gICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyAqL1xuICAgICAvKiB3b3JkLXdyYXA6YnJlYWstd29yZDsgKi9cbiAgICAgLyogd2hpdGUtc3BhY2U6IC1vLXByZS13cmFwOyBcbiAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7IFxuICAgICB3aGl0ZS1zcGFjZTogLW1vei1wcmUtd3JhcDsgXG4gICAgIHdoaXRlLXNwYWNlOiAtcHJlLXdyYXA7ICAqL1xuXG4gICAgIC8qIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7ICovXG4gICAgIC8qIG92ZXJmbG93LXg6IGF1dG87ICovXG4gICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xuICAvKiB9ICovXG4gIHRoe1xuICAgIC8qIGJhY2tncm91bmQ6IG1lZGl1bXNsYXRlYmx1ZTsgKi9cbiAgICBiYWNrZ3JvdW5kOmdvbGRlbnJvZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAucHJvZmlsZWltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4gIFxuICAuY2hhcnRkaXZ7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MjUwcHg7XG4gIH1cbiAgLmNhcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgfVxuICAuc3Vibm90ZXtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6IGdyYXk7XG4gIH1cbiAgXG4gIC5zaWRlaWNvbntcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBib3JkZXI6XCIxcHggc29saWRcIjtcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgfVxuICAuYWN0aXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuICAuY2VudGVye1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmNhcmRpY29uMXtcbiAgICAgZm9udC1zaXplOiAxMDBweDtcbiAgICAgY29sb3I6Z3JlZW47XG4gIH1cbiAgLmNhcmRpY29uMntcbiAgICBmb250LXNpemU6IDEwMHB4O1xuICAgIGNvbG9yOnllbGxvd2dyZWVuO1xuICB9XG4gIC8qIGxvYWRlciAqL1xuICAud3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIwcHgpO1xuICAgIC8qIGJhY2tncm91bmQ6IHJlZDsgKi9cbiAgfVxuICAuaW5uZXIge1xuICAgIC8qIGJhY2tncm91bmQ6IGdyZWVuOyAqL1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiAxMnB4O1xuICB9XG4gIFxuICB0ZHtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB9XG4gIHRhYmxle1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgIFxuICAgICBcbiAgICAgfVxuICAgXG5cbi50YWJsZS1yZXNwb25zaXZlIHtcbiAgZGlzcGxheTogdGFibGU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KXtcbiAgLm1hdC1jb2x1bW4tbGVpIHtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgICBmbGV4OiAwIDAgNTYlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDE0JSAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBcbiAgICAtbXMtaHlwaGVuczogYXV0bztcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICAgIGh5cGhlbnM6IGF1dG87XG4gIH1cbiAgLm1hdC1jb2x1bW4tc3RhdHVzIHtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgICBmbGV4OiAwIDAgNTYlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDE0JSAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBcbiAgICAtbXMtaHlwaGVuczogYXV0bztcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICAgIGh5cGhlbnM6IGF1dG87XG4gIH1cblxuICAgLm1hdC1jb2x1bW4ta2R0IHtcbiAgICAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICBmbGV4OiAwIDAgNTYlICFpbXBvcnRhbnQ7XG4gICAgIHdpZHRoOiAxMiUgIWltcG9ydGFudDtcbiAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgXG4gICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICBcbiAgICAgLW1zLWh5cGhlbnM6IGF1dG87XG4gICAgIC1tb3otaHlwaGVuczogYXV0bztcbiAgICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICAgICBoeXBoZW5zOiBhdXRvO1xuICAgfVxuXG4gXG5cbiAgLm1hdC1jb2x1bW4tbmFtZSB7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgZmxleDogMCAwIDU2JSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMCUgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XG4gICAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgICBoeXBoZW5zOiBhdXRvO1xuICB9XG4gIC5tYXQtY29sdW1uLWFkZHJlc3Mge1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIGZsZXg6IDAgMCA1NiUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTUlICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG5cbiAgICAtbXMtaHlwaGVuczogYXV0bztcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICAgIGh5cGhlbnM6IGF1dG87XG4gIH1cbiAgLm1hdC1jb2x1bW4tbWFpbCB7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgZmxleDogMCAwIDU2JSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMiUgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XG4gICAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgICBoeXBoZW5zOiBhdXRvO1xuICB9XG4gIC5tYXQtY29sdW1uLWFjdCB7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgZmxleDogMCAwIDU2JSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOjYlICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIFxuICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAgIC1tb3otaHlwaGVuczogYXV0bztcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gICAgaHlwaGVuczogYXV0bztcbiAgfVxuXG4gfVxuXG4vKiBNZWRpdW0gZGV2aWNlcyAobGFuZHNjYXBlIHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm1hdC1jb2x1bW57XG4gICAgd2lkdGg6YXV0byAgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"] });
    return LeiIssueComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeiIssueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lei-issue',
                templateUrl: './lei-issue.component.html',
                styleUrls: ['./lei-issue.component.css']
            }]
    }], function () { return [{ type: src_app_service_web3_service__WEBPACK_IMPORTED_MODULE_5__["Web3Service"] }, { type: src_app_service_backend_service__WEBPACK_IMPORTED_MODULE_6__["BackendService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"] }, { type: src_app_service_ipfs_service__WEBPACK_IMPORTED_MODULE_9__["IpfsService"] }, { type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }] }); })();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/buffer/index.js */ "tjlA").Buffer))

/***/ }),

/***/ "eNvI":
/*!*****************************************!*\
  !*** ./src/app/loader/loader.module.ts ***!
  \*****************************************/
/*! exports provided: LoaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderModule", function() { return LoaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.component */ "kQyY");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader.service */ "t0Il");





var LoaderModule = /** @class */ (function () {
    function LoaderModule() {
    }
    LoaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoaderModule });
    LoaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoaderModule_Factory(t) { return new (t || LoaderModule)(); }, providers: [
            _loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]] });
    return LoaderModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoaderModule, { declarations: [_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [
                    _loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"],
                ],
                exports: [
                    _loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"]
                ],
                providers: [
                    _loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "hctd":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");

// material.module.ts



































var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, providers: [], imports: [[
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"]
            ], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"]] });
    return MaterialModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"]], exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"]
                ],
                exports: [
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"]
                ],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "izLC":
/*!*****************************************************************************!*\
  !*** ./src/app/bank/advisory-transaction/advisory-transaction.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AdvisoryTransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvisoryTransactionComponent", function() { return AdvisoryTransactionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_app_service_web3_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/web3.service */ "+Ptt");
/* harmony import */ var src_app_service_backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/backend.service */ "/VBx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/loader/loader.service */ "t0Il");
/* harmony import */ var src_app_service_ipfs_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/ipfs.service */ "4/d+");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../loader/loader.component */ "kQyY");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");























function AdvisoryTransactionComponent_h4_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h4", 40);
} }
function AdvisoryTransactionComponent_h4_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdvisoryTransactionComponent_h4_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Transaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdvisoryTransactionComponent_h4_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Analytics");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdvisoryTransactionComponent_h4_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdvisoryTransactionComponent_th_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " # ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdvisoryTransactionComponent_td_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r17 = ctx.index;
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r17 + 1 + ctx_r7.paginator.pageIndex * ctx_r7.paginator.pageSize, " ");
} }
function AdvisoryTransactionComponent_th_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Order Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdvisoryTransactionComponent_td_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r18.order);
} }
function AdvisoryTransactionComponent_th_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " LC Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdvisoryTransactionComponent_td_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r19.lc);
} }
function AdvisoryTransactionComponent_th_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " LC Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdvisoryTransactionComponent_td_60_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View LC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", row_r20.order);
} }
function AdvisoryTransactionComponent_td_60_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Funds Transferred ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdvisoryTransactionComponent_td_60_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvisoryTransactionComponent_td_60_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); var row_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.advisoryConfirmation(row_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confrim Fund Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", row_r20.order);
} }
function AdvisoryTransactionComponent_td_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdvisoryTransactionComponent_td_60_button_1_Template, 2, 1, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdvisoryTransactionComponent_td_60_label_2_Template, 2, 0, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AdvisoryTransactionComponent_td_60_button_3_Template, 2, 1, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r20.LC === "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r20.LC === "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r20.LC === "1");
} }
function AdvisoryTransactionComponent_tr_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 50);
} }
function AdvisoryTransactionComponent_tr_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 51);
} }
var _c0 = function () { return [5, 10, 25, 100]; };
var AdvisoryTransactionComponent = /** @class */ (function () {
    function AdvisoryTransactionComponent(web3, backend, route, loaderService, ipfs, cd) {
        var _this = this;
        this.web3 = web3;
        this.backend = backend;
        this.route = route;
        this.loaderService = loaderService;
        this.ipfs = ipfs;
        this.cd = cd;
        this.showFiller = false;
        this.isExpanded = false;
        this.totalProduct = [];
        this.displayedColumns = ['id', 'order', 'lc', 'action'];
        console.warn("calling order constra");
        this.web3.checkAndInstantiateWeb3()
            .then(function (checkConn) {
            console.log(checkConn);
            if (checkConn === 'connected') {
                _this.web3.loadBlockChainData()
                    .then(function (accountData) {
                    console.log(accountData[0]);
                    _this.accountNumber = accountData[0];
                    _this.web3.getAllContract()
                        .then(function (contractRes) {
                        if (contractRes) {
                            console.log(contractRes);
                            _this.registration = contractRes[1];
                            _this.registration.methods.getUserHashType(_this.accountNumber)
                                .call()
                                .then(function (user) {
                                console.log('user');
                                console.log(user);
                                if (!user[0]) {
                                }
                                else {
                                    console.log('user');
                                    console.log(user);
                                    _this.ipfs.getHashFromIPFS(user[0]).then(function (data) {
                                        _this.ipfsConverted2 = JSON.parse(Buffer.from(data.value.buffer).toString());
                                        console.log(_this.ipfsConverted2);
                                        _this.userinfo = user[0];
                                    });
                                }
                            });
                        }
                    });
                }, function (err) {
                    console.log('account error', err);
                });
            }
        }, function (err) {
            alert(err);
        });
    }
    //  redirecttodashboard(){
    //   this.route.navigate(['/seller_dashboard']);
    //   }
    // ngAfterViewInit() {
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // }
    // applyFilter(event: Event) {
    //   const filterValue = (event.target as HTMLInputElement).value;
    //   this.dataSource.filter = filterValue.trim().toLowerCase();
    //   if (this.dataSource.paginator) {
    //     this.dataSource.paginator.firstPage();
    //   }
    // } 
    AdvisoryTransactionComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.warn("in ngOnInit");
        this.loaderService.showLoader('bankLoader');
        this.web3.getAllContract()
            .then(function (contractRes) {
            _this.orders = contractRes[3];
            _this.backend.returnAdvOrders().then(function (result) {
                console.log(result);
                var _loop_1 = function (i) {
                    console.log(result[i]);
                    if (result[i][2] == 0) {
                        _this.totalProduct.push({
                            "id": i + 1,
                            "order": result[i][0],
                            "lc": result[i][1],
                            "beneficiaryBank": "NA",
                            "beneficiary": "NA",
                            "LCCASHED": "NO",
                            "LC": "0"
                        });
                        console.log(_this.totalProduct);
                        _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.totalProduct);
                        _this.cd.detectChanges();
                    }
                    else if (result[i][2] == 1) {
                        _this.backend.getLCDetails(result[i][0]).then(function (d) {
                            _this.totalProduct.push({
                                "id": i + 1,
                                "order": result[i][0],
                                "lc": result[i][1],
                                "beneficiaryBank": d.sellerBank,
                                "beneficiary": d.sellerWallet,
                                "LCCASHED": "NO",
                                "LC": "1"
                            });
                            console.log(_this.totalProduct);
                            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.totalProduct);
                            _this.dataSource.sort = _this.sort;
                            _this.dataSource.paginator = _this.paginator;
                            _this.cd.detectChanges();
                        });
                    }
                    else {
                        _this.totalProduct.push({
                            "id": i + 1,
                            "order": result[i][0],
                            "lc": result[i][1],
                            "beneficiaryBank": "NA",
                            "beneficiary": "NA",
                            "LCCASHED": "YES",
                            "LC": "2"
                        });
                        console.log(_this.totalProduct);
                        _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.totalProduct);
                        _this.dataSource.sort = _this.sort;
                        _this.dataSource.paginator = _this.paginator;
                        _this.cd.detectChanges();
                    }
                    _this.loaderService.hideLoader('bankLoader');
                };
                for (var i = 0; i < result.length; i++) {
                    _loop_1(i);
                }
            }).catch(function (err) {
            });
        });
    };
    AdvisoryTransactionComponent.prototype.advisoryConfirmation1 = function (event) {
        console.log(event.target.id);
        console.log(event.target.attributes.id);
        // console.log(i);
        // this.backend.getLCDetails(event.target.id).then((d:any)=>{
        //   console.log(d);
        // });
        // this.backend.advisoryConfirmation(id).then((result) => {
        //   console.log(result)
        // }).catch((err) => {
        // });
    };
    AdvisoryTransactionComponent.prototype.advisoryConfirmation = function (selecteditem) {
        var _this = this;
        console.warn("CLIKCKED");
        // let elementId: string = (event.target as Element).id;
        // console.log(elementId);
        this.loaderService.showLoader('bankLoader');
        console.log(selecteditem);
        console.log('in cashLC');
        // var row = e.path[0];
        var order = selecteditem.order;
        console.log(order);
        this.backend.advisoryConfirmation(order).then(function (res) {
            console.log(res);
            _this.loaderService.hideLoader('bankLoader');
        });
    };
    AdvisoryTransactionComponent.prototype.redirectDashboard = function () {
        // this.route.navigateByUrl('seller_dashboard/'+this.userinfo);
        this.route.navigate(['bank_dashboard', { id: this.userinfo }]);
    };
    AdvisoryTransactionComponent.prototype.getDBAPI = function () {
        this.route.navigate(['analytics']);
    };
    AdvisoryTransactionComponent.ɵfac = function AdvisoryTransactionComponent_Factory(t) { return new (t || AdvisoryTransactionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_web3_service__WEBPACK_IMPORTED_MODULE_4__["Web3Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_ipfs_service__WEBPACK_IMPORTED_MODULE_8__["IpfsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
    AdvisoryTransactionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdvisoryTransactionComponent, selectors: [["app-advisory-transaction"]], viewQuery: function AdvisoryTransactionComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        } }, decls: 64, vars: 11, consts: [[1, "loaders"], [1, "bankLoader"], [3, "id"], [1, "example-container"], ["disableClose", "true", "opened", "true", "mode", "side", 1, "example-sidenav"], ["sidenav", ""], ["mat-list-icon", "", "matTooltip", "Expand", 1, "navicon", 3, "click"], ["mat-line", "", 4, "ngIf"], [3, "click"], ["mat-list-icon", "", "matTooltip", "Dashboard", 1, "navicon"], ["matTooltip", "Transaction", "mat-list-icon", "", 1, "navicon", "active", 3, "click"], ["mat-list-icon", "", "matTooltip", "Analytics", 1, "navicon", 3, "click"], ["mat-list-icon", "", "matTooltip", "Report", "routerLink", "/bank/report", 1, "navicon"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [2, "color", "#007bff", "background-color", "transparent", "cursor", "pointer", 3, "click"], ["aria-current", "page", 1, "breadcrumb-item"], [1, "example-sidenav-content"], [1, "main-content"], [1, "container-fluid"], [1, "row", "headContent"], [1, "col-lg-8", "col-md-8", "col-sm-8"], [1, "col", "col-md-auto"], [1, "col", "col-lg-2"], [1, "row"], [1, "col-lg-8", "col-md-12", "col-sm-12"], [1, "mat-elevation-z8"], [2, "overflow-x", "auto"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "order"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "lc"], ["matColumnDef", "action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page of users", 3, "pageSizeOptions"], ["mat-line", ""], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-button", "", "color", "primary", 3, "id", 4, "ngIf"], ["style", "color:green;font-weight:bold", 4, "ngIf"], ["mat-button", "", "color", "primary", 3, "id", "click", 4, "ngIf"], ["mat-button", "", "color", "primary", 3, "id"], [2, "color", "green", "font-weight", "bold"], ["mat-button", "", "color", "primary", 3, "id", "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function AdvisoryTransactionComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-loader", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav", 4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-nav-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvisoryTransactionComponent_Template_mat_icon_click_8_listener() { return ctx.isExpanded = !ctx.isExpanded; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " menu ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AdvisoryTransactionComponent_h4_10_Template, 1, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-list-item", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvisoryTransactionComponent_Template_mat_list_item_click_11_listener() { return ctx.redirectDashboard(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " dashboard ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AdvisoryTransactionComponent_h4_14_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvisoryTransactionComponent_Template_mat_icon_click_16_listener() { return ctx.redirectDashboard(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " swap_horiz ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AdvisoryTransactionComponent_h4_18_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvisoryTransactionComponent_Template_mat_icon_click_20_listener() { return ctx.getDBAPI(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "analytics");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AdvisoryTransactionComponent_h4_22_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "summarize");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AdvisoryTransactionComponent_h4_26_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nav", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ol", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvisoryTransactionComponent_Template_a_click_30_listener() { return ctx.redirectDashboard(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Home");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Advisory");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Advisory Bank");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "table", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](49, 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, AdvisoryTransactionComponent_th_50_Template, 2, 0, "th", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, AdvisoryTransactionComponent_td_51_Template, 2, 1, "td", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](52, 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, AdvisoryTransactionComponent_th_53_Template, 2, 0, "th", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, AdvisoryTransactionComponent_td_54_Template, 2, 1, "td", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](55, 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, AdvisoryTransactionComponent_th_56_Template, 2, 0, "th", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, AdvisoryTransactionComponent_td_57_Template, 2, 1, "td", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](58, 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, AdvisoryTransactionComponent_th_59_Template, 2, 0, "th", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, AdvisoryTransactionComponent_td_60_Template, 4, 3, "td", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, AdvisoryTransactionComponent_tr_61_Template, 1, 0, "tr", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, AdvisoryTransactionComponent_tr_62_Template, 1, 0, "tr", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "mat-paginator", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "bankLoader");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
        } }, directives: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListIconCssMatStyler"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCard"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatLine"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], styles: ["mat-sidenav[_ngcontent-%COMP%]{\n    \n  background:goldenrod;\n\n  }\n  .headContent[_ngcontent-%COMP%]{\n    padding-top: 10px;\n  }\n  mat-card[_ngcontent-%COMP%]{\n      margin-bottom: 30px;\n  }\n  .navicon[_ngcontent-%COMP%]{\n  color: white;\n  }\n  .example-container[_ngcontent-%COMP%] {\n    display: block;\n    overflow: auto;\n    min-height: 100vh;\n    height: auto;\n    margin: 0;\n    }\n  .example-sidenav-content[_ngcontent-%COMP%] {\n    \n    overflow: auto;\n    width: 100%;\n    height: 100%;\n      }\n  .example-sidenav[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .demo-panel[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 90%;\n    margin: 10px 0px;\n  }\n  .vl[_ngcontent-%COMP%] {\n    border-left: 1px solid gray;\n    height: 500px;\n  }\n  table[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .mat-form-field[_ngcontent-%COMP%] {\n    font-size: 14px;\n    width: 100%;\n  }\n  td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n  th[_ngcontent-%COMP%]{\n    \n    background:goldenrod;\n  font-weight: bold;\n  font-size: large;\n  color: white;\n  }\n  .profileimg[_ngcontent-%COMP%] {\n    border-radius: 50%;\n  }\n  .chartdiv[_ngcontent-%COMP%]{\n    width:100%;\n    height:250px;\n  }\n  .card[_ngcontent-%COMP%]{\n    background-color: whitesmoke;\n  }\n  .subnote[_ngcontent-%COMP%]{\n    font-size: 10px;\n    color: gray;\n  }\n  .sideicon[_ngcontent-%COMP%]{\n    padding: 10px;\n    margin: 10px;\n    border:\"1px solid\";\n    border-radius: 10%;\n    background-color: grey;\n  }\n  .active[_ngcontent-%COMP%]{\n    background-color: cornflowerblue;\n    border-radius: 50%;\n  }\n  .center[_ngcontent-%COMP%]{\n      justify-content: center;\n  }\n  .cardicon1[_ngcontent-%COMP%]{\n     font-size: 100px;\n     color:green;\n  }\n  .cardicon2[_ngcontent-%COMP%]{\n    font-size: 100px;\n    color:yellowgreen;\n }\n  table[_ngcontent-%COMP%]{\n  width: 100%;\n }\n  .mat-column-id[_ngcontent-%COMP%] {\n   word-wrap: break-word !important;\n   white-space: unset !important;\n   flex: 0 0 28% !important;\n   width: 8% !important;\n   overflow-wrap: break-word;\n   word-wrap: break-word;\n \n   word-break: break-word;\n \n   -ms-hyphens: auto;\n   -webkit-hyphens: auto;\n   hyphens: auto;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFuay9hZHZpc29yeS10cmFuc2FjdGlvbi9hZHZpc29yeS10cmFuc2FjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGdDQUFnQztFQUNsQyxvQkFBb0I7O0VBRXBCO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtNQUNJLG1CQUFtQjtFQUN2QjtFQUNBO0VBQ0EsWUFBWTtFQUNaO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osU0FBUztJQUNUO0VBRUY7SUFDRSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO01BQ1Y7RUFFSjtJQUNFLGFBQWE7RUFDZjtFQUVBO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLDJCQUEyQjtJQUMzQixhQUFhO0VBQ2Y7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7RUFDYjtFQUVBO0lBQ0UsVUFBVSxDQUFDLEtBQUs7RUFDbEI7RUFDQTtJQUNFLGlDQUFpQztJQUNqQyxvQkFBb0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1o7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7RUFDZDtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsV0FBVztFQUNiO0VBRUE7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0VBQ3BCO0VBQ0E7TUFDSSx1QkFBdUI7RUFDM0I7RUFDQTtLQUNHLGdCQUFnQjtLQUNoQixXQUFXO0VBQ2Q7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7Q0FDcEI7RUFDQTtFQUNDLFdBQVc7Q0FDWjtFQUVBO0dBQ0UsZ0NBQWdDO0dBQ2hDLDZCQUE2QjtHQUM3Qix3QkFBd0I7R0FDeEIsb0JBQW9CO0dBQ3BCLHlCQUF5QjtHQUN6QixxQkFBcUI7O0dBRXJCLHNCQUFzQjs7R0FFdEIsaUJBQWlCO0dBRWpCLHFCQUFxQjtHQUNyQixhQUFhO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9iYW5rL2Fkdmlzb3J5LXRyYW5zYWN0aW9uL2Fkdmlzb3J5LXRyYW5zYWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbm1hdC1zaWRlbmF2e1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ZG9kZ2VyYmx1ZSAqL1xuICBiYWNrZ3JvdW5kOmdvbGRlbnJvZDtcblxuICB9XG4gIC5oZWFkQ29udGVudHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgfVxuICBtYXQtY2FyZHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbiAgLm5hdmljb257XG4gIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuZXhhbXBsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gIC5leGFtcGxlLXNpZGVuYXYtY29udGVudCB7XG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG5cbiAgLmV4YW1wbGUtc2lkZW5hdiB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuXG4gIC5kZW1vLXBhbmVsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICBtYXJnaW46IDEwcHggMHB4O1xuICB9XG4gIC52bCB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmF5O1xuICAgIGhlaWdodDogNTAwcHg7XG4gIH1cbiAgdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICB0ZCwgdGgge1xuICAgIHdpZHRoOiAyNSU7LyogICovXG4gIH1cbiAgdGh7XG4gICAgLyogYmFja2dyb3VuZDogbWVkaXVtc2xhdGVibHVlOyAqL1xuICAgIGJhY2tncm91bmQ6Z29sZGVucm9kO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC5wcm9maWxlaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cblxuICAuY2hhcnRkaXZ7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MjUwcHg7XG4gIH1cbiAgLmNhcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgfVxuICAuc3Vibm90ZXtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6IGdyYXk7XG4gIH1cblxuICAuc2lkZWljb257XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYm9yZGVyOlwiMXB4IHNvbGlkXCI7XG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIH1cbiAgLmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgLmNlbnRlcntcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5jYXJkaWNvbjF7XG4gICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gICAgIGNvbG9yOmdyZWVuO1xuICB9XG4gIC5jYXJkaWNvbjJ7XG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgICBjb2xvcjp5ZWxsb3dncmVlbjtcbiB9XG4gdGFibGV7XG4gIHdpZHRoOiAxMDAlO1xuIH1cbiBcbiAubWF0LWNvbHVtbi1pZCB7XG4gICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICAgZmxleDogMCAwIDI4JSAhaW1wb3J0YW50O1xuICAgd2lkdGg6IDglICFpbXBvcnRhbnQ7XG4gICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuIFxuICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiBcbiAgIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICAgaHlwaGVuczogYXV0bztcbiB9XG4iXX0= */"] });
    return AdvisoryTransactionComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvisoryTransactionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-advisory-transaction',
                templateUrl: './advisory-transaction.component.html',
                styleUrls: ['./advisory-transaction.component.css']
            }]
    }], function () { return [{ type: src_app_service_web3_service__WEBPACK_IMPORTED_MODULE_4__["Web3Service"] }, { type: src_app_service_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] }, { type: src_app_service_ipfs_service__WEBPACK_IMPORTED_MODULE_8__["IpfsService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }] }); })();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/buffer/index.js */ "tjlA").Buffer))

/***/ }),

/***/ "kQyY":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.service */ "t0Il");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




var _c0 = function (a0) { return { global: a0 }; };
function LoaderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r0.id === "startingLoader"));
} }
function LoaderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r1.id === "shipperLoader"));
} }
function LoaderComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r2.id === "carrierLoader"));
} }
function LoaderComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r3.id === "portLoader"));
} }
function LoaderComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r4.id === "consigneeLoader"));
} }
function LoaderComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r5.id === "bankLoader"));
} }
var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(loaderService) {
        this.loaderService = loaderService;
        this.id = 'global';
        // *@Input* — () id: string;
        this.show = false;
        this.shipperShow = false;
        this.carrierShow = false;
        this.portShow = false;
        this.consigneeShow = false;
        this.bankShow = false;
    }
    LoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderService.loaderStatus$.subscribe(function (response) {
            if (response.id === 'startingLoader') {
                _this.show = _this.id === response.id && response.status;
            }
            if (response.id === 'shipperLoader') {
                _this.shipperShow = _this.id === response.id && response.status;
            }
            if (response.id === 'carrierLoader') {
                _this.carrierShow = _this.id === response.id && response.status;
            }
            if (response.id === 'portLoader') {
                _this.portShow = _this.id === response.id && response.status;
            }
            if (response.id === 'consigneeLoader') {
                _this.consigneeShow = _this.id === response.id && response.status;
            }
            if (response.id === 'bankLoader') {
                _this.bankShow = _this.id === response.id && response.status;
            }
        });
    };
    LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"])); };
    LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], inputs: { id: "id" }, decls: 6, vars: 6, consts: [["class", "preloader", 3, "ngClass", 4, "ngIf"], ["class", "preloader3", 3, "ngClass", 4, "ngIf"], ["class", "preloader4", 3, "ngClass", 4, "ngIf"], ["class", "preloader5", 3, "ngClass", 4, "ngIf"], ["class", "preloader1", 3, "ngClass", 4, "ngIf"], ["class", "preloader2", 3, "ngClass", 4, "ngIf"], [1, "preloader", 3, "ngClass"], [1, "loader"], [1, "preloader3", 3, "ngClass"], [1, "preloader4", 3, "ngClass"], [1, "preloader5", 3, "ngClass"], [1, "preloader1", 3, "ngClass"], [1, "preloader2", 3, "ngClass"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoaderComponent_div_0_Template, 2, 3, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoaderComponent_div_1_Template, 2, 3, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoaderComponent_div_2_Template, 2, 3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoaderComponent_div_3_Template, 2, 3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoaderComponent_div_4_Template, 2, 3, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoaderComponent_div_5_Template, 2, 3, "div", 5);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shipperShow);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.carrierShow);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.portShow);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.consigneeShow);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bankShow);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".preloader[_ngcontent-%COMP%] {\n  z-index: 2;\n  background-color: rgba(255, 255, 255, 0.7);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.preloader.global[_ngcontent-%COMP%] {\n  position: fixed;\n}\n.preloader.secondary[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.preloader[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  width: 150px;\n  height: 150px;\n  margin: -75px 0 0 -75px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: seagreen;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n}\n.preloader[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  right: 5px;\n  bottom: 5px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: steelblue;\n  -webkit-animation: spin 3s linear infinite;\n  animation: spin 3s linear infinite;\n}\n.preloader[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: indianred;\n  -webkit-animation: spin 1.5s linear infinite;\n  animation: spin 1.5s linear infinite;\n}\n.preloader3[_ngcontent-%COMP%] {\n  z-index: 2;\n  background-color: rgba(255, 255, 255, 0.7);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.preloader3.global[_ngcontent-%COMP%] {\n  position: fixed;\n}\n.preloader3.secondary[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.preloader3[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  width: 150px;\n  height: 150px;\n  margin: -75px 0 0 -75px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: dodgerblue;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n}\n.preloader3[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  right: 5px;\n  bottom: 5px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: black;\n  -webkit-animation: spin 3s linear infinite;\n  animation: spin 3s linear infinite;\n}\n.preloader3[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: green;\n  -webkit-animation: spin 1.5s linear infinite;\n  animation: spin 1.5s linear infinite;\n}\n.preloader4[_ngcontent-%COMP%] {\n  z-index: 2;\n  background-color: rgba(255, 255, 255, 0.7);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.preloader4.global[_ngcontent-%COMP%] {\n  position: fixed;\n}\n.preloader4.secondary[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.preloader4[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  width: 150px;\n  height: 150px;\n  margin: -75px 0 0 -75px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: indigo;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n}\n.preloader4[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  right: 5px;\n  bottom: 5px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: blue;\n  -webkit-animation: spin 3s linear infinite;\n  animation: spin 3s linear infinite;\n}\n.preloader4[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: mediumvioletred;\n  -webkit-animation: spin 1.5s linear infinite;\n  animation: spin 1.5s linear infinite;\n}\n.preloader5[_ngcontent-%COMP%] {\n  z-index: 2;\n  background-color: rgba(255, 255, 255, 0.7);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.preloader5.global[_ngcontent-%COMP%] {\n  position: fixed;\n}\n.preloader5.secondary[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.preloader5[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  width: 150px;\n  height: 150px;\n  margin: -75px 0 0 -75px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: darkblue;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n}\n.preloader5[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  right: 5px;\n  bottom: 5px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: dodgerblue;\n  -webkit-animation: spin 3s linear infinite;\n  animation: spin 3s linear infinite;\n}\n.preloader5[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: cadetblue;\n  -webkit-animation: spin 1.5s linear infinite;\n  animation: spin 1.5s linear infinite;\n}\n.preloader2[_ngcontent-%COMP%] {\n  z-index: 2;\n  background-color: rgba(255, 255, 255, 0.7);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.preloader2.global[_ngcontent-%COMP%] {\n  position: fixed;\n}\n.preloader2.secondary[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.preloader2[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  width: 150px;\n  height: 150px;\n  margin: -75px 0 0 -75px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: darkolivegreen;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n}\n.preloader2[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  right: 5px;\n  bottom: 5px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: goldenrod;\n  -webkit-animation: spin 3s linear infinite;\n  animation: spin 3s linear infinite;\n}\n.preloader2[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: black;\n  -webkit-animation: spin 1.5s linear infinite;\n  animation: spin 1.5s linear infinite;\n}\n.preloader1[_ngcontent-%COMP%] {\n  z-index: 2;\n  background-color: rgba(255, 255, 255, 0.7);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.preloader1.global[_ngcontent-%COMP%] {\n  position: fixed;\n}\n.preloader1.secondary[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.preloader1[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  width: 150px;\n  height: 150px;\n  margin: -75px 0 0 -75px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #3f51b5;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n}\n.preloader1[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  right: 5px;\n  bottom: 5px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: darkmagenta;\n  -webkit-animation: spin 3s linear infinite;\n  animation: spin 3s linear infinite;\n}\n.preloader1[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: goldenrod;\n  -webkit-animation: spin 1.5s linear infinite;\n  animation: spin 1.5s linear infinite;\n}\n@-webkit-keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFVBQUE7RUFFQSwwQ0FBQTtFQUVBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFGRjtBQUlFO0VBQ0UsZUFBQTtBQUZKO0FBS0U7RUFDRSxrQkFBQTtBQUhKO0FBTUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBRUUsMEJBQUE7RUFFRiwwQ0FBQTtFQUNBLGtDQUFBO0FBTko7QUFRSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBRUEsMkJBQUE7RUFFQSwwQ0FBQTtFQUNBLGtDQUFBO0FBUk47QUFXSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0Q0FBQTtFQUNBLG9DQUFBO0FBVE47QUFjQTtFQUNFLFVBQUE7RUFDQSwwQ0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFYRjtBQWFFO0VBQ0UsZUFBQTtBQVhKO0FBY0U7RUFDRSxrQkFBQTtBQVpKO0FBZUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtDQUFBO0FBYko7QUFlSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtDQUFBO0FBYk47QUFnQkk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsNENBQUE7RUFDQSxvQ0FBQTtBQWROO0FBbUJBO0VBQ0UsVUFBQTtFQUNBLDBDQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWhCRjtBQWtCRTtFQUNFLGVBQUE7QUFoQko7QUFtQkU7RUFDRSxrQkFBQTtBQWpCSjtBQW9CRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0NBQUE7QUFsQko7QUFvQkk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQ0FBQTtBQWxCTjtBQXFCSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUNBQUE7RUFDQSw0Q0FBQTtFQUNBLG9DQUFBO0FBbkJOO0FBd0JBO0VBQ0UsVUFBQTtFQUNBLDBDQUFBO0VBRUEsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQXRCRjtBQXdCRTtFQUNFLGVBQUE7QUF0Qko7QUF5QkU7RUFDRSxrQkFBQTtBQXZCSjtBQTBCRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0NBQUE7QUF4Qko7QUEwQkk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBR0EsMENBQUE7RUFDQSxrQ0FBQTtBQTFCTjtBQTZCSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0Q0FBQTtFQUNBLG9DQUFBO0FBM0JOO0FBZ0NBO0VBQ0UsVUFBQTtFQUNBLDBDQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQTdCRjtBQStCRTtFQUNFLGVBQUE7QUE3Qko7QUFnQ0U7RUFDRSxrQkFBQTtBQTlCSjtBQWlDRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esa0NBQUE7QUEvQko7QUFpQ0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQ0FBQTtBQS9CTjtBQWtDSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG9DQUFBO0FBaENOO0FBcUNBO0VBQ0UsVUFBQTtFQUNBLDBDQUFBO0VBRUEsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQW5DRjtBQXFDRTtFQUNFLGVBQUE7QUFuQ0o7QUFzQ0U7RUFDRSxrQkFBQTtBQXBDSjtBQXVDRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0NBQUE7QUFyQ0o7QUF1Q0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQ0FBQTtBQXJDTjtBQXdDSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0Q0FBQTtFQUNBLG9DQUFBO0FBdENOO0FBMENBO0VBQ0U7SUFHRSx1QkFBQTtFQXZDRjtFQXlDQTtJQUdFLHlCQUFBO0VBdkNGO0FBQ0Y7QUEwQ0E7RUFDRTtJQUdFLHVCQUFBO0VBeENGO0VBMENBO0lBR0UseUJBQUE7RUF4Q0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTZWxsZXIgTG9hZGVyIENTU1xuLnByZWxvYWRlciB7XG4gIHotaW5kZXg6IDI7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC43KTtcbiAgXG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICAmLmdsb2JhbCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICB9XG5cbiAgJi5zZWNvbmRhcnkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuXG4gIC5sb2FkZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgbWFyZ2luOiAtNzVweCAwIDAgLTc1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIC8vIGJvcmRlci10b3AtY29sb3I6ICM5MzcwREI7XG4gICAgICBib3JkZXItdG9wLWNvbG9yOiBzZWFncmVlbjtcbiAgICBcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcblxuICAgICY6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDVweDtcbiAgICAgIGxlZnQ6IDVweDtcbiAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICBib3R0b206IDVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgLy8gYm9yZGVyLXRvcC1jb2xvcjogI0JBNTVEMztcbiAgICAgIGJvcmRlci10b3AtY29sb3I6IHN0ZWVsYmx1ZTtcbiAgICAgIFxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gM3MgbGluZWFyIGluZmluaXRlO1xuICAgICAgYW5pbWF0aW9uOiBzcGluIDNzIGxpbmVhciBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDE1cHg7XG4gICAgICBsZWZ0OiAxNXB4O1xuICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICBib3R0b206IDE1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBib3JkZXI6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci10b3AtY29sb3I6aW5kaWFucmVkO1xuICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMS41cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICBhbmltYXRpb246IHNwaW4gMS41cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgfVxuICB9XG59XG4vLyBTaGlwcGVyIExvYWRlciBDU1Ncbi5wcmVsb2FkZXIzIHtcbiAgei1pbmRleDogMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjcpO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgJi5nbG9iYWwge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgfVxuXG4gICYuc2Vjb25kYXJ5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cblxuICAubG9hZGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIG1hcmdpbjogLTc1cHggMCAwIC03NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBkb2RnZXJibHVlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNXB4O1xuICAgICAgbGVmdDogNXB4O1xuICAgICAgcmlnaHQ6IDVweDtcbiAgICAgIGJvdHRvbTogNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItdG9wLWNvbG9yOiBibGFjaztcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDNzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgIGFuaW1hdGlvbjogc3BpbiAzcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxNXB4O1xuICAgICAgbGVmdDogMTVweDtcbiAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgYm90dG9tOiAxNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItdG9wLWNvbG9yOiBncmVlbjtcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDEuNXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgYW5pbWF0aW9uOiBzcGluIDEuNXMgbGluZWFyIGluZmluaXRlO1xuICAgIH1cbiAgfVxufVxuLy9DYXJyaWVyIGxvYWRlclxuLnByZWxvYWRlcjQge1xuICB6LWluZGV4OiAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNyk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICAmLmdsb2JhbCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICB9XG5cbiAgJi5zZWNvbmRhcnkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuXG4gIC5sb2FkZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgbWFyZ2luOiAtNzVweCAwIDAgLTc1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci10b3AtY29sb3I6IGluZGlnbztcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcblxuICAgICY6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDVweDtcbiAgICAgIGxlZnQ6IDVweDtcbiAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICBib3R0b206IDVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXRvcC1jb2xvcjpibHVlIDtcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDNzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgIGFuaW1hdGlvbjogc3BpbiAzcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxNXB4O1xuICAgICAgbGVmdDogMTVweDtcbiAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgYm90dG9tOiAxNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItdG9wLWNvbG9yOiBtZWRpdW12aW9sZXRyZWQ7XG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAxLjVzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgIGFuaW1hdGlvbjogc3BpbiAxLjVzIGxpbmVhciBpbmZpbml0ZTtcbiAgICB9XG4gIH1cbn1cbi8vUG9ydCBsb2FkZXJcbi5wcmVsb2FkZXI1IHtcbiAgei1pbmRleDogMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjcpO1xuICBcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gICYuZ2xvYmFsIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gIH1cblxuICAmLnNlY29uZGFyeSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG5cbiAgLmxvYWRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBtYXJnaW46IC03NXB4IDAgMCAtNzVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogZGFya2JsdWU7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA1cHg7XG4gICAgICBsZWZ0OiA1cHg7XG4gICAgICByaWdodDogNXB4O1xuICAgICAgYm90dG9tOiA1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBib3JkZXI6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci10b3AtY29sb3I6IGRvZGdlcmJsdWU7XG4gICAgICAvLyBib3JkZXItdG9wLWNvbG9yOiBzdGVlbGJsdWU7XG4gICAgICBcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDNzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgIGFuaW1hdGlvbjogc3BpbiAzcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxNXB4O1xuICAgICAgbGVmdDogMTVweDtcbiAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgYm90dG9tOiAxNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItdG9wLWNvbG9yOmNhZGV0Ymx1ZTtcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDEuNXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgYW5pbWF0aW9uOiBzcGluIDEuNXMgbGluZWFyIGluZmluaXRlO1xuICAgIH1cbiAgfVxufVxuLy9CYW5rXG4ucHJlbG9hZGVyMiB7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC43KTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gICYuZ2xvYmFsIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gIH1cblxuICAmLnNlY29uZGFyeSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG5cbiAgLmxvYWRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBtYXJnaW46IC03NXB4IDAgMCAtNzVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogZGFya29saXZlZ3JlZW47XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA1cHg7XG4gICAgICBsZWZ0OiA1cHg7XG4gICAgICByaWdodDogNXB4O1xuICAgICAgYm90dG9tOiA1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBib3JkZXI6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci10b3AtY29sb3I6IGdvbGRlbnJvZDtcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDNzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgIGFuaW1hdGlvbjogc3BpbiAzcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxNXB4O1xuICAgICAgbGVmdDogMTVweDtcbiAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgYm90dG9tOiAxNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItdG9wLWNvbG9yOiBibGFjaztcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDEuNXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgYW5pbWF0aW9uOiBzcGluIDEuNXMgbGluZWFyIGluZmluaXRlO1xuICAgIH1cbiAgfVxufVxuLy9Db25zaWduZWUgbG9hZGVyc1xuLnByZWxvYWRlcjEge1xuICB6LWluZGV4OiAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNyk7XG4gIFxuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgJi5nbG9iYWwge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgfVxuXG4gICYuc2Vjb25kYXJ5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cblxuICAubG9hZGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIG1hcmdpbjogLTc1cHggMCAwIC03NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjM2Y1MWI1O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNXB4O1xuICAgICAgbGVmdDogNXB4O1xuICAgICAgcmlnaHQ6IDVweDtcbiAgICAgIGJvdHRvbTogNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItdG9wLWNvbG9yOmRhcmttYWdlbnRhO1xuICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gM3MgbGluZWFyIGluZmluaXRlO1xuICAgICAgYW5pbWF0aW9uOiBzcGluIDNzIGxpbmVhciBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDE1cHg7XG4gICAgICBsZWZ0OiAxNXB4O1xuICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICBib3R0b206IDE1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBib3JkZXI6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci10b3AtY29sb3I6IGdvbGRlbnJvZDtcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDEuNXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgYW5pbWF0aW9uOiBzcGluIDEuNXMgbGluZWFyIGluZmluaXRlO1xuICAgIH1cbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59Il19 */"] });
    return LoaderComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.scss']
            }]
    }], function () { return [{ type: _loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");










function NavbarComponent_mat_toolbar_0_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_mat_toolbar_0_button_4_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_mat_toolbar_0_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.openDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SIGNUP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\napp_registration\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_mat_toolbar_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "user");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_mat_toolbar_0_h1_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Consignee Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_mat_toolbar_0_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", ctx_r6.menu);
} }
function NavbarComponent_mat_toolbar_0_mat_menu_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-menu", null, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "shopping_cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "My Cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "voicemail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Check voice mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "notifications_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Disable alerts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_mat_toolbar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavbarComponent_mat_toolbar_0_button_1_Template, 3, 0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavbarComponent_mat_toolbar_0_button_4_Template, 4, 0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavbarComponent_mat_toolbar_0_div_5_Template, 4, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavbarComponent_mat_toolbar_0_h1_6_Template, 2, 0, "h1", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NavbarComponent_mat_toolbar_0_button_7_Template, 3, 1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavbarComponent_mat_toolbar_0_mat_menu_8_Template, 17, 0, "mat-menu", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.SignedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.SignedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.consigneeLoggedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.consigneeLoggedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.consigneeLoggedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.consigneeLoggedIn);
} }
function NavbarComponent_mat_toolbar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " SellerDashboard\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, dialog) {
        this.router = router;
        this.dialog = dialog;
        this.visible = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.goToSignup = function (page) {
        // console.log(page)
        this.Register = true;
        this.visible = this.visible ? false : true;
        // this.router.navigate([`${page}`]);
        this.router.navigate(['signupmodal']);
    };
    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], inputs: { sellerSignedIn: "sellerSignedIn", consigneeLoggedIn: "consigneeLoggedIn", SignedIn: "SignedIn", Register: "Register" }, decls: 2, vars: 2, consts: [["color", "primary", "style", "min-height: 55px !important; height: 55px !important;", "class", "mat-elevation-z6", 4, "ngIf"], [4, "ngIf"], ["color", "primary", 1, "mat-elevation-z6", 2, "min-height", "55px !important", "height", "55px !important"], ["mat-icon-button", "", "class", "example-icon", "aria-label", "Example icon-button with menu icon", 4, "ngIf"], ["src", "../assets/images/logo.png", 2, "width", "150px", "height", "50px"], [1, "example-spacer"], ["mat-button", "", 3, "click", 4, "ngIf"], ["class", "example-button-container", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon"], ["mat-button", "", 3, "click"], [1, "material-icons"], [1, "example-button-container"], ["mat-mini-fab", "", "color", "primary", "aria-label", "Example icon button with a filter list icon"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""], ["matBadge", "15"], ["mat-menu-item", "", "disabled", ""]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavbarComponent_mat_toolbar_0_Template, 9, 6, "mat-toolbar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavbarComponent_mat_toolbar_1_Template, 4, 0, "mat-toolbar", 1);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.SignedIn || ctx.consigneeLoggedIn);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.SignedIn && ctx.sellerSignedIn);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuItem"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__["MatBadge"]], styles: [".example-spacer[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztFQUNoQiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXNwYWNlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gIH0iXX0= */"] });
    return NavbarComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, { sellerSignedIn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], consigneeLoggedIn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], SignedIn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], Register: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "mSt+":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");







var _c0 = function () { return ["user/register"]; };
var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(dialog, router) {
        this.dialog = dialog;
        this.router = router;
        // openSList(){
        //   let dialogRef = this.dialog.open(ShlistDialogComponent);
        //   dialogRef.afterClosed().subscribe(result =>{
        //     console.log(`Dialog res: ${result}`);
        //   })
        // }
        this.Register = false;
    }
    LandingPageComponent.prototype.openSList = function (page) {
        console.log(page);
        // this.visible = this.visible?false:true;
        this.router.navigate(["" + page]);
    };
    LandingPageComponent.prototype.ngOnInit = function () {
        // console.log("call")
    };
    LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["landing-page"]], inputs: { name: "name" }, decls: 16, vars: 2, consts: [[1, "example-container"], ["mode", "side", 1, "example-sidenav"], ["sidenav", ""], ["mat-raised-button", ""], [1, "example-card"], ["src", "../../assets/images/logo.png"], ["mat-raised-button", "", "color", "primary", "routerLinkActive", "active", 3, "routerLink"]], template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Auto-resizing sidenav");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Toggle extra text ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "TradeTrip is a crossborder platform which digitises ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " and automates trade while reducing transaction costs and paper work");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "SIGN UP");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: [".example-container[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 90vh;\n    background-image: url('gT.jpg');\n    background-size: cover;\n  }\n  \n  .example-sidenav-content[_ngcontent-%COMP%] {\n    display: flex;\n    height: 100%;\n    align-items: center;\n    justify-content: center;\n  }\n  \n  .example-sidenav[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  \n  .example-card[_ngcontent-%COMP%]  {\n    margin: 30px;\n    height: 80vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: whitesmoke;\n    opacity: 0.6;\n    \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiwrQkFBbUQ7SUFDbkQsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUNBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsWUFBWTs7RUFFZCIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9nVC5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG4gIFxuICAuZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5leGFtcGxlLXNpZGVuYXYge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbiAgLmV4YW1wbGUtY2FyZCAge1xuICAgIG1hcmdpbjogMzBweDtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIFxuICB9XG4iXX0= */"] });
    return LandingPageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'landing-page',
                templateUrl: './landing-page.component.html',
                styleUrls: ['./landing-page.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "t0Il":
/*!******************************************!*\
  !*** ./src/app/loader/loader.service.ts ***!
  \******************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");

// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import { BehaviorSubject } from 'rxjs/Rx'


var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.loader = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ id: 'global', status: false });
        this.loaderStatus$ = this.loader.asObservable();
    }
    /**
     * Show loader
     * @param {string} id
     */
    LoaderService.prototype.showLoader = function (id) {
        if (id === void 0) { id = 'global'; }
        this.loader.next({ id: id, status: true });
    };
    /**
     * Hide loader
     * @param {string} id
     */
    LoaderService.prototype.hideLoader = function (id) {
        if (id === void 0) { id = 'global'; }
        this.loader.next({ id: id, status: false });
    };
    LoaderService.ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(); };
    LoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoaderService, factory: LoaderService.ɵfac });
    return LoaderService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "uKQR":
/*!***************************************************!*\
  !*** ./src/app/bank/loginfo/loginfo.component.ts ***!
  \***************************************************/
/*! exports provided: LoginfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginfoComponent", function() { return LoginfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/loader/loader.service */ "t0Il");
/* harmony import */ var src_app_service_backend_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/backend.service */ "/VBx");
/* harmony import */ var src_app_service_web3_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/service/web3.service */ "+Ptt");
/* harmony import */ var src_app_service_ipfs_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/service/ipfs.service */ "4/d+");
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/service/api.service */ "PLN7");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../loader/loader.component */ "kQyY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");






















function LoginfoComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " # ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginfoComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r14 + 1 + _r12.pageIndex * _r12.pageSize, " ");
} }
function LoginfoComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "DB Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginfoComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r15.pastRecord, " ");
} }
function LoginfoComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Current Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginfoComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", element_r16.currentRecord);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r16.currentRecord, " ");
} }
function LoginfoComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Wallet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginfoComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r17.wallet, " ");
} }
function LoginfoComponent_th_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginfoComponent_td_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r18.dateVerified, "medium"), "");
} }
function LoginfoComponent_tr_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 32);
} }
function LoginfoComponent_tr_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 33);
} }
var _c0 = function () { return [4, 8, 20, 40, 100]; };
var LoginfoComponent = /** @class */ (function () {
    function LoginfoComponent(fb, activatedRoute, loaderService, route, backend, web3, ipfs, apiService, cd, dialoglei) {
        this.activatedRoute = activatedRoute;
        this.loaderService = loaderService;
        this.route = route;
        this.backend = backend;
        this.web3 = web3;
        this.ipfs = ipfs;
        this.apiService = apiService;
        this.cd = cd;
        this.dialoglei = dialoglei;
        this.logsData = [];
        this.splitLog = [];
        this.resultArray = [];
        this.displayedColumns = ['position', 'action', 'usertype', 'company', 'date'];
    }
    LoginfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderService.showLoader('bankLoader');
        console.log('ngoninit');
        console.log(this.dialoglei.dataKey);
        var LEINo = this.dialoglei.dataKey;
        console.log(LEINo);
        this.LEI = LEINo;
        this.apiService.getLogs(this.LEI).subscribe(function (result) {
            console.log('Log Info');
            console.log(result);
            _this.logsData = result;
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](result);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
            _this.cd.detectChanges();
            _this.loaderService.hideLoader('bankLoader');
        });
    };
    LoginfoComponent.ɵfac = function LoginfoComponent_Factory(t) { return new (t || LoginfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_backend_service__WEBPACK_IMPORTED_MODULE_8__["BackendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_web3_service__WEBPACK_IMPORTED_MODULE_9__["Web3Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_ipfs_service__WEBPACK_IMPORTED_MODULE_10__["IpfsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])); };
    LoginfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginfoComponent, selectors: [["app-loginfo"]], viewQuery: function LoginfoComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        } }, decls: 44, vars: 8, consts: [[1, "loaders"], [1, "bankLoader"], [3, "id"], ["mat-dialog-title", ""], ["align", "end"], ["mat-dialog-close", "", 2, "float", "left"], [1, "mat-typography"], [1, "example-sidenav-content"], [1, "main-content"], [1, "container-fluid"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12"], [1, "mat-elevation-z8"], [2, "overflow-x", "auto"], ["mat-table", "", "matSort", "", 1, "table", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "action"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "usertype"], ["mat-cell", "", 3, "matTooltip", 4, "matCellDef"], ["matColumnDef", "company"], ["matColumnDef", "date"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSize", "pageSizeOptions"], ["paginator", ""], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 3, "matTooltip"], ["mat-header-row", ""], ["mat-row", ""]], template: function LoginfoComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-loader", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-actions", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "close");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-dialog-content", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "LEI Logs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " LEI \u00A0: \u00A0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "table", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25, 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, LoginfoComponent_th_26_Template, 2, 0, "th", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, LoginfoComponent_td_27_Template, 2, 1, "td", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](28, 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, LoginfoComponent_th_29_Template, 2, 0, "th", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, LoginfoComponent_td_30_Template, 2, 1, "td", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](31, 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, LoginfoComponent_th_32_Template, 2, 0, "th", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, LoginfoComponent_td_33_Template, 2, 2, "td", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](34, 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, LoginfoComponent_th_35_Template, 2, 0, "th", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, LoginfoComponent_td_36_Template, 2, 1, "td", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](37, 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, LoginfoComponent_th_38_Template, 2, 0, "th", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, LoginfoComponent_td_39_Template, 3, 4, "td", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, LoginfoComponent_tr_40_Template, 1, 0, "tr", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, LoginfoComponent_tr_41_Template, 1, 0, "tr", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "mat-paginator", 26, 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "bankLoader");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.LEI);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", 4)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        } }, directives: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__["LoaderComponent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogActions"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCard"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltip"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"]], styles: ["td[_ngcontent-%COMP%] {\n    vertical-align: middle;\n  }\n  \n  thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    vertical-align: middle ;\n    \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFuay9sb2dpbmZvL2xvZ2luZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLHVCQUF1Qjs7RUFFekIiLCJmaWxlIjoic3JjL2FwcC9iYW5rL2xvZ2luZm8vbG9naW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGQge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgXG4gIHRoZWFkIHRoIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlIDtcbiAgICBcbiAgfSJdfQ== */"] });
    return LoginfoComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loginfo',
                templateUrl: './loginfo.component.html',
                styleUrls: ['./loginfo.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: src_app_service_backend_service__WEBPACK_IMPORTED_MODULE_8__["BackendService"] }, { type: src_app_service_web3_service__WEBPACK_IMPORTED_MODULE_9__["Web3Service"] }, { type: src_app_service_ipfs_service__WEBPACK_IMPORTED_MODULE_10__["IpfsService"] }, { type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
            }] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _bank_advisory_transaction_advisory_transaction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bank/advisory-transaction/advisory-transaction.component */ "izLC");
/* harmony import */ var _bank_bank_dashboard_bank_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bank/bank-dashboard/bank-dashboard.component */ "c+4X");
/* harmony import */ var _bank_issuing_transaction_issuing_transaction_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bank/issuing-transaction/issuing-transaction.component */ "R0aH");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "mSt+");
/* harmony import */ var _user_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user-login/user-login.component */ "IipO");
/* harmony import */ var _user_user_register_user_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/user-register/user-register.component */ "XxbU");
/* harmony import */ var _bank_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bank/analytics/analytics.component */ "4jFk");
/* harmony import */ var _bank_lei_issue_lei_issue_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bank/lei-issue/lei-issue.component */ "dt0F");
/* harmony import */ var _bank_transaction_issue_transaction_issue_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bank/transaction-issue/transaction-issue.component */ "Pmdg");
/* harmony import */ var _bank_transaction_history_transaction_history_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bank/transaction-history/transaction-history.component */ "xmzm");
/* harmony import */ var _bank_history_history_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bank/history/history.component */ "XmV7");
/* harmony import */ var _bank_roles_roles_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bank/roles/roles.component */ "JR9W");
















var routes = [
    { path: '', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_5__["LandingPageComponent"] },
    { path: 'user/login', component: _user_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_6__["UserLoginComponent"] },
    { path: 'user/register', component: _user_user_register_user_register_component__WEBPACK_IMPORTED_MODULE_7__["UserRegisterComponent"] },
    { path: 'bank_dashboard', component: _bank_bank_dashboard_bank_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["BankDashboardComponent"] },
    { path: 'bank_dashboard/:id', component: _bank_bank_dashboard_bank_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["BankDashboardComponent"] },
    { path: 'issuing_transaction', component: _bank_issuing_transaction_issuing_transaction_component__WEBPACK_IMPORTED_MODULE_4__["IssuingTransactionComponent"] },
    { path: 'advisory_transaction', component: _bank_advisory_transaction_advisory_transaction_component__WEBPACK_IMPORTED_MODULE_2__["AdvisoryTransactionComponent"] },
    // { path:'lcview',component:LcviewComponent},//just for demo routing page
    { path: 'analytics', component: _bank_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_8__["AnalyticsComponent"] },
    { path: 'lei_issue', component: _bank_lei_issue_lei_issue_component__WEBPACK_IMPORTED_MODULE_9__["LeiIssueComponent"] },
    { path: 'tranasaction_issue', component: _bank_transaction_issue_transaction_issue_component__WEBPACK_IMPORTED_MODULE_10__["TransactionIssueComponent"] },
    { path: 'transaction_history', component: _bank_transaction_history_transaction_history_component__WEBPACK_IMPORTED_MODULE_11__["TransactionHistoryComponent"] },
    { path: 'history/:id', component: _bank_history_history_component__WEBPACK_IMPORTED_MODULE_12__["HistoryComponent"] },
    { path: 'roles', component: _bank_roles_roles_component__WEBPACK_IMPORTED_MODULE_13__["RolesComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wIt8":
/*!*******************************************!*\
  !*** ./build/contracts/Registration.json ***!
  \*******************************************/
/*! exports provided: contractName, abi, metadata, bytecode, deployedBytecode, immutableReferences, generatedSources, deployedGeneratedSources, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, networkType, devdoc, userdoc, default */
/***/ (function(module) {


/***/ }),

/***/ "xmzm":
/*!***************************************************************************!*\
  !*** ./src/app/bank/transaction-history/transaction-history.component.ts ***!
  \***************************************************************************/
/*! exports provided: TransactionHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionHistoryComponent", function() { return TransactionHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var src_app_service_web3_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/web3.service */ "+Ptt");
/* harmony import */ var src_app_service_backend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/backend.service */ "/VBx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/loader/loader.service */ "t0Il");
/* harmony import */ var src_app_service_ipfs_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/ipfs.service */ "4/d+");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/app.component */ "Sy1n");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../loader/loader.component */ "kQyY");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "FKr1");




















function TransactionHistoryComponent_h4_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h4", 25);
} }
function TransactionHistoryComponent_h4_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TransactionHistoryComponent_h4_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Transaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TransactionHistoryComponent_h4_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TransactionHistoryComponent_h4_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Analytics");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TransactionHistoryComponent_h4_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var TransactionHistoryComponent = /** @class */ (function () {
    function TransactionHistoryComponent(web3, backend, router, loaderService, ipfs, cd, AppComponent, route, dialog) {
        var _this = this;
        this.web3 = web3;
        this.backend = backend;
        this.router = router;
        this.loaderService = loaderService;
        this.ipfs = ipfs;
        this.cd = cd;
        this.AppComponent = AppComponent;
        this.route = route;
        this.dialog = dialog;
        this.showFiller = false;
        this.isExpanded = false;
        console.warn("calling order constra");
        this.web3.checkAndInstantiateWeb3()
            .then(function (checkConn) {
            console.log(checkConn);
            if (checkConn === 'connected') {
                _this.web3.loadBlockChainData()
                    .then(function (accountData) {
                    console.log(accountData[0]);
                    _this.accountNumber = accountData[0];
                    _this.web3.getAllContract()
                        .then(function (contractRes) {
                        if (contractRes) {
                            console.log(contractRes);
                            _this.registration = contractRes[1];
                            _this.registration.methods.getUserHashType(_this.accountNumber)
                                .call()
                                .then(function (user) {
                                console.log('user');
                                console.log(user);
                                if (!user[0]) {
                                }
                                else {
                                    console.log('user');
                                    console.log(user);
                                    _this.ipfs.getHashFromIPFS(user[0]).then(function (data) {
                                        _this.ipfsConverted2 = JSON.parse(Buffer.from(data.value.buffer).toString());
                                        console.log(_this.ipfsConverted2);
                                        _this.userinfo = user[0];
                                    });
                                }
                            });
                        }
                    });
                }, function (err) {
                    console.log('account error', err);
                });
            }
        }, function (err) {
            alert(err);
        });
    }
    // public chartType: string = 'line';
    // this.bankName =;
    TransactionHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderService.showLoader('bankLoader');
        this.route.params.subscribe(function (params) {
            console.log(params);
            console.log(params['id']);
            if (params['id']) {
                // getHashFromIPFS
                _this.ipfs.getHashFromIPFS(params['id']).then(function (data) {
                    _this.ipfsConverted = JSON.parse(Buffer.from(data.value.buffer).toString());
                    console.log(_this.ipfsConverted);
                    _this.bankName = _this.ipfsConverted.bankName;
                    _this.bankMail = _this.ipfsConverted.email;
                    _this.userName = _this.ipfsConverted.firstName + " " + _this.ipfsConverted.lastName;
                    _this.loaderService.hideLoader('bankLoader');
                });
            }
        });
    };
    TransactionHistoryComponent.prototype.viewIssuing = function () {
        console.log('in view url');
        this.router.navigate(['issuing_transaction']);
    };
    TransactionHistoryComponent.prototype.viewAdvisory = function () {
        this.router.navigate(['advisory_transaction']);
    };
    TransactionHistoryComponent.prototype.viewBidsTable = function () {
        this.router.navigate(['bids_table']);
    };
    TransactionHistoryComponent.prototype.getDBAPI = function () {
        this.router.navigate(['analytics']);
        // this.backend.getDBAPI().subscribe((result) => {
        //   console.log(result);
        // });
    };
    TransactionHistoryComponent.prototype.redirectDashboard = function () {
        this.router.navigate(['bank_dashboard', { id: this.userinfo }]);
    };
    TransactionHistoryComponent.ɵfac = function TransactionHistoryComponent_Factory(t) { return new (t || TransactionHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_web3_service__WEBPACK_IMPORTED_MODULE_3__["Web3Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_ipfs_service__WEBPACK_IMPORTED_MODULE_7__["IpfsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"])); };
    TransactionHistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransactionHistoryComponent, selectors: [["app-transaction-history"]], viewQuery: function TransactionHistoryComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        } }, decls: 47, vars: 7, consts: [[1, "loaders"], [1, "bankLoader"], [3, "id"], [1, "example-container"], ["disableClose", "true", "opened", "true", "mode", "side", 1, "example-sidenav"], ["sidenav", ""], ["mat-list-icon", "", "matTooltip", "Expand", 1, "navicon", 3, "click"], ["mat-line", "", 4, "ngIf"], ["mat-list-icon", "", "matTooltip", "Dashboard", 1, "navicon", 3, "click"], ["matTooltip", "Transaction History", "mat-list-icon", "", 1, "navicon", "active", 3, "click"], ["mat-list-icon", "", "matTooltip", "Balance", 1, "navicon"], ["mat-list-icon", "", "matTooltip", "Analytics", 1, "navicon"], ["mat-list-icon", "", "matTooltip", "Report", "routerLink", "/bank/report", 1, "navicon"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "click"], ["aria-current", "page", 1, "breadcrumb-item"], [1, "example-sidenav-content"], [1, "example-card"], [1, "main-content"], [1, "container-fluid"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12"], [2, "padding", "10px 10px 10px 10px"], ["mat-line", ""]], template: function TransactionHistoryComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-loader", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav", 4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-nav-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionHistoryComponent_Template_mat_icon_click_8_listener() { return ctx.isExpanded = !ctx.isExpanded; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "menu");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TransactionHistoryComponent_h4_10_Template, 1, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionHistoryComponent_Template_mat_icon_click_12_listener() { return ctx.redirectDashboard(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "dashboard");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TransactionHistoryComponent_h4_14_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionHistoryComponent_Template_mat_icon_click_16_listener() { return ctx.redirectDashboard(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "swap_horiz");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TransactionHistoryComponent_h4_18_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "paid");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TransactionHistoryComponent_h4_22_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "analytics");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, TransactionHistoryComponent_h4_26_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "summarize");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, TransactionHistoryComponent_h4_30_Template, 2, 0, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nav", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ol", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionHistoryComponent_Template_a_click_34_listener() { return ctx.redirectDashboard(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Home");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "MarketPlace");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Market Place: List of Orders Published");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "bankLoader");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
        } }, directives: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__["LoaderComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListIconCssMatStyler"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCard"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatLine"]], styles: ["mat-sidenav[_ngcontent-%COMP%]{\n    \n  background:goldenrod;\n  \n  }\n  mat-card[_ngcontent-%COMP%]{\n      margin-bottom: 30px;\n  }\n  .navicon[_ngcontent-%COMP%]{\n  color: white;\n  }\n  .example-container[_ngcontent-%COMP%] {\n    display: block;\n    overflow: auto;\n    min-height: 100vh;\n    height: auto;\n    margin: 0;\n  \n  \n  \n  }\n  .example-card[_ngcontent-%COMP%]{\n    display: block;\n    overflow: auto;\n    min-height: 100vh;\n    height: auto;\n    margin: 0;\n    \n  }\n  .example-sidenav-content[_ngcontent-%COMP%] {\n    overflow: auto;\n    width: 100%;\n    height: 100%;\n  \n  }\n  .example-sidenav[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .demo-panel[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 90%;\n    margin: 10px 0px;\n  }\n  .vl[_ngcontent-%COMP%] {\n    border-left: 1px solid gray;\n    height: 500px;\n  }\n  table[_ngcontent-%COMP%] {\n    width: 100%;\n    table-layout:fixed\n  }\n  .mat-form-field[_ngcontent-%COMP%] {\n    font-size: 14px;\n    width: 100%;\n  }\n  button[_ngcontent-%COMP%]{\n    \n    font: 15px;\n\n  }\n  td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n    \n    \n    \n    \n     \n     \n     \n\n     \n     \n     \n  }\n  th[_ngcontent-%COMP%]{\n    \n    background:goldenrod;\n  font-weight: bold;\n  font-size: large;\n  color: white;\n  }\n  .profileimg[_ngcontent-%COMP%] {\n    border-radius: 50%;\n  }\n  .chartdiv[_ngcontent-%COMP%]{\n    width:100%;\n    height:250px;\n  }\n  .card[_ngcontent-%COMP%]{\n    background-color: whitesmoke;\n  }\n  .subnote[_ngcontent-%COMP%]{\n    font-size: 10px;\n    color: gray;\n  }\n  .sideicon[_ngcontent-%COMP%]{\n    padding: 10px;\n    margin: 10px;\n    border:\"1px solid\";\n    border-radius: 10%;\n    background-color: grey;\n  }\n  .active[_ngcontent-%COMP%]{\n    background-color: cornflowerblue;\n    border-radius: 50%;\n  }\n  .center[_ngcontent-%COMP%]{\n      justify-content: center;\n  }\n  .cardicon1[_ngcontent-%COMP%]{\n     font-size: 100px;\n     color:green;\n  }\n  .cardicon2[_ngcontent-%COMP%]{\n    font-size: 100px;\n    color:yellowgreen;\n  }\n  \n  .wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: calc(100vh - 20px);\n    \n  }\n  .inner[_ngcontent-%COMP%] {\n    \n    color: black;\n    padding: 12px;\n  }\n  table[_ngcontent-%COMP%]{\n    width: 100%;\n   }\n  @media only screen and (min-width: 992px){\n  .mat-column-pubDate[_ngcontent-%COMP%] {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 56% !important;\n    width: 10% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  .mat-column-endDate[_ngcontent-%COMP%] {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 56% !important;\n    width: 8% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n   .mat-column-order[_ngcontent-%COMP%] {\n     word-wrap: break-word !important;\n     white-space: unset !important;\n     flex: 0 0 56% !important;\n     width: 12% !important;\n     overflow-wrap: break-word;\n     word-wrap: break-word;\n   \n     word-break: break-word;\n   \n     -ms-hyphens: auto;\n     -webkit-hyphens: auto;\n     hyphens: auto;\n   }\n   .mat-column-buyer[_ngcontent-%COMP%] {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 56% !important;\n    width: 10% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n   .mat-column-seller[_ngcontent-%COMP%] {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 56% !important;\n    width: 6% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n\n  .mat-column-spl[_ngcontent-%COMP%] {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 56% !important;\n    width: 10% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  .mat-column-ci[_ngcontent-%COMP%] {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 56% !important;\n    width: 16% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  .mat-column-action[_ngcontent-%COMP%] {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 56% !important;\n    width:9% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  .mat-column-bol[_ngcontent-%COMP%] {\n    word-wrap: break-word !important;\n    white-space: unset !important;\n    flex: 0 0 56% !important;\n    width: 11% !important;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  \n    word-break: break-word;\n  \n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n }\n  \n  @media only screen and (min-width: 600px) {\n  .mat-column[_ngcontent-%COMP%]{\n    width:auto;\n  }\n}\n  \n  @media only screen and (min-width: 768px) {\n  .mat-column[_ngcontent-%COMP%]{\n    width:auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFuay90cmFuc2FjdGlvbi1oaXN0b3J5L3RyYW5zYWN0aW9uLWhpc3RvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxnQ0FBZ0M7RUFDbEMsb0JBQW9COztFQUVwQjtFQUNBO01BQ0ksbUJBQW1CO0VBQ3ZCO0VBQ0E7RUFDQSxZQUFZO0VBQ1o7RUFDQTtJQUNFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixTQUFTOzs7O0VBSVg7RUFDQTtJQUNFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixTQUFTO0lBQ1QsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7O0VBRWQ7RUFFQTtJQUNFLGFBQWE7RUFDZjtFQUVBO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLDJCQUEyQjtJQUMzQixhQUFhO0VBQ2Y7RUFDQTtJQUNFLFdBQVc7SUFDWDtFQUNGO0VBRUE7SUFDRSxlQUFlO0lBQ2YsV0FBVztFQUNiO0VBQ0E7SUFDRSxrQ0FBa0M7SUFDbEMsVUFBVTs7RUFFWjtFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLEtBQUs7SUFDTCx3QkFBd0I7O0tBRXZCOzs7MkJBR3NCO0tBQ3RCLDBCQUEwQjtLQUMxQjs7OzsrQkFJMEI7O0tBRTFCLGtDQUFrQztLQUNsQyxzQkFBc0I7S0FDdEIsNkJBQTZCO0VBQ2hDO0VBQ0E7SUFDRSxpQ0FBaUM7SUFDakMsb0JBQW9CO0VBQ3RCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0VBQ2Q7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7RUFDYjtFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtFQUNwQjtFQUNBO01BQ0ksdUJBQXVCO0VBQzNCO0VBQ0E7S0FDRyxnQkFBZ0I7S0FDaEIsV0FBVztFQUNkO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CO0VBQ0EsV0FBVztFQUNYO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixhQUFhO0VBQ2Y7RUFFQTtJQUNFLFdBQVc7R0FDWjtFQUVBO0VBQ0Q7SUFDRSxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLHFCQUFxQjs7SUFFckIsc0JBQXNCOztJQUV0QixpQkFBaUI7SUFFakIscUJBQXFCO0lBQ3JCLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixxQkFBcUI7O0lBRXJCLHNCQUFzQjs7SUFFdEIsaUJBQWlCO0lBRWpCLHFCQUFxQjtJQUNyQixhQUFhO0VBQ2Y7R0FDQztLQUNFLGdDQUFnQztLQUNoQyw2QkFBNkI7S0FDN0Isd0JBQXdCO0tBQ3hCLHFCQUFxQjtLQUNyQix5QkFBeUI7S0FDekIscUJBQXFCOztLQUVyQixzQkFBc0I7O0tBRXRCLGlCQUFpQjtLQUVqQixxQkFBcUI7S0FDckIsYUFBYTtHQUNmO0dBQ0E7SUFDQyxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLHFCQUFxQjs7SUFFckIsc0JBQXNCOztJQUV0QixpQkFBaUI7SUFFakIscUJBQXFCO0lBQ3JCLGFBQWE7RUFDZjtHQUNDO0lBQ0MsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixxQkFBcUI7O0lBRXJCLHNCQUFzQjs7SUFFdEIsaUJBQWlCO0lBRWpCLHFCQUFxQjtJQUNyQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLHFCQUFxQjs7SUFFckIsc0JBQXNCOztJQUV0QixpQkFBaUI7SUFFakIscUJBQXFCO0lBQ3JCLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixxQkFBcUI7O0lBRXJCLHNCQUFzQjs7SUFFdEIsaUJBQWlCO0lBRWpCLHFCQUFxQjtJQUNyQixhQUFhO0VBQ2Y7RUFDQTtJQUNFLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIscUJBQXFCOztJQUVyQixzQkFBc0I7O0lBRXRCLGlCQUFpQjtJQUVqQixxQkFBcUI7SUFDckIsYUFBYTtFQUNmO0VBQ0E7SUFDRSxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLHFCQUFxQjs7SUFFckIsc0JBQXNCOztJQUV0QixpQkFBaUI7SUFFakIscUJBQXFCO0lBQ3JCLGFBQWE7RUFDZjtDQUNEO0VBQ0Esb0VBQW9FO0VBQ3JFO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjtFQUVBLHFEQUFxRDtFQUNyRDtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9iYW5rL3RyYW5zYWN0aW9uLWhpc3RvcnkvdHJhbnNhY3Rpb24taGlzdG9yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5tYXQtc2lkZW5hdntcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOmRvZGdlcmJsdWUgKi9cbiAgYmFja2dyb3VuZDpnb2xkZW5yb2Q7XG4gIFxuICB9XG4gIG1hdC1jYXJke1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuICAubmF2aWNvbntcbiAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogMDtcbiAgXG4gIFxuICBcbiAgfVxuICAuZXhhbXBsZS1jYXJke1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW46IDA7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlOyAqL1xuICB9XG4gIC5leGFtcGxlLXNpZGVuYXYtY29udGVudCB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICBcbiAgfVxuICBcbiAgLmV4YW1wbGUtc2lkZW5hdiB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICBcbiAgLmRlbW8tcGFuZWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTAlO1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG4gIH1cbiAgLnZsIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyYXk7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgfVxuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGFibGUtbGF5b3V0OmZpeGVkXG4gIH1cbiAgXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIGJ1dHRvbntcbiAgICAvKiBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4OyAqL1xuICAgIGZvbnQ6IDE1cHg7XG5cbiAgfVxuICBcbiAgdGQsIHRoIHtcbiAgICAvKiB3aWR0aDogMjUlOyAqL1xuICAgIC8qICAqL1xuICAgIC8qIHBhZGRpbmctbGVmdDogMjBweDsgKi9cbiAgICBcbiAgICAgLyogbWF4LXdpZHRoOiAwO1xuICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgKi9cbiAgICAgLyogd29yZC13cmFwOmJyZWFrLXdvcmQ7ICovXG4gICAgIC8qIHdoaXRlLXNwYWNlOiAtby1wcmUtd3JhcDsgXG4gICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwOyBcbiAgICAgd2hpdGUtc3BhY2U6IC1tb3otcHJlLXdyYXA7IFxuICAgICB3aGl0ZS1zcGFjZTogLXByZS13cmFwOyAgKi9cblxuICAgICAvKiBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4OyAqL1xuICAgICAvKiBvdmVyZmxvdy14OiBhdXRvOyAqL1xuICAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cbiAgfVxuICB0aHtcbiAgICAvKiBiYWNrZ3JvdW5kOiBtZWRpdW1zbGF0ZWJsdWU7ICovXG4gICAgYmFja2dyb3VuZDpnb2xkZW5yb2Q7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IGxhcmdlO1xuICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLnByb2ZpbGVpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuICBcbiAgLmNoYXJ0ZGl2e1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjI1MHB4O1xuICB9XG4gIC5jYXJke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIH1cbiAgLnN1Ym5vdGV7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiBncmF5O1xuICB9XG4gIFxuICAuc2lkZWljb257XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYm9yZGVyOlwiMXB4IHNvbGlkXCI7XG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIH1cbiAgLmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgLmNlbnRlcntcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5jYXJkaWNvbjF7XG4gICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gICAgIGNvbG9yOmdyZWVuO1xuICB9XG4gIC5jYXJkaWNvbjJ7XG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgICBjb2xvcjp5ZWxsb3dncmVlbjtcbiAgfVxuICAvKiBsb2FkZXIgKi9cbiAgLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMHB4KTtcbiAgICAvKiBiYWNrZ3JvdW5kOiByZWQ7ICovXG4gIH1cbiAgLmlubmVyIHtcbiAgICAvKiBiYWNrZ3JvdW5kOiBncmVlbjsgKi9cbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogMTJweDtcbiAgfVxuICBcbiAgdGFibGV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICB9XG4gICBcbiAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpe1xuICAubWF0LWNvbHVtbi1wdWJEYXRlIHtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgICBmbGV4OiAwIDAgNTYlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwJSAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBcbiAgICAtbXMtaHlwaGVuczogYXV0bztcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICAgIGh5cGhlbnM6IGF1dG87XG4gIH1cbiAgLm1hdC1jb2x1bW4tZW5kRGF0ZSB7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgZmxleDogMCAwIDU2JSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA4JSAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBcbiAgICAtbXMtaHlwaGVuczogYXV0bztcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICAgIGh5cGhlbnM6IGF1dG87XG4gIH1cbiAgIC5tYXQtY29sdW1uLW9yZGVyIHtcbiAgICAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICBmbGV4OiAwIDAgNTYlICFpbXBvcnRhbnQ7XG4gICAgIHdpZHRoOiAxMiUgIWltcG9ydGFudDtcbiAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgXG4gICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICBcbiAgICAgLW1zLWh5cGhlbnM6IGF1dG87XG4gICAgIC1tb3otaHlwaGVuczogYXV0bztcbiAgICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICAgICBoeXBoZW5zOiBhdXRvO1xuICAgfVxuICAgLm1hdC1jb2x1bW4tYnV5ZXIge1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIGZsZXg6IDAgMCA1NiUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAlICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIFxuICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAgIC1tb3otaHlwaGVuczogYXV0bztcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gICAgaHlwaGVuczogYXV0bztcbiAgfVxuICAgLm1hdC1jb2x1bW4tc2VsbGVyIHtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgICBmbGV4OiAwIDAgNTYlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDYlICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIFxuICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAgIC1tb3otaHlwaGVuczogYXV0bztcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gICAgaHlwaGVuczogYXV0bztcbiAgfVxuXG4gIC5tYXQtY29sdW1uLXNwbCB7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgZmxleDogMCAwIDU2JSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMCUgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XG4gICAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgICBoeXBoZW5zOiBhdXRvO1xuICB9XG4gIC5tYXQtY29sdW1uLWNpIHtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgICBmbGV4OiAwIDAgNTYlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDE2JSAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBcbiAgICAtbXMtaHlwaGVuczogYXV0bztcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICAgIGh5cGhlbnM6IGF1dG87XG4gIH1cbiAgLm1hdC1jb2x1bW4tYWN0aW9uIHtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgICBmbGV4OiAwIDAgNTYlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6OSUgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XG4gICAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgICBoeXBoZW5zOiBhdXRvO1xuICB9XG4gIC5tYXQtY29sdW1uLWJvbCB7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgZmxleDogMCAwIDU2JSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMSUgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XG4gICAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAgIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgICBoeXBoZW5zOiBhdXRvO1xuICB9XG4gfVxuIC8qIFNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHRhYmxldHMgYW5kIGxhcmdlIHBob25lcywgNjAwcHggYW5kIHVwKSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAubWF0LWNvbHVtbntcbiAgICB3aWR0aDphdXRvO1xuICB9XG59XG5cbi8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAubWF0LWNvbHVtbntcbiAgICB3aWR0aDphdXRvO1xuICB9XG59Il19 */"] });
    return TransactionHistoryComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionHistoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-transaction-history',
                templateUrl: './transaction-history.component.html',
                styleUrls: ['./transaction-history.component.css']
            }]
    }], function () { return [{ type: src_app_service_web3_service__WEBPACK_IMPORTED_MODULE_3__["Web3Service"] }, { type: src_app_service_backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: src_app_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }, { type: src_app_service_ipfs_service__WEBPACK_IMPORTED_MODULE_7__["IpfsService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: src_app_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }] }); })();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/buffer/index.js */ "tjlA").Buffer))

/***/ }),

/***/ "ym0D":
/*!*************************************!*\
  !*** ./src/app/bank/bank.module.ts ***!
  \*************************************/
/*! exports provided: BankModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankModule", function() { return BankModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-routing.module */ "vY5A");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../material/material.module */ "hctd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _bank_dashboard_bank_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bank-dashboard/bank-dashboard.component */ "c+4X");
/* harmony import */ var _advisory_transaction_advisory_transaction_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./advisory-transaction/advisory-transaction.component */ "izLC");
/* harmony import */ var _issuing_transaction_issuing_transaction_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./issuing-transaction/issuing-transaction.component */ "R0aH");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _loader_loader_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../loader/loader.module */ "eNvI");
/* harmony import */ var _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./analytics/analytics.component */ "4jFk");
/* harmony import */ var _lei_issue_lei_issue_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lei-issue/lei-issue.component */ "dt0F");
/* harmony import */ var _transaction_issue_transaction_issue_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./transaction-issue/transaction-issue.component */ "Pmdg");
/* harmony import */ var _transaction_history_transaction_history_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./transaction-history/transaction-history.component */ "xmzm");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./history/history.component */ "XmV7");
/* harmony import */ var _roles_roles_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./roles/roles.component */ "JR9W");
/* harmony import */ var _loginfo_loginfo_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./loginfo/loginfo.component */ "uKQR");






















// LcviewComponent
var BankModule = /** @class */ (function () {
    function BankModule() {
    }
    BankModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BankModule });
    BankModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function BankModule_Factory(t) { return new (t || BankModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _loader_loader_module__WEBPACK_IMPORTED_MODULE_13__["LoaderModule"]
            ]] });
    return BankModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BankModule, { declarations: [_bank_dashboard_bank_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["BankDashboardComponent"], _advisory_transaction_advisory_transaction_component__WEBPACK_IMPORTED_MODULE_9__["AdvisoryTransactionComponent"], _issuing_transaction_issuing_transaction_component__WEBPACK_IMPORTED_MODULE_10__["IssuingTransactionComponent"],
        _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_14__["AnalyticsComponent"], _lei_issue_lei_issue_component__WEBPACK_IMPORTED_MODULE_15__["LeiIssueComponent"], _transaction_issue_transaction_issue_component__WEBPACK_IMPORTED_MODULE_16__["TransactionIssueComponent"], _transaction_history_transaction_history_component__WEBPACK_IMPORTED_MODULE_17__["TransactionHistoryComponent"],
        _history_history_component__WEBPACK_IMPORTED_MODULE_18__["HistoryComponent"], _roles_roles_component__WEBPACK_IMPORTED_MODULE_19__["RolesComponent"], _loginfo_loginfo_component__WEBPACK_IMPORTED_MODULE_20__["LoginfoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _loader_loader_module__WEBPACK_IMPORTED_MODULE_13__["LoaderModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BankModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_bank_dashboard_bank_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["BankDashboardComponent"], _advisory_transaction_advisory_transaction_component__WEBPACK_IMPORTED_MODULE_9__["AdvisoryTransactionComponent"], _issuing_transaction_issuing_transaction_component__WEBPACK_IMPORTED_MODULE_10__["IssuingTransactionComponent"],
                    _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_14__["AnalyticsComponent"], _lei_issue_lei_issue_component__WEBPACK_IMPORTED_MODULE_15__["LeiIssueComponent"], _transaction_issue_transaction_issue_component__WEBPACK_IMPORTED_MODULE_16__["TransactionIssueComponent"], _transaction_history_transaction_history_component__WEBPACK_IMPORTED_MODULE_17__["TransactionHistoryComponent"],
                    _history_history_component__WEBPACK_IMPORTED_MODULE_18__["HistoryComponent"], _roles_roles_component__WEBPACK_IMPORTED_MODULE_19__["RolesComponent"], _loginfo_loginfo_component__WEBPACK_IMPORTED_MODULE_20__["LoginfoComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _loader_loader_module__WEBPACK_IMPORTED_MODULE_13__["LoaderModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map