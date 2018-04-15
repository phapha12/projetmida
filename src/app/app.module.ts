import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


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
import { VirementComponent } from './virement/virement.component';
import { SpamComponent } from './spam/spam.component';
import { CorbeilleComponent } from './corbeille/corbeille.component';
import { InboxComponent } from './inbox/inbox.component';
import { TransComponent } from './trans/trans.component';


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
    TestaccComponent,
    VirementComponent,
    SpamComponent,
    CorbeilleComponent,
    InboxComponent,
    TransComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"", component:HomeComponent},
      {path:"gestionclient", component:GestionclientComponent},
      {path:"compte", component:CompteComponent},
      {path:"gestionemploye", component:GestionemployeComponent},
      {path:"inscription", component:InscriptionComponent},
      {path:"retrait", component:RetraitComponent},
      {path:"listeoperation", component:ListeoperationComponent},
      {path:"versement", component:VersementComponent},
      {path:"test", component:TestComponent},
      {path:"testacc", component:TestaccComponent},
      {path:"virement", component:VirementComponent},
      {path:"inbox", component:InboxComponent},
      {path:"spam", component:SpamComponent},
      {path:"corbeille", component:CorbeilleComponent},
      {path:"trans", component:TransComponent}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
