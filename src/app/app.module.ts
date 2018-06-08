import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FileUploadModule} from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { ContacteznousComponent } from './contacteznous/contacteznous.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CompteComponent } from './compte/compte.component';
import { VirementComponent } from './virement/virement.component';
import { RetraitComponent } from './retrait/retrait.component';
import { EmployeeComponent } from './employee/employee.component';
import { TransactionComponent } from './transaction/transaction.component';



@NgModule({
  declarations: [
    AppComponent,
    ContacteznousComponent,
    AcceuilComponent,
    CompteComponent,
    VirementComponent,
    RetraitComponent,
    EmployeeComponent,
    TransactionComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    FileUploadModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"", component:AcceuilComponent},
      {path:"contact", component:ContacteznousComponent},
      {path:"compte", component:CompteComponent},
      {path:"virement", component:VirementComponent},
      {path:"retrait", component:RetraitComponent},
      {path:"employee", component:EmployeeComponent},
      {path:"transaction", component:TransactionComponent}


    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
