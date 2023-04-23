import { Component } from '@angular/core';
//added
import {UsersDataService} from './services/users-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '15';
  data = '15';
/*
name is variable
variable  type: string, number, any 
Note: it is not required in angular 10 or older because strict mode is false in
C:\xampp\htdocs\blog\tsconfig.json

*/
  getName(fname:string,lname:string){
    console.log(fname+' '+lname);
    alert('Hello '+fname+' '+lname);
  }

  getData(val:string)
  {
    console.warn(val);
  }

  count=0;
  counter(type:string)
  {
    (type == 'add') ? this.count++ : this.count--;
  }

  //service
  serviceTitle="API Service in angular";
  users:any;
  constructor(private userData:UsersDataService)
  {
    userData.users().subscribe((data)=>{
      console.warn('data',data);
      this.users=data;
    });
    
  }

}
