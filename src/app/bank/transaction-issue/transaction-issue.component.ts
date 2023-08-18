import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from 'src/app/service/backend.service';
import { IpfsService } from 'src/app/service/ipfs.service';
import { Web3Service } from 'src/app/service/web3.service';

import { MaterialModule } from "../../material/material.module";
import { LoaderService } from 'src/app/loader/loader.service';
import {Location} from '@angular/common';
import { HttpClient } from '@angular/common/http';

declare var Buffer;
@Component({
  selector: 'app-transaction-issue',
  templateUrl: './transaction-issue.component.html',
  styleUrls: ['./transaction-issue.component.css']
})
export class TransactionIssueComponent implements OnInit {
  showFiller = false;
  isExpanded = false;
  ipfsConverted: any;
  bankName:string;
  userName:string;
  bankMail:string;

  totalProduct = [];
  lcs: any;
  public orders: any;
  bols = false;

  displayedColumns: string[] =  ['lei','status','country','c-flag','name','em','act'  ];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  accountNumber: any;

  ipfsConverted2: any;
  userinfo:any;
  public registration: any;

  constructor(private web3: Web3Service, 
    public backend: BackendService,
    public router:Router,
    public loaderService: LoaderService,
    private ipfs: IpfsService,
    private cd: ChangeDetectorRef,
    public location:Location,
    private route: ActivatedRoute,
    private httpClient:HttpClient
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
                  .then(user =>{
                 
                    console.log('user');
                    console.log(user);
                    if(!user[0]){
                    
                    }else{
                      console.log('user');
                      console.log(user);
                      const URL = "https://"+user[0]+".ipfs.w3s.link/data_analytics_register_data.json"
                      // https://bafybeibt3ws4fzuf7p4kawlogy2auvgy34ee6255sszj5npwnszws4f6ze.ipfs.w3s.link/data_analytics_register_data.json
                        this.httpClient.get((URL)).subscribe((result:any) => {
                       // this.ipfs.getHashFromIPFS(params['id']).then((data:any)=>{
                         // this.ipfsConverted = JSON.parse(Buffer.from(data.value.buffer).toString());
                         this.ipfsConverted2 = result
                   
                    //  this.ipfs.getHashFromIPFS(user[0]).then((data:any)=>{
                      // this.ipfsConverted2 = JSON.parse(Buffer.from(data.value.buffer).toString());
                      console.log(this.ipfsConverted2 );
                       this.userinfo = user[0];

          this.bankName =this.ipfsConverted2.bankName;
          this.bankMail = this.ipfsConverted2.email;
          this.userName =this.ipfsConverted2.firstName+" "+this.ipfsConverted2.lastName;
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


    
  ngOnInit(){   
     this.loaderService.showLoader('bankLoader');

     this.backend.getTransaction().subscribe((result:any) => {
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
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.cd.detectChanges();
      this.loaderService.hideLoader('bankLoader');
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
viewCertificate(){
}
getDBAPI(){
  this.router.navigate(['analytics']);

  // this.backend.getDBAPI().subscribe((result) => {
  //   console.log(result);
  // });
}
 redirectDashboard(){
    // this.route.navigateByUrl('seller_dashboard/'+this.userinfo);
    this.router.navigate(['bank_dashboard',{id:this.userinfo}]);
}

}
