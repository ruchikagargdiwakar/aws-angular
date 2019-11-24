import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { EC2AppMaterialModule } from './material-module';
import { Ec2dataListComponent } from './ec2/ec2data-list/ec2data-list.component';
import { Ec2dataDetailsComponent } from './ec2/ec2data-details/ec2data-details.component';
import { Ec2dataUpdateComponent } from './ec2/ec2data-update/ec2data-update.component';

@NgModule({
  declarations: [
    AppComponent,
    Ec2dataListComponent, // declared here  to avoid declarations in router module and ec2 module
    Ec2dataDetailsComponent, // declared here  to avoid declarations in router module and ec2 module
    Ec2dataUpdateComponent // declared here  to avoid declarations in router module and ec2 module
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,    
    ReactiveFormsModule,
    EC2AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
