import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/loader/loader.service';
import { BackendService } from 'src/app/service/backend.service';
import { IpfsService } from 'src/app/service/ipfs.service';
import { Web3Service } from 'src/app/service/web3.service';
declare var Buffer;
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  showFiller = false;
  isExpanded = false;
  ipfsConverted: any;
  bankName:string;
  userName:string;
  bankMail:string;

  ipfsConverted2: any;
  accountNumber:any;
  userinfo:any;
  public registration: any;

  constructor(private web3: Web3Service, 
    public backend: BackendService,
    public router:Router,
    public loaderService: LoaderService,
    private ipfs: IpfsService,
    private cd: ChangeDetectorRef) { 
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
  }
  viewFraud(){
  this.router.navigate(['tranasaction_issue']);
  
  }

  viewLEIIssue(){
  this.router.navigate(['lei_issue']);

  }
  redirectDashboard(){
    // this.route.navigateByUrl('seller_dashboard/'+this.userinfo);
    this.router.navigate(['bank_dashboard',{id:this.userinfo}]);
}

}
