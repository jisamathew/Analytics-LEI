import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Web3Service } from '../../service/web3.service';
import { IpfsService } from '../../service/ipfs.service';
import { BackendService } from 'src/app/service/backend.service';
import { Web3StorageService } from 'src/app/service/web3storage.service';


declare var require;
const bytes32 = require('bytes32');

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  showLEIsearch:boolean = false;

  accountNumber: any;
  public marketPlace: any;
  public register: any;
  public myNFT: any;
  public uN: any;
  public ipfsHash: any;
  public cBank = "0x461994192BACd8734d4bCC5f2f70D69d3428B958";
  public sBank = "0x58d256712F73407A1551a2C75B6048E305df3BF9";
  srcResult: any;
  selectedRole: any;
  seletedBankAdd: any;
  bankList = [];
  bankname: any;
  public files: any;
  @Input() Register: boolean;
  @Input() data: string;
  carrierList = []
  bankName: any;
  bankWallet: unknown;
  selectedFood: any;
  postD:any;
  orgcity:any;
  orgcountry:any;
  orgaddress:any;
  legalName:any;
  lei: any;
  userChange:any;

  constructor(private formBuilder: FormBuilder, public web3: Web3Service, public ipfs: IpfsService, private snackBar: MatSnackBar, private backend: BackendService,public web3storage:Web3StorageService) {
    this.Register = true;
    this.web3.checkAndInstantiateWeb3()
      .then((checkConn: any) => {
        if (checkConn === 'connected') {
          this.web3.loadBlockChainData()
            .then((accountData: any) => {
              this.accountNumber = accountData[0];
              console.log(this.accountNumber);
              this.web3.getAllContract()
                .then((contractRes: any) => {
                  if (contractRes) {
                    console.log(contractRes)
                    this.register = contractRes[0];
                    this.backend.retBanks().then((result: any) => {
                      for (let i = 0; i < result.length; i++) {
                        console.log(result[i]);
                        this.web3.getUtf8(result[i])
                          .then(ag => {
                            console.log(ag)
                            this.bankList.push(ag);
                          })
                      }
                    });

                  }
                });
            }, err => {
              console.log('account error', err);
            });
        }
      }, err => {
        alert(err);
      });
  }

  registerForm = this.formBuilder.group({
    // lei: ['', Validators.required],

    lei: [{value: '', disabled: true}, Validators.required],

    leiName:['', Validators.required],
    alias:['', Validators.required],
    userRole: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    wallet: ['', Validators.required],
    // wallet:[{value:'', disabled:true},Validators.required],
    email: ['', Validators.required],
    companyName: [{value: '', disabled: true}, Validators.required],
    legalName: ['', Validators.required],
    city: [{value: '', disabled: true}, Validators.required],
    state: [{value: '', disabled: true}, Validators.required],
    telephone: ['', Validators.required],
    address: [{value: '', disabled: true}, Validators.required],
    profile: ['', Validators.required],
    banks: ['', Validators.required],
    userBank: ['']
  });

  ngOnInit(): void {

  }

  onSelection(event) {
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

  }
  onChangeBank(event) {
    console.log(event.target.value)
    this.bankName = event.target.value;
    console.log(this.bankname);
    this.backend.returnBankAddress(this.bankname).then((bankWallets) => {
    this.bankWallet = bankWallets;
    console.log(bankWallets);
    });
  }

  saveForm() {
if(this.registerForm.value.userBank !=""){
  this.backend.returnBankAddress(this.registerForm.value.userBank).then((bankWallet) => {
    console.log(bankWallet);
    this.bankWallet = bankWallet;
    // alert(this.bankWallet)

  });
}else{
  console.log("nothinjb");

}
    console.log(this.registerForm.value.userBank);
    setTimeout(()=>{

    if (this.registerForm.value.userRole == "Consignee") {
      this.files = {
     
        address: this.orgaddress,
        city: this.orgcity,
        companyName: this.registerForm.value.companyName,
        lei:this.registerForm.value.lei,
        leiNo:this.lei,
        leiName:this.registerForm.value.leiName,
        alias:this.registerForm.value.alias,
        legalName: this.legalName,
        email: this.registerForm.value.email,
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        profile: "",
        state: this.registerForm.value.state,
        telephone: this.registerForm.value.telephone,
        userRole: "Consignee",
        wallet: this.accountNumber,
        bankName: this.registerForm.value.userBank,
        bankAddress: this.bankWallet
      }
    } else if (this.registerForm.value.userRole == "Seller") {
      this.files = {
        address: this.orgaddress,
        city: this.orgcity,
        leiName:this.registerForm.value.leiName,
        alias:this.registerForm.value.alias,
        leiNo:this.lei,
        companyName:"Wartsila",
        legalName: this.legalName,
        email: this.registerForm.value.email,
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        profile: "",
        state: this.orgcountry,
        telephone: this.registerForm.value.telephone,
        userRole: "Seller",
        wallet: this.accountNumber,
        bankName: this.registerForm.value.userBank,
        bankAddress: this.bankWallet
      }
    } else if (this.registerForm.value.userRole == "Bank") {
      console.log("bankkk")
      this.files = {
        address: this.orgaddress,
        city: this.orgcity,
        leiName:this.registerForm.value.leiName,
        alias:this.registerForm.value.alias,
        leiNo:this.lei,
        companyName: this.registerForm.value.alias,
        legalName: this.legalName,
        email: this.registerForm.value.email,
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        profile: "",
        state: this.orgcountry,
        telephone: this.registerForm.value.telephone,
        userRole: "Bank",
        wallet: this.accountNumber,
        bankName: this.registerForm.value.alias,
        bankAddress: this.accountNumber,
      }
    } else if (this.registerForm.value.userRole == "ShippingAgency") {
      this.files = {
        address: this.orgaddress,
        city: this.orgcity,
        leiName:this.registerForm.value.leiName,
        alias:this.registerForm.value.alias,
        leiNo:this.lei,
        companyName: this.registerForm.value.alias,
        email: this.registerForm.value.email,
        legalName: this.legalName,
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        profile: "",
        state: this.orgcountry,
        telephone: this.registerForm.value.telephone,
        userRole: "ShippingAgency",
        wallet: this.accountNumber,
        bankName: this.registerForm.value.alias,
        bankAddress: this.accountNumber,
      }
    } else if (this.registerForm.value.userRole == "Carrier") {
      this.files = {
        address: this.orgaddress,
        city: this.orgcity,
        leiName:this.registerForm.value.leiName,
        alias:this.registerForm.value.alias,
        leiNo:this.lei,
        companyName: this.registerForm.value.alias,
        email: this.registerForm.value.email,
        legalName: this.legalName,
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        profile: "",
        state: this.orgcountry,
        telephone: this.registerForm.value.telephone,
        userRole: "Carrier",
        wallet: this.accountNumber,
        bankName: this.registerForm.value.alias,
        bankAddress: this.accountNumber,
      }
    } else if (this.registerForm.value.userRole == "PortAuthority") {
      this.files = {
        address: this.orgaddress,
        city: this.orgcity,
        leiName:this.registerForm.value.leiName,
        alias:this.registerForm.value.alias,
        leiNo:this.lei,
        companyName: this.registerForm.value.alias,
        legalName: this.legalName,
        email: this.registerForm.value.email,
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        profile: "",
        state: this.orgcountry,
        telephone: this.registerForm.value.telephone,
        userRole: "PortAuthority",
        wallet: this.accountNumber,
        bankName: this.registerForm.value.alias,
        bankAddress: this.accountNumber,
      }
    } else {

    }

    console.log(this.files);
    // this.uN = bytes32({ input: this.registerForm.value.companyName });
    this.uN = bytes32({ input: this.registerForm.value.alias });
    
    console.log(this.uN)
    this.web3storage.storeFile(this.files).then((data) => {
    // this.ipfs.saveToIpfs(this.files).then((data) => {
      console.log('Hashvalue')
      console.log(data);
      if (this.registerForm.value.userRole == "Consignee") {
        this.register.methods.saveUserDetailsToBCConsignee(this.accountNumber, data, this.registerForm.value.userRole, this.uN, this.cBank).send({ from: this.accountNumber })
          .once('receipt', (receipt) => {
            console.log(receipt);
            this.snackBar.open("User Registration Successful", "Proceed to login", { duration: 3000 });
          });
      } else {
        // this.uN = bytes32({input:this.registerForm.value.firstName});
        console.log("BANK registering")
        this.register.methods.saveUserDetailsToBC(this.accountNumber, data, this.registerForm.value.userRole, this.uN).send({ from: this.accountNumber })
          .once('receipt', (receipt) => {
            console.log(receipt);
            this.snackBar.open("User Registration Successful", "Proceed to login", { duration: 3000 });
          
          });
      }
    })
  }, 5000);

  }
  
sd(){
  this.backend.saveB().then((bankWallets) => {
    this.bankWallet = bankWallets;
    console.log(bankWallets);
    });
}

rd(){
  this.backend.getB().then((bankWallets) => {
    this.bankWallet = bankWallets;
    console.log(bankWallets);
    });
}

dateC(){
  console.log(new Date().getTime());
  this.backend.formatDate(new Date()).then((bankWallets) => {
    // this.bankWallet = bankWallets;
    console.log(bankWallets);
    });
}

dataAPI(){
  // this.backend.getDataAPI().subscribe(data=>{
  //   this.postD = data; 
  // });

const data = {
  id:5,
  firstname: 'Mit',
}  
this.backend.getDataAPI(data).subscribe(data=>{
  console.log(data);
});
}

createPost(){
 const data = {
  email:"jhbhbjknbj",
  name: 'Mit',
  key:'hjyug76yuygjhbjkkh97987'
  // dateCreated:new Date()
}  
this.backend.createPost(data).subscribe(data=>{
  console.log(data);
});
}
 //LEI Check
 getCompanyInfo(e){
  console.log('element searched');
  console.log(e);
  var lei =e;
  this.backend.getLeiCompanyInfo(lei).subscribe((result:any) => {
    console.log('Getting company info');
    console.log(result)
    // var data = JSON.parse(result);
    // console.log(data);
    result.data.forEach(items => {
      console.log(items);
      console.log(items.attributes.entity.legalName.name);
      this.lei = items.attributes.lei;
      // App.createTable(items);
      this.legalName = items.attributes.entity.legalName.name;
      this.orgcity=items.attributes.entity.legalAddress.city;
      this.orgcountry=items.attributes.entity.legalAddress.country;
      this.orgaddress =items.attributes.entity.legalAddress.addressLines[0]+','+items.attributes.entity.legalAddress.addressLines[1]

      // document.getElementById('LEIBasedView').style.display = "block";
      // document.getElementById('LEINO').innerHTML = LEINO;
      // document.getElementById('companyName').value = items.attributes.entity.legalName.name;
    });
  });
}




}
