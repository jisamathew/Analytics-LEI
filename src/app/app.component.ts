import {ChangeDetectorRef, Component, HostListener, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild} from '@angular/core';
import {Web3Service} from './service/web3.service';
import {IpfsService} from './service/ipfs.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';

// import {create} from 'ipfs-http-client';
import { ThrowStmt } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Web3StorageService } from './service/web3storage.service';
import { HttpClient } from '@angular/common/http';


declare var Buffer;
// const createClient = require('ipfs-http-client')
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  accountNumber: any;
  productName: any;
  productPrice: any;
  show = true;
  totalProduct = [];
  public marketPlace: any;
  public registration: any;
  balance: any;
  VG: any;
  showalert = true;
  durationInSeconds = 5;
  ipfsConverted: any;
  message = "User Not Registered!";
  action = "Please Signup."
  nameFromTS = "Trade TRip User COnsinee";
  SignedIn:boolean;
  //  SignedIn=false;//landing page
// SignedIn=true;//for other pages
consigneeLoggedIn:boolean;
sellerSignedIn:boolean;
consigneeName:string;
sellerName:string;
  constructor(private cfr: ComponentFactoryResolver, private vcr: ViewContainerRef  ,
    public web3: Web3Service, public ipfs: IpfsService, 
    public cd: ChangeDetectorRef,
    public router: Router, 
    private _snackBar:MatSnackBar,
    public dialog: MatDialog ,
    public web3storage:Web3StorageService,
    private httpClient: HttpClient
    ) {

    this.web3.checkAndInstantiateWeb3()
      .then((checkConn: any) => {
        console.log(checkConn)
        if (checkConn === 'connected') {
          this.web3.loadBlockChainData()
            .then((accountData: any) => {
              console.log(accountData[0])
              this.accountNumber = accountData[0];
              this.web3.getEtherBalance(this.accountNumber)
                .then((data: any) => {
                  this.balance = Number(data).toFixed(2);
                  console.log(this.balance)
                  console.log(data);
                });
              this.web3.getAllContract()
                .then((contractRes: any) => {
                  if (contractRes) {
                    console.log(contractRes)
                    this.registration = contractRes[0];
                    this.registration.methods.getUserHashType(this.accountNumber)
                    .call()
                    .then(user =>{
                      // this.VG = value;
                      // console.log('data',this.VG);
                      // console.log(value.length);
                      console.log('user');
                      console.log(user);
                      if(!user[0]){
                        this.SignedIn=false;//landing page
                        this._snackBar.open(this.message, this.action, {duration:3000});
                      }else{
                        this.SignedIn=true;//for other pages
                        console.log('user');
                        console.log(user);
                        this.web3storage.retrieveFile(user[0]).then(async (filedata: any) => {
                          // no need of calling retreivefile instead directly calling url is done
                          console.log('filedata')
                          console.log(filedata)
                          const URL = "https://"+user[0]+".ipfs.w3s.link/data_analytics_register_data.json"
                          // https://bafybeibt3ws4fzuf7p4kawlogy2auvgy34ee6255sszj5npwnszws4f6ze.ipfs.w3s.link/data_analytics_register_data.json
                          await this.httpClient.get((URL)).subscribe((result:any) => {
                            console.log('lei');
                           console.log(result);
                           console.log(result.alias);
                           this.ipfsConverted = result;
                          //  this.ipfs.getHashFromIPFS(user[0]).then((data:any)=>{
                            // this.ipfsConverted = JSON.parse(Buffer.from(data.value.buffer).toString());
                            console.log(this.ipfsConverted );
                            this.message = "Hello "+ this.ipfsConverted.firstName+" "+this.ipfsConverted.lastName;
                            this.action = "Redirect to Dashboard";
    
                            this._snackBar.open(this.message, this.action,{duration:3000});
                            if(this.ipfsConverted.userRole == 'Consignee'){
                            this.router.navigate(['consignee_dashboard',{id:user[0]}]);
                            }else if(this.ipfsConverted.userRole == 'Seller'){
                              this.sellerName=this.ipfsConverted.companyName;
                              this.router.navigate(['seller_dashboard',{id:user[0]}]);
                            }else if(this.ipfsConverted.userRole == 'Bank'){
                              this.router.navigate(['bank_dashboard',{id:user[0]}]);
                            }else if(this.ipfsConverted.userRole == 'ShippingAgency'){
                              this.router.navigate(['shipping_agency',{id:user[0]}]);
                            }else if(this.ipfsConverted.userRole == 'Carrier'){
                              this.router.navigate(['carrier_dashboard',{id:user[0]}]);
                            }else if(this.ipfsConverted.userRole == 'PortAuthority'){
                              this.router.navigate(['port_authority_dashboard',{id:user[0]}]);
                            }else{
    
                            }
                            // {id:user}
                         
                          })
                            })
                      
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
            }, err => {
              console.log('account error', err);
            });
        }
      }, err => {
        alert(err);
      });
  }

  ngOnInit() {
    this.consigneeLoggedIn=false;
    this.sellerSignedIn=false;
  }

  signup(){

  }

  
}


