import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { LoaderService } from 'src/app/loader/loader.service';
import { BackendService } from 'src/app/service/backend.service';
import { IpfsService } from 'src/app/service/ipfs.service';
import { Web3Service } from 'src/app/service/web3.service';

declare var Buffer;
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  // roles: FormGroup;
  showFiller = false;
  isExpanded = false;
  ipfsConverted: any;
  rolesExists = false;
  roles = this.fb.group({
    Marketplace:false,
    KYC:false,
    Analytics:false
  });

  ipfsConverted2: any;
  accountNumber:any;
  userinfo:any;
  public registration: any;
  ipfsConverted3: any;
  files: { Marketplace: any; KYC: any; Analytics: any; };

  constructor(private fb: FormBuilder,private web3: Web3Service,public backend: BackendService,public router:Router,
    public loaderService: LoaderService,
    private ipfs: IpfsService,
    private cd: ChangeDetectorRef,
    public AppComponent:AppComponent,
    private route: ActivatedRoute) {

       
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
                       this.ipfs.getHashFromIPFS(user[0]).then((data:any)=>{
                        this.ipfsConverted2 = JSON.parse(Buffer.from(data.value.buffer).toString());
                        console.log(this.ipfsConverted2 );
                         this.userinfo = user[0];
                         this.registration.methods.returnRole(this.accountNumber)
                         .call()
                         .then(role =>{
                           console.log(role);
                           if(role.length == 0){
                              this.roles = fb.group({
                                Marketplace: false,
                                KYC: false,
                                Analytics: false
                              });
                            this.rolesExists = false;

                           }else{
                          this.ipfs.getHashFromIPFS(role).then((data2:any)=>{
                            this.ipfsConverted3 = JSON.parse(Buffer.from(data2.value.buffer).toString());
                            console.log(this.ipfsConverted3 );
                            this.roles = fb.group({
                              Marketplace: this.ipfsConverted3.Marketplace,
                              KYC: this.ipfsConverted3.KYC,
                              Analytics: this.ipfsConverted3.Analytics
                            });

                            this.rolesExists = true;

                          })    
                           }
                         
                         });
                      })
                      
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


  saveForm(){
    console.log(this.roles.value.KYC);
    console.log(this.roles.value);

    this.files = {
      Marketplace: this.roles.value.Marketplace,
      KYC: this.roles.value.KYC,
      Analytics: this.roles.value.Analytics
    }

    console.log(this.files);

    this.ipfs.saveToIpfs(this.files).then((data) => {
      this.backend.saveRoles(data).then(res=>{
        console.log(res);
      this.router.navigate(['bank_dashboard',{id:this.userinfo}]);

      })
    
    });


    // this.showClassGrp.patchValue({amateur: false});
    // console.log(this.showClassGrp.value.amateur);
  }

  // saveForm(){
  //   console.log(this.roles.value.KYC);
  //   console.log(this.roles.value);

  //   this.files = {
  //     Marketplace: this.roles.value.Marketplace,
  //     KYC: this.roles.value.KYC,
  //     Analytics: this.roles.value.Analytics
  //   }

  //   console.log(this.files);

  //   this.ipfs.saveToIpfs(this.files).then((data) => {
  //     this.backend.saveRoles(data).then(res=>{
  //       console.log(res);
  //     })
    
  //   });


  //   // this.showClassGrp.patchValue({amateur: false});
  //   // console.log(this.showClassGrp.value.amateur);
  // }


}
