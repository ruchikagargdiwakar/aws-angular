import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { EC2Data } from '../domain/ec2data';
import {EC2DataTag} from '../domain/ec2datatag';
import { Ec2dataService } from  '../service/ec2data.service'
import { keyframes } from '@angular/animations';

@Component({
  selector: 'app-ec2data-details',
  templateUrl: './ec2data-details.component.html',
  styleUrls: ['./ec2data-details.component.css']
})
export class Ec2dataDetailsComponent implements OnInit {

  ec2InstanceId: string;
  //ec2DataVar: EC2Data;
  ec2DataVar: any;
  @Input() tagItemInput: EC2DataTag;

  constructor(private ec2dataService:Ec2dataService, 
    private activatedRoute : ActivatedRoute, 
    private location: Location) { }

  ngOnInit() {
    this.ec2InstanceId = this.activatedRoute.snapshot.queryParamMap.get('ec2InstanceId');
    console.log("ec2InstanceId->>",this.ec2InstanceId);
    this.getEC2InstanceDetails();
  }
  
  private getEC2InstanceDetails() {
    this.ec2dataService.getEC2DataById(this.ec2InstanceId).subscribe(
      data => { this.ec2DataVar = data; 
        //console.log("data-->",data);
        console.log("this.ec2DataVar-->",this.ec2DataVar);        
      },
      err => console.error(err),
      () => console.log("ec2data received error")
    );   
  }

  // editTagItem(event){
  //   console.log(this.tagItemInput)
  // }

  updateList(ec2InstanceId: string,resourceId: string,searchValue: string,property: string, event: any) {
    const propertyValue = event.target.textContent;        
    console.log("editFieldValue-->",propertyValue);
    console.log("editField-->",property);
    console.log("ec2InstanceIdValue-->",ec2InstanceId);
    console.log("resourceIdValue-->",resourceId);
    console.log("searchValue-->",searchValue);

    this.ec2dataService.updateEC2Tags({
      "ec2InstanceId": ec2InstanceId,
      "resourceId": resourceId,
      "property": property,
      "propertyValue": propertyValue,
      "searchValue": searchValue
    }).subscribe(
      data => { this.ec2DataVar = data; 
        //console.log("data-->",data);
        console.log("this.ec2DataVar-->",this.ec2DataVar);        
      },
      err => console.error(err),
      () => console.log("ec2data received error")
    );

  }

  changeValue(ec2InstanceId: string, resourceId:string,searchValue: string,property: string, event: any) {
    //this.editField = event.target.textContent;
  }

  navigateBack(){
    this.location.back();
  }

}
