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
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
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
lei:any;
  displayedColumns: string[] = ['status','lei','kdt', 'dt','db'];
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
      private httpClient: HttpClient 
      ) { 
      console.warn("calling order constra");
      this.route.params.subscribe((params) =>{
        console.log(params);
        this.lei = params.id;
      });
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
                     
   this.httpClient.get((URL)).subscribe((result:any) => {
      this.ipfsConverted2 = result

                      //  this.ipfs.getHashFromIPFS(user[0]).then((data:any)=>{
                        // this.ipfsConverted2 = JSON.parse(Buffer.from(data.value.buffer).toString());
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



    
  ngOnInit(){   
    this.loaderService.showLoader('bankLoader');

    //  alert(this.lei);
     this.backend.getleiHistory(this.lei).subscribe((result:any) => {
      console.log(result);
      console.log(result.leiIssue);
      // this.totalProduct.push(result.leiIssue);
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.cd.detectChanges();
      this.loaderService.hideLoader('bankLoader');
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
viewFraud(){
  this.router.navigate(['tranasaction_issue']);
  
  }
  redirectDashboard(){
    // this.route.navigateByUrl('seller_dashboard/'+this.userinfo);
    this.router.navigate(['bank_dashboard',{id:this.userinfo}]);
}

}
