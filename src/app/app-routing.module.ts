import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ec2dataListComponent } from './ec2/ec2data-list/ec2data-list.component';
import { Ec2dataDetailsComponent } from './ec2/ec2data-details/ec2data-details.component';
import { Ec2dataUpdateComponent } from './ec2/ec2data-update/ec2data-update.component';

const routes: Routes = [{path: '', redirectTo: '/ec2data-listing', pathMatch: 'full' },
  { path: 'ec2data-listing', component: Ec2dataListComponent },
  { path: 'ec2data-details', component: Ec2dataDetailsComponent },
  { path: 'ec2data-update', component: Ec2dataUpdateComponent },

];

@NgModule({
  declarations: [
    
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
