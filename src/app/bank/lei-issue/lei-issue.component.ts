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
import { LoginfoComponent } from '../loginfo/loginfo.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';
import { HttpClient } from '@angular/common/http';

declare var Buffer;
@Component({
  selector: 'app-lei-issue',
  templateUrl: './lei-issue.component.html',
  styleUrls: ['./lei-issue.component.css']
})
export class LeiIssueComponent implements OnInit {
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

  displayedColumns: string[] = ['lei','status', 'name','legaladdress','city','postalCode','mail','kdt','logs'];
  
  dataSource: MatTableDataSource<any>;

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
    private apiService:ApiService,
    private cd: ChangeDetectorRef,
    public location:Location,
    private route: ActivatedRoute,
    public dialog: MatDialog,
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
                           this.ipfsConverted2 = result;
                      console.log(this.ipfsConverted2 );
                       this.userinfo = user[0];
                          this.loaderService.showLoader('bankLoader');
                       let userWallet = this.ipfsConverted2.wallet;
                       this.apiService.getDBAPI(userWallet).subscribe((result:any) => {
                         console.log('lei');
                        console.log(result);
                        // this.totalProduct.push(result.leiIssue);
                        this.dataSource = new MatTableDataSource(result);
                        this.dataSource.sort = this.sort;
                        this.dataSource.paginator = this.paginator;
                        this.cd.detectChanges();
                        this.loaderService.hideLoader('bankLoader');
                      });
                  
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

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
  // this.route.navigateByUrl('seller_dashboard/'+this.userinfo);
  this.router.navigate(['bank_dashboard',{id:this.userinfo}]);
}
viewLogs(leiNo) {
  var LEI = leiNo;
  console.log('Modal opening');
  console.log('LEI No.', LEI);
  const dialogRef = this.dialog.open(LoginfoComponent, {
    width: '60vw',
    maxWidth: '100vw',
    data: {
      dataKey: LEI
    }
  });


}
}
