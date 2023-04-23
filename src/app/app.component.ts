import { Component } from '@angular/core';

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
}
