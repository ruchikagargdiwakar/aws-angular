import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ec2dataListComponent } from './ec2data-list/ec2data-list.component';
import { Ec2dataCreateComponent } from './ec2data-create/ec2data-create.component';
import { Ec2dataDeleteComponent } from './ec2data-delete/ec2data-delete.component';
import { Ec2dataService } from './service/ec2data.service';

@NgModule({
  declarations: [Ec2dataCreateComponent, Ec2dataDeleteComponent],
  imports: [
    CommonModule
  ],
  providers: [Ec2dataService]
})
export class Ec2Module { }