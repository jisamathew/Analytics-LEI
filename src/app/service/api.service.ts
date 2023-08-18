import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';

// const headers= new HttpHeaders()
// .set('content-type', 'application/json')
// .set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class ApiService {
BASEURL : any;
  constructor(
    private httpClient: HttpClient
  ) { 
    this.BASEURL = "https://data-analytics-api-e2qi.onrender.com/api/"
  }

  public saveDataToAPI(data: FormData): Observable<any> {
    // const options ={'headers':headers}
    // const url = 'http://localhost:3000/api/postInfo';
    const url = this.BASEURL+'postInfo';
    return this.httpClient.post<any>(url, data);
  }
  postDataInfoToMongo(data){
    console.log('postDataInfoToMongo')
    const cname = 'trialcountry'
    // const url =   'http://localhost:3000/api/post';
    // return this.httpClient.post('http://localhost:3000/api/postInfo',cname,{responseType: 'text'});
    
const databody = data;
    return this.httpClient.post('http://localhost:3000/api/postInfo', databody)
  }
  public getLogs(lei){
    return this.httpClient.get('https://data-analytics-api-e2qi.onrender.com/api/getLogs/'+lei)
  }
  public getDBAPI(wallet){
    return this.httpClient.get('https://data-analytics-api-e2qi.onrender.com/api/kyc/'+wallet)
  }
}
