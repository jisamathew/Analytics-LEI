import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { IpfsService } from 'src/app/service/ipfs.service';
import {MaterialModule} from "../../material/material.module";
import { LoaderService } from 'src/app/loader/loader.service';
import { BackendService } from 'src/app/service/backend.service';
import { Web3Service } from 'src/app/service/web3.service';
import { Web3StorageService } from 'src/app/service/web3storage.service';
import { HttpClient } from '@angular/common/http';

declare var Buffer;
@Component({
  selector: 'app-bank-dashboard',
  templateUrl: './bank-dashboard.component.html',
  styleUrls: ['./bank-dashboard.component.css']
})
export class BankDashboardComponent implements OnInit {
  showFiller = false;
  isExpanded = false;
  ipfsConverted: any;
  bankName:string;
  userName:string;
  bankMail:string;
  ipfsConverted3: any;
  showAnalytics = false;
  showMarketplace = false;
  showKYC = false;
 
  // public chartType: string = 'line';
  // this.bankName =;
  ngOnInit(){   
     this.loaderService.showLoader('bankLoader');


    this.route.params.subscribe(params => {
      console.log(params);
      console.log(params['id']);
      if (params['id']) {
         // getHashFromIPFS

         const URL = "https://"+params['id']+".ipfs.w3s.link/data_analytics_register_data.json"
         // https://bafybeibt3ws4fzuf7p4kawlogy2auvgy34ee6255sszj5npwnszws4f6ze.ipfs.w3s.link/data_analytics_register_data.json
           this.httpClient.get((URL)).subscribe((result:any) => {
          // this.ipfs.getHashFromIPFS(params['id']).then((data:any)=>{
            // this.ipfsConverted = JSON.parse(Buffer.from(data.value.buffer).toString());
            this.ipfsConverted = result
          console.log(this.ipfsConverted );
          this.bankName =this.ipfsConverted.bankName;
          this.bankMail = this.ipfsConverted.email;
          this.userName =this.ipfsConverted.firstName+" "+this.ipfsConverted.lastName;
          this.loaderService.hideLoader('bankLoader');



          })


      }
    });
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

    ipfsConverted2: any;
    accountNumber:any;
    userinfo:any;
    public registration: any;
  
    constructor(private web3: Web3Service, 
      public backend: BackendService,
      public router:Router,
      public loaderService: LoaderService,
      private ipfs: IpfsService,
      private cd: ChangeDetectorRef,
      public AppComponent:AppComponent,
      private route: ActivatedRoute,
      public web3storage: Web3StorageService,
    public dialog: MatDialog,
    private httpClient: HttpClient
    ) { 
      console.warn("calling order constra");
      this.web3.checkAndInstantiateWeb3()
      .then((checkConn: any) => {
        console.log(checkConn)
        if (checkConn === 'connected') {
          this.web3.loadBlockChainData()
            .then((accountData: any) => {
              console.log(accountData[0])
              this.accountNumber = accountData[0];
             
              this.web3.getAllContract()
                .then((contractRes: any) => {
                  if (contractRes) {
                    console.log(contractRes)
                    this.registration = contractRes[0];
                    this.registration.methods.getUserHashType(this.accountNumber)
                    .call()
                    .then(async user =>{
                   
                      console.log('user');
                      console.log(user);
                      if(!user[0]){
                      
                      }else{
                        console.log('user');
                        console.log(user);
                        // this.web3storage.retrieveFile(user[0]).then(async (filedata: any) => {
                        // console.log('filedata')
                        // console.log(filedata)
                        // })
                        const URL = "https://"+user[0]+".ipfs.w3s.link/data_analytics_register_data.json"
                          // https://bafybeibt3ws4fzuf7p4kawlogy2auvgy34ee6255sszj5npwnszws4f6ze.ipfs.w3s.link/data_analytics_register_data.json
                           await this.httpClient.get((URL)).subscribe((result:any) => {
                            console.log('lei');
                           console.log(result);
                           console.log(result.alias);
                           this.ipfsConverted2 = result;
                          
                      //  this.ipfs.getHashFromIPFS(user[0]).then((data:any)=>{
                        // this.ipfsConverted2 = JSON.parse(Buffer.from(data.value.buffer).toString());
                        console.log('this.ipfsConverted2');
                        console.log(this.ipfsConverted2 );
                         this.userinfo = user[0];

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

viewIssuing(){
  console.log('in view url');
  this.router.navigate(['issuing_transaction']);

}
viewAdvisory(){
  this.router.navigate(['advisory_transaction']);

}

viewBidsTable(){
  this.router.navigate(['bids_table']);
}

getDBAPI(){
  // this.router.navigate(['analytics']);
  // this.router.navigate(['tranasaction_issue']);

  this.router.navigate(['lei_issue']);

  // this.backend.getDBAPI().subscribe((result) => {
  //   console.log(result);
  // });
}
redirectDashboard(){
  this.router.navigate(['bank_dashboard',{id:this.userinfo}]);
}

}
