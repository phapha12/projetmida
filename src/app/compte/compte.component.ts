import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  readonly GET_URL='http://localhost:3001/api/clients';
    readonly POST_URL='http://localhost:3001/api/client/create';
    _id:number;
    clients:any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.clients = this.http.get<any>(this.GET_URL);

  }
  ajouterClient(nom, prenom, password, username, type, solde){
    const aClient ={
      nom:nom,
      prenom:prenom,
      password:password,
      username:username,
      type:type,
      solde:solde
    };
    const req = this.http
          .post(this.POST_URL, aClient)
          .subscribe(res =>{
              console.log(res);
              this.clients = this.http.get<any>(this.GET_URL);

            },
            err=>{
              console.log(err);
            });
      }
      supprimerClient(_id){
          const DELETE_URL= `${"http://localhost:3001/api/client"}/${_id}`;
          return this.http.delete(DELETE_URL).toPromise()
            .then(()=> {
              this.clients = this.http.get<any>(this.GET_URL);

            });

        }


}
