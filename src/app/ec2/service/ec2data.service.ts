import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { EC2Data } from '../domain/ec2data';
import {EC2DataTag} from '../domain/ec2datatag';

const API_URL:string = "https://orlmmnjf1j.execute-api.ap-south-1.amazonaws.com/deploy";
//obtained after amazon api gateway deployment
const EC2_API_URL:string = "https://ao23e1q3fk.execute-api.ap-south-1.amazonaws.com/ec2";

@Injectable({
  providedIn: 'root'
})
export class Ec2dataService {

  constructor(private http: HttpClient) { }

  public getEC2Data(){
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods','*');
    let options = { headers: headers };
    return this.http.get(API_URL+"/getec2data",options);
  }

  public getEC2DataById(instanceId : string){
    console.log("service::instanceId-->",instanceId.trim());
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods','*');
    //headers.append("Access-Control-Allow-Headers", "Content-Type");
    let options = { headers: headers };
    return this.http.get(EC2_API_URL + "/ec2data/" + instanceId,options);
  }

  public getEC2DataId(){
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods','*');
    let options = { headers: headers };
    return this.http.get(EC2_API_URL + "/ec2data/",options);
  }

  public storeEC2DataInDynamoDb(){
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods','*');
    let options = { headers: headers };
    return this.http.post(EC2_API_URL + "/ec2data/",options);
  }

  public updateEC2Tags(tag:any){
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods','*');
    let options = { headers: headers };
    let body = JSON.stringify(tag);
    return this.http.post(EC2_API_URL + "/ec2data/tags",body,options);
  }
}
