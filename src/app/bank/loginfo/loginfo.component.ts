import { Component, OnInit,Inject,ViewChild, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import {MaterialModule} from "../../material/material.module";
import { Web3Service } from 'src/app/service/web3.service';
import { IpfsService } from 'src/app/service/ipfs.service';
import { BackendService } from 'src/app/service/backend.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatAccordion} from '@angular/material/expansion';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoaderService } from 'src/app/loader/loader.service';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-loginfo',
  templateUrl: './loginfo.component.html',
  styleUrls: ['./loginfo.component.css']
})
export class LoginfoComponent implements OnInit {
  logsData = [];
LEI: any;
  splitLog=[];
  resultArray=[];
  displayedColumns: string[] = [ 'position','action','usertype','company','date'];
  dataSource: MatTableDataSource<any>;
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
  constructor( fb: FormBuilder,private activatedRoute: ActivatedRoute,public loaderService: LoaderService, private route:Router,private backend:BackendService ,
    private web3: Web3Service, 
    private ipfs: IpfsService,
    private apiService:ApiService,
    private cd: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public dialoglei: any) {}
   
  ngOnInit(): void {
    this.loaderService.showLoader('bankLoader');

    console.log('ngoninit');
    console.log(this.dialoglei.dataKey)
    var LEINo=this.dialoglei.dataKey;
        console.log(LEINo);
        this.LEI=LEINo;
     this.apiService.getLogs(this.LEI).subscribe((result:any) => {
      console.log('Log Info');
      console.log(result);
      this.logsData = result;

      this.dataSource = new MatTableDataSource(result);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.cd.detectChanges();
      this.loaderService.hideLoader('bankLoader');

    })
      
   
   
  }

}
