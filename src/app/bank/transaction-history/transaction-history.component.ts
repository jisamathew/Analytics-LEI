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

declare var Buffer;
@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
  showFiller = false;
  isExpanded = false;
  ipfsConverted: any;
  bankName:string;
  userName:string;
  bankMail:string;
  // public chartType: string = 'line';
  // this.bankName =;
  ngOnInit(){   
     this.loaderService.showLoader('bankLoader');


    this.route.params.subscribe(params => {
      console.log(params);
      console.log(params['id']);
      if (params['id']) {
         // getHashFromIPFS
          this.ipfs.getHashFromIPFS(params['id']).then((data:any)=>{
            this.ipfsConverted = JSON.parse(Buffer.from(data.value.buffer).toString());
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

  public dialog: MatDialog) { 
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
                  this.registration = contractRes[1];
                  this.registration.methods.getUserHashType(this.accountNumber)
                  .call()
                  .then(user =>{
                 
                    console.log('user');
                    console.log(user);
                    if(!user[0]){
                    
                    }else{
                      console.log('user');
                      console.log(user);

                     this.ipfs.getHashFromIPFS(user[0]).then((data:any)=>{
                      this.ipfsConverted2 = JSON.parse(Buffer.from(data.value.buffer).toString());
                      console.log(this.ipfsConverted2 );
                       this.userinfo = user[0];
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
  this.router.navigate(['analytics']);

  // this.backend.getDBAPI().subscribe((result) => {
  //   console.log(result);
  // });
}
redirectDashboard(){
  this.router.navigate(['bank_dashboard',{id:this.userinfo}]);
}
}
