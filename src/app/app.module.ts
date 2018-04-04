import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GestionclientComponent } from './gestionclient/gestionclient.component';
import { GestionemployeComponent } from './gestionemploye/gestionemploye.component';
import { CompteComponent } from './compte/compte.component';
import { RetraitComponent } from './retrait/retrait.component';
import { VersementComponent } from './versement/versement.component';
import { ListeoperationComponent } from './listeoperation/listeoperation.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { TestComponent } from './test/test.component';
import { TestaccComponent } from './testacc/testacc.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GestionclientComponent,
    GestionemployeComponent,
    CompteComponent,
    RetraitComponent,
    VersementComponent,
    ListeoperationComponent,
    InscriptionComponent,
    TestComponent,
    TestaccComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
