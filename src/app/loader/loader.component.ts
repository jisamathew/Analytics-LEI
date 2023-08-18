
import { Component, Input, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';
import { Loader } from './loader.model';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  @Input() public id: string = 'global';
  // *@Input* — () id: string;

  public show: boolean = false;
  public shipperShow: boolean = false;
  public carrierShow: boolean = false;
  public portShow: boolean = false ;
  public consigneeShow: boolean = false;
  public bankShow: boolean = false;
  
  

  constructor(private loaderService: LoaderService) {
  }

  public ngOnInit(): void {
    this.loaderService.loaderStatus$.subscribe((response: Loader) => {
      if (response.id === 'startingLoader') {
        this.show = this.id === response.id && response.status;
      }
      if (response.id === 'shipperLoader') {
        this.shipperShow = this.id === response.id && response.status;
      }
      if (response.id === 'carrierLoader') {
        this.carrierShow = this.id === response.id && response.status;
      }
      if (response.id === 'portLoader') {
        this.portShow = this.id === response.id && response.status;
      }
      
      if (response.id === 'consigneeLoader') {
        this.consigneeShow = this.id === response.id && response.status;
      }
      if (response.id === 'bankLoader') {
        this.bankShow = this.id === response.id && response.status;
      }

    });
  }

}
