import { Component, OnInit , Input} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ShlistDialogComponent } from '../shlist-dialog/shlist-dialog.component';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  @Input() name: string;

  constructor(public dialog: MatDialog, private router :Router) { }

  // openSList(){
  //   let dialogRef = this.dialog.open(ShlistDialogComponent);
  //   dialogRef.afterClosed().subscribe(result =>{
  //     console.log(`Dialog res: ${result}`);
  //   })
  // }
Register=false;
  openSList(page:string):void{
    console.log(page)
    // this.visible = this.visible?false:true;
    this.router.navigate([`${page}`]);
  }

  ngOnInit(): void {
    // console.log("call")
  }

}
