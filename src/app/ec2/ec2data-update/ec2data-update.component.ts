import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TagContentType } from '@angular/compiler';
import {EC2DataTag} from '../domain/ec2datatag';
import { Ec2dataService } from  '../service/ec2data.service'

@Component({
  selector: 'app-ec2data-update',
  templateUrl: './ec2data-update.component.html',
  styleUrls: ['./ec2data-update.component.css']
})
export class Ec2dataUpdateComponent implements OnInit {

  ec2InstanceId: string;
  tagItem: any;
  constructor(private location: Location, 
    private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.ec2InstanceId = this.activatedRoute.snapshot.queryParamMap.get('ec2InstanceId');
    this.tagItem = this.activatedRoute.snapshot.queryParamMap.get('tagItem');
    console.log("ec2InstanceId->>",this.ec2InstanceId);
    console.log("tagItem->>",this.tagItem);

  }

  navigateBack(){
    this.location.back();
  }

}
