import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  messge:string='';
  constructor(private httpClient:HttpClient) { }

  /*messageKey(event:any){
    this.messge = event.target.value;
    console.log(this.messge);
  }
  getMessage(){
    this.httpClient.get('')
    .subscribe(
      (data:any[])=>{
        if(data.length){
          this.messge = data.message;
          //fif
        }
        //fdata
      }
    )
  }*/

  ngOnInit() {
  }

}
