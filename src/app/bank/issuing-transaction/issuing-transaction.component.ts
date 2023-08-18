import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BackendService } from '../../service/backend.service';
import { IpfsService } from '../../service/ipfs.service';
import { Web3Service } from '../../service/web3.service';
import { MaterialModule } from "../../material/material.module";
import { LoaderService } from '../../loader/loader.service';

declare var Buffer;
@Component({
  selector: 'app-issuing-transaction',
  templateUrl: './issuing-transaction.component.html',
  styleUrls: ['./issuing-transaction.component.css']
})
export class IssuingTransactionComponent implements OnInit {
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

  displayedColumns: string[] = ['id', 'order','lc', 'action', 'transfer'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private web3: Web3Service, public backend: BackendService,public route:Router, 
    public loaderService: LoaderService, private ipfs: IpfsService, private cd: ChangeDetectorRef) {
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

 
  ngOnInit(): void {
    console.warn("in ngOnInit");

    this.loaderService.showLoader('bankLoader');
   
      this.web3.getAllContract()
        .then((contractRes: any) => {
          this.orders = contractRes[3];
          this.backend.getBankIssueLC().then((result: any) => {
          console.log('result');
            console.log(result);
          // this.lcs = result;
          for (let i = 0; i < result.length; i++) {
            console.log(result[i]);
            this.web3.convertToHex(result[i][0][0]).then((c: any) => {
              contractRes[3].methods.returnLCStat(c)
                .call()
                .then((pro: any) => {
                  console.log(pro)
                  if (result[i][0][4]) {
                    this.web3.getUtf8(result[i][0][4]).then((d: any) => {
                      console.log('value of d')
                      console.log(d);
                      this.totalProduct.push({
                        "id": i + 1,
                        "order": result[i][0][0],
                        "lcissued": d,
                        "price": 1,
                        "lcstat": pro
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
                      "order": result[i][0][0],
                      "lcissued": false,
                      "price": 1,
                      "lcstat": pro
                    });
                    console.log(this.totalProduct);
                    this.dataSource = new MatTableDataSource(this.totalProduct);
                    this.dataSource.sort = this.sort;
                  this.dataSource.paginator = this.paginator;
                    this.cd.detectChanges();

                  }
                 
                  this.loaderService.hideLoader('bankLoader');

             


                });

            })

          }
        }).catch((err) => {

        });
        });
   
  }
  issuingConfirmation(selecteditem: any) {
    console.warn("CLIKCKED");
    this.loaderService.showLoader('bankLoader');


    console.log(selecteditem);
    console.log('in cashLC')

    var order = selecteditem.order
    console.log(order)


    this.backend.issuingConfirmation(order).then((res: any) => {
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
}


