import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private snak:MatSnackBar){

  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  btnClick(){
    console.log("btn click");
    //this.snak.open("Hey welcome to this app","Cancel")
  }
}
