import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/service/backend.service';
import { IpfsService } from 'src/app/service/ipfs.service';
import { Web3Service } from 'src/app/service/web3.service';
import { MaterialModule } from "../../material/material.module";
import { LoaderService } from 'src/app/loader/loader.service';

declare var Buffer;
@Component({
  selector: 'app-advisory-transaction',
  templateUrl: './advisory-transaction.component.html',
  styleUrls: ['./advisory-transaction.component.css']
})
export class AdvisoryTransactionComponent implements OnInit {
  showFiller = false;
  isExpanded = false;
  public orders: any;
  ipfsConverted: any;
  totalProduct = [];
  lcs: any;
  ipfsConverted2: any;
  accountNumber:any;
  userinfo:any;
  public registration: any;
  displayedColumns: string[] = ['id', 'order', 'lc', 'action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private web3: Web3Service, 
    public backend: BackendService,public route:Router,
      public loaderService: LoaderService,
       private ipfs: IpfsService, private cd: ChangeDetectorRef) {
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

  ngOnInit(): void {
    console.warn("in ngOnInit");

    this.loaderService.showLoader('bankLoader');
    this.web3.getAllContract()
      .then((contractRes: any) => {
        this.orders = contractRes[3];
        this.backend.returnAdvOrders().then((result: any) => {
          console.log(result);
          for (let i = 0; i < result.length; i++) {
            console.log(result[i]);
            if (result[i][2] == 0) {
              this.totalProduct.push({
                "id": i + 1,
                "order": result[i][0],
                "lc": result[i][1],
                "beneficiaryBank": "NA",
                "beneficiary": "NA",
                "LCCASHED": "NO",
                "LC": "0"
              });
              console.log(this.totalProduct);
              this.dataSource = new MatTableDataSource(this.totalProduct);
              this.cd.detectChanges();
            } else if (result[i][2] == 1) {
              this.backend.getLCDetails(result[i][0]).then((d: any) => {
                this.totalProduct.push({
                  "id": i + 1,
                  "order": result[i][0],
                  "lc": result[i][1],
                  "beneficiaryBank": d.sellerBank,
                  "beneficiary": d.sellerWallet,
                  "LCCASHED": "NO",
                  "LC": "1"
                });
                console.log(this.totalProduct);
                this.dataSource = new MatTableDataSource(this.totalProduct);
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
                this.cd.detectChanges();
              })
            } else {
              this.totalProduct.push({
                "id": i + 1,
                "order": result[i][0],
                "lc": result[i][1],
                "beneficiaryBank": "NA",
                "beneficiary": "NA",
                "LCCASHED": "YES",
                "LC": "2"
              });
              console.log(this.totalProduct);
              this.dataSource = new MatTableDataSource(this.totalProduct);
              this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
              this.cd.detectChanges();
            }
            
            this.loaderService.hideLoader('bankLoader');

          }

        }).catch((err) => {

        });
      });
  }

  advisoryConfirmation1(event) {
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
  }

  advisoryConfirmation(selecteditem: any) {
    console.warn("CLIKCKED");
    // let elementId: string = (event.target as Element).id;
    // console.log(elementId);
    this.loaderService.showLoader('bankLoader');

    console.log(selecteditem);
    console.log('in cashLC')

    // var row = e.path[0];
    var order = selecteditem.order;
    console.log(order)


    this.backend.advisoryConfirmation(order).then((res: any) => {
      console.log(res);
      this.loaderService.hideLoader('bankLoader');

    })

  }
  redirectDashboard(){
    // this.route.navigateByUrl('seller_dashboard/'+this.userinfo);
    this.route.navigate(['bank_dashboard',{id:this.userinfo}]);
}
getDBAPI(){
  this.route.navigate(['analytics']);

 
}


  // constructor(private route:Router) {

  //   // Create 100 users
  //   const users = Array.from({length: 2}, (_, k) => createNewUser(k + 1));

  //   // Assign the data to the data source for the table to render
  //   this.dataSource = new MatTableDataSource(users);
  // }
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

}
