import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';

//import {EC2DATA} from  '../Mock-EC2Data'
import { EC2Data } from '../domain/ec2data';
import { Ec2dataService } from  '../service/ec2data.service'

@Component({
  selector: 'app-ec2data-list',
  templateUrl: './ec2data-list.component.html',
  styleUrls: ['./ec2data-list.component.css']
})
export class Ec2dataListComponent implements OnInit{

  ec2DataVar: EC2Data[];
  statusCode: string;
  ec2dataFormControl = new FormControl();
  ec2InstanceIds: string[];

  constructor(private ec2dataService:Ec2dataService, private router:Router) { }

  ngOnInit() {
    //this.loadEC2Data()
    this.syncEC2DetailsInDynamodb();
    this.getec2instanceIds();
  }

  private loadEC2Data() {
    this.ec2dataService.getEC2Data().subscribe(
      data => { this.ec2DataVar = JSON.parse(data['body']); 
        this.statusCode = data["statusCode"];
        console.log(data);
        console.log(this.ec2DataVar);
        console.log(this.ec2DataVar[0].ec2DataId);
        console.log(this.ec2DataVar[0].ec2Details.metadata[0]);
      },
      err => console.error(err),
      () => console.log("ec2data received.")
    );
  }

 //load EC2Details
  private syncEC2DetailsInDynamodb() {
    this.ec2dataService.storeEC2DataInDynamoDb().subscribe(
      data => { this.ec2DataVar = JSON.parse(data['body']); 
        this.statusCode = data["statusCode"];
        console.log(data);
        console.log(this.ec2DataVar);
        console.log(this.ec2DataVar[0].ec2DataId);
        console.log(this.ec2DataVar[0].ec2Details.metadata[0]);
      },
      err => console.error(err),
      () => console.log("ec2data received.")
    );   
  }

  //load ec2InstanceIDs
  private getec2instanceIds(){
    this.ec2dataService.getEC2DataId().subscribe(
      data => { this.ec2InstanceIds = JSON.parse(data['body']); 
        this.statusCode = data["statusCode"];
        console.log(data);
        console.log(this.ec2InstanceIds);
        console.log(this.ec2InstanceIds[0]);
      },
      err => console.error(err),
      () => console.log("ec2InstanceIds received.")
    );
  }

  showEC2InstanceDetails(event) {
    //ec2data-details
    //this.router.navigate(['/ec2data-details', { ec2InstanceId: event.value }]);
    this.router.navigate(['/ec2data-details'], { queryParams: { ec2InstanceId: event.value }});
    console.log('change !'+event.value)
  }
}
