import { Component, OnInit,Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

@Input() sellerSignedIn :boolean;
@Input() consigneeLoggedIn : boolean;
@Input() SignedIn : boolean;
@Input() Register : boolean;


  visible:boolean = true;
  constructor(private router: Router,public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  

  goToSignup(page:string):void{
    // console.log(page)
    this.Register=true;
    this.visible = this.visible?false:true;
    // this.router.navigate([`${page}`]);
    this.router.navigate(['signupmodal']);
  }

}
