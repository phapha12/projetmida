import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


    readonly GET_URL='http://localhost:3001/api/employes';
    readonly POST_URL='http://localhost:3001/api/employe/create';
    readonly DELETE_URL='http://localhost:3001/api/employe/';
    _id:number;

    employes:any;

  constructor(private http:HttpClient) { }



  ngOnInit() {
    this.employes = this.http.get<any>(this.GET_URL);

  }
  ajouterEmployer(code, nom, prenoms, groupe, status) {



    const anEmploye ={
      code: code,
      nom: nom,
      prenom: prenoms,
      groupe: groupe,
      status : status
    };

    const req = this.http
      .post(this.POST_URL, anEmploye)
      .subscribe(res =>{
        console.log(res);
        this.employes = this.http.get<any>(this.GET_URL);

      },
    err=>{
      console.log(err);
    });
  }

supprimerEmployer(_id){
const DELETE_URL= `${"http://localhost:3001/api/employe"}/${_id}`;
return this.http.delete(DELETE_URL).toPromise()
    .then(()=> {
      this.employes = this.http.get<any>(this.GET_URL);

    })

}
}
